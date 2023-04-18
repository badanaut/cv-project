import React, {Component} from "react";
import UserInputs from './Form/UserInputs'
import Preview from './Preview/Preview';
import '../styles/MainContent.css'

export default class MainContent extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div className="main-content">
            <UserInputs />
            <Preview />
            </div>
        )
    }
}