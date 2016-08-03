import NavbarAndFooterTemplate from '../common/templates/navbarAndFooter/navbarAndFooter.template';
import RepoLookupComponent from './repoLookup.component';

const repoLookupRoutes = {
    component: NavbarAndFooterTemplate,
    childRoutes: [
        {
            path: '/repoLookup',
            component: RepoLookupComponent
        }
    ]
};

export default repoLookupRoutes;
