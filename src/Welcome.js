import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jay",
      flag: false,
      about: {
        college: "SJCET",
        company: "Atos",
        location: "mumbai",
        age: 23,
      },
    };
  }
  showAbout = () => {
    this.setState({ flag: true });
    console.log("flag is set");
  };
  hideAbout = () => {
    this.setState({ flag: false });
    console.log("flag is reset");
  };

  render() {
    return (
      <>
      {/*STYLED USING GRID*/}
        <div className="welcome-container container-fluid">
          <div className="row welcome-heading">
            <h1 style={{color:"teal"}}>Welcome {this.state.name}</h1>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-md-3">
              <About
                name={this.state.name}
                about={this.state.about}
                flag={this.state.flag}
                showAbout={this.showAbout}
                hideAbout={this.hideAbout}
              />
            </div>
            <div className="col-md-auto">
              <Contact />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Welcome;
