var React=require("react");
var ReactDOM=require("react-dom");

import App from './app.js'

var Hello=React.createClass({
	render:function(){
		return (
			<div>
				<h1>这是react的return<br/></h1>
				<h5>刷新</h5>
				<h6>注释：这里做修改会整个页面刷新</h6>
				<App />
			</div>
		)
	}
})

var div1=document.createElement("div");
document.body.appendChild(div1);
ReactDOM.render(<Hello />,div1);



