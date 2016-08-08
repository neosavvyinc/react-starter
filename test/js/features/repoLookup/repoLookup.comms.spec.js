import { expect } from 'chai';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import _ from 'lodash';

import repoLookupComms from '../../../../src/js/features/repoLookup/repoLookup.comms';
import { githubApiAccessToken } from '../../../../src/config/constants';

/* eslint-disable camelcase */

describe('repoLookupComms', () => {
    const gitUrl = 'https://api.github.com/users';
    const accessToken = `?access_token=${githubApiAccessToken}`;
    const username = 'username';

    const userEndpoint = `${gitUrl}/${username}${accessToken}`;
    const repoEndpoint = `${gitUrl}/${username}/repos${accessToken}`;

    it('.getRepoData should call fetch with the correct URL', () => {
        fetchMock.mock(repoEndpoint, 200);

        repoLookupComms.getRepoData(username);

        expect(fetchMock.called(repoEndpoint)).to.equal(true);

        fetchMock.restore();
    });

    it('.getUserData should call fetch with the correct URL', () => {
        fetchMock.mock(userEndpoint, 200);

        repoLookupComms.getUserData(username);

        expect(fetchMock.called(userEndpoint)).equal(true);

        fetchMock.restore();
    });

    it('.processJson should be able to process a JSON response', () => {
        const responseMock = {
            json: sinon.spy()
        };

        repoLookupComms.processJson(responseMock);

        expect(responseMock.json.called).to.equal(true);
    });

    it('.processJson should throw an error if given a response status of 400', () => {
        const responseErrorMock = {
            status: 404,
            json: sinon.spy()
        };

        const errorSpy = sinon.spy();

        try {
            repoLookupComms.processJson(responseErrorMock);
        } catch (error) {
            errorSpy();
        }

        expect(responseErrorMock.json.called).to.equal(false);
        expect(errorSpy.called).to.equal(true);
    });

    it('.processRawUser should trim an object to the correct props', () => {
        const rawUserMock = {
            avatar_url: 'avatar_url',
            login: 'login',
            name: 'name',
            public_repos: 20,
            unwanted1: 500,
            unwanted2: '11231',
            unwanted3: 'helloworld'
        };

        expect(repoLookupComms.processRawUser(rawUserMock)).to.deep.equal(
            _.pick(rawUserMock, [
                'avatar_url',
                'login',
                'name',
                'public_repos'
            ])
        );
    });

    it('.processRawRepos should trim an array of repos to the correct structure', () => {
        let count = 0;

        const rawReposMock = _.times(10, () => ({
            name: `repo${count}`,
            html_url: `html_url${count++}`,
            unwanted1: 500,
            unwanted2: 'string'
        }));

        expect(repoLookupComms.processRawRepos(rawReposMock)).to.deep.equal(
            _.map(rawReposMock, rawRepo => _.pick(rawRepo,
                [
                    'name',
                    'html_url'
                ]
                )
            )
        );
    });
});
