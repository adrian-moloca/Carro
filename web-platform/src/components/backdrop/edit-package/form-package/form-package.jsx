import React, { useState, Fragment } from 'react';
import {Grid, Box, Select, MenuItem, InputAdornment} from '@material-ui/core';
import CarroAutocomplete from '../../../autocomplete/CarroAutocomplete';
import CarroCheckbox from '../../../checkbox/CarroCheckbox';
import CarroTextField from '../../../textField/CarroTextField';
import CarroDatePicker from '../../../datePicker/CarroDatePicker';
import PhoneTextField from '../../../telephoneNumberField/PhoneTextField';
import { FormControlLabel } from '@material-ui/core';
import { Country, City }  from 'country-state-city';

const packageSizes = [
    {
      value: 'small',
      label: 'Mic',
    },
    {
      value: 'medium',
      label: 'Mediu',
    },
    {
      value: 'big',
      label: 'Mare',
    },
];
  
const currencies = [
    {
        value: 'ron',
        label: 'RON',
    },
    {
        value: 'eur',
        label: '€',
    },
    {
        value: 'usd',
        label: '$',
    },
    {
        value: 'gbp',
        label: '£',
    },
];

const FormPackage = (props) =>{
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureCountry, setDepartureCountry] = useState('');
    const [destinationCountry, setDestinationCountry] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [pickUpAddress, setPickUpAddress] = useState('');
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null);
    const [countryPhoneCode, setCountryPhoneCode] = useState(null);
    const[packageSize, setPackageSize] = useState(null);
    const[currency, setCurrency] = useState('ron');
    const[Inflamabil, setInflamabil]= useState(false);
    const[Fragil, setFragil]= useState(false);
    const[Perisabil, setPerisabil]= useState(false);
    const[Animal, setAnimal]= useState(false);

    const handleSizeSelect = (event) =>{
        setPackageSize(event.target.value);
    };
    
    const handleCurrencySelect = (event) =>{
        setCurrency(event.target.value);
    };

    const handleInflamabilCheckboxClick = (event)=>{
        event.target.checked ? setInflamabil(true) : setInflamabil(false)
    } 

    const handleFragilCheckboxClick = (event)=>{
        event.target.checked ? setFragil(true) : setFragil(false)
    }

    const handlePerisabilCheckboxClick = (event)=>{
        event.target.checked ? setPerisabil(true) : setPerisabil(false)
    }

    const handleAnimalCheckboxClick = (event)=>{
        event.target.checked ? setAnimal(true) : setAnimal(false)
    }    

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
                <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Marimea pachetului' fullWidth select value={packageSize} onChange={handleSizeSelect}>
                    {packageSizes.map((option)=>(
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </CarroTextField>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Greutatea pachetului' fullWidth
                    InputProps={{startAdornment: <InputAdornment position="start">Kg</InputAdornment>}}/>
            </Grid>
            {packageSize==='big' ? (
                <Fragment>
                <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField variant ='outlined' label='Latime' fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </Grid>
                <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField variant ='outlined' label='Inaltime' fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </Grid>
                <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField variant ='outlined' label='Lungime' fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </Grid>
                </Fragment>
            ):(null)}
            <Grid container item xs={12} justifyContent='center'>
                <CarroTextField variant ='outlined' label='Scurta descriere' fullWidth/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Pret' fullWidth InputProps={{startAdornment: 
                    <InputAdornment position="start">
                        <Select value={currency} onChange={handleCurrencySelect}> {currencies.map((option)=>(
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>))}
                        </Select>
                    </InputAdornment>}}/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Numar pachete' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center' maxRows={5}>
                <CarroTextField variant ='outlined' label='Descriere' multiline={4} rows={4} fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='space-between'>            
                <FormControlLabel onChange = {handleInflamabilCheckboxClick} control={<CarroCheckbox/>} label='Inflamabil'/>
                <FormControlLabel onChange = {handleFragilCheckboxClick} control={<CarroCheckbox/>} label='Fragil'/>
                <FormControlLabel onChange = {handlePerisabilCheckboxClick} control={<CarroCheckbox/>} label='Perisabil'/>
                <FormControlLabel onChange = {handleAnimalCheckboxClick} control={<CarroCheckbox/>} label='Animal'/>
            </Grid>
        </Grid>
    </Box>

    );
}

export default FormPackage;


