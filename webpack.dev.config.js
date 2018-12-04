const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        'main': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname,'./dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('dist', {} ),
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./dll/vendor-manifest.json')
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new AddAssetHtmlPlugin({
            filepath: path.resolve('./dll/vendor.dll.js')
        })
    ],

    devServer: {
        port: 8080,
        contentBase: './dist',
        historyApiFallback: true
    }
}