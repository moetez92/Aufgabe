import React from 'react';
 import './App.css';

 import Form from "./Components/Form"
 import ErrorBox from "./Components/Errorbox"

function App() {
  return (
    <div className="App">
       <ErrorBox/>
       <Form/>
    </div>
  );
}

export default App;
