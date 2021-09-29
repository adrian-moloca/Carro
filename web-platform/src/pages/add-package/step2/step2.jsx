import React, { useState, useEffect } from "react";
import { Box, Grid, } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import PhoneTextField from "../../../components/telephoneNumberField/PhoneTextField";

const StepTwo = (props) =>{

    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null);
    const [countryPhoneCode, setCountryPhoneCode] = useState(null);

    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            <Grid container xs={12} spacing={3} >
                <Grid container item xs={6} justifyContent="center">
                    <CarroTextField variant ='outlined' label='Nume destinatar' fullWidth/>
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                    <PhoneTextField 
                        number={inputValuePhoneNumber} 
                        handleChangeNumber = {(e)=>setInputValuePhoneNumber(e.target.value)}
                        countryPhoneCode={countryPhoneCode} 
                        handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                    />
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <CarroTextField 
                        value = {props.destinataryAddress} 
                        onChange={props.handleChangeDestinataryAddress}
                        variant ='outlined' 
                        label='Adresa destinatar' 
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepTwo;