import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [helper, sethelper] = useState("enable dark mode")
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // setheading('enable dark mode')
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#13097f";
      //   setheading('enable light mode')

      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      //  setInterval(()=>{
      // document.title='TextUtils is Amazing Mode'
      //  },1500)
      //  setInterval(()=>{
      //   document.title='Install Textutils Now'
      //    },1500)
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar
        title="textutils"
        abouttext="about us"
        mode={mode}
        toggleMode={toggleMode}
      />
      {<Alert alert={alert} />}
      <div className="container my-3">
        
          {/* <Routes>
            <Route path="/about"  */}
              {/* element={<About />}/> */}
            {/* <Route path="/"
               element= */}
               {<Textform
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />}
                {/* />
                </Routes> */}
        
 </div>
 {/* </Router> */}
    </>
  );
}

export default App;
