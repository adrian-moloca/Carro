import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, MenuItem, Container} from "@material-ui/core";
import CarroTextField from "../../components/textField/CarroTextField";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import { Country, City }  from 'country-state-city';
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import {ArrowBackIos, ArrowForwardIos}  from '@material-ui/icons';
import { useTranslation } from "react-i18next";

const AddTransport = () =>{
  const { t } = useTranslation();
  const transports = [t("PublicTransport"), t("Car"), "Tir", t("Truck"), t("Minibus")]; 

  // state
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureCountry, setDepartureCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureAddress, setDepartureAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [transportType, setTransportType] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  // event lisenters
  const handleChangeDepartureDate=(date)=> setDepartureDate(date);
  const handleChangeDepartureCountry=(event)=> setDepartureCountry(event.target.value);
  const handleChangeDestinationCountry=(event)=> setDestinationCountry(event.target.value);
  const handleChangeDepartureCity=(event)=> setDepartureCity(event.target.textContent);
  const handleChangeDestinationCity=(event)=> setDestinationCity(event.target.textContent);
  const handleChangeTransportType=(event)=> setTransportType(event.target.value)
  const handleChangeDepartureAddress=(event)=> setDepartureAddress(event.target.value);
  const handleChangeDestinationAddress=(event)=> setDestinationAddress(event.target.value);
  const handleChangeEstimatedTime=(event)=> setEstimatedTime(event.target.value)

  const getTransportType = ()=> { return transports };
  const getCountries = ()=> { return Country.getAllCountries()};

  const getCities = (country) =>{
      const cities = [];
      City.getCitiesOfCountry(country).map((city)=>(cities.push(city.name)));
      return cities;
  }

  const isFormComplete = () =>{
    if(
      departureDate && departureCountry && destinationCountry && departureCity && destinationCity && 
      departureAddress && destinationAddress && transportType && estimatedTime
    )
        return true;
    else
        return false;
  }

  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={30} textAlign={'center'}>{t("AddTransport")}</Box>
      <Box display='flex' justifyContent='center' mt='5%'>
          <Grid container spacing={3} >
          <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
              <CarroTextField variant ='outlined' label={t("SearchRideDepartureCountry")} fullWidth
                  select value={departureCountry} onChange={handleChangeDepartureCountry}>
                      {getCountries().map((country)=>(
                          <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                      ))}
              </CarroTextField>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent="center">
            <CarroAutocomplete options={getCities(departureCountry)} label={t("SearchRideDepartureCity")} onChange={handleChangeDepartureCity}/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
            <CarroTextField variant ='outlined' label={t("SearchRideDestinationCountry")} fullWidth select value={destinationCountry} onChange={handleChangeDestinationCountry}>
              {getCountries().map((country)=>(
                  <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
              ))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroAutocomplete options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={handleChangeDestinationCity}/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroTextField variant ='outlined' value={departureAddress} onChange={handleChangeDepartureAddress} label={t("DriverCardDepartureAddress")} fullWidth/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroTextField variant ='outlined' value={destinationAddress} onChange={handleChangeDestinationAddress} label={t("DriverCardDestinationAddress")} fullWidth/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
            <CarroDatePicker label={t("DriverCardDepartureDate")} value={departureDate} format='dd/MM/yyyy' onChange={handleChangeDepartureDate}/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
            <CarroTextField select variant ='outlined' label={t("DriverCardType")} fullWidth value={transportType} onChange={handleChangeTransportType}>
              {getTransportType().map((transport)=>(<MenuItem value={transport}>{transport}</MenuItem>))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={12}  md ={12} xl={12}  justifyContent='center'>
              <CarroTextField variant ='outlined' value={estimatedTime} onChange={handleChangeEstimatedTime} label={t("DriverCardEstimatedHours")} fullWidth/>
          </Grid>
        </Grid>
      </Box>
      <Box mt={5} mb={2} display ='flex' justifyContent='center'>
        <Grid container spacing={7}>
          <Grid container item xs  justifyContent='center'>
          <Link to='/home' style={{textDecoration:'none', width:'100%'}}>
            <SecondaryButton startIcon={<ArrowBackIos/>} variant='outlined' fullWidth>{t('Home')}</SecondaryButton>
          </Link>
          </Grid>
          <Grid container item xs  justifyContent='center'>
            <PrimaryButton disabled={!isFormComplete()} endIcon={<ArrowForwardIos/>} variant='contained' fullWidth>{t('Add')}</PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddTransport;