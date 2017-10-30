# Introduction to npm and webpack

## Node.js and npm

* Node is a JavaScript runtime built on top Chrome's V8 engine.
* Makes it possible to write server-side JavaScript.
* It enabled developers to create and publish various libraries and development tools for automating common tasks in form of JavaScript packages (or modules).
* Development of Node packages ecosystem has had a great impact on frontend development as well, producing a whole development and tooling platform.
* npm (Node package manager) is used to manage Node packages.
* [Get Node.js](https://nodejs.org/en/download/)
* [Browse npm Registry](https://www.npmjs.com/)

### Basic config

```node
node --version // Get the version of Node.js
npm --version // Get the version of npm
npm config list // Get basic npm config data
npm config get prefix // Get npm config item
npm config set prefix=path // Set npm config item

node // Start Node.js REPL
```

### Global packages

```node
npm install -g figlet-cli // Install a package globally (figlet-cli in this case)
npm list --global // List all globally installed packages with their dependency tree
npm list --global --depth=0 // List all global packages, no dependencies
npm uninstall -g figlet-cli // Uninstall global package (figlet-cli in this case)
```

### package.json

The [package.json](https://docs.npmjs.com/files/package.json) file describes a npm module and its dependencies.

```node
npm init // initialize a npm module and create package.json file
```

Example *package.json* file:

```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^3.3.7",
    "jquery": "^3.2.1"
  },
  "devDependencies": {
    "babel": "^6.23.0",
    "webpack": "^3.8.1"
  }
}
```

[Using a package.json file.](https://docs.npmjs.com/getting-started/using-a-package.json)

### Local packages

```node
npm install --save jquery // installs a package and declares dependency in package.json
```

### package-lock.json

```node
// TODO
```