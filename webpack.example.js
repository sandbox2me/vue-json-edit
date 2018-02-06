const webpack = require('webpack');
const config = require('./webpack.base.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.entry = './docs/main.js';
config.output = {
  path: path.resolve(__dirname, './docs/dist/'),
  publicPath: '',
  filename: '[name]_[hash].js',
};

config.devtool = 'eval';

config.plugins = [
  new HtmlWebpackPlugin({
    // filename: './docs/index.html',
    template: './docs/index.html',
    inject: true,
  }),
];

config.resolve: {
  alias: {
    vue: 'vue/dist/vue.js'
  }
}
// config.resolve = {
//   alias: {
//     vue$: 'vue/dist/vue.esm.js',
//   },
// };

module.exports = config;
