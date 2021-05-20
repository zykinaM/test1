
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },

	resolve: {
		extensions: [ ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
				test: /\.(ts|tsx)?$/,
				use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true,
    port: 3000
  },
};