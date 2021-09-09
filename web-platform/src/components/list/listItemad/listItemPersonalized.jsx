import React from 'react';
import { ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const ListItemPersonalized = withStyles({
    root:{
        fontSize: '15px',
        marginTop: '-12px',
        fontWeight:'400',
    },

})(ListItem);

export default ListItemPersonalized;