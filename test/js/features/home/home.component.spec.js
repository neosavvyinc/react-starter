import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import HomeComponent from '../../../../src/js/features/home/home.component';

describe('HomeComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomeComponent />);
    });

    it('should render a container', () => {
        expect(wrapper.find('div .ns-home').length).to.equal(1);
    });

    it('should render a title', () => {
        expect(wrapper.find('h1 .title').length).to.equal(1);
    });

    it('should render an image link to Neosavvy\'s homepage', () => {
        expect(wrapper.contains(
            <a href="http://www.neosavvy.com">
                <img src="src/assets/images/logo.png" />
            </a>
        )).to.equal(true);
    });
});
