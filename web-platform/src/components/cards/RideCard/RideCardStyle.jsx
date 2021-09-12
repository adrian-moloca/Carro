import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    GreenButton:{
        backgroundColor: '#34D02D',     
        color: '#fff',
        fontWeight: '600', 
        '&:hover':{
            backgroundColor:'#fff',
            color: '#34D02D',
        },
    },

    greyLinesStyle:{
        height:'1px',
        width:'100%',
        
    },

    boxesImageStyle:{
        paddingTop:'13%',
    },

});

export default useStyles;