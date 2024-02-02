import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const ManagerSignupModal = ({ isOpen, onClose, addManager }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    addManager({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      username: values.username,
      password: values.password,
    });
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
      title="Manager Signup"
      buttonText="Signup"
    >
      <div className="modal__form-contents">
        <label>
          <p className="search-list-input__title">First Name</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="text"
            name="firstName"
            value={values.firstName || ""}
            minLength="4"
            maxLength="15"
            required
            onChange={handleChange}
          />
          {errors.firstName && (
            <div className="text-red-500">{errors.firstName}</div>
          )}
        </label>
        <label>
          <p className="search-list-input__title">Last Name</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="text"
            name="lastName"
            value={values.lastName || ""}
            minLength="4"
            maxLength="15"
            required
            onChange={handleChange}
          />
          {errors.lastName && (
            <div className="text-red-500">{errors.lastName}</div>
          )}
        </label>
        <label>
          <p className="search-list-input__title">Email</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="text"
            name="email"
            value={values.email || ""}
            minLength="10"
            required
            onChange={handleChange}
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </label>
        <label>
          <p className="search-list-input__title">UserName</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="text"
            name="username"
            value={values.username || ""}
            minLength="4"
            maxLength="15"
            required
            onChange={handleChange}
          />
          {errors.username && (
            <div className="text-red-500">{errors.username}</div>
          )}
        </label>
        <label>
          <p className="search-list-input__title">Password</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="password"
            name="password"
            value={values.password || ""}
            minLength="4"
            maxLength="15"
            required
            onChange={handleChange}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </label>
      </div>
    </ModalWithForm>
  );
};

export default ManagerSignupModal;
