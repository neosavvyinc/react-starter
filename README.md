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
  * Each feature contains at least a `feature.component.js` and (usually) a `feature.component.scss` to declare the parent component
  * Features are defined by the slice of state that they consume. If two components consume the same slice of state,
  then they should be located within the same feature.
  * Features may contain subcomponents, a routing file, a store file, and a communications file
  * See `src/js/features/repoLookup` for a fleshed out, boilerplate feature with all of these files in play

* STATE MANAGEMENT uses MobX, a low-cost, high-performance alternative to Redux
  * Each feature has its own `feature.store.js`, which handles all data for that feature
  * The feature's store is imported directly into any component that consumes the store's data
    * Data access should be as close to the final render as possible. This allows MobX to optimize observer components fully.
  * If necessary, any `feature.store.js` should consume a `feature.comms.js` to handle network requests
  * See `repoLookup` for a simple domain store example

* STYLING is localized via Webpack's CSS Modules feature, piped into components via React-CSS-Modules
  * All styling is local to a component unless explicitly stated otherwise with `:global(.css-rule) { ... }`
  * To apply styles, import a `styles` object from `name.comp.scss` and attribute `className={styles.nameOfClass}`
  * WARNING: Only camelCase CSS rules will work with this setup!
  * WARNING: All styles will be considered `undefined` when testing! Do not use Enzyme's CSS selection!

* ROUTING is done through `react-router`.
  * Each feature contains its own `feature.routes.js` file, which exports its components' routes
  * `src/js/routes.js` imports all feature routes and serves as an entry point for webpack

* TEMPLATING is accomplished through nested routing
  * A template is created that expects `this.props.children` somewhere within its render method
  * Nested routing allows the piping of components into `this.props.children`
  * See `src/js/features/home/home.routes.js` for a simple example, which pipes `HomeComponent` into `NavbarAndFooterTemplate`

* TESTING relies upon Mocha + Chai + Sinon + Enzyme
  * Testing in this seed app focuses on two aspects of each component:
    * Behavioral testing cements component logic
    * Structural testing cements component DOM structure
  * WARNING: Please note that all `styles` imports are returned as null, which means all `classNames` evaluate to `undefined`
    * This breaks Enzyme's CSS selection features, so focus on crawling the DOM tree, instead
