import "./EmployeeChart.css";


const EmployeeChart = ({employeeChartData}) => {
  return (
    <section className="employee__agreement-display">
      <div className="employee__agreement-display__chart">
        <div className="column">
          <h2 className="column__label">Name</h2>
          {employeeChartData.map((employee,index) => {
            return <p className="column__employee-name" key={index}>{employee.firstName + " " + employee.lastName}</p>;
          })}
        </div>
        <div className="column">
          <div className="column__label">Signature</div>
          {employeeChartData.map((employee, index) => {
            return (
              <img
                className="column__employee-signature"
                src={employee.signature}
                alt="signature"
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmployeeChart;
