# Neosavvy's React + Webpack2 + MobX Seed

### Installation:
* Node version 6.3.0 was used to create this seed application; Node 6+ is required to run some npm scripts
* You can create a `githubApiAccessToken` [here](https://github.com/settings/tokens)

* `npm install` -> installs all dependencies
* `npm run setup` -> prompts for github access token, writes key to the proper location
* `npm start` -> starts a webpack-dev-server at localhost:8080
* For additional npm scripts see `package.json`

### Application Overview
* This seed application is split into FEATURES
  * Each feature contains at least a `feature.component.js` and a `feature.component.scss` to define its parent component
  * Features are defined by the slice of state that they consume. If two components consume the same slice of state,
  then they should be located within the same feature.
  * Features may contain subcomponents, a routing file, a store file, and a communications file
  * See `src/js/features/repoLookup` for a fleshed out, boilerplate feature with all of these files in play
* STATE MANAGEMENT uses MobX, a low-cost, high-performance alternative to Redux
  * Each feature has its own `feature.store.js`, which handles all data for that feature
  * The feature's store is imported directly into any component that consumes the store's data
    * Data access should be as close to the final render as possible. This allows MobX to optimize observer components fully.
  * If necessary, any `feature.store.js` should consume a `feature.comms.js` to handle network requests
* All STYLING is piped through `src/assets/styles/main.scss`
  * Components with styles are wrapped in a `.ns-component-container` classed div to hide their styles from the global scope
  * Component style sheets are imported into `main.scss`
  * Global styles are declared in `main.scss` before component imports
  * Global style variables are declared in `src/assets/styles/global-variables.scss` and imported at the top of `main.scss`
* ROUTING is done through `react-router`.
  * Each feature contains its own `feature.routes.js` file, which exports its components' routes
  * `src/js/routes.js` imports all feature routes and serves as an entry point for webpack
* TEMPLATING is accomplished through nested routing
  * A template is created that expects `this.props.children` somewhere within its render method
  * Nested routing allows the piping of components into `this.props.children`
  * See `src/js/features/home/home.routes.js` for a simple example, which pipes `HomeComponent` into `NavbarAndFooterTemplate`
* Some GLOBAL VARIABLES are available from `webpack.ProvidePlugin`
  * `React` and `_` are available without requiring an import statement
  * `Promise` has been replaced with the Bluebird library, and is accessible without importing
