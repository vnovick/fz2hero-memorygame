var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "."],
        extensions: ["", ".js", ".min.js", ".scss"]
    },
    entry: {
        app: ['entry.js']
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: ".",
        inline: true,
        watch: true
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("css-loader?sourceMap!sass-loader?sourceMap&sourceMapContents")
            },
            {
                test: /\.(ttf|eot|woff|svg|jpe?g|gif|png)[\?]?.*$/,
                loader: 'url',
                query: {
                    name: '[name][hash].[ext]',
                    limit: 10000
                }
            },
            {
                test: /\.js$/,
                loaders: ["babel-loader?optional[]=runtime"],
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css?[hash]")
    ]
};