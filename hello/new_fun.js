var    http    =  require('http'); 
var    otherfun = require('./otherFile/fun.js');
http.createServer(function    (request,    response)    {   //response 是向客户端输出   
        response.writeHead(200,    {'Content-Type':    'text/html;    charset=utf-8'});      
    if(request.url!=="/favicon.ico"){    //清除第2此访问  
        otherfun.getVisit(response); 
		otherfun["add"](response);
        response.end('');    
    }  
}).listen(8000);      
console.log('Server    running    at    http://127.0.0.1:8000/');

function fun1(res){
	console.log("111");
	res.write("111111111111111");
}
