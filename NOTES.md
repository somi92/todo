# Introduction to npm and webpack

## Node.js and npm

* Node is a JavaScript runtime built on top Chrome's V8 engine.
* Makes it possible to write server-side JavaScript.
* It enabled developers to create and publish various libraries and development tools for automating common tasks in form of JavaScript packages (or modules).
* Development of Node packages ecosystem has had a great impact on frontend development as well, producing a whole development and tooling platform.
* npm (Node package manager) is used to manage Node packages.
* [Get Node.js](https://nodejs.org/en/download/)

### Basic config

```js
node --version // Get the version of Node.js
node // Start Node.js REPL
npm --version // Get the version of npm
npm config list // Get basic config data
npm config get prefix // Get config item
npm config set prefix=path // Set config item
```

### Global packages

```js
npm install -g figlet-cli // Install a package globally (figlet-cli in this case)
npm list --global // List all global packages with all dependencies
npm list --global --depth=0 // List all global packages, no dependencies
npm uninstall -g figlet-cli // Uninstall global package (figlet-cli in this case)
```

### Local packages

```js
    // TODO
```