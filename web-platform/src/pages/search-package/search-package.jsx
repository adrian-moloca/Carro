import React, { useState, useEffect } from "react";
import { Container, Box, Grid } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import {Pagination} from '@material-ui/lab';
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import PackageCard from '../../components/cards/package-card/package-card';
import usePagination from '../../components/pagination/use-pagination/use-pagination';
import CarroAutocomplete from '../../components/autocomplete/CarroAutocomplete';
import GetPackage from "./get-package";
import {getCountries, getCities} from '../../utils/Functions/countries-city-functions';
import { connect } from "react-redux";
import { searchPackages, clean } from "../../redux/actions/PackagesActions";
import { useHistory } from "react-router-dom";

const SearchPackages = ({packagesData, userData, searchPackages, clean}) => {

  const { t } = useTranslation();
  const history = useHistory();

  // state
  const [departureCountry, setDepartureCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');

  const handleChangeDepartureCountry = (event, newValue) => setDepartureCountry(newValue);
  const handleChangeDestinationCountry = (event, newValue) => setDestinationCountry(newValue);
  const handleChangeDepartureCity = (event, newValue) => setDepartureCity(newValue);
  const handleChangeDestinationCity = (event, newValue) => setDestinationCity(newValue);

  const[packagesState, setPackagesState] = useState([]);
  const packages = usePagination(packagesState, 3)
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value); packages.jump(value)};

  const [clickedSearch, setClickedSearch] = useState(false);

  function notFoundAnyRide(){
    if(clickedSearch)
      return (
        <Box fontSize={20}>
          {t('PackagesNotFound')}
        </Box>
      );
    else
        return ' '
  }

  useEffect(()=>{
    Array(packagesData.packages).length > 0 ? setPackagesState(packagesData.packages) : setPackagesState([]);
  }, [packagesData.packages]);

  useEffect(()=>{
    const unlisten = history.listen(() => clean());
    return unlisten;
  }, []);

  useEffect(()=>{

  }, [packagesState])

  // render
  return (
    <Container className={"Primary-container-style"}>
      <Grid item xs={12}>
        <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
        {t('SearchPackageTitle')}
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
            <PrimaryButton onClick={()=>{
                                        searchPackages(departureCountry, departureCity, destinationCountry, destinationCity, userData.token)
                                        setClickedSearch(true);
                                      }}    
                           disabled={departureCountry && departureCity && destinationCountry && destinationCity ? false : true}
                           fullWidth variant="contained" endIcon={<FindInPageRoundedIcon/>}>
              {t('SearchRideButton')}
          </PrimaryButton>
        </Grid>
      </Box>
      <Grid container justifyContent='space-around'>
      { packagesData.packages.length > 0 ? packages.currentData().map((pack, index)=>
            <GetPackage 
                      userId={pack.userId} 
                      packageId={pack.id} 
                      packageQuantity={pack.numberOfPackages} 
                      dimensions={pack.dimensions}
                      weight={pack.weight} 
                      departureDate={pack.departureDate.substr(0, 10)} 
                      price={pack.price}
                      departure={pack.departure}
                      destination={pack.destination}
                      departureAddress={pack.departureAddress} 
                      destinationAddress={pack.destinationAddress} 
                      status= {pack.status} 
                      interactions={pack.interactions} 
                      packageSpecialMention={pack.packageSpecialMention}
                      packageType={pack.packageType}
                      statusUpdated={()=>searchPackages(departureCountry, departureCity, destinationCountry, destinationCity, userData.token)}
              />
           ) : notFoundAnyRide()
        }
      </Grid>  
      <Box display="flex" justifyContent="space-evenly" mt="3%" mb="3%">
        <Box width='1' mt='5%' display='flex' justifyContent='center'>
            <Pagination 
              count={packages.maxPage} 
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
  return {
        searchPackages: (fromCountry, fromCity, toCountry, toCity, token) => dispatch(searchPackages(fromCountry, fromCity, toCountry, toCity, token)),
        clean: () => dispatch(clean())
}}

const mapStateToProps = state => ({packagesData: state.packagesData, userData: state.userData})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPackages);
