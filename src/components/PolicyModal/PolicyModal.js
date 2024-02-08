import "../../components/PolicyModal/PolicyModal.css";
import { useState } from "react";

const PolicyModal = ({ onClose, onDone }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button className="policy__modal-close-button" onClick={onClose} />
        <h2 className="policy__modal-header">Enhanced Age Verification</h2>
        <p className="policy__modal-info">
          I will check the ID of Each Guest who orders Alcohol and Appears to be
          under the age of 40. I will verify age using the age verification
          process - Either Ziosk, Scan at the Bar or Dash POS and outlined by
          the managers. I will not serve Alcohol to any guest who is under the
          age of 21. Failure to comply with this policy will result in
          termination of employment.
        </p>
        <div className="mt-[25px] flex justify-between">
          <button
            className={`policy__modal-submit-button ${
              isChecked ? "" : "policy__modal-submit-button-disabled"
            }`}
            type="button"
            disabled={!isChecked}
            onClick={onDone}
          >
            Agree
          </button>
          <div className="flex items-center">
            <input
              className="policy__modal-check-button"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label className="policy__modal-check-text">
              I have read the policy above
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
