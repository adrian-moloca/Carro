import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({

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

});

export default useStyles;