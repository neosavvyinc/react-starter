import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import RepoLookupComponent from '../../../../src/js/features/repoLookup/repoLookup.component';
import UsernameInputComponent from '../../../../src/js/features/repoLookup/usernameInput/usernameInput.component';
import UserDisplayComponent from '../../../../src/js/features/repoLookup/userDisplay/userDisplay.component';
import RepoListComponent from '../../../../src/js/features/repoLookup/repoList/repoList.component';

describe('RepoLookupComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RepoLookupComponent/>);
    });

    it('should render a container', () => {
        expect(wrapper.find('div.ns-repo-lookup').length).to.equal(1);
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
