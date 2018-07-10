const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const config = {
  mode: "development",
  devServer: {
    port: "1688",
    host: "192.168.9.225",
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  entry: {
    bundle: [
      "./client/app.js"
    ],
  },
  output: {
    filename: "[name].js",
    publicPath: "http://192.168.9.225:1688/dist"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    }, {
      test: /\.scss|\.sass|\.css$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: loader => [
              require("autoprefixer"),
              require("postcss-px2rem")({ remUnit: 75 })
            ]
          }
        },
        "sass-loader",
        {
          loader: "sass-resources-loader",
          options: {
            resources: [
              path.join(__dirname, "assets/scss/common.scss"),
            ]
          }
        }
      ]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    })
  ]
}

module.exports = config;