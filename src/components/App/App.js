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
import { Link } from "react-router-dom";
import {
  getEmployeeData,
  sendEmployeeData,
  sendLoginData,
  sendSignupData,
} from "../../utils/API/Api";
import ManagerLoginModal from "../ManagerLoginModal/ManagerLoginModal";
import ManagerSignupModal from "../ManagerSignupModal/ManagerSignupModal";

function App() {
  const [shift, setShift] = useState("");
  const [activeModal, setActiveModal] = useState("");
  const [employeeChartData, setEmployeeChartData] = useState([]);
  const [timeStamp, setTimeStamp] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
    setTimeStamp(formattedDate);
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

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handlePolicyModal = () => {
    setActiveModal("policy");
  };
  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleReadPolicy = () => {
    setActiveModal("agreement");
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

  const handleLogin = (data) => {
    sendLoginData(data)
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((error) => {
        window.alert("incorrect email or password.");
        console.error(error);
      });
  };

  const handleSignup = (data) => {
    sendSignupData(data)
      .then((data) => {
        window.alert("Manager successfully added to system.");
      })
      .catch((error) => {
        window.alert("An error has occurred");
        console.error(error);
      });
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setCurrentUser({});
  };

  return (
    <div className="bg-[#603b28] h-full max-w-[80%] mx-auto">
      <Header shiftTime={shift} />
      <Switch>
        <Route exact path="/Olive-Garden-Alcohol-Policy-Agreement">
          <Main
            onPolicy={handlePolicyModal}
            employeeChartData={employeeChartData}
            loggedIn={loggedIn}
            onSearch={handleSearchModal}
          />
        </Route>
        <Route path="/Olive-Garden-Alcohol-Policy-Agreement/search">
          <SearchListPage
            onSearch={handleSearchModal}
            searchData={searchData}
          />
        </Route>
      </Switch>
      {loggedIn ? (
        <div className="flex flex-col pb-6 items-center gap-5 justify-evenly md:flex-row">
          <div className="text-lg font-bold font-serif md:text-3xl">
            {currentUser.firstName + " " + currentUser.lastName}
          </div>
          <div className="flex flex-col items-center md:flex-row md:gap-3">
            <p className="text-xl items-center font-semibold md:text-2xl">
              Add Manager
            </p>
            <div className="flex pt-5 gap-3">
              <button
                className="modal__submit-button px-3"
                onClick={handleSignupModal}
              >
                Signup
              </button>
              <p className="text-xl font-semibold md:text-2xl">Or</p>
              <Link to="/Olive-Garden-Alcohol-Policy-Agreement">
                <button
                  className="modal__submit-button px-3"
                  onClick={handleLogOut}
                >
                  LogOut
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex pb-6 items-center justify-end gap-5">
          <p className="text-xl font-semibold md:text-2xl">
            Manager? Login here
          </p>

          <button className="modal__submit-button" onClick={handleLoginModal}>
            Login
          </button>
        </div>
      )}
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
      {activeModal === "login" && (
        <ManagerLoginModal
          onClose={handleCloseModal}
          isOpen={activeModal === "login"}
          onLogin={handleLogin}
        />
      )}
      {activeModal === "signup" && (
        <ManagerSignupModal
          onClose={handleCloseModal}
          isOpen={activeModal === "signup"}
          addManager={handleSignup}
        />
      )}
    </div>
  );
}

export default App;
