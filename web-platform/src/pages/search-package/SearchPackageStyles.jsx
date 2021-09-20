import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    SearchPackagesContent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    "& .MuiTextField-root": {
      margin: 1,
      width: "18ch",
    },
  }

});
export default useStyles;
