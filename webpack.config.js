const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.*\.js$/,
        exclude: `${__dirname}/node_modules`,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    alias: {
      components: `${__dirname}/src/components`
    }
  }
};
