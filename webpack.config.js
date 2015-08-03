var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "."],
        extensions: ["", ".js", ".min.js", ".scss"]
    },
    entry: {
        app: ['entry.js',"webpack/hot/dev-server"]
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
        watch: true,
        hot: true
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
                loaders: ["react-hot","babel-loader?optional[]=runtime"],
                exclude: [
                    /node_modules/,
                    /libs/,
                    /vendor/
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin("styles.css?[hash]")
    ]
};