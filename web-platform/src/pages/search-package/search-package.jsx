import React, { useState } from "react";
import { Container, Box, Grid, MenuItem } from "@material-ui/core";
import { Country, City } from "country-state-city";
import { useTranslation } from 'react-i18next';
import { Autocomplete } from "@material-ui/lab";
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import {Pagination} from '@material-ui/lab';
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroTextField from "../../components/textField/CarroTextField";
import PackageCard from '../../components/cards/package-card/package-card';
import usePagination from '../../components/pagination/use-pagination/use-pagination';

const SearchPackages = () => {

  const packages_a = [
    {
        sender: 'George Micu',
        senderPhone: '0888888888',
        destinatary: 'George Mare',
        destinataryPhone: '0999999999',
        packageQuantity: 1,
        packageDimensions: '0x0x0',
        packageWeight: '1 Kg',
        departureDate: '26/08/2021 02:00 AM',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        details: 'ceva de trimis',
        price: '15 RON',
        status: 10,
        rideExists: true,
        packageSpecialMention: {
            isFragile: true,
            isFoodGrade: false,
            isFlammable: false,
            isHandleWithCare: true,
            isAnimal: true,
          },
    },
    {
      sender: 'George Micu',
      senderPhone: '0888888888',
      destinatary: 'George Mare',
      destinataryPhone: '0999999999',
      packageQuantity: 1,
      packageDimensions: '0x0x0',
      packageWeight: '1 Kg',
      departureDate: '26/08/2021 02:00 AM',
      departureAddress: 'Lorem Ipsium Street',
      destinationAddress: 'Lorem Ipsium Street',
      details: 'ceva de trimis',
      price: '15 RON',
      status: 10,
      rideExists: true,
      packageSpecialMention: {
          isFragile: false,
          isFoodGrade: false,
          isFlammable: false,
          isHandleWithCare: false,
          isAnimal: true,
        },
    },
    {
      sender: 'George Micu',
      senderPhone: '0888888888',
      destinatary: 'George Mare',
      destinataryPhone: '0999999999',
      packageQuantity: 1,
      packageDimensions: '0x0x0',
      packageWeight: '1 Kg',
      departureDate: '26/08/2021 02:00 AM',
      departureAddress: 'Lorem Ipsium Street',
      destinationAddress: 'Lorem Ipsium Street',
      details: 'ceva de trimis',
      price: '15 RON',
      status: 10,
      rideExists: true,
      packageSpecialMention: {
          isFragile: false,
          isFoodGrade: false,
          isFlammable: true,
          isHandleWithCare: true,
          isAnimal: true,
        },
    },
    {
      sender: 'George Micu',
      senderPhone: '0888888888',
      destinatary: 'George Mare',
      destinataryPhone: '0999999999',
      packageQuantity: 1,
      packageDimensions: '0x0x0',
      packageWeight: '1 Kg',
      departureDate: '26/08/2021 02:00 AM',
      departureAddress: 'Lorem Ipsium Street',
      destinationAddress: 'Lorem Ipsium Street',
      details: 'ceva de trimis',
      price: '15 RON',
      status: 10,
      rideExists: true,
      packageSpecialMention: {
          isFragile: false,
          isFoodGrade: false,
          isFlammable: true,
          isHandleWithCare: true,
          isAnimal: true,
        },
    },
  ]

  const { t } = useTranslation();
  // state
  const [departureCountry, setDepartureCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');

  const handleChangeDepartureCountry = (event) => setDepartureCountry(event.target.value);
  const handleChangeDestinationCountry = (event) => setDestinationCountry(event.target.value);
  const handleChangeDepartureCity = (event) => setDepartureCity(event.target.textContent);
  const handleChangeDestinationCity = (event) => setDestinationCity(event.target.textContent);
  const getCountries = () => {return Country.getAllCountries()};

  const getCities = (country) => {
    const cities = [];
    City.getCitiesOfCountry(country).map((city) => cities.push(city.name));
    return cities;
  };

  const[packagesState, setPackagesState] = useState(packages_a);
  const packages = usePagination(packagesState, 3)
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value); packages.jump(value)};

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
            <CarroTextField
              variant="outlined"
              label= {t('SearchRideDepartureCountry')}
              InputLabelProps={{
                style: { fontSize: "17px", marginTop: "3px" },
              }}
              fullWidth
              select
              value={departureCountry}
              onChange={handleChangeDepartureCountry}
            >
              {getCountries().map((country) => (
                <MenuItem key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </MenuItem>
              ))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <Autocomplete
              options={getCities(departureCountry)}
              autoHighlight
              autoSelect
              getOptionLabel={(option) => option}
              renderOption={(option) => (
                <React.Fragment>{option}</React.Fragment>
              )}
              renderInput={(params) => (
                <CarroTextField
                  {...params}
                  label={t('SearchRideDepartureCity')}
                  InputLabelProps={{
                    style: { fontSize: "17px", marginTop: "3px"},
                  }}
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                  fullWidth
                />
              )}
              onChange={handleChangeDepartureCity}
              fullWidth
            />
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <CarroTextField
              variant="outlined"
              label={t('SearchRideDestinationCountry')}
              InputLabelProps={{
                style: { fontSize: "17px", marginTop: "3px" },
              }}
              fullWidth
              select
              value={destinationCountry}
              onChange={handleChangeDestinationCountry}
            >
              {getCountries().map((country) => (
                <MenuItem key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </MenuItem>
              ))}
            </CarroTextField>
          </Grid>
          <Grid container item xs={12} md={6} xl={3} justifyContent="center">
            <Autocomplete
              options={getCities(destinationCountry)}
              autoHighlight
              autoSelect
              getOptionLabel={(option) => option}
              renderOption={(option) => (
                <React.Fragment>{option}</React.Fragment>
              )}
              renderInput={(params) => (
                <CarroTextField
                  {...params}
                  label={t('SearchRideDestinationCity')}
                  InputLabelProps={{
                    style: { fontSize: "17px", marginTop: "3px" },
                  }}
                  variant="outlined"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                  fullWidth
                />
              )}
              onChange={handleChangeDestinationCity}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt="3%">
          <Grid item xs={11} md={5} xl={3}>
            <PrimaryButton fullWidth variant="contained" endIcon={<FindInPageRoundedIcon/>}>
              {t('SearchRideButton')}
          </PrimaryButton>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="3%">
      { packages.currentData().map((pack, index)=>
          <Grid key={index} container item xs={12}  md={5}  xl={4} justifyContent='space-around'>
            <PackageCard packageQuantity={pack.packageQuantity} packageDimensions={pack.packageDimensions} sender={pack.sender}
                        senderPhone={pack.senderPhone} destinatary={pack.destinatary} destinataryPhone={pack.destinataryPhone}
                        packageWeight={pack.packageWeight} departureDate={pack.departureDate} price={pack.price}
                        departureAddress={pack.departureAddress} destinationAddress={pack.destinationAddress} details={pack.details}
                        status= {pack.status} rideExists={pack.rideExists} specialMention={pack.packageSpecialMention}/>
          </Grid>
        )}
      </Box>
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

export default SearchPackages;
