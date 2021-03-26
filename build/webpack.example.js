const path = require('path')
// const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackBaseConfig = require('./webpack.base')
const config = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, '../example/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../example/index.html'),
        }),
    ],
    devServer: {
        compress: true,
        port: 9000,
    },
})

module.exports = config
