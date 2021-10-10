import React, { useState } from "react";
import { Box, Grid, MenuItem, Container, Link } from "@material-ui/core";
import CarroTextField from "../../components/textField/CarroTextField";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import { Country, City }  from 'country-state-city';
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
          <Grid container xs={12} spacing={3} >
          <Grid container item xs={6} justifyContent="center">
              <CarroTextField variant ='outlined' label={t("SearchRideDepartureCountry")} fullWidth
                  select value={departureCountry} onChange={handleChangeDepartureCountry}>
                      {getCountries().map((country)=>(
                          <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                      ))}
              </CarroTextField>
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroAutocomplete options={getCities(departureCountry)} label={t("SearchRideDepartureCity")} onChange={(e)=>handleChangeDepartureCity(e)}/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
            <CarroTextField variant ='outlined' label={t("SearchRideDestinationCountry")} fullWidth select value={destinationCountry} onChange={(e)=>handleChangeDestinationCountry(e)}>
              {getCountries().map((country)=>(
                  <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
              ))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
              <CarroAutocomplete options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={(e)=>handleChangeDestinationCity(e)}/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
              <CarroTextField variant ='outlined' label={t("DriverCardDepartureAddress")} fullWidth/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
            <CarroDatePicker label={t("DriverCardDepartureDate")} dateValue={departureDate} handleDateSelect={(e)=>handleChangeDepartureDate(e)}/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
            <CarroTextField select variant ='outlined' label={t("DriverCardType")} fullWidth value={transportType} onChange={(e)=>handleChangeTransportType(e)}>
              {getTransportType().map((transport)=>(<MenuItem value={transport}>{transport}</MenuItem>))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
              <CarroTextField variant ='outlined' label={t("DriverCardEstimatedHours")} fullWidth/>
          </Grid>
        </Grid>
      </Box>
      <Box mt={7}>
        <Grid container display='flex' direction="row" alignItems="center">                      
          <Grid container item xs={6} justifyContent='center' alignItems="center">
            <SecondaryButton variant="contained" size="large">
              <Link href="/" underline= 'none' color= 'inherit'>
                <Box display="flex" justifyContent='center' alignItems="center">
                  <Box mr={3} display="flex" alignItems="center">
                    <ArrowBackIosIcon/>
                  </Box>
                  <Box mr={4} fontSize={20}>
                  {t("Home")}
                  </Box>
                </Box>
              </Link>
            </SecondaryButton>
          </Grid>
          <Grid container item xs={6} justifyContent='center' alignItems="center">
            <PrimaryButton variant='contained' size="large" color="primary">
              <Box display="flex" justifyContent='center' alignItems="center">
                <Box ml={4} fontSize={20}>
                {t("Add")}
                </Box>
                <Box  ml={3} display="flex" alignItems="center">
                  <ArrowForwardIosIcon/>
                </Box>
              </Box>
            </PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddTransport;