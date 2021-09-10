import React, { useState } from "react";
import { Box, Grid, FormControlLabel, Radio, RadioGroup, InputAdornment } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import { withStyles } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'; 

const RadioGroupPersonalized = withStyles({
    root:{
          width:'100%',
          justifyContent:'space-between',
          marginBottom:'3%',
      },
  
  })(RadioGroup);

const StepFour = () =>{

    const[payment, setPayment] = useState('cardOnline');

    const[expDate, setExpDate] = useState(new Date('08/2024'));

    const handlePayment = (event)=>{
        setPayment(event.target.value);
      };

    

    const handleExpDate =(date)=>{
        setExpDate(date);
    };

    return(
        <Box display='flex' justifyContent='center' mt='8%'>
              <Grid container xs={12} spacing={3} >
                <Grid container item xs={12} justifyContent="center">
                  <Box fontWeight={500} fontSize={22}>Modalitati de plata</Box>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <RadioGroupPersonalized row value = {payment} onChange={handlePayment} >                   
                        <FormControlLabel value = 'cardOnline' control={<Radio/>} label='card Online'/>
                        <FormControlLabel value = 'ordinDePlata' control={<Radio/>} label='ordin de Plata'/>
                        <FormControlLabel value = 'ramburs' control={<Radio/>} label='Ramburs'/>
                    </RadioGroupPersonalized>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                  <CarroTextField variant ='outlined' label='Numar card' fullWidth/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                    <CarroTextField variant='outlined' label='Data expirare' fullWidth>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                    disableToolbar
                                    value={expDate}
                                    variant='outlined'
                                    format="MM/yyyy"
                                    onChange={handleExpDate}
                                />  
                        </MuiPickersUtilsProvider>
                    </CarroTextField>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                  <CarroTextField variant ='outlined' label='Nume complet' fullWidth/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                  <CarroTextField variant ='outlined' label='CVV/CVC' fullWidth/>
                </Grid>
              </Grid>
          </Box>
    );
};

export default StepFour;