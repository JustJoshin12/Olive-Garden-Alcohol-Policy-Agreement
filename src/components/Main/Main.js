import "./Main.css";
import employees from "../../utils/const";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";
import EmployeeChart from "../EmployeeChart/EmployeeChart";

const Main = ({ onAgreement, onPolicy, hasReadPolicy }) => {
  return (
    <main className="main">
      <PolicyAgreement onAgreement={onAgreement} onPolicy={onPolicy} hasReadPolicy={hasReadPolicy} />
      <EmployeeChart />
      <div className="flex justify-end mr-[40px]">
        <button className={`modal__button`}>Search</button>
      </div>
    </main>
  );
};

export default Main;
