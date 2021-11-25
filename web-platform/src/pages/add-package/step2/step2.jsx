import React, { useEffect, useLayoutEffect, useState } from "react";
import { Box, Grid, } from "@material-ui/core";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import CarroTextField from "../../../components/textField/CarroTextField";
import PhoneTextField from "../../../components/telephoneNumberField/PhoneTextField";
import { useTranslation } from 'react-i18next';
import { addressValidator, nameValidator, phoneValidator } from "../../../utils/Functions/input-validators";
import { getCities, getCountries } from "../../../utils/Functions/countries-city-functions";
import { NewReleases } from "@material-ui/icons";

const StepTwo = (props) =>{
    const { t } = useTranslation();
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(String(props.phoneNumber).substring(String(props.phoneNumber).length-10));
    const [countryPhoneCode, setCountryPhoneCode] = useState(String(props.phoneNumber).substring(0, String(props.phoneNumber).length-10));

    useLayoutEffect(()=>{
        props.setPhoneNumber(/* countryPhoneCode.includes('+') ?  */countryPhoneCode/*  : ('+' + countryPhoneCode) */ + inputValuePhoneNumber)
    }, [inputValuePhoneNumber, countryPhoneCode])

    useEffect(()=>{
        props.setHasErrors(nameValidator(props.destinataryName))
    }, [props.destinataryName])

    useEffect(()=>{
        props.setHasErrors(phoneValidator(inputValuePhoneNumber))
    }, [inputValuePhoneNumber])

    useEffect(()=>{
        props.setHasErrors(addressValidator(props.destinataryAddress))
    }, [props.destinataryAddress])

    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            
            <Grid container spacing={3} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <CarroTextField error={nameValidator(props.destinataryName)} helperText={nameValidator(props.destinataryName) ? t('OnlyChars') : ''}
                                    value={props.destinataryName} onChange={(e)=> props.setDestinataryName(e.target.value)} variant ='outlined' label={t('ReceiverNume')}  fullWidth/>
                </Grid>
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <PhoneTextField value={inputValuePhoneNumber} onChange = {(e)=>setInputValuePhoneNumber(e.target.value)}
                                    countryPhoneCode={countryPhoneCode} handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                                    error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                    <CarroAutocomplete value={props.destinationCountry} options={getCountries()} label={t('SearchRideDestinationCountry')} onChange={(e, newValue)=>props.setDestinationCountry(newValue)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                    <CarroAutocomplete value = {props.destinationCity} options={getCities(props.destinationCountry)} label={t('SearchRideDestinationCity')} onChange={(e, newValue)=>props.setDestinationCity(newValue)}/>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <CarroTextField value={props.destinataryAddress} error={addressValidator(props.destinataryAddress)} helperText={addressValidator(props.destinataryAddress) ? t('ValidAddress') : ''}
                                    onChange={(e)=>props.setDestinataryAddress(e.target.value)} variant ='outlined' label={t('DestinationAddress')} fullWidth/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepTwo;