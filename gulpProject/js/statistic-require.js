define(["require",'mui-require'],function(){
	var mui_dep=require('mui-require');
	function calculate(){
		var startTime=new Date().getTime();	//进入当前页面的时间
		var sourcePage=document.referrer;
		var currentPage=location.href;
		
		if(currentPage.indexOf("share")>-1){
			var userId=currentPage.split("?")[1].split("&")[0].split("=")[1];
		}else{
			var userId=sessionStorage.getItem("user_now");
		}
		window.onunload=function(){
			var endTime=new Date().getTime();
			var urlUpload ='http://manage.youdoctor.cn/platform3/back/visit/record';
		    
		    var data={};
		    if(sourcePage==""){
		    	data={
		    		currentPage:currentPage,
					startTime:startTime,
					endTime:endTime,
					user:userId
		    	}
		    }else{
		    	data={
		    		currentPage:currentPage,
					startTime:startTime,
					endTime:endTime,
					sourcePage:sourcePage,
					user:userId
		    	}
		    }
		   		
			mui_dep.ajax({
				url: urlUpload,
				type: 'get',
				dataType: 'json',
				async:false,
				data:data,
				success:function(data){
					console.log("成功");
					//mui("body")[0].style.backgroundColor="red";
				},
				error:function(){
					console.log("失败");
					//alert("获取姓名失败");
				}
			})
			
		}
	}
	return calculate;
})



