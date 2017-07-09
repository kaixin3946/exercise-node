/*function  fun2(res){      
    res.write("发送");      
    //call('hello',req,res);      
    res.end("");      
}      
function  call(res){      
    console.log('call');      
} */  

//module.exports  =  fun2;    //只支持一个函数 

//输出多个函数
module.exports={      
    getVisit:function(res){
		console.log('getVisit');
		     
    },      
    add:function(a,b){  
		console.log('add');
		//alert("add");
    }      
}   

