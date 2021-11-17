import React from "react";
import {registerLocale} from 'react-datepicker';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import CarroTextField from "../textField/CarroTextField";
import {ro} from "date-fns/locale";

registerLocale('ro', ro);

const DatePickerTh = createTheme({
    palette:{
        primary: {
            500:'#00b4d8',
        },
    },
});

const CarroDatePicker = (props)=>{

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ro}>
            <ThemeProvider theme={DatePickerTh}>
                <KeyboardDatePicker
                    disableToolbar
                    // value={props.dateValue}
                    inputVariant="outlined"
                    variant='inline'
                    autoOk={true}
                    TextFieldComponent={CarroTextField}
                    fullWidth
                    defaultValue={props.defaultShow}
                    disablePast
                    {...props}
                />  
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    );
};

export default CarroDatePicker;