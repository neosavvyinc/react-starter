import * as _ from 'lodash';
import { githubApiAccessToken } from '../../constants';

const gitUrl = 'https://api.github.com/users';
const accessToken = `?access_token=${githubApiAccessToken}`;

export default class repoLookupComms {
    static getRepoData(username) {
        return fetch(`${gitUrl}/${username}/repos${accessToken}`)
            .then(res => this.processJson(res))
            .then(rawRepos => this.processRawRepos(rawRepos));
    }

    static getUserData(username) {
        return fetch(`${gitUrl}/${username}${accessToken}`)
            .then(res => this.processJson(res))
            .then(rawUser => this.processRawUser(rawUser));
    }

    static processJson(res) {
        if (res.status === 404) {
            throw new Error('User not found.');
        }
        return res.json();
    }

    static processRawRepos(rawRepos) {
        return _.map(rawRepos,
            rawRepo => _.pick(rawRepo, [
                'name',
                'html_url'
            ])
        );
    }

    static processRawUser(rawUser) {
        return _.pick(rawUser, [
            'avatar_url',
            'login',
            'name',
            'public_repos',
            'html_url'
        ]);
    }
}
