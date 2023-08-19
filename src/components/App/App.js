import { useState, useEffect } from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from '../Main/Main';

function App() {
  let [shiftTime,setShiftTime] = useState("");
  useEffect(()=> {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const after4pm = currentHour >= 16;
    if(after4pm === true){
      setShiftTime("Dinner")
    } else {
      setShiftTime("Lunch")
    }
  }, [])

  
  
  return (
    <div className='app'>
      <Header shiftTime={shiftTime}/>
      <Main/>
      </div>

  );
}

export default App;
