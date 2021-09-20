import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({

    AccordionBorderRadius : {
        borderRadius: '10px',
    },

    AccordionDetailsFlex : {
        display: 'flex',
        flexDirection: 'column',
    },

    GreenButton:{
        backgroundColor: '#34D02D',     
        color: '#fff',
        fontWeight: '600', 
        '&:hover':{
            backgroundColor:'#fff',
            color: '#34D02D',
        },
    },

    advStyle:{
        height:'33px',
        paddingTop:'5%',
        paddingBottom: '5%',
    },

});

export default useStyles;