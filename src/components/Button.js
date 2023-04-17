import React, {Component} from "react";

export default class Button extends Component{
    // constructor(){
    //     super();
    // }
    render(){
        const{id, text} = this.props;

        return <button id={id}>{text}</button>;
    }
}