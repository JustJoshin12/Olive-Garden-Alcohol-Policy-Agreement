import "./Main.css";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";
import EmployeeChart from "../EmployeeChart/EmployeeChart";

const Main = ({ onPolicy, employeeChartData, loggedIn, onSearch }) => {
  return (
    <main className="main">
      <PolicyAgreement onPolicy={onPolicy} loggedIn={loggedIn} onSearch={onSearch}/>
      <EmployeeChart employeeChartData={employeeChartData} />
    </main>
  );
};

export default Main;
