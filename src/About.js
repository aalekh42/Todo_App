import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
        <p style={{ color: "red" }}>About</p>
        <button
          className="btn btn-success"
          onClick={() => this.props.showAbout()}
        >
          About
        </button>
        {this.props.flag && (
          <div>
            My name is {this.props.name} age {this.props.about.age} passed out
            from <b>{this.props.about.college}</b>, Currently working in{" "}
            <b>{this.props.about.company}</b> .
            And my base location is{" "}
            <b>{this.props.about.location}</b>
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={() => this.props.hideAbout()}
        >
          Hide
        </button>
      </>
    );
  }
}
export default About;
