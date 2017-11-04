# Introduction to npm

## Node.js and npm

* Node is a JavaScript runtime built on top Chrome's V8 engine.
* Makes it possible to write server-side JavaScript.
* It enables developers to create and publish various libraries and development tools for automating common tasks in form of JavaScript packages (or modules).
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
npm search // Search npm package registry

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

The [package.json](https://docs.npmjs.com/files/package.json) file describes a project (a npm module) and its dependencies. This file must be checked into version control. Package versioning in npm follows [semver](https://docs.npmjs.com/getting-started/semantic-versioning) standard.

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

Managing local project packages is done from project root directory where *package.json* should be stored. Local packages are stored in *node_modules* directory which is usually ignored by the version control.

```node
npm install --save jquery // install a package in node_modules and add dependency in package.json
npm install --save-dev webpack // install a package in node_modules and add devDependency in package.json
npm install --save bootstrap@3.3.5 // install a specific version of package in node_modules and add dependency in package.json
npm install --no-save jquery // install a package in node_modules without updating package.json
npm uninstall --save jquery // uninstall local package and update package.json

npm outdated // display data about outdated packages
npm update --save jquery // update single package
npm update // update all packages following semver declarations in package.json

npm list // list all packages for a project (--depth flag can be used)
npm prune // clear dependencies from node_modules that are not present in package.json

npm cache verify // verify npm package cache

npm install // running it on a fresh clone of the project will fetch all dependencies declared in package.json
```

From version 5, flags ```--save``` and ```--save-dev``` can be ommited, package.json will be automatically updated.

### package-lock.json

In version 5, npm introduced *package-lock.json* file to ensure consistent dependency graph across various machines. It is automatically generated and updated whenever *package.json* or *node_modules* gets modified. It has to be checked into version control but it shouldn't be changed manually. 

By having *package-lock.json* file present, the state of dependecies will not depend on the time when ```npm install``` was run and will be consistent and reproducible.

```node
{
  "name": "todo",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "bootstrap": {
      "version": "3.3.7",
      "resolved": "https://registry.npmjs.org/bootstrap/-/bootstrap-3.3.7.tgz",
      "integrity": "sha1-WjiTlFSfIzMIdaOxUGVldPip63E="
    },
    "jquery": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/jquery/-/jquery-3.2.1.tgz",
      "integrity": "sha1-XE2d5lKvbNCncBVKYxu6ErAVx4c="
    }
  }
}
```

### GitHub

GitHub repositories can also be used as a source of npm packages. The repository needs to have a valid *package.json* file.

```node
npm install --save git+https://git@github.com/jxson/string-capitalize.git // install a GitHub repository as dependency
// add #branchname to install specific branch or #commithash for a specific commit
```` 

### Linking

npm provides the ability to link local packages to the global machine registry and then load them as a dependency in another local module. Any changes in the linked dependency will automatically reflect on the module which is using it. This is potentially useful when dependency is developed locally and due to frequent changes a faster workflow is needed.

```node
// navigate to the root of the project which needs to be linked to global machine node_modules
npm link // creates a link in a global node_modules folder

// navigate to the root of the project which needs a previously linked module as a dependency
npm link module-name // puts the linked module in local node_modules
npm unlink module-name // removes the linked module from local node_modules

// navigate to the root of the project which needs to be unlinked from global machine node_modules
npm unlink // removes the link from a global node_modules folder
```

### Aliases

```node
npm i jquery // install local package
npm i -g jquery // install global package
npm un jquery // uninstall local package
npm up // update packages
npm t // run tests
npm ls // list installed modules
npm ll // print additional package information while listing modules
npm la // print additional package information while listing modules
```

### yarn

* Alternative package manager developed by Facebook.
* Same workflow as npm.
* Uses *package.json* file and is fully compatible with npm registry.
* Has its lock system (yarn.lock file) for consistent dependancy management.
* Offers some security and performance improvements (like parallel installing, offline mode, etc).

[Get yarn](https://yarnpkg.com/en/docs/getting-started)
[Migrating from npm](https://yarnpkg.com/en/docs/migrating-from-npm)