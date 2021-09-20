import React, { useState } from "react";
import { Box, FormControl, Grid, InputLabel,Menu, MenuItem, Select,} from "@mui/material";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroDatePicker from "../../../components/datePicker/CarroDatePicker";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import { Country, State, City }  from 'country-state-city';
import Autocomplete from '@mui/lab/Autocomplete';

const StepOne = () =>{

    const [departureDate, setDepartureDate] = useState(null);

    const [departureCountry, setDepartureCountry] = useState(null);

    const [destinationCountry, setDestinationCountry] = useState(null);

    const [departureCity, setDepartureCity] = useState(null);

    const [destinationCity, setDestinationCity] = useState(null);

    const handleChangeDepartureDate=(date)=>{
        setDepartureDate(date);
    }

    const handleChangeDepartureCountry=(event)=>{
        setDepartureCountry(event.target.value.isoCode);
    }

    const handleChangeDestinationCountry=(event)=>{
        setDestinationCountry(event.target.value.isoCode);
    }

    const handleChangeDepartureCity=(event)=>{
        setDepartureCity(event.target.textContent);   
    }

    const handleChangeDestinationCity=(event)=>{
        setDestinationCity(event.target.textContent);   
    }

    const getCountries = ()=> {
        const countries = [];
        Country.getAllCountries().map((country)=>(countries.push(country.isoCode)));
        console.log(countries);
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
                    <CarroAutocomplete options={getCountries()} label="Tara de plecare" onChange={handleChangeDepartureCountry}/>
        </Grid>
        <Grid container item xs={6} justifyContent="center">
            <CarroAutocomplete options={getCities(departureCountry)} label="Oras de plecare" onChange={handleChangeDepartureCity}/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
                    <CarroAutocomplete options={getCountries()} label="Tara destinatie" onChange={handleChangeDestinationCountry}/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
                    <CarroAutocomplete options={getCities(destinationCountry)} label="Oras destinatie" onChange={handleChangeDestinationCity}/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
            <CarroTextField variant ='outlined' label='Adresa de preluare' fullWidth/>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
           <CarroDatePicker label='Data si ora de plecare' dateValue={departureDate} handleDateSelect={handleChangeDepartureDate}/>
        </Grid>
        </Grid>
    </Box>
    );
};

export default StepOne;