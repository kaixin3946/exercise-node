var http= require('http');    
//var  User = require('./otherFile/user');
var  Teacher = require('./otherFile/Teacher');
http.createServer(function        (request,        response)        {        
	response.writeHead(200,        {'Content-Type':        'text/html;        charset=utf-8'});        
	if(request.url!=="/favicon.ico"){        //清除第2此访问
	  teacher  =  new  Teacher(1,'李四',30);	//实例化
	  teacher.enter();
	  teacher.teach(response);
	  response.end('');  
	  //user=new User(1,"丽丽",20);
	  //user.enter();
	  //response.end("");
    }
}).listen(8000);        
console.log('Server        running        at        http://127.0.0.1:8000/');