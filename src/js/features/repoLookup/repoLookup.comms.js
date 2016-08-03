import { githubApiAccessToken } from '../../../config/constants';

const gitUrl = 'https://api.github.com/users';
const accessToken = `?access_token=${githubApiAccessToken}`;

export default class repoLookupComms {
    static getUserRepos(username) {
        return fetch(`${gitUrl}/${username}/repos${accessToken}`).
            then(res => this.processJson(res)).
            then(rawRepos => rawRepos.map(
            repo => _.pick(repo, ['name', 'html_url'])
        ));
    }

    static getUserData(username) {
        return fetch(`${gitUrl}/${username}${accessToken}`).
            then(res => this.processJson(res)).
            then(rawUser => _.pick(rawUser, ['avatar_url', 'login', 'name', 'public_repos', 'html_url']));
    }

    static processJson(res) {
        if (res.status === 404) {
            throw new Error('User not found.');
        }
        return res.json();
    }
}