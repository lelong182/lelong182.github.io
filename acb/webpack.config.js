var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanCSSPlugin = require('less-plugin-clean-css');
var AutoPrefixPlugin = require('less-plugin-autoprefix');
var extractLess = new ExtractTextPlugin({
  filename: 'styles.css'
});
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    app: './assets/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'bundle')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: 'jshint-loader'
    }, {
      test: /\.less$/,
      use: extractLess.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'less-loader',
          options: {
            plugins: [
              new CleanCSSPlugin({
                advanced: true
              }),
              new AutoPrefixPlugin()
            ]
          }
        }],
        fallback: 'style-loader'
      })
    },
    //   {
    //   test: /\.(html)$/,
    //   use: {
    //     loader: 'html-loader',
    //     options: {
    //       minimize: true,
    //       removeComments: true,
    //       collapseWhitespace: true
    //     }
    //   }
    // },
      {
      test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
      loader: 'file-loader',
      options: {
        name: 'fonts/[hash].[ext]'
      }
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 8192,
        name: 'images/[hash].[ext]'
      }
    }]
  },
  plugins: [
    new UglifyJSPlugin(),
    new CleanWebpackPlugin(['bundle']),
    new HtmlWebpackPlugin({
      title: 'ACB',
      template: 'index.html'
    }),
    new CopyWebpackPlugin([{
      from: 'libs/html5shiv/dist/html5shiv.js',
      to: 'js/html5shiv.js'
    }, {
      from: 'libs/respond/dest/respond.min.js',
      to: 'js/respond.js'
    }, {
      from: 'libs/modernizer/modernizr.js',
      to: 'js/modernizr.js'
    }, {
      from: 'libs/jquery/dist/jquery.min.js',
      to: 'js/jquery.js'
    }, {
      from: 'libs/gsap/src/minified/TweenMax.min.js',
      to: 'js/TweenMax.js'
    }, {
      from: 'libs/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      to: 'js/ScrollMagic.js'
    }, {
      from: 'libs/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
      to: 'js/animation.gsap.js'
    }, {
      from: 'libs/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
      to: 'js/debug.addIndicators.js'
    }]),
    extractLess,
    // new webpack.ProvidePlugin({
    //   '$': 'jquery',
    //   'jQuery': 'jquery',
    //   'window.jQuery': 'jquery'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendor",
    //   minChunks: Infinity
    // }),
    // new FaviconsWebpackPlugin({
    //   logo: path.resolve(__dirname, 'assets/images/logo.png'),
    //   prefix: 'favicons/',
    //   title: 'ACB',
    //   icons: {
    //     appleStartup: false,
    //     firefox: false
    //   }
    // })
  ]
};