# Notes

## webpack

1. Changed app.js and index.html, single entry, output, HtmlwebpackPlugin, ProvidePlugin
* `wimport`
* add entry
* `wout`, `wload`, `wplugininit` 
* `"build": "webpack",`
* `"prebuild": "del-cli dist -f"`

2. Introduce code spliting, CommonsChunkPlugin
* `wmentry`, `wchunks`

3. Introduce concept of environment and source maps, UglifyJS, rewrite config as function
```js
module.exports = (env = {}) => {
    // imports
    const isProd = env.prod === true;
    let plugins = [...]
    // plugins prod check wpluginprod
    let config = {...}
};
```
* `"build": "webpack --env.prod",`
* `wpluginprod`
* `wsmload`, `wdevtool`
* `"dev": "webpack",`
* `"server": "http-server ./dist -p 9081",`
* `"prod": "npm run build && npm run server",`
```js
// bellow devtool
watchOptions: {
    ignored: /node_modules/
},
```
* `"watch": "webpack --watch"`

4. Introduce webpack-dev-server and HMR
* `wdevserver` dev server serves files from memory
* `"dev": "webpack-dev-server",`
* introduce HMR add `hot: true` to `devServer`
* add `wpluginhmr` if not prod