import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroDatePicker from "../../../components/datePicker/CarroDatePicker";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import { Country, City }  from 'country-state-city';
import { useTranslation } from 'react-i18next';
const StepOne = (props) =>{
    const { t } = useTranslation();
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureCountry, setDepartureCountry] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [pickUpAddress, setPickUpAddress] = useState('');

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
            <Grid container xs={12} spacing={3} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={departureCountry} options={getCountries()}  label={t('SearchRideDepartureCountry')} onChange={(e)=>setDepartureCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={departureCity} options={getCities(departureCountry)} label={t('SearchRideDepartureCity')} onChange={(e)=>setDepartureCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroAutocomplete value={destinationCountry} options={getCountries()} label={t('SearchRideDestinationCountry')} onChange={(e)=>setDestinationCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroAutocomplete value = {destinationCity} options={getCities(destinationCountry)} label={t('SearchRideDestinationCity')} onChange={(e)=>setDestinationCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroTextField value = {pickUpAddress} onChange={(e)=>setPickUpAddress(e.target.value)} variant ='outlined' label={t('PickupAddress')} fullWidth/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroDatePicker label={t('PickupDate')} format='dd/MM/yyyy'
                                        dateValue={departureDate} handleDateSelect={(date)=>setDepartureDate(date)}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepOne;