import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ActiveLink from '../../../../../../src/js/features/common/components/activeLink/activeLink.comp';
import NavbarComponent from '../../../../../../src/js/features/common/components/navbar/navbar.comp';

describe('NavbarComponent', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavbarComponent />);
    });

    it('should render a navbar container', () => {
        expect(wrapper.find('nav').length).to.equal(1);
    });

    it('should render a nav list within the container', () => {
        expect(wrapper.find('nav').children().find('ul[role=\'nav\']').length).to.equal(1);
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
