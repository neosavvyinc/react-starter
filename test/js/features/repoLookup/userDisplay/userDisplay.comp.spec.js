import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import _ from 'lodash';

import { UserDisplayComponent } from '../../../../../src/js/features/repoLookup/userDisplay/userDisplay.comp';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';

/* eslint-disable camelcase */

describe('UserDisplayComponent', () => {
    const userData = {
        avatar_url: 'avatar_url',
        login: 'login',
        name: 'name',
        public_repos: 20
    };

    repoLookupStore.userData = userData;

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserDisplayComponent repoLookupStore={repoLookupStore} />);
    });

    it('should render a containing div', () => {
        expect(wrapper.find('div').first().parents().length).to.equal(0);
    });

    it('should render an empty container if userData is null', () => {
        const storeWithNullUser = _.assign({}, repoLookupStore, { userData: null });

        wrapper.setProps({ repoLookupStore: storeWithNullUser });

        expect(wrapper.find('div').length).to.equal(1);
    });

    it('should render a content container', () => {
        expect(
            wrapper.find('div').first()
                .children().first().type()
        ).to.equal('div');
    });

    it('should render userData.avatar_url as an img', () => {
        expect(wrapper.find(
            `img[src=\'${userData.avatar_url}\']`
        ).length).to.equal(1);
    });

    it('should render userData.login as an h4', () => {
        expect(wrapper.contains(
            <h4 className={undefined}>{userData.login}</h4>
        )).to.equal(true);
    });

    it('should render userData.name as an h4', () => {
        expect(wrapper.contains(
            <h4 className={undefined}>{userData.name}</h4>
        )).to.equal(true);
    });

    it('should render userData.name as \'mystery user\' if userData.name is empty', () => {
        const storeWithNoName = _.assign({}, repoLookupStore, { userData: { name: '' } });

        wrapper.setProps({ repoLookupStore: storeWithNoName });

        expect(wrapper.contains(
            <h4 className={undefined}>{'mystery user'}</h4>
        )).to.equal(true);
    });

    it('should render userData.public_repos as an h4', () => {
        expect(wrapper.contains(
            <h4 className={undefined}>{`${userData.public_repos} public repos`}</h4>
        )).to.equal(true);
    });
});
