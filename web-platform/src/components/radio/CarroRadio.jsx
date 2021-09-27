import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Radio } from '@material-ui/core';

const CarroRadio = withStyles({checked: { color: '#00b4d8'}})((props)=><Radio color="default" {...props}/>);

export default CarroRadio;