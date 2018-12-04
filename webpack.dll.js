const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.json', '.scss', '.css'],
        modules: [__dirname, 'node_modules']
    },

    entry: {
        "vendor": [
            'react',
            'react-dom',
            'redux'
        ]
    },

    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './dll'),
        library: '[name]'
    },

    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: './dll/[name]-manifest.json'
        })
    ]
}