import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { UsernameInputComponent } from '../../../../../src/js/features/repoLookup/usernameInput/usernameInput.comp';
import repoLookupStore from '../../../../../src/js/features/repoLookup/repoLookup.store';
import MessageBox from '../../../../../src/js/features/common/components/messageBox/messageBox.comp';

describe('UsernameInputComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UsernameInputComponent repoLookupStore={repoLookupStore} />);
    });

    it('should render a form container', () => {
        expect(wrapper.find('form').first().parents().length).to.equal(0);
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

    it('should render a MessageBox for Loading...', () => {
        expect(wrapper.contains(
            <MessageBox
                condition={false}
                type="success"
                message="Loading..." />
        )).to.equal(true);
    });

    it('should render a MessageBox for Unknown User', () => {
        expect(wrapper.contains(
            <MessageBox
                condition={false}
                type="error"
                message="Unknown User" />
        )).to.equal(true);
    });

    it('should render a MessageBox for Invalid Input', () => {
        expect(wrapper.contains(
            <MessageBox
                condition={false}
                type="error"
                message="Invalid Input" />
        )).to.equal(true);
    });
});
