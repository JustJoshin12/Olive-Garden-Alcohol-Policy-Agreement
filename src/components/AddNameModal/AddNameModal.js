import React from "react";
import "./AddNameModal.css";
import SignatureCanvas from "react-signature-canvas";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddNameModal = ({ shiftTime, timeStamp, isOpen, onClose, onAddData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signature, setSignature] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSaveSignature = () => {
    const imageData = sigCanvasRef.current.toDataURL();
    setSignature(imageData);
  };

  const sigCanvasRef = React.createRef();

  const handleClear = () => {
    sigCanvasRef.current.clear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddData({firstName,lastName,signature,shiftTime,timeStamp})
  };

  useEffect(() => {
    if (isOpen) {
      setFirstName("");
      setLastName("");
      setSignature("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit}>
      <div className="modal__form-contents">
        <label>
          <p className=" text-2xl font-['SourceSerif'] mb-[10px] font-[700]">
            First Name
          </p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[5px] mb-[10px]"
            type="text"
            name="firstName"
            minLength="4"
            maxLength="15"
            placeholder="first"
            required
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <span className="modal__error"></span>
        </label>
        <label>
          <p className=" text-2xl font-['SourceSerif'] mb-[10px] font-[700]">
            Last Name
          </p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[5px] mb-[10px]"
            type="text"
            name="lastName"
            minLength="4"
            maxLength="15"
            placeholder="last"
            required
            value={lastName}
            onChange={handleLastNameChange}
          />
          <span className="modal__error"></span>
        </label>
        <div className="mt-[10px] mb-[20px] ">
          <p className={`modal__input-title mb-[15px]`}>Signature</p>
          <div className="w-[100%] h-[200px] border-solid border-2 border-black">
            <SignatureCanvas
              ref={sigCanvasRef}
              penColor="black"
              canvasProps={{
                className: "signature-canvas",
              }}
            />
          </div>
          <span></span>
          <div className="flex justify-between">
            <button
              className="signature__clear-button"
              onClick={handleClear}
              type="button"
            >
              Clear Signature
            </button>
            <button
              className="signature__save-button"
              onClick={handleSaveSignature}
              type="button"
            >
              Save Signature
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddNameModal;
