var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {

    entry: './src/app.js',

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

    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]

};