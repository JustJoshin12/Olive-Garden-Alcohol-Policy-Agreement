import "./EmployeeChart.css";
import employees from "../../utils/const";

const EmployeeChart = () => {
  return (
    <section className="employee__agreement-display">
      <div className="employee__agreement-display__chart">
        <div className="column">
          <h2 className="column__label">Name</h2>
          {employees.map((employee,index) => {
            return <p className="column__employee-name" key={index}>{employee.name}</p>;
          })}
        </div>
        <div className="column">
          <div className="column__label">Signature</div>
          {employees.map((employee) => {
            return (
              <img
                className="column__employee-signature"
                src={employee.signature}
                alt="signature"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployeeChart;