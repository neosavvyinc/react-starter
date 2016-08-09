import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MessageBox from '../../../../../../src/js/features/common/components/messageBox/messageBox.comp';

describe('MessageBox', () => {
    const message = 'this message is a test';
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <MessageBox
                condition={true}
                type="success"
                message={message}/>
        );
    });

    it('should render a containing div', () => {
        expect(wrapper.find('div').at(0).parents().length).to.equal(0);
    });

    it('should render a child div if props.condition', () => {
        wrapper.setProps({ condition: true });

        expect(
            wrapper.find('div').at(0)
                .children().length
        ).to.equal(1);
    });

    it('should not render a child div if !props.condition', () => {
        wrapper.setProps({ condition: false });

        expect(
            wrapper.find('div').at(0)
                .children().length
        ).to.equal(0);
    });

    // it('should be able to render a message container with the primary style', () => {
    //     wrapper.setProps({ color: 'primary' });
    //
    //     expect(wrapper.find('div .primary-message-container').length).to.equal(1);
    // });
    //
    // it('should be able to render a message container with the red style', () => {
    //     wrapper.setProps({ color: 'red' });
    //
    //     expect(wrapper.find('div .red-message-container').length).to.equal(1);
    // });

    it('should pass this.props.message through to the message container', () => {
        expect(wrapper.find('div').at(1).children().node).to.equal(message);
    });
});
