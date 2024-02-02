import "./ModalWithForm.css";
import React from "react" ;


const ModalWithForm = ({
  children,
  name,
  onClose,
  title,
  buttonText,
  onSubmit
}) => {
 
    return (
      <div className={`modal modal_type_${name}`}>
        <div className="modal__content">
          <button
            type="button"
            onClick={onClose}
            className="modal__close-button"
          />
          <h3 className="font-['SourceSeriff'] font-bold text-[40px] mt-[26px] text-center pb-[40px]">
            {title}
          </h3>
          <form onSubmit={onSubmit}>
            {children}
            <div className="flex justify-end">
              <button type="submit" className="modal__submit-button">
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };


export default ModalWithForm;
