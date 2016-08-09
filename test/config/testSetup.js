// this file does the following before running ava's tests

// 1) return null from unwanted requires
require.extensions['.scss'] = function () {
    return null;
};
require.extensions['.png'] = function () {
    return null;
};
require.extensions['.jpg'] = function () {
    return null;
};

// 2) register babel so it transpiles to ES5
require('babel-register')();
