const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webUrl = process.env.WEB_URL || 'http://localhost:8080';
const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3000';
const shareBaseUrl = process.env.SHARE_BASE_URL || apiBaseUrl;

module.exports = {
    mode: 'development',
    entry: {
        app: [
            'whatwg-fetch',
            'webpack/hot/dev-server',
            `webpack-dev-server/client?${webUrl}/`,
            './client/css/lighterpack.scss',
            './client/lighterpack.js',
        ],
        share: [
            './client/css/share.scss',
            'webpack/hot/dev-server',
            `webpack-dev-server/client?${webUrl}/`,
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        hot: true,
    },
    performance: {
        hints: false,
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __API_BASE_URL__: JSON.stringify(apiBaseUrl),
            __SHARE_BASE_URL__: JSON.stringify(shareBaseUrl),
        }),
    ],
};
