import React, { useState, useEffect } from "react";
import { Box, Grid, } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import PhoneTextField from "../../../components/telephoneNumberField/PhoneTextField";
import { useTranslation } from 'react-i18next';
const StepTwo = (props) =>{
    const { t } = useTranslation();
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null);
    const [countryPhoneCode, setCountryPhoneCode] = useState(null);
    const [destinataryAddress, setDestinataryAddress] = useState('');


    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            <Grid container xs={12} spacing={3} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <CarroTextField variant ='outlined' label={t('ReceiverNume')}  fullWidth/>
                </Grid>
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <PhoneTextField 
                        number={inputValuePhoneNumber} 
                        handleChangeNumber = {(e)=>setInputValuePhoneNumber(e.target.value)}
                        countryPhoneCode={countryPhoneCode} 
                        handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                    />
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <CarroTextField 
                        value = {destinataryAddress} 
                        onChange={(e)=>setDestinataryAddress(e.target.value)}
                        variant ='outlined' 
                        label={t('DriverCardDestinationAddress')} 
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepTwo;