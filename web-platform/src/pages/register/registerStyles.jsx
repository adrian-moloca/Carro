import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    AccordionBorderRadius: {
      borderRadius: "10px",
    },

    AccordionDetailsFlex: {
      display: "flex",
      flexDirection: "column",
    },

    SocialMediaAlign: {
      display: "flex",
      justifyCcontent: "space-evenly",
      width: "100%",
      alignItems: "center",
      marginTop: "35px",
      
    },
    ButtonWidth: {
      width: '100%',
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
  
  /* box-small 1 */
  // BoxImage:{
  //     backgroundImage
  // },
    });

export default useStyles;
