import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const SecondaryButton = withStyles({
    root:{
       fontWeight: 'bold',
       border: '1px solid ',
       borderRadius: '4px',
       color: "rgba(245, 0, 87, 0.5)",
       background: 'transparent',

       '&:hover': {
           color:'#fff',
           backgroundColor: 'rgba(245, 0, 87, 0.5)',
           border: 'rgba(245, 0, 87, 0.5)',
       },
    },

})(Button);

export default SecondaryButton;