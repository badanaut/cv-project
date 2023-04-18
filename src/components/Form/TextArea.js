import React, {Component} from "react";

export default class TextArea extends Component{
    // constructor(props){
    //     super(props);        
    // }

    render(){
        const {id, placeholder,rows } = this.props;
        return(
            <textarea 
                id={id}
                rows={rows}
                placeholder={placeholder}
            >                   
            </textarea>
        )
    }
}