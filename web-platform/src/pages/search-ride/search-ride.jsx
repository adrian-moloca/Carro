import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { Container, Box, Grid, MenuItem } from "@material-ui/core";
import PaginationSBD from "../../components/pagination/pagination";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroTextField from "../../components/textField/CarroTextField";
import DriverCard from "../../components/cards//DriverCard/DriverCard";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import profilePhotoMiddle from "../../assets/images/photoprofile1.png";
import profilePhotoMiddleSecond from "../../assets/images/photoprofile2.png";
import { Country, City } from "country-state-city";

const SearchRide = () => {
  // state
  const [departureDate, setDepartureDate] = useState(null);
  const [departureCountry, setDepartureCountry] = useState(null);
  const [destinationCountry, setDestinationCountry] = useState(null);
  const [departureCity, setDepartureCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);
  // handlers
  const handleChangeDepartureDate = (date) => setDepartureDate(date);
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

  return (
    <Container className={"Pack-container-style"}>
      <Grid item xs={12}>
        <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
          Cauta transport
        </Box>
      </Grid>

      <Box display="flex" justifyContent="space-evenly" mt="3%">
        <Grid container xs={12} spacing={3} justifyContent="space-between">
          <Grid container item xs justifyContent="center">
            <CarroTextField
              variant="outlined"
              label="Tara de plecare"
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
          <Grid container item xs justifyContent="center">
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
                  label="Oras de plecare"
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
              onChange={handleChangeDepartureCity}
              fullWidth
            />
          </Grid>
          <Grid container item xs justifyContent="center">
            <CarroTextField
              variant="outlined"
              label="Tara destinatie"
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
          <Grid container item xs justifyContent="center">
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
                  label="Oras destinatie"
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

          <Grid container item xs justifyContent="center">
            <CarroDatePicker
              label="Data"
              dateValue={departureDate}
              handleDateSelect={handleChangeDepartureDate}
              InputLabelProps={{
                style: { fontSize: "17px", marginTop: "3px" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt="3%">
        <Grid container item xs={2}>
          <PrimaryButton fullWidth variant="contained" endIcon={<DriveEtaIcon />}>
            {" "}
            CAUTA
          </PrimaryButton>
        </Grid>
      </Box>
      <Grid container xs={12}>
        <DriverCard
          image={profilePhotoMiddle}
          name="Marius popescu"
          plecare="Timisoara"
          destinatie="Bucuresti"
          telefon="0888888888"
          dataPlecare="26/08/2021 02:00 AM"
        ></DriverCard>
        <DriverCard
          image={profilePhotoMiddleSecond}
          name="Marius popescu"
          plecare="Timisoara"
          destinatie="Bucuresti"
          telefon="0888888888"
          dataPlecare="26/08/2021 02:00 AM"
        ></DriverCard>
        <DriverCard
          image={profilePhotoMiddle}
          name="Marius popescu"
          plecare="Timisoara"
          destinatie="Bucuresti"
          telefon="0888888888"
          dataPlecare="26/08/2021 02:00 AM"
        />
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="3%" mb="3%">
        <PaginationSBD />
      </Box>
    </Container>
  );
};

export default SearchRide;
