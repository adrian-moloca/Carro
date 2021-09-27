import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroDatePicker from "../../../components/datePicker/CarroDatePicker";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import { Country, City }  from 'country-state-city';

const StepOne = (props) =>{

    const [departureDate, setDepartureDate] = useState(null);
    const [departureCountry, setDepartureCountry] = useState(null);
    const [destinationCountry, setDestinationCountry] = useState(null);
    const [departureCity, setDepartureCity] = useState(null);
    const [destinationCity, setDestinationCity] = useState(null);
    const [pickUpAddress, setPickUpAddress] = useState(null);

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
                <Grid container item xs={6} justifyContent="center">
                            <CarroAutocomplete value={departureCountry} options={getCountries()}  label="Tara de plecare" onChange={(e)=>setDepartureCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                            <CarroAutocomplete value={departureCity} options={getCities(departureCountry)} label="Oras de plecare" onChange={(e)=>setDepartureCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroAutocomplete value={destinationCountry} options={getCountries()} label="Tara destinatie" onChange={(e)=>setDestinationCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroAutocomplete value = {destinationCity} options={getCities(destinationCountry)} label="Oras destinatie" onChange={(e)=>setDestinationCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroTextField value = {pickUpAddress} onChange={(e)=>setPickUpAddress(e.target.value)} variant ='outlined' label='Adresa de preluare' fullWidth/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroDatePicker label='Data de plecare' format='dd/MM/yyyy'
                                        dateValue={departureDate} handleDateSelect={(date)=>setDepartureDate(date)}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepOne;