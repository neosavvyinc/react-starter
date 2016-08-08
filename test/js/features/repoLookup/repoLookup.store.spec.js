import { expect } from 'chai';
import sinon from 'sinon';

import { RepoLookupStore } from '../../../../src/js/features/repoLookup/repoLookup.store';

describe('RepoLookupStore', () => {
    const userData = {
        user: 'bob loblaw'
    };

    const repoData = [
        {
            item: 'one',
            value: 'one'
        }
    ];

    const commsMock = {
        getUserData() {},
        getRepoData() {}
    };

    let store;

    beforeEach(() => {
        store = new RepoLookupStore(commsMock);
    });

    it('should call getUserData and getRepoData upon calling fetchData', sinon.test(function() {
        const username = 'username';

        const getUserDataSpy = this.spy(store.comms, 'getUserData');
        const getRepoDataSpy = this.spy(store.comms, 'getRepoData');

        store.fetchData(username);

        expect(getUserDataSpy.calledWith(username)).to.equal(true);
        expect(getRepoDataSpy.calledWith(username)).to.equal(true);
    }));

    it('should store the resolution of getUserData as userData upon calling fetchData', sinon.test(function(done) {
        this.spy(store, 'fetchData');

        this.stub(store.comms, 'getUserData', () => {
            return new Promise(resolve => resolve(userData));
        });

        this.stub(store.comms, 'getRepoData', () => {
            return new Promise(resolve => resolve(repoData));
        });

        store.fetchData().then(() => {
            expect(store.userData).to.deep.equal(userData);
            done();
        });

        expect(store.fetchData.called).to.equal(true);
    }));

    it('should store the resolution of getRepoData as repoData upon calling fetchData', sinon.test(function(done) {
        this.spy(store, 'fetchData');

        this.stub(store.comms, 'getUserData', () => {
            return new Promise(resolve => resolve(userData));
        });

        this.stub(store.comms, 'getRepoData', () => {
            return new Promise(resolve => resolve(repoData));
        });

        store.fetchData().then(() => {
            expect(store.repoData.slice()).to.deep.equal(repoData);
            done();
        });

        expect(store.fetchData.called).to.equal(true);
    }));
});
