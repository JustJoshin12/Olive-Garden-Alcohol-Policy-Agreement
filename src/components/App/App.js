import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddNameModal from "../AddNameModal/AddNameModal";

function App() {
  const [shiftTime, setShiftTime] = useState("");
  const [activeModal, setActiveModal] = useState("");

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

  return (
    <div className="app">
      <Header shiftTime={shiftTime} />
      <Main onAgreement={handleAgreementModal} onPolicy={handlePolicyModal} />
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
        <div className={`modal`}>
          <div className="modal__content">
            <button
              className="policy__modal-close-button"
              onClick={handleCloseModal}
            />
            <h2 className="policy__modal-header">Enhanced Age Verification</h2>
            <p className="policy__modal-info">
              I will check the ID of Each Guest who orders Alcohol and Appears
              to be under the age of 40. I will verify age using the age
              verification process - Either Ziosk, Scan at the Bar or Dash POS
              and outlined by the managers. I will not serve Alcohol to any
              guest who is under the age of 21. Failure to comply with this
              policy will result in termination of employment.
            </p>
            <div className="mt-[25px] flex justify-between">
              <button className="policy__modal-submit-button" type="submit">
                Done
              </button>
              <div>
                <input className="policy__modal-check-button" type="radio" />
                <label className="policy__modal-check-text">I have read the policy above</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
