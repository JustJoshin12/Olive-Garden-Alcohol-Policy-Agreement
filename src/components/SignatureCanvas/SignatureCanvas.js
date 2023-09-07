import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./SignatureCanvas.css";

const SignatureCapture = ({clearSignature}) => {
  const sigCanvasRef = React.createRef();
  
  return (
    <div className="mt-[10px] mb-[20px] ">
      <p className={`modal__input-title mb-[15px]`}>Signature</p>
      <div className="w-[100%] h-[200px] border-solid border-2 border-black">
        <SignatureCanvas
        ref={sigCanvasRef}
        penColor="black"
        canvasProps={{
          className: "signature-canvas",
        }}/>
        </div>
      <span></span>

      <button className="signature__clear-button" onClick={clearSignature} type="button">
        Clear Signature
      </button>
    </div>
  );
};

export default SignatureCapture;
