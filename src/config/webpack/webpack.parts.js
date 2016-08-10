const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/* eslint-disable camelcase */

// parts constructed by following http://survivejs.com/webpack

// cleans out the provided path, to remove build artifacts
exports.clean = path => {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                root: process.cwd()
            })
        ]
    };
};

// compresses images, which should be later piped through file/url loaders
exports.compressImages = paths => {
    return {
        module: {
            loaders: [
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loaders: [
                        'image-webpack?optimizationLevel=7'
                    ],
                    include: paths
                }
            ]
        }
    };
};

// creates a devServer
exports.devServer = options => {
    return {
        devServer: {
            historyApiFallback: true,
            inline: true,
            stats: 'errors-only',
            host: options.host,
            port: options.port
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multiStep: false // set to true in large apps for performance
            })
        ]
    };
};

exports.eslint = (configPath, includePath) => {
    return {
        eslint: {
            configFile: configPath
        },
        module: {
            preLoaders: [
                {
                    test: /\.jsx?$/,
                    loader: 'eslint',
                    include: includePath
                }
            ]
        }
    };
};

// extracts `options.entries` into the `options.name` bundle, then enables CommonsChunk w/ a manifest
exports.extractBundle = options => {
    const entry = {};
    entry[options.name] = options.entries;

    return {
        entry,
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: [options.name, 'manifest']
            })
        ]
    };
};

// extracts SCSS into a separate file for the production build
// also minifies the css (cssnano) and adds vendor prefixes (autoprefixer)
exports.extractSCSS = (paths, hashString) => {
    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallbackLoader: 'style',
                        loader: `css?modules&localIdentName=${hashString}!postcss!sass`
                    }),
                    include: paths
                }
            ]
        },
        postcss: function() {
            return [require('cssnano'), require('autoprefixer')];
        },
        plugins: [
            new ExtractTextPlugin('[name].[chunkhash].css')
        ]
    };
};

// loads images as either dataURLs (limit: 10,000b) or files (named according to the query)
// relies explicitly upon `url-loader`, implicitly upon `file-loader` (used for files above the limit)
exports.loadImages = paths => {
    return {
        module: {
            loaders: [
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'url',
                    include: paths,
                    query: {
                      limit: 10000,  // size limit for dataURLs
                      name: 'assets/[name].[hash].[ext]'  // name of file emitted by file-loader when above limit
                    }
                }
            ]
        }
    };
};

// preps babel-loader for JS or JSX
exports.loadJS = paths => {
    return {
        module: {
            loaders: [
                {
                    test: /\.jsx?/,
                    exclude: 'node_modules',
                    include: paths,
                    loader: 'babel'
                }
            ]
        }
    };
};

// minifies the project
exports.minify = () => {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                compress: {
                    warnings: false,
                    drop_console: true
                },
                mangle: {
                    screw_ie8: true,
                    keep_fnames: false  // enable for better production debugging
                }
            })
        ]
    };
};

// loads and pipes in SCSS for the development build
exports.pipeSCSS = (paths, hashString) => {
    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: `style!css?modules&localIdentName=${hashString}!sass`,
                    include: paths
                }
            ]
        }
    };
};
