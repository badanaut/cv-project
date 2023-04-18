import React, {Component} from "react";

export default class TextInput extends Component{
    // constructor(props){
    //     super(props);        
    // }

    render(){
        const {id, placeholder } = this.props;
        return(
            <input 
                id={id}
                placeholder={placeholder} 
            >                   
            </input>
        )
    }
}