const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const pkgJson = require('../../../package.json');

const parts = require('./webpack.parts');

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const SRC_DIR = path.resolve(process.cwd(), 'src');

/* eslint-disable no-process-env */

/* -------------------------------------------------
                   COMMON CONFIG
------------------------------------------------- */

// commonConfig contains the necessaries of this particular bundle, without dev- or prod- specific options

const commonConfig = merge(
    {
        entry: {
            app: `${SRC_DIR}/js/routes.js`
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'NS React Seed',
                favicon: path.join(SRC_DIR, '/assets/images/favicon.png'),
                template: path.join(SRC_DIR, '/index.html')
            })
        ]
    },
    parts.loadJS(`${SRC_DIR}/js`),
    parts.loadImages(`${SRC_DIR}/assets/images`)
);

/* -------------------------------------------------
                 CONFIG SPLITTING
 ------------------------------------------------- */

// process.env.NODE_ENV is detected to attach env-specific options to the commonConfig

let config;

switch (process.env.NODE_ENV) {
    case 'production':
        config = merge(
            parts.compressImages(`${SRC_DIR}/assets/images`),
            // compression need go before image loading, which is in commonConfig
            commonConfig,
            {
                output: {
                    path: DIST_DIR,
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                }
            },
            parts.clean(DIST_DIR),
            parts.eslint(`${SRC_DIR}/config/eslint/eslint.config.json`, `${SRC_DIR}/js`),
            parts.extractSCSS(SRC_DIR, '[name]__[local]___[hash:base64:5]'),
            parts.extractBundle({  // pipes `package.json.dependencies` into a vendor bundle
                name: 'vendor',
                entries: Object.keys(pkgJson.dependencies)
            }),
            parts.minify()
        );
        break;
    case 'development':
    default:
        config = merge(
            commonConfig,
            parts.devServer({
                host: process.env.HOST, // default 'localhost'
                port: process.env.PORT  // default 8080
            }),
            parts.eslint(`${SRC_DIR}/config/eslint/eslint.config.json`, `${SRC_DIR}/js`),
            parts.pipeSCSS(SRC_DIR, '[name]__[local]___[hash:base64:5]')
        );
}

module.exports = config;
