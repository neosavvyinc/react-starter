import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RepoLookupComponent from '../../../../src/js/features/repoLookup/repoLookup.comp';
import UsernameInputComponent from '../../../../src/js/features/repoLookup/usernameInput/usernameInput.comp';
import UserDisplayComponent from '../../../../src/js/features/repoLookup/userDisplay/userDisplay.comp';
import RepoListComponent from '../../../../src/js/features/repoLookup/repoList/repoList.comp';

describe('RepoLookupComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RepoLookupComponent/>);
    });

    it('should render a containing div', () => {
        expect(wrapper.find('div').first().parents().length).to.equal(0);
    });

    it('should render a single header', () => {
        expect(wrapper.find('h1').length).to.equal(1);
    });

    it('should render a UsernameInputComponent', () => {
        expect(wrapper.find(UsernameInputComponent).length).to.equal(1);
    });

    it('should render a UserDisplayComponent', () => {
        expect(wrapper.find(UserDisplayComponent).length).to.equal(1);
    });

    it('should render a RepoListComponent', () => {
        expect(wrapper.find(RepoListComponent).length).to.equal(1);
    });
});
