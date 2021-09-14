import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

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