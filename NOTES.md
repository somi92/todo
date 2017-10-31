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

The [package.json](https://docs.npmjs.com/files/package.json) file describes a project (a npm module) and its dependencies. This file must be checked into version control. 

```node
npm init // initialize a npm module and create package.json file
```

Example *package.json* file:

```node
{
  "name": "project", // mandatory
  "version": "1.0.0", //mandatory
  "description": "",
  "main": "index.js", // entry point
  "scripts": { // scripts that can be run with npm command
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": { // declaration of runtime dependencies
    "bootstrap": "^3.3.7",
    "jquery": "^3.2.1"
  },
  "devDependencies": { // declaration of development dependencies
    "babel": "^6.23.0",
    "webpack": "^3.8.1"
  }
}
```

[Using a package.json file.](https://docs.npmjs.com/getting-started/using-a-package.json)

### Local packages

Managing local project packages is done from project root directory in which the *package.json* should be stored. Local packages are stored in *node_modules* directory which is usually ignored by the version control.

```node
npm install --save jquery // install a package in node_modules and add dependency in package.json
npm install --save-dev webpack // install a package in node_modules and add devDependency in package.json
npm install --save bootstrap@3.3.7 // install a specific version of package in node_modules and add dependency in package.json
```
Local package versioning in *package.json* is described by [semver](https://docs.npmjs.com/getting-started/semantic-versioning) standard.

```node
npm install // running it on a fresh clone of the project will fetch all dependencies
```

### package-lock.json

```node
// TODO
```