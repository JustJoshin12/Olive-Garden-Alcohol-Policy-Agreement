

const APIEndPoint = "http://localhost:8888";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getEmployeeData = ({shift,timeStamp}) => {
  return fetch(`${APIEndPoint}/SignatureList`,{
    method: "POST",
    body: JSON.stringify({
      shift: shift,
      timestamp: timeStamp
    })
  }).then((res) => {
    return checkResponse(res)
  });
};

export const sendEmployeeData = ({firstName,lastName,signature,shiftTime,timeStamp}) => {
  console.log(timeStamp)
  return fetch(`${APIEndPoint}/PolicyAgreement`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        signature: signature,
        shift: shiftTime,
        timestamp: timeStamp,
    }),
  })
  .then((res) => { 
      return checkResponse(res);
  })
};
