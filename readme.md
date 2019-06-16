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