import React from "react";
import "./AddNameModal.css";
import SignatureCanvas from "react-signature-canvas";
import { useState, useEffect, useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const AddNameModal = ({ shiftTime, timeStamp, isOpen, onClose, onAddData }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const [signature, setSignature] = useState("");
  const sigCanvasRef = useRef(null);

  const handleSaveSignature = () => {
    if (sigCanvasRef.current) {
      const imageData = sigCanvasRef.current.toDataURL();
      setSignature(imageData);
    }
  };

  const handleClear = () => {
    sigCanvasRef.current.clear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    handleSaveSignature();
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  useEffect(() => {
    if (signature) {
      onAddData({
        firstName: values.firstName,
        lastName: values.lastName,
        signature,
        shiftTime,
        timeStamp,
      });
    }
  }, [signature]);

  return (
    <ModalWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      title="Policy Agreement Signature"
      buttonText="Save"
    >
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
            maxLength="10"
            placeholder="first"
            required
            value={values.firstName || ""}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName}</span>
          )}
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
            maxLength="10"
            placeholder="last"
            required
            value={values.lastName || ""}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName}</span>
          )}
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
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddNameModal;
