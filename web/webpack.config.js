var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './index.web.js',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['react-native'],
        },
      },
      {
        test: /\.css$/,
        exclude: /^node_modules$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.ttf$/,
        loader: 'url-loader', // or directly file-loader
        include: path.resolve(
          __dirname,
          '../node_modules/react-native-vector-icons'
        ),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.web.js'],
    alias: {
      'react-native': 'react-native-web',
      react: 'react',
    },
  },
  output: {
    path: __dirname + '/web/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './web/dist',
  },
};
