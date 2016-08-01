import { observable, action } from 'mobx';
import { githubApiAccessToken } from '../../../config/constants';

// ----------------------------------
// Helpers
// ----------------------------------

const gitUrl = 'https://api.github.com/users';
const accessToken = `?access_token=${githubApiAccessToken}`;

function processJson(res) {
    if (res.status === 404) {
        throw new Error('User not found.');
    }
    return res.json();
}

function getUserRepos(username) {
    return fetch(`${gitUrl}/${username}/repos${accessToken}`).
        then(res => processJson(res)).
        then(rawRepos => rawRepos.map(
            repo => _.pick(repo, ['name', 'html_url'])
        ));
}

function getUserData(username) {
    return fetch(`${gitUrl}/${username}${accessToken}`).
        then(res => processJson(res)).
        then(rawUser => _.pick(rawUser, ['avatar_url', 'login', 'name', 'public_repos', 'html_url']));
}

// ----------------------------------
// Store & Methods
// ----------------------------------


const repoLookupStore = observable({
    userData: null,
    repoData: null
});


repoLookupStore.getUserData = (username = 'alexjhannan') => {
    Promise.all([getUserData(username), getUserRepos(username)]).
        then(action(data => {
            repoLookupStore.userData = data[0];
            repoLookupStore.repoData = data[1];
        })).
        catch(err => console.log(err));
};

export default repoLookupStore;
