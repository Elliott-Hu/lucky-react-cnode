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
      loaders: ["babel-loader"]
    }]
  },
}

module.exports = config;