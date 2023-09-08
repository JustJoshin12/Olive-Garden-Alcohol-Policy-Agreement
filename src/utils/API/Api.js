const exampleAPIRequest = {
  firstName: "Jacob",
  lastName: "Smith",
  signature: "filepath",
  shift: "Dinner",
  timestop: "08/31/2023",
};

const APIEndPoint = "http://localhost:8888/PolicyAgreement";

export const getEmployeeData = () => {
  const employeeAgreementData = fetch(APIEndPoint).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  console.log(employeeAgreementData);
  return employeeAgreementData;
};

export const sendEmployeeData = (data) => {
  return fetch(APIEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        firstName: data.firstname,
        lastName: data.lastName,
        signature: data.signature,
        shift: data.shift,
        timeStamp: data.timeStamp
    }),
  })
  .then((res) => { if(res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }

  })
};
