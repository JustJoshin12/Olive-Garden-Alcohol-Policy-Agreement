import React, { useState } from "react";
import "./AddNameModal.css";
import SignatureCanvas from "react-signature-canvas";

const AddNameModal = ({signatureData, onChange,onSignatureCapture }) => {
  console.log(signatureData)

  const sigCanvasRef = React.createRef();

  const handleClear = () => {
    sigCanvasRef.current.clear();
  };

  function handleSaveSignature (signatureData) {
    signatureData = sigCanvasRef.current.getTrimmedCanvas().toDataURL("image/png");  
    console.log(signatureData);
    onSignatureCapture
    
  };

  return (
      <div className="modal__form-contents">
        <label>
          <p className=" text-2xl font-['SourceSerif'] mb-[10px] font-[700]">
            First Name
          </p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[5px] mb-[10px]"
            type="text"
            name="firstname"
            minLength="4"
            maxLength="15"
            placeholder="first"
            required
            onChange={onChange}
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
            name="lastname"
            minLength="4"
            maxLength="15"
            placeholder="last"
            required
            onChange={onChange}
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

            <button
              className="signature__clear-button"
              onClick={handleClear}
              type="button"
            >
              Clear Signature
            </button>
            <button className="signature__save-button" onClick={signatureData} type="button"> 
              Save Signature
            </button>
          </div>
      </div>
    
  );
};

export default AddNameModal;
