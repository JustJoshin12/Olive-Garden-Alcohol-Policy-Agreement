import "./Main.css";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";
import EmployeeChart from "../EmployeeChart/EmployeeChart";

const Main = ({ onAgreement, onPolicy, hasReadPolicy, employeeChartData }) => {
  return (
    <main className="main">
      <PolicyAgreement onAgreement={onAgreement} onPolicy={onPolicy} hasReadPolicy={hasReadPolicy} />
      <EmployeeChart employeeChartData={employeeChartData} />
    </main>
  );
};

export default Main;
