import React, {Component} from "react";
import TextInput from './TextInput';
import Button from'./Button';

export default class Education extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div>
                <h3>Education</h3>
                <TextInput id='university' placeholder='University name'/>
                <TextInput id='edu-city' placeholder='City'/>
                <TextInput id='degree' placeholder='Degree'/>
                <TextInput id='edu-start-date' placeholder='From'/>
                <TextInput id='edu-end-date' placeholder='To'/>
                <Button id='edu-add' text="Add"/>
                <Button id='edu-delete' text="Delete"/>
            </div>
        )
    }
}