import "./AddNameModal.css";
import SignatureCapture from "../SignatureCanvas/SignatureCanvas";

const AddNameModal = () => {
  return (
    <div className="modal__form-contents">
      <label>
        <p className=" text-2xl font-['SourceSerif'] mb-[10px] font-[700]">
          Name
        </p>
        <input
          className="border-black border-2 border-solid w-full rounded p-[5px]"
          type="text"
          name="name"
          minLength="8"
          maxLength="30"
          placeholder="Name"
          required
        />
        <span className="modal__error"></span>
      </label>
      <div>
        <SignatureCapture/>
      </div>
    </div>
  );
};

export default AddNameModal;
