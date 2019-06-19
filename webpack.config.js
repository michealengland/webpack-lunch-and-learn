// Path is a basic node function.
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/sass/index.scss', // Looks for the index.scss.
  module: {
      rules: [{
          test: /\.scss$/,
          use: [
              // 'style-loader', 'css-loader', 'sass-loader' gets read from right to left.
              'style-loader', // 3. creates style nodes from JS strings
              'css-loader', // 2. translates CSS into CommonJS
              'sass-loader' // 1. compiles Sass to CSS, using Node Sass by default
          ]
      }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};