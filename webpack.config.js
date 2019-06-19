// Path is a basic node function.
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = env => {

  console.log( env );

  return {
    mode: env.mode,
    entry: {
      main: './src/index.js',
      style: './src/sass/index.scss'
    },
    module: {
        rules: [{
          test: /\.scss$/,
          use: [
              // 'style-loader', 'css-loader', 'sass-loader' reads from right to left.
              MiniCssExtractPlugin.loader, // 3. output styles in file.
              'css-loader', // 2. translates CSS into CommonJS
              {
                loader: 'sass-loader', // 1. compiles Sass to CSS, using Node Sass by default
                query: {
                  outputStyle:
                    'production' === env.mode ? 'compact' : 'expanded',
                },
              }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css", // exports a file called style.css.
        })
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
    }
  };
};