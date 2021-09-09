import React from "react";
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
} from "@material-ui/core";

import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import { makeStyles } from "@material-ui/core/styles";
import CarroTextField from "../../components/textField/CarroTextField";

const countries = [
  {
    value: "Romania",
    label: "RO",
  },
  {
    value: "Germany",
    label: "GER",
  },
  {
    value: "United States of America",
    label: "USA",
  },
  {
    value: "Japan",
    label: "JPN",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
   
  },
}));

export default function SearchRides() {
  const classes = useStyles();
  const [countries, setCountry] = React.useState("RO");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Container className={"Primary-container-style"}>
      <Grid item xs={12}>
        <Box mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
          Cauta transport
        </Box>
      </Grid>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid
          xs={12}
          justifyContent="center"
          alignItems="center"
          direction="column"
          container
          className={classes.SearchPackagesContent}
        >
          <Grid item className={classes.SelectBoxes}>
            <CarroTextField
              select
              variant="outlined"
              label="Tara de plecare"
              value={countries}
            >
              {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
            </CarroTextField>
          </Grid>
          <Grid item>
            <CarroTextField
              select
              variant="outlined"
              label="Oras de plecare"
              value={countries}
            >
              {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
            </CarroTextField>
          </Grid>
          <Grid item>
            <CarroTextField
              select
              variant="outlined"
              label="Tara destinatie"
              value={countries}
            >
              {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
            </CarroTextField>
          </Grid>
          <Grid item>
            <CarroTextField
              select
              variant="outlined"
              label="Oras destinatie"
              value={countries}
            >
              {/* {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
            </CarroTextField>
          </Grid>
          <Grid item>
            <CarroTextField
              id="date"
              variant="outlined"
              label="Data"
              type="date"
              defaultValue="aaaa-ll-zz"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item>
            <PrimaryButton variant="contained"> CAUTA</PrimaryButton>
          </Grid>
        </Grid>
      </form>
     


      <Grid container>
        <div className={classes.RiderBox}>
          fsdfsdf
        </div>
        <Grid item  className={classes.RiderBox}>
          <Box className={classes.RiderBox}>SDSD</Box>
        </Grid>
        
      </Grid>


    </Container>
    
  );
}
