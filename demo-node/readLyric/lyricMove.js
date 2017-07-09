var fs=require("fs");
var path=require("path");
var iconv=require('iconv-lite');

//console.log("根目录："+__dirname);
var fileUrl=path.join(__dirname,"./杨宗纬-其实都没有.lrc");
fs.readFile(fileUrl, (err, data) => {
  if (err) throw err;
  var str = iconv.decode(data, 'GBK');
  var lines=str.split("\n");
  
  //var reg=/\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
  //var matches=lines[5].match(reg);
  
  lines.forEach((line)=>{
      //console.log(line.toString());
      //[00:32.67]也许我告别 将不再回来
      var reg=/\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
      
      if(reg.test(line)){
          var matches=line.match(reg);
          var content=matches[0];
          var m=parseFloat(matches[1]);
          var s=parseFloat(matches[2]);
          var ms=parseFloat(matches[3]);
          
          setTimeout(function() {
              console.log(content);
          }, m*60*1000+s*1000+ms);
          
      }else{
          console.log(line);
      }
      
  })
  
});