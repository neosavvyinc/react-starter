import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import HomeComponent from '../../../../src/js/features/home/home.comp';


let wrapper;

test.beforeEach(() => {
    wrapper = shallow(<HomeComponent />);
});

test('render a containing div', t => {
    t.truthy(wrapper.is('div'));
});

test('render an h1 as first child', t => {
    const typeOfFirstChild = wrapper.first()
        .children().first().type();

    t.is(typeOfFirstChild, 'h1');
});

test('render an image link to Neosavvy\'s homepage', t => {
    const expectedImage = (
        <a href="http://www.neosavvy.com">
            <img className={undefined} src="src/assets/images/logo.png" />
        </a>
    );

    const doesWrapperContainExpectedImage = wrapper.contains(expectedImage);

    t.truthy(doesWrapperContainExpectedImage);
});