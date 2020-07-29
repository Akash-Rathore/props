import React ,{ Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import "./Topbar.css";
class Topbar extends Component{

    constructor(props) {
        super(props);
     
     };
     render(){
         return(
            
             <Row className="header">
                 <Col sm={4} lg={4} md={4} className="leftheader">
                    <h1>Akash Technical</h1>
                 </Col> 
                 <Col sm={8} lg={8} md={8} className="rightheader">
                    <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/about">About us</Link></li>
                       <li><Link to="/service">Service</Link></li>
                       <li><Link to="/contact">Contact us</Link></li>
                       <li><Link to="/users">Users</Link></li>
                     </ul>
                  </Col>             
             </Row>
           );
       }
} 
export default Topbar;
