const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackSkipAssetsPlugin = require('html-webpack-skip-assets-plugin')
  .HtmlWebpackSkipAssetsPlugin;

module.exports = {
  entry: {
    main: './src/js/index.js',
    home: './src/js/pages/home.js',
  },
  plugins: [
    new HtmlWebpackSkipAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/templates/indexTemplate.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'work.html',
      template: './src/templates/workTemplate.html',
      // excludeAssets: [/main.*.js/],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/templates/aboutTemplate.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/templates/contactTemplate.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jps|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            publicPath: './images',
            outputPath: './images',
            esModule: false,
          },
        },
      },
    ],
  },
};
