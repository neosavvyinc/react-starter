import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { UsernameInputComponent } from '../../../../../src/js/features/repoLookup/usernameInput/usernameInput.comp';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';
import MessageBox from '../../../../../src/js/features/common/components/messageBox/messageBox.comp';

let wrapper;

test.beforeEach(() => {
    wrapper = shallow(<UsernameInputComponent repoLookupStore={repoLookupStore} />);
});

test('render a form container', t => {
    t.truthy(wrapper.is('form'));
});

test('render an input as first child', t => {
    const firstChildIsInput = wrapper.children().first().is('input');

    t.truthy(firstChildIsInput);
});

test('render a submit button as second child', t => {
    const secondChildIsSubmit = wrapper.children().at(1).is('button[type=\'submit\']');

    t.truthy(secondChildIsSubmit);
});

test('render a MessageBox for \'Loading...\'', t => {
    const expectedMessageBox = (
        <MessageBox
            condition={false}
            type="success"
            message="Loading..." />
    );

    t.truthy(wrapper.contains(expectedMessageBox));
});

test('render a MessageBox for \'Unknown User\'', t => {
    const expectedMessageBox = (
        <MessageBox
            condition={false}
            type="error"
            message="Unknown User" />
    );

    t.truthy(wrapper.contains(expectedMessageBox));
});

test('render a MessageBox for \'Invalid Input\'', t => {
    const expectedMessageBox = (
        <MessageBox
            condition={false}
            type="error"
            message="Invalid Input" />
    );

    t.truthy(wrapper.contains(expectedMessageBox));
});

test('call this.props.repoLookupStore.fetchData on submit with input\'s value', sinon.test(function(t) {
    this.stub(repoLookupStore, 'fetchData', () => {});
    const preventDefault = this.stub();

    const testValue = 'test123';

    wrapper.find('input').simulate('change', { target: { value: testValue } });

    wrapper.props().onSubmit({ preventDefault });

    t.truthy(repoLookupStore.fetchData.calledWith(testValue));
}));
