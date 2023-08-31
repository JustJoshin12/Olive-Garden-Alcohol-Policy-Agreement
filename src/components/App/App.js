import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddNameModal from "../AddNameModal/AddNameModal";
import PolicyModal from "../PolicyModal/PolicyModal";
import Footer from "../Footer/Footer";
import { Route, Router } from "react-router-dom";

function App() {
  const [shiftTime, setShiftTime] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [hasReadPolicy, setHasReadPolicy] = useState(false);
  

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const after4pm = currentHour >= 16;
    if (after4pm === true) {
      setShiftTime("Dinner");
    } else {
      setShiftTime("Lunch");
    }
  }, []);

  const handleAgreementModal = () => {
    setActiveModal("agreement");
    
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handlePolicyModal = () => {
    setActiveModal("policy");
    
  };

  const handleReadPolicy = () => {
    setHasReadPolicy(!hasReadPolicy);
    setActiveModal("");
  };

  return (
    <div className="bg-[#603b28] h-full max-w-[80%] mx-auto">
      <Header shiftTime={shiftTime} />
      <Main onAgreement={handleAgreementModal} onPolicy={handlePolicyModal} hasReadPolicy={hasReadPolicy}/>
      <Footer/>
     
      {activeModal === "agreement" && (
        <ModalWithForm
          onClose={handleCloseModal}
          name="add-name"
          title="Policy Agreement Signature"
        >
          <AddNameModal />
        </ModalWithForm>
      )}
      {activeModal === "policy" && (
          <PolicyModal onClose={handleCloseModal} onDone={handleReadPolicy}/>
      )}
    </div>
  );
}

export default App;
