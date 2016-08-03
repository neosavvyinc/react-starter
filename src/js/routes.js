import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import AppComponent from './app';

import homeRoutes from './features/home/home.routes';
import repoLookupRoutes from './features/repoLookup/repoLookup.routes';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={AppComponent}>
            {homeRoutes} {/* IndexRoute */}
            {repoLookupRoutes}
        </Route>
    </Router>
);

render(routes, document.getElementById('react-root'));
