var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractScss = new ExtractTextPlugin({
    filename: 'css/styles.css',
    allChunks: true
});
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlCriticalPlugin = require("html-critical-webpack-plugin");

module.exports = {
    entry: {
        app: './assets/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'bundle')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [
                path.resolve(__dirname, 'node_modules'),
                path.resolve(__dirname, 'libs'),
                path.resolve(__dirname, 'assets/masterslider')
            ],
            use: [{
                loader: 'jshint-loader',
                options: {
                    esversion: 6
                }
            }]
        }, {
            test: /\.scss/,
            use: extractScss.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true || {
                            autoprefixer: true
                        }
                    }
                }, {
                    loader: 'sass-loader'
                }],
                publicPath: '../',
                fallback: 'style-loader'
            })
        }, {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: ['img:src', 'img:data-src', 'img:data-srcset', 'link:href'],
                    removeComments: false,
                    collapseWhitespace: false
                }
            }
        }, {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 4096,
                name: 'fonts/[name].[ext]'
            }
        }, {
            test: /\.(png|jpe?g|gif)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 4096,
                        name: 'images/[name].[ext]'
                    }
                }, {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true
                    },
                }
            ]
        }]
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['bundle']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'features.html',
        //     template: 'features.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'bank-link.html',
        //     template: 'bank-link.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'grids.html',
        //     template: 'grids.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'news-details.html',
        //     template: 'news-details.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'promotion-details.html',
        //     template: 'promotion-details.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'faqs.html',
        //     template: 'faqs.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'privacy.html',
        //     template: 'privacy.html'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'terms.html',
        //     template: 'terms.html'
        // }),
        new CopyWebpackPlugin([{
            from: 'libs/html5shiv/dist/html5shiv.js',
            to: 'js/html5shiv.js'
        }, {
            from: 'libs/respond/dest/respond.min.js',
            to: 'js/respond.js'
        }]),
        extractScss,
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        }, {
            'AOS': 'AOS',
            'window.AOS': 'AOS'
        }, {
            'Headroom': 'Headroom',
            'window.Headroom': 'Headroom'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            async: true,
            children: true,
            minChunks: Infinity
        }),
        // new HtmlCriticalPlugin({
        //     base: path.resolve(__dirname, 'bundle'),
        //     src: 'index.html',
        //     dest: 'index.html',
        //     inline: true,
        //     minify: true,
        //     extract: true,
        //     penthouse: {
        //         blockJSRequests: false,
        //     }
        // }),
        // new HtmlCriticalPlugin({
        //     base: path.resolve(__dirname, 'bundle'),
        //     src: 'features.html',
        //     dest: 'features.html',
        //     inline: true,
        //     minify: true,
        //     extract: true,
        //     penthouse: {
        //         blockJSRequests: false,
        //     }
        // })
    ]
};
