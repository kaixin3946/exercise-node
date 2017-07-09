var  optfile  =  require('./otherFile/optfile');
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
		recall = getRecall(req,res);
		optfile.readfile("./login.html",recall);
    },
    regist:function(req,res){
        recall = getRecall(req,res);
		optfile.readfile("./regist.html",recall);
    },
	writefile:function(req,res){
        function recall(data){
			//res.write(data);
			res.end("ok");
		}
		optfile.writefile("1.txt","111111",recall);
    },
	showImg:function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./img/geek.jpg',res);
    }
}