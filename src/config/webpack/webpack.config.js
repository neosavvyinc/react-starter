const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, '../../../dist');
const SRC_DIR = path.resolve(__dirname, '../../../src');

const webpackConfig = {
    devtool: 'eval',
    entry: [
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
                test: /\.scss$/,
                include: path.join(SRC_DIR, '/assets'),
                loader: 'style!css!sass'
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
        }),
        new webpack.ProvidePlugin({
            "React": "react"
        })
    ]
};

module.exports = webpackConfig;
