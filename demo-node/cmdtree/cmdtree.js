var fs = require("fs");
var path = require("path");
require("./proto");

var target;
target = path.join(__dirname, process.argv[2] || './');

findFile(target,0);

//制表符┣━┣┗┃
function findFile(target,count) {
    var dirs = [];
    var files = [];
    
    var prefix=new Array(count+1).join("┃");
    count++;
    
    //同步执行则，没有返回函数
    var readFiles=fs.readdirSync(target);
    var targetNext;
    
    readFiles.forEach((file) => {
        targetNext=path.join(target, file);
        var stats=fs.statSync(targetNext);
        if (stats.isFile()) {
            //如果是文件
            files.push(file);
        } else {
            dirs.push(file);
        }
    });

    dirs.forEach((dir) => {
        console.log(`${prefix}┣${dir}`);
        //target=path.join(target, dir);
        findFile(path.join(target, dir),count);
    })
    
    var lenth=files.length-1;
    files.forEach((file) => {
        var temp=lenth--?'┣':'┗';
        console.log(`${prefix}${temp}${file}`);
    })
}