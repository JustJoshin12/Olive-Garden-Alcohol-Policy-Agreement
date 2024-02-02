import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom";
import AddNameModal from "../AddNameModal/AddNameModal";
import PolicyModal from "../PolicyModal/PolicyModal";
import Footer from "../Footer/Footer";
import SearchModal from "../SearchModal/SearchModal";
import { SearchListPage } from "../SearchListPage/SearchListPage";
import { getEmployeeData, sendEmployeeData, sendLoginData, sendSignupData } from "../../utils/API/Api";
import ManagerLoginModal from "../ManagerLoginModal/ManagerLoginModal";
import ManagerSignupModal from "../ManagerSignupModal/ManagerSignupModal";

function App() {
  const [shift, setShift] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [hasReadPolicy, setHasReadPolicy] = useState(false);
  const [employeeChartData, setEmployeeChartData] = useState([]);
  const [timeStamp, setTimeStamp] = useState(0);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString();
    const currentDay = new Date().getDate();
    const currentYear = new Date().getFullYear();
    setTimeStamp(`${formattedMonth}/${currentDay}/${currentYear}`);
  }, []);
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const after4pm = currentHour >= 16;
    if (after4pm === true) {
      setShift("Dinner");
    } else {
      setShift("Lunch");
    }
  }, []);

  useEffect(() => {
    getEmployeeData({ shift, timeStamp })
      .then((data) => {
        setEmployeeChartData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [shift, timeStamp]);

  const handleAgreementModal = () => {
    setActiveModal("agreement");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handlePolicyModal = () => {
    setActiveModal("policy");
  };
  const handleLoginModal = () => {
    setActiveModal("login")
  };

  const handleSignupModal = () => {
    setActiveModal("signup")
  };

  const handleReadPolicy = () => {
    setHasReadPolicy(true);
    setActiveModal("");
  };
  const handleSearchModal = () => {
    setActiveModal("search");
  };

  const addEmployeeData = (data) => {
    sendEmployeeData(data)
      .then((data) => {
        setEmployeeChartData([data, ...employeeChartData]);
        setHasReadPolicy(false);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  const handleLogin = (data) => {
    sendLoginData(data)
    .then((data) => {
      console.log("success")
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const handleSignup = (data) => {
    sendSignupData(data)
    .then((data) => {
      console.log('success')
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className="bg-[#603b28] h-full max-w-[80%] mx-auto">
      <Header shiftTime={shift} />
      <Switch>
        <Route exact path="/Olive-Garden-Alcohol-Policy-Agreement">
          <Main
            onAgreement={handleAgreementModal}
            onPolicy={handlePolicyModal}
            hasReadPolicy={hasReadPolicy}
            employeeChartData={employeeChartData}
          />
        </Route>
        <Route path="/Olive-Garden-Alcohol-Policy-Agreement/search">
          <SearchListPage
            onSearch={handleSearchModal}
            searchData={searchData}
          />
        </Route>
      </Switch>
      <div className="flex pb-6 items-center justify-end gap-5">
        <p className="text-2xl font-semibold">Manager? Login here</p>
      <button className="modal__submit-button" onClick={handleLoginModal}>Login</button>
      </div>
      
      {/* <button className="modal__submit-button" onClick={handleSignupModal}>Signup</button> */}
      <Footer />

      {activeModal === "agreement" && (
        <AddNameModal
          onClose={handleCloseModal}
          onAddData={addEmployeeData}
          isOpen={activeModal === "agreement"}
          shiftTime={shift}
          timeStamp={timeStamp}
          setReadPolicy={setHasReadPolicy}
        />
      )}
      {activeModal === "policy" && (
        <PolicyModal onClose={handleCloseModal} onDone={handleReadPolicy} />
      )}
      {activeModal === "search" && (
        <SearchModal
          onClose={handleCloseModal}
          isOpen={activeModal === "search"}
          onSearchData={setSearchData}
        />
      )}
      {activeModal === "login" && (
        <ManagerLoginModal onClose={handleCloseModal} isOpen={activeModal === "login"} onLogin={handleLogin}/>
      )}
      {activeModal === "signup" && (
        <ManagerSignupModal onClose={handleCloseModal} isOpen={activeModal === "signup"} addManager={handleSignup} />
      )}
    </div>
  );
}

export default App;
