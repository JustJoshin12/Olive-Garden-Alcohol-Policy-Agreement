import "./Modal-policy-agreement.css";
import { Link } from "react-router-dom";

const PolicyAgreement = ({ onPolicy, loggedIn, onSearch }) => {
  return (
    <section className="modal__buttons">
      <button className="modal__button" onClick={onPolicy}>
        Policy
      </button>
      {loggedIn ? (
        <Link to="/Olive-Garden-Alcohol-Policy-Agreement/search">
          <button className="modal__button" onClick={onSearch}>Search Date</button>
        </Link>
      ) : (
        <></>
      )}
    </section>
  );
};

export default PolicyAgreement;
