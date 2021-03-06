const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3010;

const config = {
  entry: { app: "./src/app.js" },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    host: "0.0.0.0",
    disableHostCheck: true,
    port: port
  },
  devtool: "eval-source-map",
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      actions: path.resolve(__dirname, "src/actions/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/html/index.html"
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)?$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};

module.exports = config;
