import React from 'react';
import { withStyles } from '@mui/styles';
import { Radio } from '@mui/material';

const CarroRadio = withStyles({
    checked: {
        color: '#00b4d8',
    },
})((props)=><Radio color="default" {...props}/>);

export default CarroRadio;