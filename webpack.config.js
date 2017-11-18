const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const path = require('path');

const isProd = process.env.NODE_ENV === 'prod';

const prodCssConfig = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
});

const devCssConfig = ['style-loader', 'css-loader'];

const cssConfig = isProd ? prodCssConfig : devCssConfig;

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
                use: cssConfig
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
                exclude: /node_modules/ // ?
            }
        ]
    },

    devtool: isProd ? 'source-map' : 'inline-source-map',

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
            filename: 'vendor.bundle.js',
            chunks: ['babel-polyfill', 'jquery', 'bootstrap/dist/css/bootstrap.min.css']
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

};