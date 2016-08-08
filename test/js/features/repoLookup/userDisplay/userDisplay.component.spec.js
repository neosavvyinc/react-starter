import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { UserDisplayComponent } from '../../../../../src/js/features/repoLookup/userDisplay/userDisplay.component';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';

/* eslint-disable camelcase */

describe('UserDisplayComponent', () => {
    repoLookupStore.userData = {
        avatar_url: 'avatar_url',
        login: 'login',
        name: 'name',
        public_repos: 20
    };

    const { userData } = repoLookupStore;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserDisplayComponent repoLookupStore={repoLookupStore} />);
    });

    it('should render a div container', () => {
        expect(wrapper.find(
            'div.ns-user-display-container'
        ).length).to.equal(1);
    });

    it('should render a content container', () => {
        expect(wrapper.find(
            'div.content-container'
        ).length).to.equal(1);
    });

    it('should render userData.avatar_url as an img', () => {
        expect(wrapper.find(
            `img[src=\'${userData.avatar_url}\']`
        ).length).to.equal(1);
    });

    it('should render userData.login as an h4', () => {
        expect(wrapper.contains(
            <h4>{userData.login}</h4>
        )).to.equal(true);
    });

    it('should render userData.name as an h4', () => {
        expect(wrapper.contains(
            <h4>{userData.name}</h4>
        )).to.equal(true);
    });

    it('should render userData.name as \'mystery user\' if userData.name is empty', () => {
        repoLookupStore.userData.name = '';

        wrapper.setProps({ repoLookupStore });

        expect(wrapper.contains(
            <h4>{'mystery user'}</h4>
        )).to.equal(true);
    });

    it('should render userData.public_repos as an h4', () => {
        expect(wrapper.contains(
            <h4>{`${userData.public_repos} public repos`}</h4>
        )).to.equal(true);
    });

    it('should render an empty container if userData is null', () => {
        repoLookupStore.userData = null;

        wrapper.setProps({ repoLookupStore });

        expect(wrapper.contains(
            <div className="ns-user-display-container"></div>
        )).to.equal(true);
    });
});
