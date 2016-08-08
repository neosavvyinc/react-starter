// this file does the following before tests are run:

// 1) set NODE_ENV to 'testing'
process.env.NODE_ENV = 'testing';

// 2) return null from unwanted requires
require.extensions['.css'] = function () {
    return null;
};
require.extensions['.png'] = function () {
    return null;
};
require.extensions['.jpg'] = function () {
    return null;
};

// 3) expose the fetch API to mocha tests
require('isomorphic-fetch');

// 4) register babel so it transpiles to ES5
require('babel-register')();
