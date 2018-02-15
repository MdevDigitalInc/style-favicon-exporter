// [ Moreira Development ] -----------
// SASS Boilerplate - Webpack.config
//
// Created on 27/10/2017 - LUM
//

const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');
const WriteFilePlugin   = require('write-file-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {

  entry: './index.js',
  resolve: {
    alias: {
      'styles': resolve(__dirname, 'styles'),
      'img': resolve(__dirname, 'img')
    },
    modules: ['node_modules', 'shared']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'build.js'
  },

  // Modules
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "to-string!css-loader?minimize&-autoprefixer!postcss-loader!sass-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader?minimize&-autoprefixer!postcss-loader!sass-loader',
              options: { url: false }
            },
            { loader: 'sass-loader'},
            { loader: 'postcss-loader'}
          ]
        })
      }

    ]
  },

  //plugins
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ]  } }),
    new ExtractTextPlugin("/styles/style.css"),
    new StyleLintPlugin({
      syntax: 'scss',
      configFile: './.stylelintrc'
    }),
    new FaviconsWebpackPlugin({
      logo: 'img/favicon.png',
      prefix: 'icons/',
      emitStats: false,
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'HTML 5 Boilerplate',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new CopyWebpackPlugin([
      { from: 'page-header', to: __dirname + '/dist/html' },
    ])

  ]
};

module.exports = config;
