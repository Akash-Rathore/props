import React , { Component} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import "./relative.css";
class Relative extends Component{

    constructor(props){
    
        super(props)
        this.state={
    
            name:"Akash",
            email:"akashrathore1999.ar@gmail.com",
            password:"12345",
            last_name:"Rathore"
            
        }

    }
    render(){
        return(
             <div className="sidebar">
                   <h4>Welcome to the future</h4>      
             </div>
             );
    }

}

export default Relative;