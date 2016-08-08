import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { UsernameInputComponent } from '../../../../../src/js/features/repoLookup/usernameInput/usernameInput.component';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';

describe('UsernameInputComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UsernameInputComponent repoLookupStore={repoLookupStore} />);
    });

    it('should render a form container', () => {
        expect(wrapper.find('form.ns-username-input-container').length).to.equal(1);
    });

    it('should render an input field', () => {
        expect(wrapper.find('input').length).to.equal(1);
    });

    it('should render a submit button', () => {
        expect(wrapper.find('button[type=\'submit\']').length).to.equal(1);
    });

    it('should call this.props.repoLookupStore.fetchData() on submit with input\'s value', sinon.test(function() {
        this.stub(repoLookupStore, 'fetchData', () => {});
        const preventDefault = this.stub();

        wrapper.find('input').simulate('change', { target: { value: 'test123' } });

        wrapper.props().onSubmit({ preventDefault });

        expect(repoLookupStore.fetchData.calledWith('test123')).to.equal(true);
    }));

    it('should log an error on submit when input is empty string', sinon.test(function() {
        const consoleStub = this.stub(console, 'error');
        this.spy(repoLookupStore, 'fetchData');
        const preventDefault = this.stub();

        wrapper.find('input').simulate('change', { target: { value: '' } });

        wrapper.props().onSubmit({ preventDefault });

        expect(consoleStub.called).to.equal(true);
        expect(repoLookupStore.fetchData.called).to.equal(false);
    }));
});
