'use strict';

const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        path.resolve(ROOT_PATH, 'app/src/index.jsx'),
    ],
    output: {
        path: path.resolve(ROOT_PATH, 'app/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Consortium',
            minify: {}
        })
    ]
};
