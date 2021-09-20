import React, { useState } from 'react';
import PhoneTextField from 'mui-phone-textfield';
import { withStyles } from '@mui/styles';

const CarroPhoneTextField = withStyles({
    '.MuiFormControl':{
        root:{
            border:'none',
            display: 'none',
        },
    },
})(PhoneTextField)

export default CarroPhoneTextField;