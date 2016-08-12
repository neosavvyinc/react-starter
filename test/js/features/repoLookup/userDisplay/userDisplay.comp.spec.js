import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';

import { UserDisplayComponent } from '../../../../../src/js/features/repoLookup/userDisplay/userDisplay.comp';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';

/* eslint-disable camelcase */

const userData = {
    avatar_url: 'avatar_url',
    login: 'login',
    name: 'name',
    public_repos: 20
};

repoLookupStore.userData = userData;

let wrapper;

test.beforeEach(() => {
    wrapper = shallow(<UserDisplayComponent repoLookupStore={repoLookupStore} />);
});

test('render a containing div', t => {
    t.truthy(wrapper.is('div'));
});

test('render a content container', t => {
    const divIsFirstChild = wrapper.children().first().is('div');

    t.truthy(divIsFirstChild);
});

test('render userData.avatar_url as an img', t => {
    const expectedAvatar = <img src={userData.avatar_url} className={undefined}/>;

    t.truthy(wrapper.contains(expectedAvatar));
});

test('render userData.login as an h4', t => {
    const expectedHeader = <h4 className={undefined}>{userData.login}</h4>;

    t.truthy(wrapper.contains(expectedHeader));
});

test('render userData.name as an h4', t => {
    const expectedHeader = <h4 className={undefined}>{userData.name}</h4>;

    t.truthy(wrapper.contains(expectedHeader));
});

test('render userData.name as \'mystery user\' in an h4 if userData.name is falsy', t => {
    const expectedHeader = <h4 className={undefined}>{'mystery user'}</h4>;

    const storeWithNoName = _.assign({}, repoLookupStore, { userData: { name: '' } });
    wrapper.setProps({ repoLookupStore: storeWithNoName });

    t.truthy(wrapper.contains(expectedHeader));
});

test('render userData.public_repos as an h4', t => {
    const expectedHeader = <h4 className={undefined}>{`${userData.public_repos} public repos`}</h4>;

    t.truthy(wrapper.contains(expectedHeader));
});

test('render an empty container if userData is null', t => {
    const storeWithNullUser = _.assign({}, repoLookupStore, { userData: null });

    wrapper.setProps({ repoLookupStore: storeWithNullUser });

    const numberOfChildren = wrapper.children().length;

    t.is(numberOfChildren, 0);
});
