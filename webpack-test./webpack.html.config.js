var webpack = require('webpack');
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
    entry: {
        build:__dirname + "/app/index.js",
        name2:__dirname + "/app/another.js"
    },
    output: {
        path: __dirname+"/build/",
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
                loaders: ["style-loader","css-loader"]
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
        }),
        new htmlWebpackPlugin({
            title:"测试用的",
            filename:"name2.html",
            chunks:["name2.js"]
        })
    ]

};