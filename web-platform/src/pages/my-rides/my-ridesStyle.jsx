import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Block } from '@material-ui/icons';

const useStyles = makeStyles({

    AccordionBorderRadius : {
        borderRadius: '10px',
    },

    AccordionDetailsFlex : {
        display: 'flex',
        flexDirection: 'column',
    },

    SmallBoxImage:{
        position: 'absolute',
        height: '71px',
        width:'59px',
        left: '472px',
        top:'407px',
        backgroundImage: 'url(../../assets/images/box-small.png)',
    },

    /* box-small 1 */

/* position: absolute;
width: 71px;
height: 59px;
left: 472px;
top: 407px;

background: url(box-small.png);
 */

});

export default useStyles;
