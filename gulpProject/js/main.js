requirejs.config({
    baseUrl: 'js',
    shim:'',
    paths: {
        main: 'main'
    }
});

// Start the main app logic.
requirejs(['mui-require','../../jquery-2.0.3','canvas','statistic-require'],
function(mui,jquery,canvas,calc) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    //console.log("index:"+index.color);
    mui.init({											//初始化mui							
		gestureConfig:{
		   tap: true, //默认为true
		   doubletap: true, //默认为false
		}
	});
    //mui.alert("222");
    canvas();
    calc();
    mui("#mychart")[0].addEventListener("tap",function(){
    	mui.alert("666");
    })
    console.log(mui("div").length);
    /*canvas([51,51,41,41,11,11,31,10,81,66],[
    		{meridianId:1,left1:30,left2:30,left3:30,right1:30,right2:30,right3:30},
    		{},{},{},{},{},{},{},{},{}],[1,1,1,1,1,1,1,1,8,6],"foot",66);
    console.log("canvas:"+canvas([51,51,41,41,11,11,31,10,81,66],[
    		{meridianId:1,left1:30,left2:30,left3:30,right1:30,right2:30,right3:30},
    		{},{},{},{},{},{},{},{},{}],[1,1,1,1,1,1,1,1,8,6],"foot",66));*/
    //console.log("hasdepend:"+hasDepend.color);
});