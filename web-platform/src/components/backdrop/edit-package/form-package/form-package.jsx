import React, { useState, Fragment } from 'react';
import {Grid, Box, Select, MenuItem, InputAdornment} from '@material-ui/core';
import CarroAutocomplete from '../../../autocomplete/CarroAutocomplete';
import CarroCheckbox from '../../../checkbox/CarroCheckbox';
import CarroTextField from '../../../textField/CarroTextField';
import CarroDatePicker from '../../../datePicker/CarroDatePicker';
import PhoneTextField from '../../../telephoneNumberField/PhoneTextField';
import { FormControlLabel } from '@material-ui/core';
import { Country, City }  from 'country-state-city';
import { useTranslation } from "react-i18next";

const   FormPackage = (props) =>{
    const { t } = useTranslation();

    const packageSizes = [
        {
          value: 'small',
          label: t("Small"),
        },
        {
          value: 'medium',
          label: t("Medium"),
        },
        {
          value: 'big',
          label: t("Big"),
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
        <Box display='flex' justifyContent='center' mt='5%' mb='5%' fontSize='13px'>
            <Grid container xs={12} spacing={1} >
                <Grid container item xs={6} justifyContent="center">
                            <CarroAutocomplete size='small' value={departureCountry} options={getCountries()}  label= {t("SearchRideDepartureCountry")} onChange={(e)=>setDepartureCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                            <CarroAutocomplete size='small' value={departureCity} options={getCities(departureCountry)} label={t("SearchRideDepartureCity")} onChange={(e)=>setDepartureCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroAutocomplete size='small' value={destinationCountry} options={getCountries()} label={t("SearchRideDestinationCountry")} onChange={(e)=>setDestinationCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroAutocomplete size='small' value = {destinationCity} options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={(e)=>setDestinationCity(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroTextField size='small' value = {pickUpAddress} onChange={(e)=>setPickUpAddress(e.target.value)} variant ='outlined' label={t("DriverCardDepartureAddress")} fullWidth/>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                            <CarroDatePicker size='small' label={t("DriverCardDepartureDate")} format='dd/MM/yyyy'
                                        dateValue={departureDate} handleDateSelect={(date)=>setDepartureDate(date)}/>
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                    <CarroTextField size='small' variant ='outlined' label={t("ReceiverNume")} fullWidth/>
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                    <PhoneTextField 
                        size='small'
                        number={inputValuePhoneNumber} 
                        handleChangeNumber = {(e)=>setInputValuePhoneNumber(e.target.value)}
                        countryPhoneCode={countryPhoneCode} 
                        handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                    />
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <CarroTextField 
                        size='small'
                        value = {props.destinataryAddress} 
                        onChange={props.handleChangeDestinataryAddress}
                        variant ='outlined' 
                        label={t("DriverCardDestinationAddress")}
                        fullWidth
                    />
                </Grid>
                <Grid container item xs={6} justifyContent="center">
                <CarroTextField size='small' variant ='outlined' label={t("Sizing")} fullWidth select value={packageSize} onChange={handleSizeSelect}>
                    {packageSizes.map((option)=>(
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </CarroTextField>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField size='small' variant ='outlined' label={t("Weight")} fullWidth
                    InputProps={{startAdornment: <InputAdornment position="start">Kg</InputAdornment>}}/>
            </Grid>
            {packageSize==='big' ? (
                <Fragment>
                <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField size='small' variant ='outlined' label={t("Width")}  fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </Grid>
                <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField size='small' variant ='outlined' label={t("Height")}  fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </Grid>
                <Grid  container item xs={4} justifyContent="center">
                    <CarroTextField size='small' variant ='outlined' label={t("Length")} fullWidth InputProps={{startAdornment: <InputAdornment position="start">m</InputAdornment>}}/>
                </Grid>
                </Fragment>
            ):(null)}
            <Grid container item xs={12} justifyContent='center'>
                <CarroTextField size='small' variant ='outlined' label={t("SmallDescription")} fullWidth/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField size='small' variant ='outlined' label={t("Price")} fullWidth InputProps={{startAdornment: 
                    <InputAdornment position="start">
                        <Select value={currency} onChange={handleCurrencySelect}> {currencies.map((option)=>(
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>))}
                        </Select>
                    </InputAdornment>}}/>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
                <CarroTextField size='small' variant ='outlined' label={t("PackageNumbers")} fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center' maxRows={5}>
                <CarroTextField size='small' variant ='outlined' label={t("Description")} multiline={4} rows={4} fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='space-between'>            
                <FormControlLabel onChange = {handleInflamabilCheckboxClick} control={<CarroCheckbox/>} label={t("Inflammable")}/>
                <FormControlLabel onChange = {handleFragilCheckboxClick} control={<CarroCheckbox/>} label={t("Fragile")}/>
                <FormControlLabel onChange = {handlePerisabilCheckboxClick} control={<CarroCheckbox/>} label={t("Perishable")}/>
                <FormControlLabel onChange = {handleAnimalCheckboxClick} control={<CarroCheckbox/>} label='Animal'/>
            </Grid>
        </Grid>
    </Box>

    );
}

export default FormPackage;


