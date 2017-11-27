const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const path = require('path');

const isProd = process.env.NODE_ENV === 'prod';

var plugins = [
    new HtmlwebpackPlugin({
        template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new CommonsChunkPlugin({
        name: ['vendor', 'manifest']
    })
];

if (!isProd)
    plugins = plugins.concat([
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]);
else
    plugins = plugins.concat([
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]);

module.exports = {

    entry: {
        vendor: ['babel-polyfill', 'jquery', 'bootstrap/dist/css/bootstrap.min.css'],
        app: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
                exclude: /node_modules/
            }
        ]
    },

    devtool: isProd ? 'source-map' : 'inline-source-map',

    watchOptions: {
        ignored: /node_modules/
    },

    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        // stats: 'errors-only',
        // open: true
    },

    plugins: plugins

};