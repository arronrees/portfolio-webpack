const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackSkipAssetsPlugin = require('html-webpack-skip-assets-plugin')
  .HtmlWebpackSkipAssetsPlugin;

module.exports = {
  entry: {
    main: './src/js/index.js',
    home: './src/js/pages/home.js',
    work: './src/js/pages/work.js',
    about: './src/js/pages/about.js',
    contact: './src/js/pages/contact.js',
  },
  plugins: [
    new HtmlWebpackSkipAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/templates/indexTemplate.html',
      excludeAssets: [/work.*.js/, /about.*.js/, /contact.*.js/],
    }),
    new HtmlWebpackPlugin({
      filename: 'work.html',
      template: './src/templates/workTemplate.html',
      excludeAssets: [/home.*.js/, /about.*.js/, /contact.*.js/],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/templates/aboutTemplate.html',
      excludeAssets: [/home.*.js/, /work.*.js/, /contact.*.js/],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/templates/contactTemplate.html',
      excludeAssets: [/home.*.js/, /work.*.js/, /about.*.js/],
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
        test: /\.(svg|png|jpg|gif)$/,
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
