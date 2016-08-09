import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import ActiveLink from '../../../../../../src/js/features/common/components/activeLink/activeLink.comp';

let wrapper;
const testPath = 'testPath';

test.beforeEach(() => {
    wrapper = shallow(<ActiveLink to={testPath} />);
});

test('render a containing Link', t => {
    t.truthy(wrapper.is('Link'));
});

test('pipe this.props into the wrapper', t => {
    const propsMock = {
        forehead: 'fivehead',
        onlyActiveOnIndex: true
    };

    wrapper.setProps(propsMock);

    const wrapperProps = wrapper.props();

    t.is(wrapperProps.forehead, propsMock.forehead);
    t.is(wrapperProps.onlyActiveOnIndex, propsMock.onlyActiveOnIndex);
    t.is(wrapperProps.to, testPath);
});
