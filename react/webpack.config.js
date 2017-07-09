/**
 * Created by Lilian on 2017/6/26.
 */
var webpack = require('webpack');
module.exports = {
    entry: __dirname + "/main.js",
    output: {
        path: __dirname ,
        filename: "./html/index2.html",
        publicPath: ""
    },
    devServer: {
        inline: true,
        contentBase: __dirname + "/html/index2.html",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
               /* query: {presets: ['react', 'latest']}*/
            },
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                loader:'babel-loader?presets[]=react,presets[]=es2015'
            },
            {
                test: /\.css$/,
                loaders: ["style-loader","css-loader"]
            }

        ]
    }

};