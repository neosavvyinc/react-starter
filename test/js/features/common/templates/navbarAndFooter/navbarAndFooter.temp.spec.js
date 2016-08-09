import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import FooterComponent from '../../../../../../src/js/features/common/components/footer/footer.comp';
import NavbarComponent from '../../../../../../src/js/features/common/components/navbar/navbar.comp';
import NavbarAndFooterTemplate from '../../../../../../src/js/features/common/templates/navbarAndFooter/navbarAndFooter.temp';

const testHeader = <h1>Test123</h1>;
const testPara = <p>Testing, 1...2...3...</p>;
let wrapper;

test.beforeEach(() => {
    wrapper = shallow(
        <NavbarAndFooterTemplate>
            <div>
                {testHeader}
                {testPara}
            </div>
        </NavbarAndFooterTemplate>
    );
});

test('render a containing div', t => {
    t.truthy(wrapper.is('div'));
});

test('render a NavbarComponent as first child', t => {
    const isNavbarComponentFirstChild = wrapper.children()
        .first().matchesElement(<NavbarComponent />);

    t.truthy(isNavbarComponentFirstChild);
});

test('render a div for displaying content as second child', t => {
    const typeOfSecondChildOfFirstDiv = wrapper.children()
        .at(1).type();

    t.is(typeOfSecondChildOfFirstDiv, 'div');
});

test('render children inside of the content container', t => {
    const expectedChildren = [testHeader, testPara];
    const doesSecondChildContainExpected = wrapper.children()
        .at(1).contains(expectedChildren);

    t.truthy(doesSecondChildContainExpected);
});

test('render a FooterComponent as third child', t => {
    const isFooterComponentThirdChild = wrapper.children()
        .at(2).matchesElement(<FooterComponent />);

    t.truthy(isFooterComponentThirdChild);
});
