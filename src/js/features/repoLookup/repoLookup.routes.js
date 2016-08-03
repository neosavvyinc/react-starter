// subroutes for the repoLookup component
import { Route } from 'react-router';

import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.template';
import RepoLookupComponent from './repoLookup.component';

const repoLookupRoutes = (
    <Route component={NavbarAndFooterTemplate}>
        {/* This route nesting places the RepoLookupComponent inside of the NavbarAndFooterTemplate */}
        <Route path="/repoLookup" component={RepoLookupComponent} />
    </Route>
);

export default repoLookupRoutes;
