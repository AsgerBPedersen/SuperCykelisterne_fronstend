import React from "react";

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  return (
    <p className="alert alert-danger p-2 m-1">
      <strong>Fejl!  </strong>
      {error.message.replace("GraphQL error: ", "")}
    </p>
  );
};

export default ErrorMessage;
