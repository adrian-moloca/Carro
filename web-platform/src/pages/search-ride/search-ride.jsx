import React, { useState } from "react";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { Container, Box, Grid} from "@material-ui/core";
import {Pagination} from '@material-ui/lab';
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import profilePhotoLeft from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../assets/images/photoprofile3.png';
import RideCard from "../../components/cards/ride-card/ride-card";
import { useTranslation } from 'react-i18next';
import usePagination from '../../components/pagination/use-pagination/use-pagination';
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import { getCountries, getCities } from "../../utils/Functions/countries-city-functions";

const SearchRide = () => {

  const rides_a = [
    {
        image: profilePhotoLeft,
        name: 'Marius Popescu',
        transportType: 'Masina',
        estimatedTime: '7 ore',
        departure: 'Timisoara, Romania',
        destination: 'Bucuresti, Romania',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        departureDate: '26/08/2021 02:00 AM',
        rate: 4.5,
        status: 0,
        packageExists: false,
    },
    {
        image: profilePhotoMiddle,
        name: 'Marius Popescu',
        transportType: 'Masina',
        estimatedTime: '7 ore',
        departure: 'Timisoara, Romania',
        destination: 'Bucuresti, Romania',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        departureDate: '26/08/2021 02:00 AM',
        rate: 4.5,
        status: 1,
    },
    {
        image: profilePhotoRight,
        name: 'Marius Popescu',
        transportType: 'Masina',
        estimatedTime: '7 ore',
        departure: 'Timisoara, Romania',
        destination: 'Bucuresti, Romania',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        departureDate: '26/08/2021 02:00 AM',
        rate: 4.5,
        status: 10,
    },
    {
      image: profilePhotoLeft,
      name: 'Ioan Mures',
      transportType: 'Masina',
      estimatedTime: '7 ore',
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureAddress: 'Lorem Ipsium Street',
      destinationAddress: 'Lorem Ipsium Street',
      departureDate: '26/08/2021 02:00 AM',
      rate: 4.5,
      status: 0,
      packageExists: false,
  },
  {
      image: profilePhotoMiddle,
      name: 'Ioan Mures',
      transportType: 'Masina',
      estimatedTime: '7 ore',
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureAddress: 'Lorem Ipsium Street',
      destinationAddress: 'Lorem Ipsium Street',
      departureDate: '26/08/2021 02:00 AM',
      rate: 4.5,
      status: 1,
  },
  {
      image: profilePhotoRight,
      name: 'Ioan Mures',
      transportType: 'Masina',
      estimatedTime: '7 ore',
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureAddress: 'Lorem Ipsium Street',
      destinationAddress: 'Lorem Ipsium Street',
      departureDate: '26/08/2021 02:00 AM',
      rate: 4.5,
      status: 10,
  },
]

  // state
  const { t } = useTranslation();
  const [departureCountry, setDepartureCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  // handlers
  const handleChangeDepartureCountry = (event) => setDepartureCountry(event.target.textContent);
  const handleChangeDestinationCountry = (event) => setDestinationCountry(event.target.textContent);
  const handleChangeDepartureCity = (event) => setDepartureCity(event.target.textContent);
  const handleChangeDestinationCity = (event) => setDestinationCity(event.target.textContent);
  const[ridesState, setRidesState] = useState(rides_a);
  const rides = usePagination(ridesState, 3)
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value); rides.jump(value)};

  return (
    <Container className={"Primary-container-style"}>
      <Grid item xs={12}>
        <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
        {t('SearchRideTitle')}
        </Box>
      </Grid>

      <Box display="flex" justifyContent="space-evenly" mt="3%">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <CarroAutocomplete value={departureCountry} options={getCountries()} label={t('SearchRideDepartureCountry')} onChange={handleChangeDepartureCountry}/>
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <CarroAutocomplete value={departureCity} options={getCities(departureCountry)} label={t('SearchRideDepartureCountry')} onChange={handleChangeDepartureCity}/>
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <CarroAutocomplete value={destinationCountry} options={getCountries()}  label={t('SearchRideDestinationCountry')} onChange={handleChangeDestinationCountry}/>
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <CarroAutocomplete value={destinationCity} options={getCities(destinationCountry)} label={t('SearchRideDepartureCountry')} onChange={handleChangeDestinationCity}/>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-evenly" my="3%">
        <Grid item xs={11} md={5} xl={3}>
          <PrimaryButton fullWidth variant="contained" endIcon={<DriveEtaIcon />}>
            {t('SearchRideButton')}
          </PrimaryButton>
        </Grid>
      </Box>
      <Grid container justifyContent='space-around'>
      { rides.currentData().map((ride, index)=>
          <Grid key ={index} container item xs={12} sm={5}  md={4} lg={4}  xl={4} justifyContent='center'>
              <RideCard 
                  image={ride.image} 
                  name={ride.name}
                  transportType={ride.transportType}
                  driverRate={ride.rate}
                  plecare={ride.departure}
                  destinatie={ride.destination}
                  departureDate={ride.departureDate}
                  departureAddress={ride.departureAddress}
                  destinationAddress={ride.destinationAddress}
                  estimatedTime={ride.estimatedTime}
                  status={ride.status}
                  packageExists= {ride.packageExists}
              />
          </Grid>
        )}
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="3%" mb="3%">
          <Box width='1' mt='5%' display='flex' justifyContent='center'>
            <Pagination 
              count={rides.maxPage} 
              variant="outlined" 
              shape="rounded" 
              page={page} 
              onChange={handleChange}
              size='medium'

            />
          </Box>
      </Box>
    </Container>
  );
};

export default SearchRide;
