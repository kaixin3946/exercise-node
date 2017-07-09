var http=require("http");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	if(request.url!=="/favicon.ico"){                   //否则会发出两次请求
		console.log("访问");
		response.write("hello,hello,hello,hello,world");
		response.end("");
	}

}).listen(8000);
console.log("server running");