import React, { Component } from "react";

class About extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <>
            
            <h2>I work at {this.props.mycompany}</h2>

            </>
        )
    }
}
export default About;