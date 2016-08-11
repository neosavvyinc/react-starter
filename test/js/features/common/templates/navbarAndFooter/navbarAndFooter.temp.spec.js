import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import FooterComponent from '../../../../../../src/js/features/common/components/footer/footer.comp';
import NavbarComponent from '../../../../../../src/js/features/common/components/navbar/navbar.comp';
import NavbarAndFooterTemplate from '../../../../../../src/js/features/common/templates/navbarAndFooter/navbarAndFooter.temp';

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

    it('should render a div container', () => {
        expect(wrapper.find('div').first().parents().length).to.equal(0);
    });

    it('should render a NavbarComponent', () => {
        expect(wrapper.contains(<NavbarComponent />)).to.equal(true);
    });

    it('should render a child div for displaying content', () => {
        expect(wrapper.find('div').first().children().at(1).type()).to.equal('div');
    });

    it('should render children inside of the content container', () => {
        const contentContainer = wrapper.find('div').first().children().at(1);

        expect(contentContainer.contains([testHeader, testPara])).to.equal(true);
    });

    it('should render a FooterComponent', () => {
        expect(wrapper.contains(<FooterComponent />)).to.equal(true);
    });
});
