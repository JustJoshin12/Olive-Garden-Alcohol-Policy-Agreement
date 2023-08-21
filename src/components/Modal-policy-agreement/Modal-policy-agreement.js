import "./Modal-policy-agreement.css";

const PolicyAgreement = ({onAgreement}) => {
  return (
    <section className="modal__buttons">
      <button className="modal__button">Policy</button>
      <button className="modal__button" onClick={onAgreement}>Agree</button>
    </section>
  );
};

export default PolicyAgreement;
