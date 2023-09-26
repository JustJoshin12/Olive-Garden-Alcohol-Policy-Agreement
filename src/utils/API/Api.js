const APIEndPoint = "https://2d7e-67-165-141-227.ngrok-free.app";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getEmployeeData = ({ shift, timeStamp }) => {
  return fetch(`${APIEndPoint}/SignatureList`, {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      shift: shift,
      timestamp: timeStamp,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const sendEmployeeData = ({
  firstName,
  lastName,
  signature,
  shiftTime,
  timeStamp,
}) => {
  console.log(timeStamp);
  return fetch(`${APIEndPoint}/PolicyAgreement`, {
    method: "POST",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      signature: signature,
      shift: shiftTime,
      timeStamp: timeStamp,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};
