import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ActiveLink from '../../../../../../src/js/features/common/components/activeLink/activeLink.component';

describe('ActiveLinkComponent', () => {
    const testPath = 'testPath';
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ActiveLink to={testPath} />);
    });

    it('should render a single Link', () => {
        expect(wrapper.find('Link').length).to.equal(1);
    });

    it('should pipe this.props into the rendered Link', () => {
        const propsMock = {
            forehead: 'fivehead',
            onlyActiveOnIndex: true
        };

        wrapper.setProps(propsMock);

        expect(wrapper.find('Link').props().forehead).to.equal(propsMock.forehead);
        expect(wrapper.find('Link').props().onlyActiveOnIndex).to.equal(propsMock.onlyActiveOnIndex);
        expect(wrapper.find('Link').props().to).to.equal(testPath);
    });

    it('should add the activeClassName prop', () => {
        expect(wrapper.find('Link').props().activeClassName).to.equal('ns-active-link');
    });
});
