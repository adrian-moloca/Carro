import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, MenuItem, Container} from "@material-ui/core";
import CarroTextField from "../../components/textField/CarroTextField";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import { getCountries, getCities} from "../../utils/Functions/countries-city-functions";
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import {ArrowBackIos, ArrowForwardIos}  from '@material-ui/icons';
import { useTranslation } from "react-i18next";
import {addressValidator, numberValidator} from "../../utils/Functions/input-validators";
import { connect } from "react-redux";
import { createNewRide } from "../../redux/actions/MyRidesActions";


const AddRide = ({data, createNewRide}) =>{
  const { t } = useTranslation();
  const transports = [t("PublicTransport"), t("Car"), t("Tir"), t("Truck"), t("Minibus")]; 

  // state
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureCountry, setDepartureCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureAddress, setDepartureAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [transportType, setTransportType] = useState('');
  const [estimatedTime, setEstimatedTime] = useState(new Number());
  const [hasErrors, setHasErrors] = useState(false);
  // event lisenters
  const handleChangeDepartureDate=(date)=> setDepartureDate(date);
  const handleChangeDepartureCountry=(event, newValue)=> setDepartureCountry(newValue);
  const handleChangeDestinationCountry=(event, newValue)=> setDestinationCountry(newValue);
  const handleChangeDepartureCity=(event, newValue)=> setDepartureCity(newValue);
  const handleChangeDestinationCity=(event, newValue)=> setDestinationCity(newValue);
  const handleChangeTransportType=(event)=> setTransportType(event.target.value)
  const handleChangeDepartureAddress=(event)=> setDepartureAddress(event.target.value);
  const handleChangeDestinationAddress=(event)=> setDestinationAddress(event.target.value);
  const handleChangeEstimatedTime=(event)=> setEstimatedTime(event.target.value)

  const isFormComplete = () =>{
    if(
      departureDate && departureCountry && destinationCountry && departureCity && destinationCity && 
      departureAddress && destinationAddress && transportType && estimatedTime && !hasErrors
    )
        return true;
    else
        return false;
  }

  useEffect(()=>{
    setHasErrors(addressValidator(departureAddress))
  }, [departureAddress])

  useEffect(()=>{
    setHasErrors(addressValidator(destinationAddress))
  }, [destinationAddress])

  useEffect(()=>{
    setHasErrors(numberValidator(estimatedTime))
  }, [estimatedTime])

  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={30} textAlign={'center'}>{t("AddTransport")}</Box>
      <Box display='flex' justifyContent='center' mt='5%'>
          <Grid container spacing={3} >
            <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
              <CarroAutocomplete value={departureCountry} options={getCountries()}  label={t('SearchRideDepartureCountry')} onChange={handleChangeDepartureCountry}/>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent="center">
              <CarroAutocomplete options={getCities(departureCountry)} label={t("SearchRideDepartureCity")} onChange={handleChangeDepartureCity}/>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroAutocomplete value={destinationCountry} options={getCountries()}  label={t('SearchRideDestinationCountry')} onChange={handleChangeDestinationCountry}/>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroAutocomplete value={destinationCity} options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={handleChangeDestinationCity}/>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                <CarroTextField error={addressValidator(departureAddress)} helperText={addressValidator(departureAddress) ? t('ValidAddress') : ''}
                                variant ='outlined' value={departureAddress} onChange={handleChangeDepartureAddress} label={t("DepartureAddress")} fullWidth/>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                <CarroTextField error={addressValidator(destinationAddress)} helperText={addressValidator(destinationAddress) ? t('ValidAddress') : ''}
                                variant ='outlined' value={destinationAddress} onChange={handleChangeDestinationAddress} label={t("DestinationAddress")} fullWidth/>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroDatePicker label={t("DriverCardDepartureDate")} value={departureDate} format='dd/MM/yyyy' onChange={handleChangeDepartureDate} disablePast/>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
              <CarroTextField select variant ='outlined' label={t("RideType")} fullWidth value={transportType} onChange={handleChangeTransportType}>
                {transports.map((transport, index)=>(<MenuItem key={index*371} value={transport}>{transport}</MenuItem>))}
              </CarroTextField>
            </Grid>
            <Grid container item xs={12}  md ={12} xl={12}  justifyContent='center'>
                <CarroTextField type='number' error={numberValidator(estimatedTime)} helperText={numberValidator(estimatedTime) ? t('ValidEstimatedTime') : ''}
                                variant ='outlined' value={estimatedTime} onChange={handleChangeEstimatedTime} label={t("EstimatedHours")} fullWidth/>
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
              <PrimaryButton onClick={()=>createNewRide(departureDate, departureCountry, departureCity, destinationCountry, destinationCity, departureAddress, destinationAddress, estimatedTime, transportType, data.token)} 
                            disabled={!isFormComplete()} endIcon={<ArrowForwardIos/>} variant='contained' fullWidth>{t('Add')}</PrimaryButton>
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({createNewRide: (departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType, token) => dispatch(createNewRide(departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType, token))})

const mapStateToProps = state => ({data: state.userData})

export default connect(mapStateToProps, mapDispatchToProps)(AddRide);