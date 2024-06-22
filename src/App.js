import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

 // Here setAlert or ander se alert is used as an object
  const showAlert = (message, type) =>{
       setAlert({
        msg: message,
        type: type
       })
       setTimeout(() =>{
          setAlert(null);
       }, 2000);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }

  const toggleMode = (cls) =>{
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);

    // if(mode === 'light'){
    //   setMode('dark');
    //   document.body.style.backgroundColor = '#042743';
    //   showAlert("Dark mode has been enabled", "success");
    // }

    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Light mode has been enabled", "success");
    // }
  }

  const toggleMode1 = () =>{
    removeBodyClasses();
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    // React JSX Fragment ==> <> </>
    <>
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} aboutText="About TextUtils" />
    <Alert alert={alert}/>
    
    <div className="container my-3">
    {/* my-3 is default bootstrap class which gives margin in y-direction of 3*/ }
    <Routes>
    {/* exact keyword is used to distinguish between->
    users ->> Component 1
    users/home --> Component 2
    */}
      <Route exact path="/about" element={<About mode={mode}/>} />
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter " mode={mode} />} />
    </Routes> 
    </div>
    
    </Router>
    </>
  );
}

export default App;
