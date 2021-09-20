import React, { useState } from "react";
import { Box, Grid, } from "@mui/material";
import CarroTextField from "../../../components/textField/CarroTextField";
import TelephoneNumberField from "../../../components/telephoneNumberField/telephoneNumberField";
import CarroPhoneTextField from '../../../components/telephoneNumberField/telephoneNumberField';

const StepTwo = () =>{

    const[phoneNumber, setPhoneNumber] = useState();
    const[phoneNumberValue, setPhoneNumberValue] = useState();
    const [country, setCountry] = useState('RO');

    const handleCountrySelect = ({country, formattedValue, phoneNumber}) =>{
        setPhoneNumberValue(formattedValue);
        setCountry(country);
        setPhoneNumber(phoneNumber);
    }

    const handlePhoneNumber = ({formattedValue, phoneNumber})=>{
        setPhoneNumberValue(formattedValue);
        setPhoneNumber(phoneNumber);
    }


    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            <Grid container xs={12} spacing={3} >
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Nume destinatar' fullWidth/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroPhoneTextField variant='outlined' label='Numar de telefon' error={Boolean(phoneNumberValue && phoneNumber?.country !== country)} 
                          value={phoneNumberValue} onChange={handlePhoneNumber} country={country} onCountrySelect={handleCountrySelect} fullWidth/>
            {console.log(phoneNumber)}
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <CarroTextField variant ='outlined' label='Adresa destinatar' fullWidth/>
            </Grid>
            </Grid>
        </Box>
    );
};

export default StepTwo;