import { observable, action } from 'mobx';
import repoLookupComms from './repoLookup.comms';

// export the store's class for instantiation during testing
export class RepoLookupStore {
    constructor(comms) {
        // comms contains all network actions and is injected like so for easy unit testing
        this.comms = comms;
    }

    // this store maintains these two observable values
    @observable userData = null;
    @observable repoData = [];
    @observable isLoading = false;
    @observable unknownUser = false;

    // it also contains this action, which populates the observables with data from the comms layer
    @action fetchData(username) {
        this.unknownUser = false;
        this.isLoading = true;
        return Promise.all([this.comms.getUserData(username), this.comms.getRepoData(username)])
            .then(action(data => {
                this.userData = data[0];
                this.repoData = data[1];
                this.isLoading = false;
            }))
            .catch(action(err => {
                console.error(err); // eslint-disable-line no-console
                this.isLoading = false;
                this.unknownUser = true;
            }));
    }
}

// instantiate and export default a singleton for use throughout the repoLookup feature
const singleton = new RepoLookupStore(repoLookupComms);

export default singleton;
