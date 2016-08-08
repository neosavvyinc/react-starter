import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.template';
import RepoLookupComponent from './repoLookup.component';

const repoLookupRoutes = {
    component: NavbarAndFooterTemplate,
    childRoutes: [
        {
            path: '/repoLookup',
            component: RepoLookupComponent
            // component is routed in as a child of NavbarAndFooterTemplate, giving the component the desired UI frame
        }
    ]
};

// export this route for use in the master route file
export default repoLookupRoutes;
