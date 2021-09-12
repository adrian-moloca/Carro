import React, { useState } from "react";
import { Box, Grid, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroDatePicker from "../../../components/datePicker/CarroDatePicker";
import CarroRadio from "../../../components/radio/CarroRadio";

const RadioGroupPersonalized = withStyles({
    root:{
          width:'60%',
          justifyContent:'space-between',
          marginBottom:'3%',
      },
  
  })(RadioGroup);

const StepFour = () =>{

    const[payment, setPayment] = useState('cardOnline');

    const[expDate, setExpDate] = useState(new Date());

    const handlePayment = (event)=>{
        setPayment(event.target.value);
      };

    

    const handleExpDate =(date)=>{
        setExpDate(date);
    };

    return(
        <Box display='flex' justifyContent='center' mt='3%'>
              <Grid container xs={12} spacing={3} >
                <Grid container item xs={12} justifyContent="center">
                  <Box fontWeight={500} fontSize={22}>Modalitati de plata</Box>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <RadioGroupPersonalized row value = {payment} onChange={handlePayment} >                   
                        <FormControlLabel value = 'cardOnline' control={<CarroRadio/>} label='card Online'/>
                        <FormControlLabel value = 'ordinDePlata' control={<CarroRadio/>} label='ordin de Plata'/>
                        <FormControlLabel value = 'ramburs' control={<CarroRadio/>} label='Ramburs'/>
                    </RadioGroupPersonalized>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                  <CarroTextField variant ='outlined' label='Numar card' fullWidth/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroDatePicker dateValue={expDate} handleDateSelect={handleExpDate}
                                views={["month","year"]} defaultShow={expDate} format="MM/yyyy" openTo='month' label='Data expirare'/>  
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