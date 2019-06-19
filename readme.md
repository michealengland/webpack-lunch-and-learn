# Webpack Lunch & Learn
This project is a simple tutorial of setting up your own webpack.
Each branch is a step and will go in order.

** Prerequisites **
- Node must installed. You may run into issues if you're running an older verison.

## Step 01, Installation
This guide will follow the steps outlined in https://webpack.js.org/guides/installation.

1. The very first step on our journey is to create a NPM project. You can learn more about this process here https://docs.npmjs.com/cli/init.
Run `npm init` and answer the questions accoringly.

2. First we go to out project source folder and install latest version of webpack locally.
Run `npm install --save-dev webpack`.

3. Next, we'll need to install webpack-cli which is required for version 4 and higher.
Run `npm install --save-dev webpack-cli`.

4. In the terminal we can use the default test script to see if everything is working.
Run `npm test`.

5. Next we'll create some directories to plan out our build structure. This includes src, dist, and build.

## Step 02, Configuration
While it isn't required to use a webpack.config file, we're going to use one in this demo.

1. Create a file in the root directory and save it as `webpack.config.js`. Webpack will automatically look for this file. This file will tell webpack where to look for files and what to do with them. For this demo we'll be using the simple configuration that can be found here [https://webpack.js.org/concepts/configuration/][https://webpack.js.org/concepts/configuration/].

2. Next we'll setup scripts so that we can use 'npm run dev' and make webpack run our changes. Also, we must set the mode to development or production, for this example we'll use production. If you do not set a mode a warning error will be displayed.

3. Finally we'll run `npm run dev` and webpack will generate our bundle.js file in the `dist` folder. This will also display a summary of the bundles created along with their size.

## Step 03, Loaders
webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript. You can easily write your own loaders using Node.js. Read the full documentation [https://webpack.js.org/loaders/][https://webpack.js.org/loaders/].

For this example we will use Sass as a way to demo what a loader can do.

1. First, we will run `npm install sass-loader node-sass webpack --save-dev` from [https://github.com/webpack-contrib/sass-loader][https://github.com/webpack-contrib/sass-loader] to install sass-loader and node-sass.

2. Next, we need to install a few other loaders for our plugin to work properly. Run `npm install style-loader css-loader --save-dev` in the terminal to chain the sass-loader with the css-loader and the style-loader to immediately apply all styles to the DOM.

3. Now that our loaders are setup, it's time to add them in our `webpack.config.js.` file. I copy pasted the example module provided in [https://github.com/webpack-contrib/sass-loader][https://github.com/webpack-contrib/sass-loader] inside of of module.exports. Also, I included some notes of how this works.

4. Last we will create a directory called `sass` with an `index.scss` file. Then we will point our entry to the sass file by doing the following `entry: './src/sass/index.scss'`.

5. We can verify that everything is working by creating some basic scss styling and then running `npm run dev`.