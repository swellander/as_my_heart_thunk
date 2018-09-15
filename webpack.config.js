const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'sourcemaps',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}