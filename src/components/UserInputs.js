import { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import Experience from "./Experience";

export default class UserInputs extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div>
                <GeneralInfo />
                <Education />
                <Experience />
            </div>
        )
    }
}