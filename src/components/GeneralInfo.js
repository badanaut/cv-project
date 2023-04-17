import { Component } from "react";
import TextInput from "./TextInput";
import TextArea from "./TextArea";
import SelectImage from "./SelectImage";

export default class GeneralInfo extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div>
                <h3>Personal Information</h3>
                <SelectImage />
                <TextInput id="first-name" placeholder="First Name"/>
                <TextInput id="last-name" placeholder="Last Name"/>
                <TextInput id="adress" placeholder="Adress"/>
                <TextInput id="email" placeholder="Email"/>
                <TextInput id="phone-number" placeholder="Phone Number"/>
                <TextArea id="description" placeholder="Description" rows={4}/>
            </div>
        )
    }
}