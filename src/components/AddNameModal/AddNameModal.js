import "./AddNameModal.css";
import SignatureCapture from "../SignatureCanvas/SignatureCanvas";


const AddNameModal = () => {
    return (
        <div className="modal__form-contents">
            <label>
                <p className="modal__input-title">Name</p>
                <input
                className="modal__input"
                type="text"
                name="name"
                minLength="8"
                maxLength="30"
                placeholder="Name"
                required
                />
            </label>
            <label>
             <SignatureCapture/>
            </label>
        </div>
    )
}

export default AddNameModal;