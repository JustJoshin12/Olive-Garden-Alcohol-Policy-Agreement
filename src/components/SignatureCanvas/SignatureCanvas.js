import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";
import "./SignatureCanvas.css";

const SignatureCapture = () => {
  const [signatureImage, setSignatureImage] = useState(null);
  const sigCanvasRef = React.createRef();

  const handleClear = () => {
    sigCanvasRef.current.clear();
    setSignatureImage(null);
  };

  const handleSave = () => {
    if (sigCanvasRef.current.isEmpty()) return;

    const imageData = sigCanvasRef.current.toDataURL();
    saveSignature(imageData);
    setSignatureImage(imageData);
  };

  const saveSignature = async (imageData) => {
    try {
      const response = await axios.post("/api/saveSignature", {
        image: imageData,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error saving signature", error);
    }
  };

  return (
    <div className="mt-[20px] mb-[20px] ">
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

      <button className="signature__clear-button" onClick={handleClear} type="button">
        Clear Signature
      </button>
      {signatureImage && <img src={signatureImage} alt="Saved Signature" />}
    </div>
  );
};

export default SignatureCapture;
