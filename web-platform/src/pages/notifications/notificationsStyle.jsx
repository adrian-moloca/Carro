import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
  
  AccordionBorderRadius : {
    borderRadius: '10px',
  },  
  AccordionDetailsFlex : {
    display: 'flex',
    flexDirection: 'column',
  },
  GreenButton:{
    backgroundColor: '#34D02D',     
    color: '#fff',
    fontWeight: '600', 
    '&:hover':{
        backgroundColor:'#fff',
        color: '#34D02D',
    },
    // paginationPosition: {
    //   marginTop: theme.spacing(20)
    // }
},

}));

export default useStyles;