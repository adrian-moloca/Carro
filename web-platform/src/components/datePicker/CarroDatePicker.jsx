import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {  MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import CarroTextField from "../textField/CarroTextField";

const DatePickerTh = createTheme({
    palette:{
        primary: {
            500:'#00b4d8',
        }, 
    },

});

const CarroDatePicker = (props)=>{

    return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={DatePickerTh}>
                    <KeyboardDatePicker
                            disableToolbar
                            value={props.dateValue}
                            inputVariant="outlined"
                            variant='inline'
                            label={props.label}
                            views={props.views}
                            format={props.format}
                            openTo={props.openTo}
                            TextFieldComponent={CarroTextField}
                            onChange={props.handleDateSelect}
                            fullWidth
                            defaultValue={props.defaultShow}
                            disablePast
                        />  
                </ThemeProvider>
            </MuiPickersUtilsProvider>
    );

};

export default CarroDatePicker;