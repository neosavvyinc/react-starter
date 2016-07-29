import { Route } from 'react-router';
import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.template';
import RepoLookupComponent from './repoLookup.component';

const repoLookupRoutes = (
    <Route component={NavbarAndFooterTemplate}>
        <Route path="/repoLookup" component={RepoLookupComponent} />
    </Route>
);

export default repoLookupRoutes;
