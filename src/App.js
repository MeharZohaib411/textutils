
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  Routes,
  Route,
} from "react-router-dom";

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
      document.body.style.backgroundColor = '#042743';
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
   
<Navbar titel="Textutils"  mode={mode} togglemode={togglemode} key={new Date()}/>
<Alert alert ={alert} />


<div className="container my-3">
  
         <Routes>
         <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-word counter,char counter,remove extra spaces" mode={mode}/>} >
            </Route> 
         <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Try TextUtils-word counter,char counter,remove extra spaces" mode={mode}/>}>
            </Route>
            <Route exact path="/about" element={<About/>} >
            </Route> 
           
          </Routes>


          {/* <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
          <Route  path="/about">
            <About mode={mode} />
          </Route> */}
        </div>
   </>
  );
}

export default App;
