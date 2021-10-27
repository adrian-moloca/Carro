import React, { useState } from "react";
import { Box, Grid, MenuItem, Container, Modal} from "@material-ui/core";
import CarroTextField from "../../textField/CarroTextField";
import CarroDatePicker from "../../datePicker/CarroDatePicker";
import { Country, City }  from 'country-state-city';
import SecondaryButton from "../../buttons/secondaryButton/secondaryButton";
import GreenCaroButton from "../../buttons/GreenCaroButton/GreenCaroButton";
import CarroAutocomplete from "../../autocomplete/CarroAutocomplete";
import IconButtonNoVerticalPadding from "../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding";
import { Close } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import useStyles from "./edit-ride-backdrop-style";

const BackdropEditRide = (props) =>{
  const { t } = useTranslation();

  const classes=useStyles();

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
    <Modal open={props.open} onClick={props.clicked}  className='backdrop'>
        <Container className={classes.containerBackdrop}>
            <Grid container >
                <Grid container item xs={10} justifyContent='flex-start'>
                    <Box fontSize='18px' color='grey.500'>{t("EditRide")}</Box>
                    </Grid>
                <Grid container item xs={2} justifyContent='flex-end'>
                    <IconButtonNoVerticalPadding onClick={props.clickedClose}>
                        <Close />
                    </IconButtonNoVerticalPadding>
                </Grid>
            </Grid>
            <Box display='flex' justifyContent='center' mt='5%' mb='5%'>
                <Grid containerpacing={3} >
                    <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
                        <CarroTextField size='small' variant ='outlined' label={t("SearchRideDepartureCountry")} fullWidth
                            select value={departureCountry} onChange={handleChangeDepartureCountry}>
                                {getCountries().map((country)=>(
                                    <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                                ))}
                        </CarroTextField>
                    </Grid>
                    <Grid container item xs={12} md ={6} xl={6}  justifyContent="center">
                        <CarroAutocomplete size='small' options={getCities(departureCountry)} label={t("SearchRideDepartureCity")} onChange={(e)=>handleChangeDepartureCity(e)}/>
                    </Grid>
                    <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                        <CarroTextField size='small' variant ='outlined' label={t("SearchRideDestinationCountry")} fullWidth select value={destinationCountry} onChange={(e)=>handleChangeDestinationCountry(e)}>
                        {getCountries().map((country)=>(
                            <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                        ))}
                        </CarroTextField>
                    </Grid>
                    <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                        <CarroAutocomplete size='small' options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={(e)=>handleChangeDestinationCity(e)}/>
                    </Grid>
                    <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                        <CarroTextField size='small' variant ='outlined' label={t("DriverCardDepartureAddress")} fullWidth/>
                    </Grid>
                    <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                        <CarroDatePicker size='small' label={t("DriverCardDepartureDate")} value={departureDate} onChange={(e)=>handleChangeDepartureDate(e)}/>
                    </Grid>
                    <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                        <CarroTextField select size='small' variant ='outlined' label={t("DriverCardType")} fullWidth value={transportType} onChange={(e)=>handleChangeTransportType(e)}>
                        {getTransportType().map((transport)=>(<MenuItem value={transport}>{transport}</MenuItem>))}
                        </CarroTextField>
                    </Grid>
                    <Grid container item xs={12}  md ={6} xl={6}  justifyContent='center'>
                        <CarroTextField size='small'  variant ='outlined' label={t("DriverCardEstimatedHours")} fullWidth/>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justifyContent='space-around'>
                    <Grid container item xs={3} justifyContent="center">
                                <SecondaryButton variant='outlined' onClick={props.clickedClose} fullWidth>{t("CloseButton")}</SecondaryButton>     
                    </Grid>
                    <Grid container item xs={3} justifyContent="center">
                                <GreenCaroButton variant='contained' fullWidth>{t("SaveButton")}</GreenCaroButton>
                    </Grid>
               </Grid>
        </Container>
    </Modal>
  );
};

export default BackdropEditRide;