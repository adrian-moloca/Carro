import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const PrimaryButton = withStyles({
    root:{
       fontWeight: 'bold',
       color: '#fff',
       backgroundColor: '#00b4d8',
       '& .MuiButton-label':{
           display: 'flex', 
          justifyItems:'center',
        },


       '&:hover': {
            backgroundColor: '#0088a3',
       },
    },

})(Button);

export default PrimaryButton;