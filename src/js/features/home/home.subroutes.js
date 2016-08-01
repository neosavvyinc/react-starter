import { IndexRoute, Route } from 'react-router';

import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.template';
import HomeComponent from './home.component';

const homeRoutes = (
    <Route component={NavbarAndFooterTemplate}>
        <IndexRoute component={HomeComponent} />
    </Route>
);

export default homeRoutes;
