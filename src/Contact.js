import { getDefaultNormalizer, render } from "@testing-library/react";
import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: 8888163083,
      email: "jaywankhade99@gmail.com",
      flag: false,
    };
  }
  showContact() {
    this.setState({ flag: true });
    console.log("flag is set");
  }
  hideContact() {
    this.setState({ flag: false });
    console.log("flag is reset");
  }

  render() {
    return (
      <div>
        <p style={{ color: "red" }}>Contact</p>
        <button className="btn btn-success" onClick={() => this.showContact()}>
          Contact
        </button>
        {this.state.flag && (
          <div>
            <b>My Contact details</b>
            <p><b>Ph No:</b>{this.state.phone}</p>
            <p><b>email:</b>{this.state.email}</p>
          </div>
        )}

        <button className="btn btn-primary" onClick={() => this.hideContact()}>
          Hide
        </button>
        {this.state.flag && <></>}
      </div>
    );
  }
}
export default Contact;
