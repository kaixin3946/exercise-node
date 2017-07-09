var  optfile  =  require('./otherFile/optfile');    
var  url  =  require('url');    
var  querystring  =  require('querystring');  //post需导入    

function getRecall(req,res){
	res.writeHead(200,{'Content-Type':'text/html;  charset=utf-8'});
	console.log("getrecall 执行");
	function recall(data){
		console.log("写进客户端");
		//res.write(data);
		//res.end("ok");
		res.write(data,function(err){
			res.end("ok");
		});
	}
	return recall;
}

module.exports={      
    login:function(req,res){      
        //--------get方式接收参数----------------      
              
        /*var rdata = url.parse(req.url,true).query;      
        console.log(rdata);    
        if(rdata['email']!=undefined){  
            console.log(rdata['email']);      
        }    
        */     
        //-------post方式接收参数----------------      
              
        var  post = '';          //定义了一个post变量，用于暂存请求体的信息      
      
        req.on('data',function(chunk){        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中      
            post  +=  chunk;                  //每次传进字节流都会响应
        });      
        //-------注意异步-------------      
        req.on('end',  function(){        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。      
            post  =  querystring.parse(post);      
            console.log('email:'+post['email']+'\n');        
            console.log('pwd:'+post['pwd']+'\n');
        });      
        //---------------------------------------      
		recall=getRecall(req,res);
        data  =  optfile.readfileSync('./login.html',recall);      
        res.write(data);      
        res.end("7788");      
    }      
}