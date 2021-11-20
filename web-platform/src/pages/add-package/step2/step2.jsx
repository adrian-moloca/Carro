import React, { useLayoutEffect, useState } from "react";
import { Box, Grid, } from "@material-ui/core";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import CarroTextField from "../../../components/textField/CarroTextField";
import PhoneTextField from "../../../components/telephoneNumberField/PhoneTextField";
import { useTranslation } from 'react-i18next';
import { addressValidator, nameValidator, phoneValidator } from "../../../utils/Functions/input-validators";
import { getCities, getCountries } from "../../../utils/Functions/countries-city-functions";

const StepTwo = (props) =>{
    const { t } = useTranslation();
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState('');
    const [countryPhoneCode, setCountryPhoneCode] = useState('');

    const [phoneNumber, setPhoneNumber] = useState(countryPhoneCode.includes('+') ? countryPhoneCode : ('+'+ countryPhoneCode) + inputValuePhoneNumber);
    const [destinataryName, setDestinataryName] = useState('');
    const [destinataryAddress, setDestinataryAddress] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');

    useLayoutEffect(()=>{
        setPhoneNumber(countryPhoneCode.includes('+') ? countryPhoneCode : ('+'+ countryPhoneCode) + inputValuePhoneNumber)
    }, [inputValuePhoneNumber, countryPhoneCode])

    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            
            <Grid container spacing={3} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <CarroTextField error={nameValidator(destinataryName)} helperText={nameValidator(destinataryName) ? t('OnlyChars') : ''}
                                    value={destinataryName} onChange={(e)=> setDestinataryName(e.target.value)} variant ='outlined' label={t('ReceiverNume')}  fullWidth/>
                </Grid>
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <PhoneTextField value={inputValuePhoneNumber} onChange = {(e)=>setInputValuePhoneNumber(e.target.value)}
                                    countryPhoneCode={countryPhoneCode} handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                                    error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                    <CarroAutocomplete value={destinationCountry} options={getCountries()} label={t('SearchRideDestinationCountry')} onChange={(e)=>setDestinationCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                    <CarroAutocomplete value = {destinationCity} options={getCities(destinationCountry)} label={t('SearchRideDestinationCity')} onChange={(e)=>setDestinationCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <CarroTextField value={destinataryAddress} error={addressValidator(destinataryAddress)} helperText={addressValidator(destinataryAddress) ? t('ValidAddress') : ''}
                                    onChange={(e)=>setDestinataryAddress(e.target.value)} variant ='outlined' label={t('DestinationAddress')} fullWidth/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepTwo;