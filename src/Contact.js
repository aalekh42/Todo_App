import { getDefaultNormalizer, render } from "@testing-library/react";
import React,{Component} from "react";

class Contact extends Component {
    constructor(props){
    super(props);
    this.state={
        phone:8888163083,
        email:'jaywankhade99@gmail.com',
        flag:false,
    };

}
 showContact() {
    this.setState({flag : true});
    console.log("flag is set");
}
hideContact() {
    this.setState({flag : false});
    console.log("flag is reset");
}


    render(){
        return(
            <div>
            <button onClick={()=>this.showContact()}>Contacts</button>
            {this.state.flag && <><h1>Hello My Contact details are: </h1><h2>Phone:{this.state.phone}</h2><h2>email:{this.state.email}</h2></>}
           
            <button onClick={()=>this.hideContact()}>Hide</button>
           {this.state.flag && <></>}
            </div>
        )
    }
}
export default Contact;