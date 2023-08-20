import "./Main.css";
import employees from "../../utils/const";
import PolicyAgreement from "../Modal-policy-agreement/Modal-policy-agreement";
import signature from "../../images/signature.png";

const Main = () => {
  return (
    <main className="main">
      <PolicyAgreement />
      <section className="employee__agreement-display">
        <div className="employee__agreement-display__chart">
          <div className="column">
            <h2 className="column__label">Name</h2>
            <p className="column__employee-name">Joshua Smith</p>
            <p className="column__employee-name">Joshua Smith</p>
            <p className="column__employee-name">Joshua Smith</p>
            <p className="column__employee-name">Joshua Smith</p>
            <p className="column__employee-name">Joshua Smith</p>
            <p className="column__employee-name">Joshua Smith</p>
          </div>
          <div className="column">
            <div className="column__label">Signature</div>
            <div className="column__employee-signature">
            <img
            className="column__employee-signature-image"
              src={signature}
              alt=" signature"
            />
            </div>
            <div className="column__employee-signature">
            <img
            className="column__employee-signature-image"
              src={signature}
              alt=" signature"
            />
            </div>
            <div className="column__employee-signature">
            <img
            className="column__employee-signature-image"
              src={signature}
              alt=" signature"
            />
            </div>
            <div className="column__employee-signature">
            <img
            className="column__employee-signature-image"
              src={signature}
              alt=" signature"
            />
            </div>
            <div className="column__employee-signature">
            <img
            className="column__employee-signature-image"
              src={signature}
              alt=" signature"
            />
            </div>
            <div className="column__employee-signature">
            <img
            className="column__employee-signature-image"
              src={signature}
              alt=" signature"
            />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
