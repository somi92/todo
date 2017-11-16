const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const path = require('path');

module.exports = {

    entry: {
        vendor: ['babel-polyfill', 'jquery', 'bootstrap/dist/css/bootstrap.min.css'],
        main: './src/app.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
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
                use: [
                    { loader: 'style-loader' }, // inject CSS to a page
                    { loader: 'css-loader' } // translates CSS into CommonJS modules
                ]
            }
        ]
    },

    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        // stats: 'errors-only',
        // open: true
    },

    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new UglifyJSPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

};