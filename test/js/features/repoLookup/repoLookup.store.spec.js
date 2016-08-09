import test from 'ava';
import sinon from 'sinon';

import { RepoLookupStore } from '../../../../src/js/features/repoLookup/repoLookup.store';

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

test.beforeEach(() => {
    store = new RepoLookupStore(commsMock);
});

test('fetchData should call getUserData and getRepoData', sinon.test(function(t) {
    const username = 'username';

    const getUserDataSpy = this.spy(store.comms, 'getUserData');
    const getRepoDataSpy = this.spy(store.comms, 'getRepoData');

    store.fetchData(username);

    t.truthy(getUserDataSpy.calledWith(username));
    t.truthy(getRepoDataSpy.calledWith(username));
}));

test.serial('calling fetchData should store the resolve value of getUserData as userData', sinon.test(function(t) {
    t.plan(1);

    this.spy(store, 'fetchData');

    this.stub(store.comms, 'getUserData', () => {
        return new Promise(resolve => resolve(userData));
    });

    this.stub(store.comms, 'getRepoData', () => {
        return new Promise(resolve => resolve(repoData));
    });

    return store.fetchData().then(() => {
        t.deepEqual(store.userData, userData);
    });
}));

test.serial('calling fetchData should store the resolve value of getRepoData as repoData', sinon.test(function(t) {
    t.plan(1);

    this.spy(store, 'fetchData');

    this.stub(store.comms, 'getUserData', () => {
        return new Promise(resolve => resolve(userData));
    });

    this.stub(store.comms, 'getRepoData', () => {
        return new Promise(resolve => resolve(repoData));
    });

    return store.fetchData()
        .then(() => {
            t.deepEqual(store.repoData.slice(), repoData);
        });
}));
