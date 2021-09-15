import React, { useState } from "react";
import "./SearchPackageStyles.jsx";
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
import FindInPageRoundedIcon from '@material-ui/icons/FindInPageRounded';
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
import useStyles from "./SearchPackageStyles";
import RideCard from "../../components/cards/RideCard/RideCard";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "18ch",
//     },
//   },
// }));
const SearchPackages = () => {
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
          Cauta pachete
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
          <PrimaryButton fullWidth variant="contained" endIcon={<FindInPageRoundedIcon />}>
            {" "}
            CAUTA
          </PrimaryButton>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="3%">
        <RideCard />
        <RideCard />
        <RideCard />
      </Box>

      <Box display="flex" justifyContent="space-evenly" mt="3%">
        <PaginationSBD />
      </Box>
    </Container>
  );
};

export default SearchPackages;
