import React, { Component } from "react";
import GeneralInfoForm from "./Forms/GeneralInfoForm";
import Preview from "./Preview/Preview";
import '../styles/MainContent.css'

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };
    this.handleGeneralInfo = this.handleGeneralInfo.bind(this);
  }

  handleGeneralInfo(text) {
    this.setState({ 
        firstName: text.firstName,
        lastName: text.lastName,
        email: text.email,
        phone: text.phone,
    });
  }

  render() {
    return (
      <div className="main-content">
        <GeneralInfoForm handleGeneralInfo={this.handleGeneralInfo} />
        <Preview 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
        />
      </div>
    );
  }
}

export default MainContent;