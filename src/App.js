
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import { Link } from 'react-router-dom';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState ('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null); 
      
    }, 1500);

  }

   const togglemode =()=>{
    if (mode=== 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
   }


  return (
   <>
   
<Navbar titel="Textutils" AboutText=" About Textutils" mode={mode} togglemode={togglemode}/>
<Alert alert ={alert} />


<div className="container my-3">
  
{/* /* <Routes>
            <Route exact path="/about" element={<About/>} >
            </Route> */
            /* /* <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>
            </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>

        </div>

   </>
  );
}

export default App;
