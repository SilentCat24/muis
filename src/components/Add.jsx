import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const Add = () => {
  return (
    <>
      <Tooltip title="Delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Add;
