/**
 * Created by Lilian on 2017/6/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Foo extends React.component{
    constructor(props){
        super();
        this.state={x:"y"}
    }
    render(){
        return (
            <ul>
                <li>1</li><li>2</li><li>3</li><li>4</li>
            </ul>
        );
    }
}



