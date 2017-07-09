var str=require("./app.js");
/*require("style-loader!css-loader!./css/reset.css");
require("style-loader!css-loader!./css/style.css");*/				//新版webpack  -loader必须加

require("./css/reset.css");
require("./css/style.css");



document.getElementsByTagName("body")[0].innerHTML="<div>webpack测试;"+"使用webpack配置文件;"+str+"</div>";