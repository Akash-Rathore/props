import React ,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import FormOne from './FormOne';
import TopBar from "./components/Topbar/Topbar.jsx";
import './App.css';
import { Container} from 'react-bootstrap';


function RoutingExample(){

    return(<Container fluid>
            <Router>
                <div>
                    <TopBar/>   
                </div>
                <Switch>
                   <Route exact path='/' component={Home}/>
                   <Route exact path='/service' component={Service}/>
                   <Route exact path="/contact" component={FormOne}/>
                   <Route exact path="/about" component={About}/>  
                   <Route exact path="/users" component={Users}/>  
                   <Route component={NoMatch}/>

                </Switch>
            </Router>
        </Container>);

}



function Header(){
   return(
    <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/about">About us</Link></li>
       <li><Link to="/service">Service</Link></li>
       <li><Link to="/contact">Contact us</Link></li>
       <li><Link to="/users">Users</Link></li>
    </ul>

   );
}

function Users({match , location , history}){
   console.log(match);
   return(
      <div>
          <ul>
           <li><Link to={`${match.url}/1`}>Akash Rathore</Link></li>  
           <li><Link to={`${match.url}/2`}>Krishna Rathore</Link></li>  
           <li><Link to={`${match.url}/3`}>vijay kumar</Link></li>              
          </ul>
          <Switch>
              <Route path={`${match.path}/:id`} component={User}/>
              <Route exact path={match.path} render={()=><h2>please select users</h2>}/>
          </Switch>
      </div>
   );
}

function User({match}){

   console.log(match); 
   return(
       <div>
          <h1>User details</h1>
          <p>User ID:{match.params.id}</p>
       </div>
   );

}

function Home(){
    return(
          <div className="App">
             <h1>Home</h1>
             <p>This is home page.</p>
          </div>
       );
 }

 function About(){
    return(
          <div className="about">
             <h1>About</h1>
             <p>This is About page.</p>
          </div>
       );
 }

  function Service(){
    return(
          <div className="service">
             <h1>Service</h1>
             <p>This is Service page.</p>
          </div>
       );
 }

function NoMatch(){
    return(
        <div>
           <h1>404 Error</h1>
           <p>Oop! page not found</p>
        </div>
    );
}


export default RoutingExample;
