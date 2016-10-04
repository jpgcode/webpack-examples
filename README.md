# Learn Webpack by example

##What is webpack?
Is a Module bundler, very similar of Browserify. But webpack needs a little more configuration.

https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.n13n1ojw6

##How it works?

- Install web pack globally to have the command line tool available, then install in your project locally, and save in the package.json <br />
- You need to create a web pack.config.json where all the configuration will be added.

##How you can use ES6 in your web pack config file?

By default webpack runs over node.js, you can use a few ES6 features, however to use modules you need to run babel for it. In order to make it work, you can add the babel-register module and rename the web pack file to webpack.config.babel.js.

This is kind of a hack for now and I do not recommend it. It will be supported without babel in future versions.

##What is the difference between 1.0 and 2.0?
Right now the 2.0 is being developed there are a few improvements including supporting ES6 modules natively.

##What is a module system?
A module system is a way to have your JS split in different files and have the scope of them private. You can of course access them using import/export. 

Check module history based in this link:
https://www.sitepoint.com/understanding-es6-modules-via-their-history/

Closures are not needed anymore for privacy, each module has its own scope and you can export what you want.

##Webpack config

###entry
Web pack is a module bundler this means that it needs a file where it will start, then you can import the files as needed using it.

You can have 1 or more entry points, they can be added as an array, and they will be merged at the end.

###output
The output is the path and file that it will be compiled with all your code, that comes from your modules.

###devtool
You have several options here, but the most used are: <br />
- `sourcemap` it outputs the original source code. and it outputs a sourcemap file. It is recomended for production. <br />
- `cheap-eval-source-map` it's slower but it outputs transformed code, it is recommended for development <br / >
- `eval` it's faster Each module is executed with eval and //@ sourceURL.

[https://webpack.github.io/docs/configuration.html#devtool](https://webpack.github.io/docs/configuration.html#devtool)

##How can I use it for compiling my JS and use babel?

1. You need to install babel loader and babel core modules using:

`npm i -D babel-loader babel-core`


2. Then you can define them in your webpack.config.js 
```js
module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```
3. Babel 6.0+ do not ship with any syntax transformations by default. So you need to explicitly tell it what you want to use.

`npm i  -D babel-preset-es2015`

4. To configure the transformations you just installed you need a **.babelrc** file with:
```js
{
  "presets": ["es2015"]
}
```

or… you can pass a query node in the **webpack.config.js** with the presets added.

[http://babeljs.io/docs/setup/#installation](http://babeljs.io/docs/setup/#installation)

##What are the babel presets?
You can use babel to transpile the new features using presets, they are added as years, for now the es2015 is the bigger one. 

You can use babel to transpile JSX to standard JS as well. This can be done with babel react-preset

##What are the stages?
Any transforms in stage-x presets are changes to the language that haven’t been approved to be part of a release of Javascript (such as ES6/ES2015).

You can add the experimental features as well if you want to experiment with those.

[https://babeljs.io/docs/plugins/#presets](https://babeljs.io/docs/plugins/#presets)

##webpack dev server
Web pack provide a static dev server with a node.js server, it can be added in iframe mode or inline mode.

It can be configured in the webpack.config.js or using command line flags.

It also provide a hot module replacement which reload the JS when there are changes without reloading the browser.
[https://webpack.github.io/docs/webpack-dev-server.html](https://webpack.github.io/docs/webpack-dev-server.html)

##Webpack Loaders
Loaders allow you to preprocess files as you require() or “load” them. Loaders are kind of like “tasks” are in other build tools, and provide a powerful way to handle frontend build steps. Loaders can transform files from a different language like, CoffeeScript to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() css files right in your JavaScript!

###Preloaders
They will run first in you build process. You can use them for tasks like linting you JS before its transpiled.

###Loaders
The normal compiling process, you can transpile here.

###PostLoaders
You can use things like post-processors in here.

###Using css as modules
The main problem with CSS is that it's always global. On big projects we get issues when there are some classes conflicting with others. We can take advantage of webpack to import our CSS files as needed and do not have them all in the <head> of the site.

[http://glenmaddern.com/articles/css-modules](http://glenmaddern.com/articles/css-modules)
[https://www.bensmithett.com/smarter-css-builds-with-webpack/](https://www.bensmithett.com/smarter-css-builds-with-webpack/)

###Using sass with webpack
You can use sass or any other CSS pre processor with Webpack very easily, remember that this is a bit different since we are using a module system, webpack allows us to add the CSS dinamycally using our module system as well.

[https://github.com/jtangelder/sass-loader](https://github.com/jtangelder/sass-loader)
[https://shellmonger.com/2016/01/19/adding-sass-support-to-webpack/](https://shellmonger.com/2016/01/19/adding-sass-support-to-webpack/)

Make sure you install the 4 modules required:

**sass-loader**
converts scss files to css files.

**node-sass**
It is the module that sass uses to compile.

**css-loader**
loads up the css.

**style-loader**
convert the css into inline stylesheets.


##Webpack Plugins
You can extend webpack functionality using plugins.