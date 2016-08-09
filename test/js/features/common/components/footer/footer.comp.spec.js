import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import FooterComponent from '../../../../../../src/js/features/common/components/footer/footer.comp';

let wrapper;

test.beforeEach(() => {
    wrapper = shallow(<FooterComponent />);
});

test('render a footer container', t => {
    t.truthy(wrapper.is('footer'));
});