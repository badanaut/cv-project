import React, {Component} from "react";
import UserInputs from './UserInputs'
import CvPreview from './CvPreview';
import '../styles/MainContent.css'

export default class MainContent extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div className="main-content">
            <UserInputs />
            <CvPreview />
            </div>
        )
    }
}