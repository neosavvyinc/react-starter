import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MessageBox from '../../../../../../src/js/features/common/components/messageBox/messageBox.component';

describe('MessageBox', () => {
    const message = 'this message is a test';
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <MessageBox
                condition={true}
                color="primary"
                message={message}/>
        );
    });

    it('should render a message box container', () => {
        expect(wrapper.find('div .ns-message-box-container').length).to.equal(1);
    });

    it('should render a child div if condition', () => {
        wrapper.setProps({ condition: true });

        expect(
            wrapper.find('div .ns-message-box-container')
                .children().find('div').length
        ).to.equal(1);
    });

    it('should not render a child div if !condition', () => {
        wrapper.setProps({ condition: false });

        expect(
            wrapper.find('div .ns-message-box-container')
                .children().find('div').length
        ).to.equal(0);
    });

    it('should be able to render a message container with the primary style', () => {
        wrapper.setProps({ color: 'primary' });

        expect(wrapper.find('div .primary-message-container').length).to.equal(1);
    });

    it('should be able to render a message container with the red style', () => {
        wrapper.setProps({ color: 'red' });

        expect(wrapper.find('div .red-message-container').length).to.equal(1);
    });

    it('should pass this.props.message through to the message container', () => {
        expect(wrapper.find('div .primary-message-container').children().node).to.equal(message);
    });
});
