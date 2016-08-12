import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ActiveLink from '../../../../../../src/js/features/common/components/activeLink/activeLink.comp';
import NavbarComponent from '../../../../../../src/js/features/common/components/navbar/navbar.comp';

let wrapper;

test.beforeEach(() => {
    wrapper = shallow(<NavbarComponent />);
});

test('render a navbar container', t => {
    t.truthy(wrapper.is('nav'));
});

test('render a nav ul within the navbar', t => {
    const isNavListFirstChild = wrapper.children()
        .first().is('ul[role=\'nav\']');

    t.truthy(isNavListFirstChild);
});

test('in nav ul, render an index link to Home first', t => {
    const indexLinkToHome = (
        <li className={undefined}>
            <ActiveLink to="/" className={undefined}
                onlyActiveOnIndex={true}>
                Home
            </ActiveLink>
        </li>
    );

    const doesFirstChildOfNavListMatch = wrapper.find('ul[role=\'nav\']')
        .children().first().matchesElement(indexLinkToHome);

    t.truthy(doesFirstChildOfNavListMatch);
});

test('in nav ul, render a link to repoLookup second', t => {
    const linkToRepoLookup = (
        <li className={undefined}>
            <ActiveLink to="/repoLookup" className={undefined}>
                Repo Lookup
            </ActiveLink>
        </li>
    );

    const doesSecondChildOfNavListMatch = wrapper.find('ul[role=\'nav\']')
        .children().at(1).matchesElement(linkToRepoLookup);

    t.truthy(doesSecondChildOfNavListMatch);
});