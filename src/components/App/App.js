import { useState, useEffect } from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import AddNameModal from '../AddNameModal/AddNameModal';

function App() {
  const [shiftTime,setShiftTime] = useState("");
  const [activeModal, setActiveModal] = useState("");


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

  const handleAgreementModal = () => {
    setActiveModal("agreement")
  }

  const handleCloseModal = () => {
    setActiveModal("")
  }
  
  return (
    <div className='app'>
      <Header shiftTime={shiftTime}/>
      <Main onAgreement={handleAgreementModal}/>
      {activeModal === "agreement" && (
        <ModalWithForm onClose={handleCloseModal} name="add-name" title="Policy Agreement Signature">
         <AddNameModal/>
        </ModalWithForm>
      )}
      </div>

  );
}

export default App;
