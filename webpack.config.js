const path = require('path');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        server: './app.js'
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: 'dist.js'
    },
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    mode: 'production',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:[
                    /node_modules/,
                    /public/,
                    /views/
                ],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
