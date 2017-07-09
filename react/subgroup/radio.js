/**
 * Created by Lilian on 2017/6/24.
 */
var React=require("react");

class Radio extends React.Component{
    /*static prototypes={
        onChange:React.ProtoTypes.func
    }
    constructor(){
        super();
    }*/
    render(){
        return <div ref="holder"><input type="radio" value="a"/></div>;
    }
}

module.exports=Radio;





