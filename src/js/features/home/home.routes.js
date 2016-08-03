import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.template';
import HomeComponent from './home.component';

const homeRoutes = {
    component: NavbarAndFooterTemplate,
    indexRoute: {
        component: HomeComponent
    }
};

export default homeRoutes;
