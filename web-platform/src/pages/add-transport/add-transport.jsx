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
import useStyles from './add-transportStyle';

const AddTransport = () =>{

  const transports = ["Transport public", "Masina", "Tir", "Camion", "Microbus"]; 

  const classes = useStyles();

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
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Adauga transport</Box>
      <Box display='flex' justifyContent='center' mt='5%'>
          <Grid container xs={12} spacing={3} >
          <Grid container item xs={6} justifyContent="center">
              <CarroTextField variant ='outlined' label='Tara de plecare' fullWidth
                  select value={departureCountry} onChange={handleChangeDepartureCountry}>
                      {getCountries().map((country)=>(
                          <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                      ))}
              </CarroTextField>
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroAutocomplete options={getCities(departureCountry)} label="Oras de plecare" onChange={(e)=>handleChangeDepartureCity(e)}/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
            <CarroTextField variant ='outlined' label='Tara destinatie' fullWidth select value={destinationCountry} onChange={(e)=>handleChangeDestinationCountry(e)}>
              {getCountries().map((country)=>(
                  <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
              ))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
              <CarroAutocomplete options={getCities(destinationCountry)} label="Oras destinatie" onChange={(e)=>handleChangeDestinationCity(e)}/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
              <CarroTextField variant ='outlined' label='Adresa de plecare' fullWidth/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
            <CarroDatePicker label='Data si ora de plecare' dateValue={departureDate} handleDateSelect={(e)=>handleChangeDepartureDate(e)}/>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
            <CarroTextField select variant ='outlined' label='Tipul de transport' fullWidth value={transportType} onChange={(e)=>handleChangeTransportType(e)}>
              {getTransportType().map((transport)=>(<MenuItem value={transport}>{transport}</MenuItem>))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={6} justifyContent='center'>
              <CarroTextField variant ='outlined' label='Ore pana la destinatie (Estimativ)' fullWidth/>
          </Grid>
        </Grid>
      </Box>
      <Box mt={7}>
        <Grid container display='flex' direction="row" alignItems="center">                      
          <Grid container item xs={6} justifyContent='center' alignItems="center">
            <SecondaryButton variant="contained" size="large">
              <Link href="/" underline= 'none' color= 'inherit'>
                <Box display="flex" justifyContent='center' alignItems="center">
                  <ArrowBackIosIcon className={classes.arrowsSpacingRight}/>
                  <text className={classes.textSpacingRight}>Acasa</text>
                </Box>
              </Link>
            </SecondaryButton>
          </Grid>
          <Grid container item xs={6} justifyContent='center' alignItems="center">
            <PrimaryButton variant='contained' size="large" color="primary">
              <Box display="flex" justifyContent='center' alignItems="center">
                <text className={classes.textSpacingLeft}>Adauga</text>
                <ArrowForwardIosIcon className={classes.arrowsSpacingLeft}/>
              </Box>
            </PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AddTransport;