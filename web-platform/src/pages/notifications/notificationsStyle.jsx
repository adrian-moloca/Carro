import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>({
  
  AccordionBorderRadius : {
    borderRadius: '10px',
  },  
  AccordionDetailsFlex : {
    display: 'flex',
    flexDirection: 'column',
  },

}));

export default useStyles;