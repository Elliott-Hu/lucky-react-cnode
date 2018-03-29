const fs = require("fs");
const path = require("path");

const config = {
  mode: "development",
  devServer: {
    port: "1688",
    host: "192.168.0.103",
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  entry: {
    bundle: [
      "./client/app.js"
    ]
  },
  output: {
    filename: "[name].js",
    publicPath: "http://192.168.0.103:1688/dist"
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
}

module.exports = config;