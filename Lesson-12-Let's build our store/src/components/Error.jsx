import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error, "==error==");
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something went wrong</h2>
      <h3>
        {error.status}: {error.statusText}
      </h3>
      <h4>{error.data}</h4>
    </div>
  );
};

export default Error;
