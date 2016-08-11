import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FooterComponent from '../../../../../../src/js/features/common/components/footer/footer.comp';

describe('FooterComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FooterComponent />);
    });

    it('should render a footer element', () => {
        expect(wrapper.find('footer').length).to.equal(1);
    });
});
