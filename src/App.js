import React from 'react';
 import './App.css';

 import Form from "./Components/Form"
 import ErrorBox from "./Components/Errorbox"
 import LoadUser from "./Components/LoadUser"
 import Modify from "./Components/modify"
 import Success from "./Components/Success"
 import store from "./store";

 import {Provider} from "react-redux"
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div className="App">
       <ErrorBox/>
   
   

       <Switch>
            
          <Route path="/loaduser">
          <LoadUser/>
          </Route>
          
           <Route path="/modify">
           <Modify/> 
           </Route> 
           
           <Route path="/success">
           <Success/> 
           </Route>
           <Route path="/">
           <Form/> 
           </Route>
        </Switch>



    </div>
    </Provider>
    </Router>
  );
}

export default App;
