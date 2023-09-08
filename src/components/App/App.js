import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddNameModal from "../AddNameModal/AddNameModal";
import PolicyModal from "../PolicyModal/PolicyModal";
import Footer from "../Footer/Footer";
import { getEmployeeData } from "../../utils/API/Api";

function App() {
  const [shiftTime, setShiftTime] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [hasReadPolicy, setHasReadPolicy] = useState(false);
  const [employeeChartData, setEmployeeChartData] = useState([]);
  const [timeStamp, setTimeStamp] = useState(0)

  useEffect(() => {
    const currentTime = new Date();
    setTimeStamp(currentTime);
    const currentHour = currentTime.getHours();
    const after4pm = currentHour >= 16;
    if (after4pm === true) {
      setShiftTime("Dinner");
    } else {
      setShiftTime("Lunch");
    }
    getEmployeeData()
    .then((data) => {
      setEmployeeChartData(data)
    })
    .catch((error) => {
      console.error(error);
    })
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
  const handleSearchModal = () => {
    setActiveModal("search");
  };

  return (
    <div className="bg-[#603b28] h-full max-w-[80%] mx-auto">
      <Header shiftTime={shiftTime} />
      <Main
        onAgreement={handleAgreementModal}
        onPolicy={handlePolicyModal}
        onSearch={handleSearchModal}
        hasReadPolicy={hasReadPolicy}
        employeeChartData={employeeChartData}
      />
      <Footer />

      {activeModal === "agreement" && (
        <ModalWithForm 
          onClose={handleCloseModal}
          name="add-name"
          title="Policy Agreement Signature"
          shiftTime={shiftTime}
          timeStamp={timeStamp}
          >
          <AddNameModal />
        </ModalWithForm>
      )}
      {activeModal === "policy" && (
        <PolicyModal onClose={handleCloseModal} onDone={handleReadPolicy} />
      )}
      {activeModal === "search" && (
        <ModalWithForm
          onClose={handleCloseModal}
          title="Search Saved Employee list"
        >
          <div className="modal__form-contents">
            <label>
              <p>Date</p>
              <input
                className="border-black border-2 border-solid w-full rounded p-[5px]"
                type="date"
                name="date"
                minLength="8"
                maxLength="30"
                required
              />
            </label>
            <p>Shift</p>
            <div>
              <input
                className="modal__radio-button"
                name="shiftType"
                type="radio"
                id="lunch"
                value="lunch"
              />
              <label>Lunch</label>
            </div>
            <div>
              <input
                className="modal__radio-button"
                name="shiftType"
                type="radio"
                id="dinner"
                value="dinner"
              />
              <label>Dinner</label>
            </div>
          </div>
        </ModalWithForm>
      )}
    </div>
  );
}

export default App;
