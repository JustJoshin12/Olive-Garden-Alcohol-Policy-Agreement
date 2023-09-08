import "./Main.css";
import employees from "../../utils/const";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";
import EmployeeChart from "../EmployeeChart/EmployeeChart";

const Main = ({ onAgreement, onPolicy, onSearch, hasReadPolicy }) => {
const employeeChartData = employees;
  return (
    <main className="main">
      <PolicyAgreement onAgreement={onAgreement} onPolicy={onPolicy} hasReadPolicy={hasReadPolicy} />
      <EmployeeChart employeeChartData={employeeChartData} />
      <div className="flex justify-end mr-[40px]">
        <button className={`modal__button`} onClick={onSearch}>Search</button>
      </div>
    </main>
  );
};

export default Main;
