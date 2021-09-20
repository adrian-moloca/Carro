import React from 'react';
import { withStyles } from '@mui/styles';
import { Checkbox} from '@mui/material';



const CarroCheckbox = withStyles({
    checked: {
        color: '#00b4d8',
    },
})((props)=><Checkbox color="default" {...props}/>);

export default CarroCheckbox;