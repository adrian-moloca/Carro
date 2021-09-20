import React from 'react';
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';

const GreenCaroButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: '#fff',
       backgroundColor: '#34D02D',
       '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#34D02D',
      },
    },

})(Button);

export default GreenCaroButton;