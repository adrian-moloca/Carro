import React, { useState } from "react";
import { Container, Box, Grid, MenuItem } from "@material-ui/core";
import { Country, City } from "country-state-city";
import { useTranslation } from 'react-i18next';
import { Autocomplete } from "@material-ui/lab";
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
import PaginationSBD from "../../components/pagination/pagination";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroTextField from "../../components/textField/CarroTextField";
import Packages from "../../components/packages/packages";

const SearchPackages = () => {

  const { t } = useTranslation();
  // state
  const [departureCountry, setDepartureCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const [departureCity, setDepartureCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);

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

  // render
  return (
    <Container className={"searchPackageContainerStyle"}>
      <Grid item xs={12}>
        <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
        {t('SearchPackageTitle')}
        </Box>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="3%">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
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
        <Grid container item xs={4} sm={3}>
          <PrimaryButton size={"large"} fullWidth variant="contained" endIcon={<FindInPageRoundedIcon/>}>
            {t('SearchRideButton')}
          </PrimaryButton>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="3%">
        <Packages/>
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt="3%" mb="3%">
        <PaginationSBD /> 
      </Box>
    </Container>
  );
};

export default SearchPackages;
