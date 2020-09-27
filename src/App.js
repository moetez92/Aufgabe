import React from 'react';
 import './App.css';

 import Form from "./Components/Form"
 import ErrorBox from "./Components/Errorbox"
 import LoadUser from "./Components/LoadUser"
 import store from "./store";
 import {Provider} from "react-redux"
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
