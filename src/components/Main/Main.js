import "./Main.css";
import employees from "../../utils/const";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";
import EmployeeChart from "../EmployeeChart/EmployeeChart";

const Main = ({onAgreement,onPolicy}) => {
  return (
    <main className="main">
      <PolicyAgreement onAgreement={onAgreement} onPolicy={onPolicy}/>
      <EmployeeChart/>
    </main>
  );
};

export default Main;
