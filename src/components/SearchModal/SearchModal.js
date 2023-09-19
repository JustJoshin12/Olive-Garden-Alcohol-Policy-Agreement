import "../../components/SearchModal/SearchModal.css";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { getEmployeeData } from "../../utils/API/Api";

const SearchModal = ({ isOpen, onClose, onSearchData}) => {
  const [shift, setShift] = useState("");
  const [timeStamp, setTimeStamp] = useState("");

  useEffect(() => {
    if(isOpen){
      setShift('')
      setTimeStamp('')
    }
  },[isOpen]);

  const handleShiftChange = (e) => {
    setShift(e.target.value);
  };

  const handleDateChange = (e) => {
    const inputDate = e.target.value;
    const dateSplit = inputDate.split("-");
    const formattedDate = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`;
    setTimeStamp(formattedDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getEmployeeData({shift,timeStamp})
    .then((data) => {
      onSearchData(data);
      onClose()
    })
  };

  return (
    <ModalWithForm onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} title="Search Employee List">
      <div className="modal__form-contents">
        <label className="flex flex-col mb-[24px]">
          <p className="search-list-input__title">Date</p>
          <input
            className="border-black border-2 border-solid w-full rounded p-[2px] mb-[10px]"
            type="date"
            name="date"
            minLength="8"
            maxLength="30"
            required
            onChange={handleDateChange}
          />
        </label>
        <p className="search-list-input__title">Shift</p>
        <div className="modal__radio-options">
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              name="shiftType"
              type="radio"
              value="Lunch"
              onChange={handleShiftChange}
            />
            <label className="text-base font-['SourceSerif'] pl-[10px]">
              Lunch
            </label>
          </div>
          <div className="modal__radio-option">
            <input
              className="modal__radio-button"
              name="shiftType"
              type="radio"
              value="Dinner"
              onChange={handleShiftChange}
            />
            <label className="text-base font-['SourceSerif']  pl-[10px]">
              Dinner
            </label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default SearchModal;
