import React, { Component } from "react";

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        firstName: "", 
        lastName: "", 
        email: "",
        phone:"",
        selectedImage: null,
    };

    this.handleSubmitGeneral = this.handleSubmitGeneral.bind(this);
  }

  handleSubmitGeneral(event) {
    event.preventDefault();
    const text = {firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  email: this.state.email,
                  phone: this.state.phone};
    this.props.handleGeneralInfo(text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitGeneral}>
        
        <input
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={(event) => this.setState({ firstName: event.target.value })}
        />
        <input
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={(event) => this.setState({ lastName: event.target.value })}
        />
        <input
            type="text"
            placeholder="Email"
            value={this.state.title}
            onChange={(event) => this.setState({ email: event.target.value })}
        />
        <input
            type="text"
            placeholder="Phone"
            value={this.state.phone}
            onChange={(event) => this.setState({ phone: event.target.value })}
        />
        
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default GeneralInfoForm;
