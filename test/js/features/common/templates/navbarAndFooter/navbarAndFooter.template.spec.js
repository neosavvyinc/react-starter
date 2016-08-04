import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FooterComponent from '../../../../../../src/js/features/common/components/footer/footer.component';
import NavbarComponent from '../../../../../../src/js/features/common/components/navbar/navbar.component';
import NavbarAndFooterTemplate from '../../../../../../src/js/features/common/templates/navbarAndFooter/navbarAndFooter.template';

describe('NavbarAndFooterTemplate', () => {
    const testHeader = <h1>Test123</h1>;
    const testPara = <p>Testing, 1...2...3...</p>;
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <NavbarAndFooterTemplate>
                <div>
                    {testHeader}
                    {testPara}
                </div>
            </NavbarAndFooterTemplate>
        );
    });

    it('should render a template container', () => {
        expect(wrapper.find('div .ns-navbar-and-footer-template').length).to.equal(1);
    });

    it('should render a NavbarComponent', () => {
        expect(wrapper.contains(<NavbarComponent />)).to.equal(true);
    });

    it('should render a content container', () => {
        expect(wrapper.find('div .content-container').length).to.equal(1);
    });

    it('should render children inside of the content container', () => {
        const contentContainer = wrapper.find('div .content-container');

        expect(contentContainer.contains([testHeader, testPara])).to.equal(true);
    });

    it('should render a FooterComponent', () => {
        expect(wrapper.contains(<FooterComponent />)).to.equal(true);
    });
});
