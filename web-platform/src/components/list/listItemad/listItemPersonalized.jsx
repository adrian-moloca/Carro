import React from 'react';
import { ListItem } from '@mui/material';
import { withStyles } from '@mui/styles';

const ListItemPersonalized = withStyles({
    root:{
        fontSize: '15px',
        marginTop: '-12px',
        fontWeight:'400',
    },

})(ListItem);

export default ListItemPersonalized;