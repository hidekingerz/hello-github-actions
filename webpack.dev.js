const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: 'public',
    },
    https: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      userEnv$: path.resolve(__dirname, `.env/dev.js`),
    },
  },
});
