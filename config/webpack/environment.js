const { environment, config } = require('@rails/webpacker')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const { resolve } = require('path')

console.log(config)

environment.plugins.append('html',     
new HtmlWebpackPlugin({
  inject: 'body',
  alwaysWriteToDisk: true,
  filename: 'index.html',
  template: resolve('public', 'index.html')
}))

environment.plugins.append('hardisk', new HtmlWebpackHarddiskPlugin())

module.exports = environment
