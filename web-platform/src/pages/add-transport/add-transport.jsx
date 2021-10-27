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
  const [departureDate, setDepartureDate] = useState(null);
  const [departureCountry, setDepartureCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const [departureCity, setDepartureCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);
  const [transportType, setTransportType] = useState(null);
  // event lisenters
  const handleChangeDepartureDate=(date)=> setDepartureDate(date);
  const handleChangeDepartureCountry=(event)=> setDepartureCountry(event.target.value);
  const handleChangeDestinationCountry=(event)=> setDestinationCountry(event.target.value);
  const handleChangeDepartureCity=(event)=> setDepartureCity(event.target.textContent);
  const handleChangeDestinationCity=(event)=> setDestinationCity(event.target.textContent);
  const handleChangeTransportType=(event)=> setTransportType(event.target.value)

  const getTransportType = ()=> { return transports };
  const getCountries = ()=> { return Country.getAllCountries()};

  const getCities = (country) =>{
      const cities = [];
      City.getCitiesOfCountry(country).map((city)=>(cities.push(city.name)));
      return cities;
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
            <CarroAutocomplete options={getCities(departureCountry)} label={t("SearchRideDepartureCity")} onChange={(e)=>handleChangeDepartureCity(e)}/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
            <CarroTextField variant ='outlined' label={t("SearchRideDestinationCountry")} fullWidth select value={destinationCountry} onChange={(e)=>handleChangeDestinationCountry(e)}>
              {getCountries().map((country)=>(
                  <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
              ))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroAutocomplete options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={(e)=>handleChangeDestinationCity(e)}/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroTextField variant ='outlined' label={t("DriverCardDepartureAddress")} fullWidth/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroTextField variant ='outlined' label={t("DriverCardDestinationAddress")} fullWidth/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
            <CarroDatePicker label={t("DriverCardDepartureDate")} value={departureDate} onChange={(e)=>handleChangeDepartureDate(e)}/>
          </Grid>
          <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
            <CarroTextField select variant ='outlined' label={t("DriverCardType")} fullWidth value={transportType} onChange={(e)=>handleChangeTransportType(e)}>
              {getTransportType().map((transport)=>(<MenuItem value={transport}>{transport}</MenuItem>))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={12}  md ={12} xl={12}  justifyContent='center'>
              <CarroTextField variant ='outlined' label={t("DriverCardEstimatedHours")} fullWidth/>
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
            <PrimaryButton endIcon={<ArrowForwardIos/>} variant='contained' fullWidth>{t('Add')}</PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddTransport;