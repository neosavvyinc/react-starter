import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import RepoLookupComponent from '../../../../src/js/features/repoLookup/repoLookup.comp';
import UsernameInputComponent from '../../../../src/js/features/repoLookup/usernameInput/usernameInput.comp';
import UserDisplayComponent from '../../../../src/js/features/repoLookup/userDisplay/userDisplay.comp';
import RepoListComponent from '../../../../src/js/features/repoLookup/repoList/repoList.comp';

let wrapper;

test.beforeEach(() => {
    wrapper = shallow(<RepoLookupComponent/>);
});

test('render a containing div', t => {
    t.truthy(wrapper.is('div'));
});

test('render an h1 as first child', t => {
    const typeOfFirstChild = wrapper.first()
        .children().first().type();

    t.is(typeOfFirstChild, 'h1');
});

test('render a UsernameInputComponent as second child', t => {
    const secondChildIsUsernameInput = wrapper.children()
        .at(1).matchesElement(<UsernameInputComponent />);

    t.truthy(secondChildIsUsernameInput);
});

test('render a UserDisplayComponent as third child', t => {
    const thirdChildIsUsernameDisplay = wrapper.children()
        .at(2).matchesElement(<UserDisplayComponent />);

    t.truthy(thirdChildIsUsernameDisplay);
});

test('render a RepoListComponent as fourth child', t => {
    const fourthChildIsRepoList = wrapper.children()
        .at(3).matchesElement(<RepoListComponent />);

    t.truthy(fourthChildIsRepoList);
});
