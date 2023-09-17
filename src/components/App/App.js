import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import AddNameModal from "../AddNameModal/AddNameModal";
import PolicyModal from "../PolicyModal/PolicyModal";
import Footer from "../Footer/Footer";
import SearchModal from "../SearchModal/SearchModal";
import { getEmployeeData, sendEmployeeData } from "../../utils/API/Api";

function App() {
  const [shiftTime, setShiftTime] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [hasReadPolicy, setHasReadPolicy] = useState(false);
  const [employeeChartData, setEmployeeChartData] = useState([]);
  const [timeStamp, setTimeStamp] = useState(0);

  const chartData = {
    shift: shiftTime,
    timeStamp: timeStamp,
  };


  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();
    setTimeStamp(`${currentMonth}/${currentDay}/${currentYear}`); 
  })
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const after4pm = currentHour >= 16;
    if (after4pm === true) {
      setShiftTime("Dinner");
    } else {
      setShiftTime("Lunch");
    }
    getEmployeeData(chartData)
      .then((data) => {
        setEmployeeChartData(data);
      })
      .catch((error) => {
        console.error(error);
      });
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

  const addEmployeeData = (data) => {
    sendEmployeeData(data)
      .then((data) => {
        setEmployeeChartData([data, ...employeeChartData]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
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
        <AddNameModal
          onClose={handleCloseModal}
          onAddData={addEmployeeData}
          isOpen={activeModal === "agreement"}
          shiftTime={shiftTime}
          timeStamp={timeStamp}
        />
      )}
      {activeModal === "policy" && (
        <PolicyModal onClose={handleCloseModal} onDone={handleReadPolicy} />
      )}
      {activeModal === "search" && (
       <SearchModal
       onClose={handleCloseModal}
       isOpen={activeModal === "search"}
       chartData={chartData}
       />
      )}
    </div>
  );
}

export default App;
