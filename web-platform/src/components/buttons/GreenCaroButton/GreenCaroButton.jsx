import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const GreenCaroButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: '#fff',
       backgroundColor: '#34D02D',
       '&:hover': {
        backgroundColor: '#FFFFFF',
        color: '#000',
      },
    },

})(Button);

export default GreenCaroButton;