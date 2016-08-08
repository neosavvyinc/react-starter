const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./webpack.parts');

const DIST_DIR = path.resolve(__dirname, '../../../dist');
const SRC_DIR = path.resolve(__dirname, '../../../src');

/* -------------------------------------------------
                   COMMON CONFIG
------------------------------------------------- */

const commonConfig = {
    devtool: 'eval',
    entry: [
        'whatwg-fetch',
        SRC_DIR + '/js/routes.js'
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: 'node_modules',
                include: SRC_DIR,
                loader: 'babel'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'url?limit=10000',
                query: {
                    name: 'assets/[name].[hash].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file',
                query: {
                    name: 'assets/[name].[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'NS React Seed',
            favicon: path.join(SRC_DIR, '/assets/images/favicon.png'),
            template: path.join(SRC_DIR, '/index.html')
        })
    ]
};

let config;

switch(process.env.NODE_ENV) {
    case 'development':
        config = merge(
            commonConfig,
            parts.loadSCSS(SRC_DIR, '[name]__[local]___[hash:base64:5]'),   // second parameter defines the class names of locally scoped CSS
            parts.devServer({
                host: process.env.HOST, // default 'localhost'
                port: process.env.PORT  // default 8080
            })
        );
        break;
    case 'production':
        config = merge(commonConfig, {});
        break;
    default:
        console.error('process.env.NODE_ENV has not been assigned. Please assign one of the possible build environments: production or development.');
}

module.exports = validate(config);
