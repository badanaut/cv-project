import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { firstName, lastName, email, phone } = this.props;
    return (
        <div>
            <h2>{firstName} {lastName}</h2>
            <div>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
            </div>
        </div>
    )
  }
}

export default Preview;
