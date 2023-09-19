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
import { getEmployeeData, sendEmployeeData } from "../../utils/API/Api";

function App() {
  const [shift, setShift] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [hasReadPolicy, setHasReadPolicy] = useState(false);
  const [employeeChartData, setEmployeeChartData] = useState([]);
  const [timeStamp, setTimeStamp] = useState(0);
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const formattedMonth =
      currentMonth < 10 ? `0${currentMonth}` : currentMonth.toString();
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
      <Header shiftTime={shift} />
      <Switch>
        <Route exact path="/">
          <Main
            onAgreement={handleAgreementModal}
            onPolicy={handlePolicyModal}
            onSearch={handleSearchModal}
            hasReadPolicy={hasReadPolicy}
            employeeChartData={employeeChartData}
          />
        </Route>
        <Route path="/search">
          <SearchListPage onSearch={handleSearchModal} searchData={searchData}/>
        </Route>
      </Switch>
      <Footer />

      {activeModal === "agreement" && (
        <AddNameModal
          onClose={handleCloseModal}
          onAddData={addEmployeeData}
          isOpen={activeModal === "agreement"}
          shiftTime={shift}
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
          onSearchData={setSearchData}
        />
      )}
    </div>
  );
}

export default App;
