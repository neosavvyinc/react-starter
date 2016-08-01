import NavbarComponent from '../../components/navbar/navbar.component';
import FooterComponent from '../../components/footer/footer.component';

export default class NavbarAndFooterTemplate extends React.Component {
    render() {
        return (
            <div className="ns-navbar-and-footer-template">
                <NavbarComponent />
                <div className="content">
                    {this.props.children}
                </div>
                <FooterComponent />
            </div>
        );
    }
}

NavbarAndFooterTemplate.propTypes = { children: React.PropTypes.element.isRequired };
