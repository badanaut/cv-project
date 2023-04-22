import React, { Component } from "react";
import GeneralInfoForm from "./Forms/GeneralInfoForm";
import Preview from "./Preview/Preview";
import '../styles/MainContent.css'
import profileImg from '../images/blank-picture.png'


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        imageSrc: profileImg,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description:"",

    };
    this.handleGeneralInfo = this.handleGeneralInfo.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleGeneralInfo(text) {
    this.setState({ 
        firstName: text.firstName,
        lastName: text.lastName,
        email: text.email,
        phone: text.phone,
        description: text.description,
    });
  }

  handleImageChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.setState({ imageSrc: e.target.result });
      };

      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className="main-content">
        <GeneralInfoForm handleGeneralInfo={this.handleGeneralInfo} handleImageChange={this.handleImageChange}/>
        <Preview 
            imageSrc={this.state.imageSrc}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            description={this.state.description}
            
        />
      </div>
    );
  }
}

export default MainContent;