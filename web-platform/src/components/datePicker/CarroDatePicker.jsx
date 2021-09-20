import React from "react";
import {registerLocale} from 'react-datepicker';
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@mui/material";
import DateFnsUtils from '@date-io/date-fns';
import LocalizationProvider  from "@mui/lab/LocalizationProvider";
import DatePicker from '@mui/lab/DatePicker';
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
            <LocalizationProvider  utils={DateFnsUtils} locale={ro}>
                <ThemeProvider theme={DatePickerTh}>
                    <DatePicker
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
            </LocalizationProvider >
    );

};

export default CarroDatePicker;