import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

    root: {
      
    },
  
    AccordionBorderRadius: {
      border: 'none',
      borderRadius: "10px",
      boxShadow: "none",
      '&::before': {
        top: -1,
        left: 0,
        right: 0,
        height: 0,
        opacity: 1,
        position: "absolute",
        content: "",
      }
    },
    AccordionDetailsFlex: {
      display: "flex",
      flexDirection: "column",
    },

    // SocialMediaAlign: {
    //   display: "flex",
    //   justifyCcontent: "space-evenly",
    //   width: "100%",
    //   alignItems: "center",
    //   marginTop: "35px",
      
    // },
    // ButtonWidth: {
    //   width: '100%',
    // },
    // PrimaryButton:{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   width: '100%',
    //   height: '42px',
    //   backgroundColor: '#00B4D8',
    //   margin: 'auto',
    //   marginTop: '20px',
    //   marginBottom: '20px',
    //   '&:hover': {
    //     backgroundColor: '#FFFFFF',
    //     color: '#00B4D8',
    //   },
    //   TextFieldOutline: {
    //     '&.Mui-focused fieldset': {
    //       borderColor: '#00B4D8',
    //     },
    //   },
    // }
  });

export default useStyles;
