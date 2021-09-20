import React from 'react';
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';

const SeeProfileBtn = withStyles({
    root:{
       fontWeight: 'normal',
       color: '#00b4d8',
       fontSize: 12,
       lineHeight: "143%",
       backgroundColor: 'transparent',
       '&:hover': {
        backgroundColor: 'transparent',
        color: '#00b4d8',
      },
    },

})(Button);

export default SeeProfileBtn;