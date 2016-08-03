import { observable, action } from 'mobx';
import repoLookupComms from './repoLookup.comms';

class RepoLookupStore {
    @observable userData = null;
    @observable repoData = [];

    @action fetchData(username) {
        Promise.all([repoLookupComms.getUserData(username), repoLookupComms.getUserRepos(username)]).
            then(action(data => {
                this.userData = data[0];
                this.repoData = data[1];
            })).
            catch(err => console.error(err));
    }
}

const singleton = new RepoLookupStore();

export default singleton;
