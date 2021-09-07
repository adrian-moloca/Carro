import React from "react";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(
 {

 
    SecondaryButton: {
        width:  '195px',
        height: '42px',
        border: '1px solid ',
        borderRadius: '4px',
        color: "rgba(245, 0, 87, 0.5)"
        
    },
    PrimaryButton:{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '42px',
        backgroundColor: '#00B4D8',
        margin: 'auto',
        '&:hover': {
          backgroundColor: '#FFFFFF',
          color: '#00B4D8',
        },
        TextFieldOutline: {
          '&.Mui-focused fieldset': {
            borderColor: '#00B4D8',
      },
    }}

        
    });
export default useStyles;
