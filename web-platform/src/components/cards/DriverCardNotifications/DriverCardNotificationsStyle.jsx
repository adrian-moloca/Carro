import React from 'react';
import { makeStyles, List, ListItem} from '@material-ui/core';

const useStyles = makeStyles({
    cardStyle:{
        width:'30%',
        borderShadow: '0 1 1 0',
    },

    profileImg:{
        height: '77px',
        width:'77px',
    },

    starsStyle:{
        color: '#FFD700',
    },
});

export default useStyles;