import React from 'react';
import { makeStyles } from '@mui/styles';
import { Directions } from '@mui/icons-material';

const useStyles = makeStyles({

    starsStyle:{
        color: '#FFD700',
    },

    containerBackdrop:{
        backgroundColor: '#fff',
        margin: '1% 0',
        padding: '20px',
        width: '40%',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.31)'
    },

    radioGroupStyle:{
        display:'flex',
        justifyContent:'space-between',
    },
});

export default useStyles;