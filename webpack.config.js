var path = require('path');
module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "."],
        extensions: ["", ".js", ".min.js"]
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
    }
};