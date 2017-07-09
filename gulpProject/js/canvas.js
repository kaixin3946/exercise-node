define(["require","echarts.min","mui-require"],function () {
    //Do setup work here
    var echarts=require("echarts.min");
	var mui=require("mui-require");
    function formSingleBarGraph(standData,seleArr,DValue,footOrHand,allAvg){
		var myChart = echarts.init(document.getElementById('mychart'));
		var color=['#80CB2B','#80CB2B','#80CB2B','#80CB2B','#80CB2B','#80CB2B','#80CB2B','#80CB2B','#80CB2B','#80CB2B'];
		
		option = null;
		option = {
		    grid: [{
		        top:"12%",
				bottom:"0",
				left:"2%",
				right:"0%",
				y:"0%",
				x:"0%",
				width:"90%",
				height:"87%"
		    },{
		        top:"12%",
				bottom:"0",
				left:"2%",
				right:"0%",
				y:"0%",
				x:"0%",
				width:"90%",
				height:"87%"
		    }],
		    xAxis : [
		        {
		        	gridIndex:0,
		            type : 'category',
		            data:standData,
		            axisTick: {
		                show:false
		            },
		            axisLabel:{
		            	show:false
		            },
		            splitLine:{
		            	show:false
		            },
		            axisLine:{
		            	show:false
		            }
		        },{
		        	gridIndex:1,
		            type : 'category',
		            data:standData,
		            axisTick: {
		                show:false
		            },
		            axisLabel:{
		            	show:false
		            },
		            splitLine:{
		            	show:false
		            },
		            axisLine:{
		            	show:false
		            }
		        }
		    ],
		    yAxis : [
		        {
		        	gridIndex:0,
		            type : 'value',
		            min: 0, max: 120,
		            axisTick: {
		                show:false
		            },
		            axisLabel:{
		            	show:false
		            },
		            splitLine:{
		            	show:false
		            },
		            axisLine:{
		            	show:false
		            }
		        },{
		        	gridIndex:1,
		            type : 'value',
		            min: 0, max: 120,
		            axisTick: {
		                show:false
		            },
		            axisLabel:{
		            	show:false
		            },
		            splitLine:{
		            	show:false
		            },
		            axisLine:{
		            	show:false
		            }
		        }
		    ],
		    series : [
		    	{
		    		xAxisIndex: [0],
		    		yAxisIndex: [0],
		            name:'D-value',
		            type:'bar',
		            barWidth: '30%',
		            data:DValue,
		            itemStyle:{
		            	normal:{
		            		color:"#50ADE4",
		            		barBorderRadius:[5, 5, 0, 0],
		            		shadowColor: 'rgba(0, 0, 0, 0.5)',
    						shadowBlur: 10,
    						shadowOffsetX:6
		            	}
		            },
		            markPoint:{
		            	symbol:'circle',
		            	symbolSize:20,
		            	symbolOffset:['260%',"0%"],
		            	label:{
		                	normal:{
		                		show:true,
		                		formatter:"{c}",
		                		position:["20%","20%"],
		                		textStyle:{
		                			color:"#ffffff",
		                			fontSize:10
		                		}
		                	}
		                },
		            	data:[{
		            		coord: [9, allAvg],
		            		value: parseInt(allAvg)
		            		
		            	}],
		            	animation:false
		            },
		            z:6,
		            animation:false
		        },
		    	{
		    		xAxisIndex: [1],
		    		yAxisIndex: [1],
		            name:'jl',
		            type:'bar',
		            barWidth: '30%',
		            data:[{value:standData[0],itemStyle:{normal:{color:color[0]}}},
		            	{value:standData[1],itemStyle:{normal:{color:color[1]}}},
		            	{value:standData[2],itemStyle:{normal:{color:color[2]}}},
		            	{value:standData[3],itemStyle:{normal:{color:color[3]}}},
		            	{value:standData[4],itemStyle:{normal:{color:color[4]}}},
		            	{value:standData[5],itemStyle:{normal:{color:color[5]}}},
		            	{value:standData[6],itemStyle:{normal:{color:color[6]}}},
		            	{value:standData[7],itemStyle:{normal:{color:color[7]}}},
		            	{value:standData[8],itemStyle:{normal:{color:color[8]}}},
		            	{value:standData[9],itemStyle:{normal:{color:color[9]}}}],
		            itemStyle:{
		            	normal:{
		            		barBorderRadius:[5, 5, 0, 0],
		            		shadowColor: 'rgba(0, 0, 0, 0.5)',
    						shadowBlur: 6,
    						shadowOffsetX:6,
    						shadowOffsetY:-3
		            	}
		            },
		            animation:false,
		            markLine : {
		                data : [
		                    { name : '平均值',yAxis: parseInt(allAvg)}
		                ],
		                symbolSize:[40,15],
		                symbol:["none","none"],
		                lineStyle:{
		                	normal:{
		                		color:"#50ADE4",
		                		width:4,
		                		type: "solid"
		                	}
		                },
		                animation:false,
		                label:{
		                	normal:{
		                		show:false
		                	}
		                },
		                zlevel:0,
		                z:1
		            },
		            /*markPoint:{
		            	symbol:'image://../../images/selectTest/average2.png',
		            	symbolSize:[15,25],
		            	symbolOffset:['320%',0],
		            	label:{
		                	normal:{
		                		show:false
		                	}
		                },
		            	data:[{
		            		coord: [9, allAvg]
		            	}],
		            	animation:false
		            },*/
		            z:5
		        }
		    ]
		};
		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
	}
    
	 function form2(){
    	//app.title = '坐标轴刻度与标签对齐';
		var myChart = echarts.init(document.getElementById('mychart'));
		option = {
		    color: ['#3398DB'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'直接访问',
		            type:'bar',
		            barWidth: '60%',
		            data:[10, 52, 200, 334, 390, 330, 220]
		        }
		    ]
		};
		
		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
    }
	 
	 function muiTest(){
	 	window.onunload=function(){
			var endTime=new Date().getTime();
			var urlUpload =dynamicApiUrl+'back/visit/record';
		    
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
	 
    return muiTest;
});