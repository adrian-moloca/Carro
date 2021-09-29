import React from 'react';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const IconButtonNoVerticalPadding = withStyles({

    root:{
        paddingTop: 0,
        paddingBottom: 0,
    },

})(IconButton);


export default IconButtonNoVerticalPadding;