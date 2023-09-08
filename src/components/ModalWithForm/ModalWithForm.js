import "./ModalWithForm.css";
import React, { useState } from "react";

const ModalWithForm = ({
  children,
  name,
  onClose,
  title,
  buttonText = "Save",
  shiftTime,
  timeStamp,
}) => {
  const [formData, setFormData] = useState({});
  const [signatureImage, setSignatureImage] = useState(null);

  const handleSignatureCapture = (dataUrl) => {
    setSignatureImage(dataUrl);
  };

  console.log(timeStamp.getMonth());

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onChange: handleInputChange,
        signatureData: handleSignatureCapture,
      });
    }
    return child;
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalFormData = {
      ...formData,
      signature: signatureImage,
      shift: shiftTime,
      timeStamp: `0${timeStamp.getMonth()}/${timeStamp.getDate()}/${timeStamp.getFullYear()}`,
    };
    console.log("Form Data", finalFormData);
  };

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        />
        <h3 className="font-['SourceSeriff'] font-bold text-[44px] mt-[26px] text-center pb-[40px]">
          {title}
        </h3>
        <form onSubmit={handleSubmit}>
          {childrenWithProps}
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
