import React from "react";
import { Link } from "react-router-dom";

//Material Ui
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const ConditionTask = (props) => {
  return (
    <Stack
      className="d-flex justify-content-between mb-3"
      direction="row"
      spacing={1}
      style={{ maxWidth: "59%" }}
    >
      <Chip label={`Done : ${props.done}`} className="bg-success :" />
      <Link to="/">
        <button type="button" className="btn btn-secondary m-5">
          home
        </button>
      </Link>
      <Chip
        label={`InProgress : ${props.inProgress}`}
        variant="outlined"
        className="bg-secondary"
      />
    </Stack>
  );
};

export default ConditionTask;
