import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import axios from 'axios';
import './SignatureCanvas.css'

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
      const response = await axios.post('/api/saveSignature', { image: imageData });
      console.log(response.data);
    } catch (error) {
      console.error('Error saving signature', error);
    }
  };

  return (
    <div>
      <p className='modal__input-title'>Signature</p>
      <SignatureCanvas
        ref={sigCanvasRef}
        penColor='black'
        canvasProps={{ width: 493, height: 200, className: 'signature-canvas', style: {border: '2px solid black'}}}
      />
      <div>
        <button onClick={handleClear}>Clear Signature</button>
        <button onClick={handleSave}>Save Signature</button>
      </div>
      {signatureImage && <img src={signatureImage} alt="Saved Signature" />}
    </div>
  );
};

export default SignatureCapture;
