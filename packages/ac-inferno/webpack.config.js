const webpack = require('webpack');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR = ['inferno', 'inferno-component', 'inferno-compat', 'inferno-create-element'];

module.exports = {
  entry: {
    main: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      join(__dirname, 'starter/start.js')
    ],
    vendor: VENDOR
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    publicPath: '/',
    noInfo: true,
    historyApiFallback: true
  },
  stats: {
    chunks: true,
    chunkModules: true,
    colors: true,
    errors: true,
    errorDetails: true,
    timings: true,
    version: true,
    warnings: true
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /__tests__/, /docs/, /coverage/],
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      appMountId: 'app'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
