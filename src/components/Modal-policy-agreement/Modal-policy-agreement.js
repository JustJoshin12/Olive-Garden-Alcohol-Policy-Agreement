import "./Modal-policy-agreement.css";

const PolicyAgreement = ({ onAgreement, onPolicy, hasReadPolicy }) => {
  return (
    <section className="modal__buttons">
      <button className="modal__button" onClick={onPolicy}>
        Policy
      </button>
      <button
        className={`modal__button ${
          hasReadPolicy ? "" : "modal__button-disabled"
        }`}
        disabled={!hasReadPolicy}
        onClick={onAgreement}
      >
        Agree
      </button>
    </section>
  );
};

export default PolicyAgreement;
