import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({

  arrowsSpacingRight:{
    marginRight: 30,
    fontSize: 15,
  },
  arrowsSpacingLeft:{
    marginLeft: 30,
    fontSize: 15,
  },
  textSpacingLeft:{
    marginLeft: 35,
    fontSize: 15,
  },
  textSpacingRight:{
    marginRight: 35,
    fontSize: 15,
  },

}));

export default useStyles;