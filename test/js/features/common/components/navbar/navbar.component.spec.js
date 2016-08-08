import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ActiveLink from '../../../../../../src/js/features/common/components/activeLink/activeLink.component';
import NavbarComponent from '../../../../../../src/js/features/common/components/navbar/navbar.component';

describe('NavbarComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavbarComponent />);
    });

    it('should render a navbar container', () => {
        expect(wrapper.find('nav .ns-navbar').length).to.equal(1);
    });

    it('should render a nav list', () => {
        expect(wrapper.find('ul[role=\'nav\']').length).to.equal(1);
    });

    it('should render an index link to Home', () => {
        expect(wrapper.contains(
            <li>
                <ActiveLink to="/" onlyActiveOnIndex={true}>
                    Home
                </ActiveLink>
            </li>
        ));
    });

    it('should render a link to Repo Lookup', () => {
        expect(wrapper.contains(
            <li>
                <ActiveLink to="/repoLookup">
                    Repo Lookup
                </ActiveLink>
            </li>
        ));
    });
});
