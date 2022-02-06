import React, { useState } from "react";
import "./SearchRideStyle.jsx";
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
  Typography,
  Button,
  MenuItem,
  SvgIcon,
} from "@material-ui/core";
import PaginationSBD from "../../components/pagination/pagination";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Pagination from "@material-ui/lab/Pagination";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import { makeStyles } from "@material-ui/core/styles";
import CarroTextField from "../../components/textField/CarroTextField";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import packageImg from "../../assets/images/box-small.png";
import { ReactComponent as fragileIco } from "../../assets/icon/fragile.svg";
import { ReactComponent as fishIco } from "../../assets/icon/fish.svg";
import { ReactComponent as fireIco } from "../../assets/icon/fire.svg";
import { ReactComponent as handboxIco } from "../../assets/icon/handbox.svg";
import { ReactComponent as animalprintsIco } from "../../assets/icon/animalprints.svg";
import { Country, State, City } from "country-state-city";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./SearchRideStyle";
import profilePhotoMiddle from "../../assets/images/photoprofile1.png";
import profilePhotoMiddleSecond from "../../assets/images/photoprofile2.png";
import DriverCard from "../../components/cards//DriverCard/DriverCard";

const SearchRide = () => {
  const classes = useStyles();
  const [departureDate, setDepartureDate] = useState(null);

  const [departureCountry, setDepartureCountry] = useState(null);

  const [destinationCountry, setDestinationCountry] = useState(null);

  const [departureCity, setDepartureCity] = useState(null);

  const [destinationCity, setDestinationCity] = useState(null);

  const handleChangeDepartureDate = (date) => {
    setDepartureDate(date);
  };

  const handleChangeDepartureCountry = (event) => {
    setDepartureCountry(event.target.value);
  };

  const handleChangeDestinationCountry = (event) => {
    setDestinationCountry(event.target.value);
  };

  const handleChangeDepartureCity = (event) => {
    setDepartureCity(event.target.textContent);
  };

  const handleChangeDestinationCity = (event) => {
    setDestinationCity(event.target.textContent);
  };

  const getCountries = () => {
    return Country.getAllCountries();
  };

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
      <Grid container justifyContent='space-around'>
      { ridesData.rides.length > 0 ? 
        rides.currentData().map((ride)=> <GetRide key={ride.id} name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={ride.statuses} interactions={ride.interactions}  {...ride}/>) : notFoundAnyRide()}
      </Grid>

      <Box display="flex" justifyContent="space-evenly" mt="3%">
        <PaginationSBD />
      </Box>
    </Container>
  );
};
export default SearchRide;
