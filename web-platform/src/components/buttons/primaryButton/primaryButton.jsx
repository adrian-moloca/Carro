import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const PrimaryButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: '#fff',
       backgroundColor: '#00b4d8',
       width: '195px',
       '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#00B4D8',
      },
    },

})(Button);

export default PrimaryButton;