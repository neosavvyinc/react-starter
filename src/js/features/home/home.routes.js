import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.temp';
import HomeComponent from './home.comp';

const homeRoutes = {
    component: NavbarAndFooterTemplate,
    indexRoute: {
        component: HomeComponent
    }
};

export default homeRoutes;
