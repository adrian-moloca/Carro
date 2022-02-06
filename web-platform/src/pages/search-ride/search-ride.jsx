import React, { useEffect, useState } from "react";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { Container, Box, Grid} from "@material-ui/core";
import {Pagination} from '@material-ui/lab';
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import { useTranslation } from 'react-i18next';
import usePagination from '../../components/pagination/use-pagination/use-pagination';
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import { getCountries, getCities } from "../../utils/Functions/countries-city-functions";
import { searchRides, clean } from "../../redux/actions/RidesActions";
import { connect } from "react-redux";
import GetRide from "./get-ride";
import { useHistory } from "react-router-dom";

const SearchRide = ({ridesData, myPackagesData, userData, courierData, searchRides, clean}) => {

  const history = useHistory();

  // state
  const { t } = useTranslation();
  const [departureCountry, setDepartureCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");

  // handlers
  const handleChangeDepartureCountry = (event, newValue) => setDepartureCountry(newValue);
  const handleChangeDestinationCountry = (event, newValue) => setDestinationCountry(newValue);
  const handleChangeDepartureCity = (event, newValue) => setDepartureCity(newValue);
  const handleChangeDestinationCity = (event, newValue) => setDestinationCity(newValue);
    
  const[ridesState, setRidesState] = useState(Array(ridesData.rides).length > 0 ? ridesData.rides : []);
  const rides = usePagination(ridesState, 3)
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value); rides.jump(value)};
  
  const [clickedSearch, setClickedSearch] = useState(false);

  

  useEffect(()=>{
    Array(ridesData.rides).length > 0 ? setRidesState(ridesData.rides) : setRidesState([])
    console.log(rides.currentData())
  }, [ridesData.rides])


  useEffect(()=>{    
    if(courierData.courierDataChanged)
      history.push('/courier-profile')
  }, [courierData])

  useEffect(()=>{
      const unlisten = history.listen(()=>{clean()})
      return unlisten;
  }, []);

  const searchForRides = () => {
    searchRides(departureCountry, departureCity, destinationCountry, destinationCity, userData.token);
    setClickedSearch(true);
  }

  function notFoundAnyRide(){
    if(clickedSearch)
      return (
        <Box fontSize={20}>
          {t('RidesNotFound')}
        </Box>
      );
    else
        return ' '
  }


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
            <CarroAutocomplete value={departureCity} options={getCities(departureCountry)} label={t('SearchRideDepartureCity')} onChange={handleChangeDepartureCity}/>
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <CarroAutocomplete value={destinationCountry} options={getCountries()}  label={t('SearchRideDestinationCountry')} onChange={handleChangeDestinationCountry}/>
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <CarroAutocomplete value={destinationCity} options={getCities(destinationCountry)} label={t('SearchRideDestinationCity')} onChange={handleChangeDestinationCity}/>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-evenly" my="3%">
        <Grid item xs={11} md={5} xl={3}>
          <PrimaryButton onClick={()=>{searchForRides()}}
                         disabled={departureCountry && departureCity && destinationCountry && destinationCity ? false : true}
                         variant="contained" endIcon={<DriveEtaIcon />} fullWidth>
            {t('SearchRideButton')}
          </PrimaryButton>
        </Grid>
      </Box>
      <Grid container justifyContent='space-around'>
      { ridesData.rides.length > 0 ? 
        rides.currentData().map((ride)=> <GetRide key={ride.id} name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={ride.statuses} interactions={ride.interactions}  {...ride}/>) : notFoundAnyRide()}
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

const mapDispatchToProps = (dispatch) => {
   return{ 
    searchRides: (fromCountry, fromCity, toCountry, toCity, token) => dispatch(searchRides(fromCountry, fromCity, toCountry, toCity, token)),
    clean: () => dispatch(clean()),
  }
}
const mapStateToProps = state => ({ridesData: state.ridesData, myPackagesData: state.myPackagesData, userData: state.userData, courierData: state.courierData})

export default connect(mapStateToProps, mapDispatchToProps)(SearchRide);
