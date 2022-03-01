import React, { Component } from "react";
import About from "./About";

class Welcome extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Jay",
            flag:false,
            about:{
                college: "ssgmce",
                company: "Atos",
                location:"mumbai",
                age:23,
            }

        }
    }
        showAbout() {
            this.setState({flag:true})
            console.log("flag is set")
        }
        hideAbout() {
            this.setState({flag : false});
            console.log("flag is reset");
        }
    
    render(){
        return(
            <>
            <h1>Welcome {this.state.name}</h1>
            <About
            myname={this.state.name}
            mycompany={this.state.about.company}

            />
            <button onClick={()=>this.showAbout()}>About</button>
            {this.state.flag &&<> <h1>My details are</h1>
            <h2>My name is {this.state.name}</h2>
            <h2>I have studied in {this.state.about.college}</h2>
            <h2>Currently I am working in {this.state.about.company}</h2>
            <h2>My base location is{this.state.about.location}</h2>
            <h2>My age is {this.state.about.age}</h2>
            </>}

            <button onClick={()=>this.hideAbout()}>Hide</button>
           {this.state.flag && <></>}
            </>
        )
    }
    
    
}
export default Welcome