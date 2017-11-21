# Introduction to webpack

Webpack is a module bundler for JavaScript. It creates a dependency graph of modules which the application uses and packages them into one (or more) bundles. 

Modules in JavaScript were natively introduced by ECMAScript 2015 specification, as well as in some ECMAScript unrelated specs (like CommonJS, AMD, etc). The need for module bundlers comes from the fact that browsers still do not support modules. With bundlers, developers can process the JS code, written in a modular manner common to most programming languages, to make it browser friendly. 

```js
npm install webpack // add -g to install it globally and use it from command line
```

Although webpack can be used as CLI tool, it's usually more convenient and flexible to configure in a separate JS file called `webpack.config.js`. This file is usually stored in the root of the project.

```js
// skeleton of a webpack.config.js file
// webpack configuration is defined in a JS object exported as a CommonJS module

module.exports = {
    entry: {
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
            }
            {
                test: /\.css$/,
                use:  ['style-loader', 'css-loader']
            },
        ]
    },    
    plugins: [
    	new HtmlwebpackPlugin({
        	template: './src/index.html'
    	}),
    	new UglifyJSPlugin({
        	sourceMap: true
    	})
	],
    devtool: isProd ? 'source-map' : 'inline-source-map',
};
```

TODO: Briefly describe content of emitted bundle.


## Core concepts

### Entry

An entry point is a module from which webpack starts to build the dependency graph by scanning dependencies of the entry and repeating the process recursively. There are several ways in which an entry can be defined:
* As a single entry point.
```js
entry: './path/to/my/entry/file.js'
```
* Using and object where multiple entry points are possible. Webpack will create multiple independent dependency graphs. This is useful in multi-page apps and in cases where it's convenient to create separate app and third party vendor chunks (bundles).
```js
entry: {
	app: './src/app.js',
    vendors: './src/vendors.js'
}
```
* As an array of entry points which instructs webpack to append multiple dependancy paths independant of each other.
```js
entry: ['./src/app.js', './src/util.js']
```

### Output

The output property instruct webpack how and where to emit produced bundles. Webpack requires two parameters to be provided to the `output` property:
* `filename` to use for bundle file (or files)
* `path` which is and absolute path of the output directory

```js
const path = require('path'); // use NodeJS 'path' module to handle paths easier 

output: {
	filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist') // will resolve to dist directory of the current location
}
// will emit a bundle: projectpath/dist/app.bundle.js

// ...

// in case of multiple entry points, use substitution in filename property to emit separate chunks
{
  entry: {
    main: './src/app.js',
    vendor: './src/vendor.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist') // will resolve to dist directory of the current location
  }
}
// will emit two bundles: projectpath/dist/app.bundle.js and projectpath/dist/vendor.bundle.js 
```

### Loaders

Loaders transform various types of files into modules that can be processed by webpack and included in the dependency graph. By using loaders, various assets can be transformed and used as JS modules. Loaders are defined as a `rules` array of `module` property. They are usually installed via npm.

```js
module: {
    rules: [
        {
            test: /\.hbs$/, // use handlebars-loader for all hbs files
            loader: 'handlebars-loader'
        },
        {
            test: /\.css$/, // use css-loader and style-loader in pipeline on all css files (order of application is right to left)
            use:  ['style-loader', 'css-loader'],
        }
    ]
}

// ......

// passing additional options to loaders
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
            // enforce: "pre/post" can be used to change the order of loader execution
          }
        ]
      }
    ]
  }
```

Some of commonly used loaders:
* css-loader for creating modules from css
* style-loader for injecting css to the page
* babel-loader for transpiling JS code
* source-map-loader for loading source maps

### Plugins

Plugins can perform a wide range of task, from bundle minification and optimization to handling environment variables and extracting common chunks. Besides built-in, there are many third party plugins installable via npm. Plugins are required in the webpack config and passed to plugins array as instances created by `new` operator (can take parameters in constructor functions). Multiple instaces of a same plugin can be used.

```js
const webpack = require('webpack'); // access built-in plugins
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //installed via npm

// ...

plugins: [
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new UglifyJSPlugin()
]
```

Some of commonly used plugins are:
* ProvidePlugin for automatically loading modules
* UglifyJS for minifying code
* HtmlwebpackPlugin for using HTML templates
* CommonsChunkPlugin for extracting shared modules in common chunk
* HotModuleReplacementPlugin for enabling HMR


## Code spliting

## Hot Module Replacement

## Development vs Production environment

### References: