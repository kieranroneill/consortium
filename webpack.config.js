'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const appPath = path.join(__dirname, 'app');

module.exports = {
    devtool: 'source-map',
    entry: [
        path.resolve(appPath, 'src', 'index.jsx'),
    ],
    output: {
        path: path.resolve(appPath, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(appPath, 'src', 'assets'),
        //         to: path.resolve(appPath, 'dist', 'assets')
        //     }
        // ]),
        // new FaviconsWebpackPlugin({
        //     logo: path.resolve(appPath, 'src', 'favicon', 'favicon.png'),
        //     title: 'Consortium'
        // }),
        new ExtractTextPlugin('styles.css'),
        new HtmlwebpackPlugin({
            title: 'Consortium',
            minify: {}
        })
    ]
};
