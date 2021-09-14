import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const SecondaryButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: "#fff",
       backgroundColor:'#F50057',
       '&:hover': {
            backgroundColor: '#fff',
            color:'#F50057',
       },
    },

})(Button);

export default SecondaryButton;