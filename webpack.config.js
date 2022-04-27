'use strict'

let path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    context: __dirname + '/src',
    mode: 'development',
    entry: './index.ts',
    module: {
        rules: [
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/testing',
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
        static: {
            directory: path.join(__dirname, 'testing'),
        },
        devMiddleware: {
            index: true,
            mimeTypes: {phtml: 'text/html'},
            publicPath: '/publicPathForDevServe',
            serverSideRender: true,
            writeToDisk: true,
        },
        hot: false,
        compress: false,
        port: 5050,
        open: ['/index.html'],
        onListening: function (devServer) {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            const port = devServer.server.address().port;
            console.log('Listening on port:', port);
        },
    },
    plugins: [new ESLintPlugin({extensions: ['ts']})],
};