import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  SmallContainer: {
    backgroundColor: "#ffff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.31)",
  },
  SelectPlanContainterWidth: {
    width: "50%",
  },
  SmallContainerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  SmallContainerContentText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "150%",
    marginBottom: '20px',
  },
  CheckingBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: 'center',
    margin: "10px",
    fontSize: "22px",
  },
  DeclineIcon: {
  width: '16px',
  height: '16px',
  },
  SmallContainerPackage: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    letterSpacing: '0.15px',
    color: '#00B4D8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    marginTop: '20px'
  },
  PrimaryButton:{
    display: 'flex',
    justifyContent: 'center',
    width: '225px',
    height: '42px',
    backgroundColor: '#00B4D8',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#00B4D8',
    },
  },
  
 
});

export default useStyles;
