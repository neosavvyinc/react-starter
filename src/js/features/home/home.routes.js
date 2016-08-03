import { IndexRoute, Route } from 'react-router';

import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.template';
import HomeComponent from './home.component';

const homeRoutes = (
    <Route component={NavbarAndFooterTemplate}>
        {/* Nested route so HomeComponent gets a navbar and footer */}
        <IndexRoute component={HomeComponent} />
    </Route>
);

export default homeRoutes;
