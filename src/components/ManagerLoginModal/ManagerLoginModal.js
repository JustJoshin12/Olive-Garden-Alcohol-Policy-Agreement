import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const ManagerLoginModal = ({ onClose, isOpen, onLogin }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    onLogin({ username: values.username, password: values.password });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <ModalWithForm
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      title="Manager Login"
      buttonText="Login"
    >
      <div className="pb-6">
        <label className="flex flex-col mb-[24px]">
          <p className="search-list-input__title">Username</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="text"
            name="username"
            value={values.username || ""}
            minLength="5"
            maxLength="15"
            required
            onChange={handleChange}
          />
          {errors.username && <div className="text-red-500">{errors.username}</div>}
        </label>
        <label className="">
          <p className="search-list-input__title">Password</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="password"
            name="password"
            value={values.password || ""}
            minLength="5"
            maxLength="10"
            required
            onChange={handleChange}
          />
          {errors.password && <div className="text-red-500">{errors.password}</div>}
        </label>
      </div>
    </ModalWithForm>
  );
};

export default ManagerLoginModal;
