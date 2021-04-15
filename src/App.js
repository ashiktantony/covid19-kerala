import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Files/Header';
import India from './Files/India';

// import {Header,India} from './Files'

// import { Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  // Link,
  Switch,
  Route
  
}from 'react-router-dom';

class App extends Component{
    // constructor(){
    //   super();
    // }


  render(){
      return(
        <div className="container-fluid">
            <Router>
                <Header/>
                <Switch>
                    <Route  path="/">
                      <India/>
                    </Route>
                   
                </Switch>
            </Router>
          
        </div>
      )

  }
}


export default App;
