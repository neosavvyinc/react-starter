import test from 'ava';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import _ from 'lodash';

import repoLookupComms from '../../../../src/js/features/repoLookup/repoLookup.comms';
import { githubApiAccessToken } from '../../../../src/js/constants';

/* eslint-disable camelcase */

const gitUrl = 'https://api.github.com/users';
const accessToken = `?access_token=${githubApiAccessToken}`;
const username = 'username';

const userEndpoint = `${gitUrl}/${username}${accessToken}`;
const repoEndpoint = `${gitUrl}/${username}/repos${accessToken}`;

/*
    Here, the first two tests stub out some of the methods that other tests are checking.
    To deal with this, the stubbing tests are run serially BEFORE the rest of the tests,
    which will fire concurrently as usual, after the stubbing tests are completed.

    Please note that async AVA does not seem to play very nicely with the sinon.test() sandbox wrapper.
    Kudos to anyone who comes up with a repeatable pattern for the sandbox approach.
 */

test.serial('getRepoData calls fetch with the correct URL', t => {
    t.plan(1);

    sinon.stub(repoLookupComms, 'processJson');
    sinon.stub(repoLookupComms, 'processRawRepos');

    fetchMock.mock(repoEndpoint, 200);

    return repoLookupComms.getRepoData(username)
        .then(() => {
            t.truthy(fetchMock.called(repoEndpoint));

            fetchMock.restore();
            repoLookupComms.processJson.restore();
            repoLookupComms.processRawRepos.restore();
        });
});

test.serial('getUserData calls fetch with the correct URL', t => {
    t.plan(1);

    sinon.stub(repoLookupComms, 'processJson');
    sinon.stub(repoLookupComms, 'processRawRepos');

    fetchMock.mock(userEndpoint, 200);

    repoLookupComms.getUserData(username);

    return repoLookupComms.getUserData(username)
        .then(() => {
            t.truthy(fetchMock.called(userEndpoint));

            fetchMock.restore();
            repoLookupComms.processJson.restore();
            repoLookupComms.processRawRepos.restore();
        });
});

test('processJson processes a JSON response', t => {
    const responseMock = {
        json: sinon.spy()
    };

    repoLookupComms.processJson(responseMock);

    t.truthy(responseMock.json.called);
});

test('processJson throws if given a response status of 404', t => {
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

    t.falsy(responseErrorMock.json.called);
    t.truthy(errorSpy.called);
});

test('processRawUser trims an object to the correct props', t => {
    const rawUserMock = {
        avatar_url: 'avatar_url',
        login: 'login',
        name: 'name',
        public_repos: 20,
        unwanted1: 500,
        unwanted2: '11231',
        unwanted3: 'helloworld'
    };

    const expectedResult = _.pick(rawUserMock, [
        'avatar_url',
        'login',
        'name',
        'public_repos'
    ]);

    const actualResult = repoLookupComms.processRawUser(rawUserMock);

    t.deepEqual(actualResult, expectedResult);
});

test('processRawRepos should trim each repo in an array to the correct structure', t => {
    let count = 0;

    const rawReposMock = _.times(10, () => ({
        name: `repo${count}`,
        html_url: `html_url${count++}`,
        unwanted1: 500,
        unwanted2: 'string'
    }));

    const expectedResult = _.map(rawReposMock,
        rawRepo => _.pick(rawRepo,
            [
                'name',
                'html_url'
            ]
        )
    );

    const actualResult = repoLookupComms.processRawRepos(rawReposMock);

    t.deepEqual(actualResult, expectedResult);
});
