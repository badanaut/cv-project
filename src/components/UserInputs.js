import { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";
import Button from'./Button';
import "../styles/UserInputs.css"

export default class UserInputs extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div className="user-inputs">
                <GeneralInfo />
                <Education />
                <Experience />
                <Button id='export-pdf' text='Export to PDF'/>
                <Button id='load-example' text='Load Example'/>
                <Button id='reset' text='Reset'/>
            </div>
        )
    }
}