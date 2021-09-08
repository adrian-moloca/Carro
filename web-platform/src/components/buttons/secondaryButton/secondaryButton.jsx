import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const SecondaryButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: "#F50057",
       backgroundColor:'#fff',
       '&:hover': {
           color:'#fff',
           backgroundColor: '#F50057',
       },
    },

})(Button);

export default SecondaryButton;