var webpack = require('webpack');
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
    entry: {
        build:__dirname + "/es6/a.js"
    },
    output: {
        path: __dirname+"/es6_build/",
        filename: "[name].js",
        publicPath: ""
    },
    /*devServer: {
        inline: true,
        contentBase: __dirname + "",
        port: 3000
    },*/
    module: {
        rules: [
            { 
                test: /\.css$/,
                loaders: ["style-loader","css-loader"],
                exclude:"/node_modules/"
            },
            { 
                test: /\.js$/,
                loaders: ["babel-loader"],
                exclude:"/node_modules/"
            }
        ]
    },
    resolve:{
        extensions:[".js",".css","jsx"]               //自动补全后缀名
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"自动生成html",
            chunks:["build"]
        })
    ]

};