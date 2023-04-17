import React,{ Component } from "react";
import TextInput from "./TextInput";
import Button from'./Button';

class Experience extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div>
                <h3>Experience</h3>
                <TextInput id='position' placeholder='Position'/>
                <TextInput id='company' placeholder='Company'/>
                <TextInput id='job-city' placeholder='City'/>
                <TextInput id='job-start-date' placeholder='From'/>
                <TextInput id='job-end-date' placeholder='To'/>
                <Button id='job-add' text="Add"/>
                <Button id='job-delete' text="Delete"/>
            </div>
        )
    }
}

export default Experience;