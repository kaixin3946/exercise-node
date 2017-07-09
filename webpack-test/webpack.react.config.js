var webpack = require('webpack');
var htmlWebpackPlugin=require("html-webpack-plugin");
var path=require("path");
module.exports = {
    entry: {
        build:__dirname + "/react/index.js"
    },
    output: {
        path: __dirname+"/react_build/",
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
                test: /\.jsx?$/,
                loaders: ["react-hot-loader","babel-loader?presets[]=es2015&presets[]=react"],
                /*query:["es2015","react"],*/
                exclude:"/node_modules/",
                include:path.resolve(__dirname,"react")
            }
        ]
    },
    resolve:{
        extensions:[".js",".css","jsx"]               //自动补全后缀名
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"react生成的html",
            filename:"index.html",                 //如果不是index则会找一个默认的index显示
            chunks:["build"]
        })
    ]

};