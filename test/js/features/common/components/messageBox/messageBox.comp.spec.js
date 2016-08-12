import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import MessageBox from '../../../../../../src/js/features/common/components/messageBox/messageBox.comp';

const message = 'this message is a test';
let wrapper;

test.beforeEach(() => {
    wrapper = shallow(
        <MessageBox
            condition={true}
            type="success"
            message={message}/>
    );
});

test('render a containing div', t => {
    t.truthy(wrapper.is('div'));
});

test('render a child div if props.condition', t => {
    const typeOfFirstChild = wrapper.children().first().type();

    t.is(typeOfFirstChild, 'div');
});

test('do not render a child div if !props.condition', t => {
    wrapper.setProps({ condition: false });

    const containerIsEmpty = wrapper.children().isEmpty();

    t.truthy(containerIsEmpty);
});

test('pass this.props.message through to the message container', t => {
    const firstChild = wrapper.children().first();
    const textInMessageContainer = firstChild.children().first().node;

    t.is(textInMessageContainer, message);
});