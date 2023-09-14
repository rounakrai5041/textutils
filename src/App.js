import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./components/About"









function App() {

  

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  




  const bluemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "blue"
      showAlert("Blue mode enabled", "primary")
    }

    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Blue mode disabled", "success")
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }






  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#495057"
      showAlert("Dark Mode Enabled", "primary")

    }
    else {
      setMode("light")

      document.body.style.backgroundColor = "white"
      showAlert("Dark Mode Disabled", "success")

    }

  }


  return (
    <>

      <Navbar title="Text-Utils" about="About" home="Home" mode={mode} toggleMode={toggleMode} bluemode={bluemode} />

      <Alert alert={alert} />

      <br />

     
      

<TextArea heading="Text Box" mode={mode} showAlert={showAlert} />
  




     

      

    </>

  );
}

export default App;





