import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  name,
  onClose,
  title,
  buttonText = "Save",
}) => {
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
        <form>
          {children}
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
