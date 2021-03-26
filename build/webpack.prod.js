const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')

process.env.NODE_ENV = 'production'

const config = merge(webpackBaseConfig, {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/',
        filename: 'index.js',
        library: 'boss-wm-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue',
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
    ],
})

module.exports = config
