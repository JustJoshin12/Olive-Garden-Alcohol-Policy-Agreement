const exampleAPIRequest = {
  firstName: "Jacob",
  lastName: "Smith",
  signature: "filepath",
  shift: "Dinner",
  timestop: "08/31/2023",
};

const APIEndPoint = "http://localhost:8888/PolicyAgreement";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getEmployeeData = ({shift,timeStamp}) => {
  return fetch(`${APIEndPoint}/SignatureList`,{
    method: "POST",
    body: JSON.stringify({
      shift: shift,
      timeStamp: timeStamp
    })
  }).then((res) => {
    return checkResponse(res)
  });
};

export const sendEmployeeData = ({firstName,lastName,signature,shiftTime,timeStamp}) => {
  return fetch(APIEndPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        signature: signature,
        shift: shiftTime,
        timeStamp: timeStamp
    }),
  })
  .then((res) => { 
      return checkResponse(res);
  })
};
