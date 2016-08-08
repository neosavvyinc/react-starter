const webpack = require('webpack');

exports.devServer = function(options) {
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

exports.loadSCSS = function(paths, hashString) {
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