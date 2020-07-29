import React , { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './App.css';
import  Relative from "./components/sidebar/Relative.js";


class FormOne extends Component{

  constructor(props){
      super(props);
      this.state={
          email_address:"akashrathore@gmail.com",
          password:"12345",
          address:"rashmi vihar",
          designation:"store",
          contact:"7906277254",
          pincode:"282001"   
      }
  }
  
  handleChange=(event)=>{
    this.setState({[event.target.name]: event.target.value});
 }
  
  

  signUp = ()=>{
    
     var data={
       
      email_address:this.state.email_address,
      password:this.state.password,
      addess:this.state.address,
      designation:this.state.designation,
      contact:this.state.contact,
      pincode:this.state.pincode,
     
    }
     console.log(data);
  }

  /* 
  handleSignUp=()=>
  {
     var data={
       addess:this.state.email_address,
       password:this.state.password,
       address:this.state.address,
       designation:this.state.designation,
       contact:this.state.contact,
       pincode:this.state.pincode,
     }
    
  }
   */
  

    render(){
      return(
          <Form>          
          <Row className="formdata">
          <Col sm={4} md={4} lg={4}>
             <Relative/>
          </Col> 
          <Col sm={4} lg={4}> 
            <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Email" value={this.state.email_address} name="email_address" onChange={this.handleChange}/>
           </Form.Group>
           <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" value={this.state.address}  name="address" onChange={this.handleChange}/>
            </Form.Group>
            <Button   variant="primary"  onClick={() => this.signUp()}>
              Submit
            </Button>
          </Col>
          <Col sm={4} lg={4}>
          <Form.Group controlId="formBasicDesignation">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Designation"  value={this.state.designation} name="designation" onChange={this.handleChange}/>
          </Form.Group>          
          <Form.Group controlId="formBasicContact">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="number" placeholder="Contact"  value={this.state.contact} name="contact" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" placeholder="Pincode" value={this.state.pincode}  name="pincode" onChange={this.handleChange}/>
          </Form.Group>
          </Col>
         </Row>
         </Form>
        
            );
    }


}
export default FormOne;