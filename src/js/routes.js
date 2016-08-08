import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import AppComponent from './app';

import homeRoutes from './features/home/home.routes';
import repoLookupRoutes from './features/repoLookup/repoLookup.routes';

const routes = {
    path: '/',
    component: AppComponent,
    childRoutes: [
        homeRoutes,
        repoLookupRoutes
    ]
};

const appRouter = <Router history={browserHistory} routes={routes} />;
const reactRoot = document.getElementById('react-root');

render(appRouter, reactRoot);
