export function addEmail(email) {
  return {
    type: "ADD_EMAIL",
    payload: email
  };
}

export function addPassword(password) {
  return {
    type: "ADD_PASSWORD",
    payload: password
  };
}
