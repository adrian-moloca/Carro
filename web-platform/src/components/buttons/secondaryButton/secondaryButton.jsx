import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const SecondaryButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: "#F50057",
       backgroundColor:'#fff',
       borderColor: '#F50057',
       '&:hover': {
            backgroundColor: '#F50057',
            color:'#fff',
       },
    },

})(Button);

export default SecondaryButton;