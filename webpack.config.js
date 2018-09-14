const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}