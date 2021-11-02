import React, { useState, useEffect } from "react";
import { Box, Grid, } from "@material-ui/core";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import CarroTextField from "../../../components/textField/CarroTextField";
import PhoneTextField from "../../../components/telephoneNumberField/PhoneTextField";
import { Country, City }  from 'country-state-city';
import { useTranslation } from 'react-i18next';
const StepTwo = (props) =>{
    const { t } = useTranslation();
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState('');
    const [countryPhoneCode, setCountryPhoneCode] = useState('');
    const [destinataryAddress, setDestinataryAddress] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');

    const getCountries = ()=> {
        const countries = [];
        Country.getAllCountries().map((country)=>(countries.push(country.isoCode)));
        return countries;
    }

    const getCities = (country) =>{
        const cities = [];
        City.getCitiesOfCountry(country).map((city)=>(cities.push(city.name)));
        return cities;
    }

    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            
            <Grid container spacing={3} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <CarroTextField variant ='outlined' label={t('ReceiverNume')}  fullWidth/>
                </Grid>
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                    <PhoneTextField value={inputValuePhoneNumber} onChange = {(e)=>setInputValuePhoneNumber(e.target.value)} countryphonecode={countryPhoneCode} handleselectcountry = {(e)=>setCountryPhoneCode(e.target.value)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                    <CarroAutocomplete value={destinationCountry} options={getCountries()} label={t('SearchRideDestinationCountry')} onChange={(e)=>setDestinationCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                    <CarroAutocomplete value = {destinationCity} options={getCities(destinationCountry)} label={t('SearchRideDestinationCity')} onChange={(e)=>setDestinationCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <CarroTextField value = {destinataryAddress} onChange={(e)=>setDestinataryAddress(e.target.value)} variant ='outlined' label={t('DriverCardDestinationAddress')} fullWidth/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepTwo;