import React, { Component } from "react";
import "../../styles/Preview.css"


class Preview extends Component {
  render() {
    const { firstName, lastName, email, phone, imageSrc, description } = this.props;
    return (
        <div>
            <h2>{firstName} {lastName}</h2>
            <div>
              <img src={imageSrc} alt="profile"></img>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>{description}</p>
            </div>
        </div>
    )
  }
}

export default Preview;
