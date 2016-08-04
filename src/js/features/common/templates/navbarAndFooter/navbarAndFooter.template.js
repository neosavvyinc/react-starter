import React from 'react';
import NavbarComponent from '../../components/navbar/navbar.component';
import FooterComponent from '../../components/footer/footer.component';

export default class NavbarAndFooterTemplate extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired
    };

    render() {
        return (
            <div className="ns-navbar-and-footer-template">
                <NavbarComponent />
                <div className="content-container">
                    {this.props.children}
                </div>
                <FooterComponent />
            </div>
        );
    }
}
