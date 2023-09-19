import "../SearchListPage/SearchListPage.css";
import EmployeeChart from "../EmployeeChart/EmployeeChart";

export const SearchListPage = ({ onSearch, searchData }) => {
    
  return (
    <main className="search-list-page">
      <div className="flex justify-center mb-[20px]">
        <button className={`modal__button`} onClick={onSearch}>
          Search
        </button>
      </div>
      <EmployeeChart employeeChartData={searchData}/>
    </main>
  );
};
