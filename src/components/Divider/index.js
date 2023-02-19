import React from "react";

import { Link } from "react-router-dom";

const Divider = () => {
  return (
    <div className="d-flex justify-content-center">
      <Link to="/chart">
        <button type="button" className="btn btn-secondary m-5">
          chart
        </button>
      </Link>

      <Link to="/todo">
        <button type="button" className="btn btn-secondary m-5">
          to do
        </button>
      </Link>
    </div>
  );
};

export default Divider;
