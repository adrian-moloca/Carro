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
          <PrimaryButton fullWidth variant="contained">
            {" "}
            CAUTA
          </PrimaryButton>
        </Grid>
      </Box>
      <Box
        display="flex"
        direction="row"
        justifyContent="space-evenly"
        mx={-2}
        mt={5}
        borderTop={1}
        borderColor="grey.400"
      >
        <Box
          width="23%"
          ml={2}
          mt={2}
          border={2}
          borderColor="grey.400"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            pb={1}
            borderBottom={1.5}
            borderColor="grey.400"
          >
            <img src={packageImg} />
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Cantitate: 1</Box>
            <Box>Dimensiuni(m): 0x0x0</Box>
            <Box>Greutate: 1Kg</Box>
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
            <Box>Adresa ridicare: Lorem Ipsium Street</Box>
            <Box>Adresa destinatie: Lorem Ipsium Street</Box>
          </Box>
          <Box p={1} borderBottom={1.5} borderColor="grey.400">
            <Box display="flex" justifyContent="center" fontSize={14}>
              PRET
            </Box>
            <Box display="flex" justifyContent="center" fontSize={20}>
              15 LEI
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mx={1}
            my={2}
            borderColor="grey.400"
          >
            <Box px={0.3}>
              <SvgIcon component={fragileIco} viewBox="0 0 322 512" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fishIco} viewBox="0 0 18 19" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fireIco} viewBox="0 0 23 22" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={handboxIco} viewBox="0 0 21 21" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={animalprintsIco} viewBox="0 0 20 20" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            my={2}
            px={2}
          >
            <Box>
              <Button
                size="medium"
                variant="contained"
                className={classes.GreenButton}
              >
                PREDARE
              </Button>
            </Box>
            <Box py={1}>
              <PrimaryButton size="small" variant="contained">
                DETALII
              </PrimaryButton>
            </Box>
          </Box>
        </Box>

        <Box
          width="23%"
          ml={2}
          mt={2}
          border={2}
          borderColor="grey.400"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            pb={1}
            borderBottom={1.5}
            borderColor="grey.400"
          >
            <img src={packageImg} />
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Cantitate: 1</Box>
            <Box>Dimensiuni(m): 0x0x0</Box>
            <Box>Greutate: 1Kg</Box>
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
            <Box>Adresa ridicare: Lorem Ipsium Street</Box>
            <Box>Adresa destinatie: Lorem Ipsium Street</Box>
          </Box>
          <Box p={1} borderBottom={1.5} borderColor="grey.400">
            <Box display="flex" justifyContent="center" fontSize={14}>
              PRET
            </Box>
            <Box display="flex" justifyContent="center" fontSize={20}>
              15 LEI
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mx={1}
            my={2}
            borderColor="grey.400"
          >
            <Box px={0.3}>
              <SvgIcon component={fragileIco} viewBox="0 0 322 512" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fishIco} viewBox="0 0 18 19" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fireIco} viewBox="0 0 23 22" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={handboxIco} viewBox="0 0 21 21" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={animalprintsIco} viewBox="0 0 20 20" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            my={2}
            px={2}
          >
            <Box>
              <Button
                size="medium"
                variant="contained"
                className={classes.GreenButton}
              >
                PREDARE
              </Button>
            </Box>
            <Box py={1}>
              <PrimaryButton size="small" variant="contained">
                DETALII
              </PrimaryButton>
            </Box>
          </Box>
        </Box>

        <Box
          width="23%"
          ml={2}
          mt={2}
          border={2}
          borderColor="grey.400"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            pb={1}
            borderBottom={1.5}
            borderColor="grey.400"
          >
            <img src={packageImg} />
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Cantitate: 1</Box>
            <Box>Dimensiuni(m): 0x0x0</Box>
            <Box>Greutate: 1Kg</Box>
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
            <Box>Adresa ridicare: Lorem Ipsium Street</Box>
            <Box>Adresa destinatie: Lorem Ipsium Street</Box>
          </Box>
          <Box p={1} borderBottom={1.5} borderColor="grey.400">
            <Box display="flex" justifyContent="center" fontSize={14}>
              PRET
            </Box>
            <Box display="flex" justifyContent="center" fontSize={20}>
              15 LEI
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mx={1}
            my={2}
            borderColor="grey.400"
          >
            <Box px={0.3}>
              <SvgIcon component={fragileIco} viewBox="0 0 322 512" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fishIco} viewBox="0 0 18 19" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fireIco} viewBox="0 0 23 22" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={handboxIco} viewBox="0 0 21 21" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={animalprintsIco} viewBox="0 0 20 20" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            my={2}
            px={2}
          >
            <Box>
              <Button
                size="medium"
                variant="contained"
                className={classes.GreenButton}
              >
                PREDARE
              </Button>
            </Box>
            <Box py={1}>
              <PrimaryButton size="small" variant="contained">
                DETALII
              </PrimaryButton>
            </Box>
          </Box>
        </Box>

        <Box
          width="23%"
          ml={2}
          mt={2}
          border={2}
          borderColor="grey.400"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            pb={1}
            borderBottom={1.5}
            borderColor="grey.400"
          >
            <img src={packageImg} />
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Cantitate: 1</Box>
            <Box>Dimensiuni(m): 0x0x0</Box>
            <Box>Greutate: 1Kg</Box>
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
            <Box>Adresa ridicare: Lorem Ipsium Street</Box>
            <Box>Adresa destinatie: Lorem Ipsium Street</Box>
          </Box>
          <Box p={1} borderBottom={1.5} borderColor="grey.400">
            <Box display="flex" justifyContent="center" fontSize={14}>
              PRET
            </Box>
            <Box display="flex" justifyContent="center" fontSize={20}>
              15 LEI
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mx={1}
            my={2}
            borderColor="grey.400"
          >
            <Box px={0.3}>
              <SvgIcon component={fragileIco} viewBox="0 0 322 512" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fishIco} viewBox="0 0 18 19" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fireIco} viewBox="0 0 23 22" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={handboxIco} viewBox="0 0 21 21" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={animalprintsIco} viewBox="0 0 20 20" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            my={2}
            px={2}
          >
            <Box>
              <Button
                size="medium"
                variant="contained"
                className={classes.GreenButton}
              >
                PREDARE
              </Button>
            </Box>
            <Box py={1}>
              <PrimaryButton size="small" variant="contained">
                DETALII
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
        <Box
          width="23%"
          ml={2}
          mt={2}
          border={2}
          borderColor="grey.400"
          borderRadius="10px"
        >
          <Box
            display="flex"
            justifyContent="center"
            mt={2}
            pb={1}
            borderBottom={1.5}
            borderColor="grey.400"
          >
            <img src={packageImg} />
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Cantitate: 1</Box>
            <Box>Dimensiuni(m): 0x0x0</Box>
            <Box>Greutate: 1Kg</Box>
          </Box>
          <Box p={1} fontSize={10} borderBottom={1.5} borderColor="grey.400">
            <Box>Data ridicare: 26/08/2021 04:30 AM</Box>
            <Box>Adresa ridicare: Lorem Ipsium Street</Box>
            <Box>Adresa destinatie: Lorem Ipsium Street</Box>
          </Box>
          <Box p={1} borderBottom={1.5} borderColor="grey.400">
            <Box display="flex" justifyContent="center" fontSize={14}>
              PRET
            </Box>
            <Box display="flex" justifyContent="center" fontSize={20}>
              15 LEI
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mx={1}
            my={2}
            borderColor="grey.400"
          >
            <Box px={0.3}>
              <SvgIcon component={fragileIco} viewBox="0 0 322 512" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fishIco} viewBox="0 0 18 19" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={fireIco} viewBox="0 0 23 22" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={handboxIco} viewBox="0 0 21 21" />
            </Box>
            <Box px={0.3}>
              <SvgIcon component={animalprintsIco} viewBox="0 0 20 20" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            my={2}
            px={2}
          >
            <Box>
              <Button
                size="medium"
                variant="contained"
                className={classes.GreenButton}
              >
                PREDARE
              </Button>
            </Box>
            <Box py={1}>
              <PrimaryButton size="small" variant="contained">
                DETALII
              </PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt="3%">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Box>
    </Container>
  );
};

export default SearchPackages;
