import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader({ isRouterLoader }) {
  return (
    <div>
      {isRouterLoader ? (
        <div className="loader-wrapper-router">
          <div className="loader-icon"></div>
        </div>
      ) : (
        <div className="loader-wrapper">
          <div className="loader-icon"></div>
        </div>
      )}
    </div>
  );
}

export default Loader;
