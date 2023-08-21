import "./Main.css";
import employees from "../../utils/const";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";
import EmployeeChart from "../EmployeeChart/EmployeeChart";

const Main = ({onAgreement}) => {
  return (
    <main className="main">
      <PolicyAgreement onAgreement={onAgreement}/>
      <EmployeeChart/>
    </main>
  );
};

export default Main;
