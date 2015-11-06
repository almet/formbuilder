var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./scripts/index.js"
  ],
  output: {
    path: path.join(__dirname, "scripts"),
    filename: "bundle.js",
    publicPath: "scripts/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ["", ".js", ".jsx", ".less"]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ["react-hot", "babel"], include: path.join(__dirname, "scripts"),},
      { test: /\.less$/, loader: 'style!css!less'},
      // Font files
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
