import "./AddNameModal.css";
import SignatureCapture from "../SignatureCanvas/SignatureCanvas";


const AddNameModal = () => {
    return (
        <div className="modal__form-contents">
            <label>
                <p className=" text-2xl font-['SourceSerif']">Name</p>
                <input
                className="border-black w-full"
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