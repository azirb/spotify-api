'use strict'

let path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    mode: 'development',
    entry: './index.ts',
    watch: true,
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: '[name].[hash].js',
        path: __dirname + '/dist',
        clean: true,
        library: 'spotify-api',
        libraryExport: 'default',
        libraryTarget: "umd",
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: "source-map",
    devServer: {
        compress: false,
        port: 5050,
        open: true,
    },
    plugins: [new ESLintPlugin({extensions: ['ts']})],
};