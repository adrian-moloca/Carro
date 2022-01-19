import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Checkbox} from '@material-ui/core';

const GreenCheckbox = withStyles({checked: {color: '#34D02D'}})((props)=><Checkbox color="default" {...props}/>);

export default GreenCheckbox;