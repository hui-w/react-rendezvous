var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader', 'eslint-loader'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css$/,
      loader: "style!css"
    }]
  }
}