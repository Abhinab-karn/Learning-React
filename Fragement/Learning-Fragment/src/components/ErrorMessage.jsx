import React from "react";

const ErrorMessage = ({ foodItm }) => {
  return <>{foodItm.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMessage;
