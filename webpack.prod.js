const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  resolve: {
    alias: {
      userEnv$: path.resolve(__dirname, `.env/prd.js`)
    }
  }
});