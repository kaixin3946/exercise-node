var fs=require("fs");
var path=require("path");
require("./proto");

var target;
target=path.join(__dirname,process.argv[2]||'./');

fs.readdir(target, (err, files)=>{
    files.forEach((file)=>{
        fs.stat(path.join(target, file),(err, stats)=>{
            console.log(`${stats.birthtime.format("yyyy/MM/dd HH:mm:ss")}\t${stats.size}\t${file}`);
            //console.log(stats.birthtime+"  "+stats.size+"  "+file);
        })
    });
})


