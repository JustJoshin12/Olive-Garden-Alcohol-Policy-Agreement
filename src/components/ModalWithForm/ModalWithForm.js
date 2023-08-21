import "./ModalWithForm.css"

const ModalWithForm = ({children,name,onClose,title ,buttonText = "Agree"}) => {
    return (
        <div className={`modal modal_type_${name}`}>
        <div className="modal__content">
          <button type="button" onClick={onClose} className="modal__close-button"/>
          <h3 className="modal__header">{title}</h3>
          <form>
            {children}
            <button type="submit" className="modal__submit-button"> {buttonText} </button>
            </form>
        </div>
      </div>
    )
}

export default ModalWithForm;