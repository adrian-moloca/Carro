import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GoogleIcon from "../../assets/images/GoogleIcon.png";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import { Country, State, City }  from 'country-state-city';
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import {
  Container,
  Box,
  Grid,
  Checkbox,
  MenuItem,
  AccordionSummary,
  AccordionDetails,
  Accordion, 
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import "../../App.css";
import useStyles from "./profileStyle";
import CarroTextField from "../../components/textField/CarroTextField";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import profilePhotoMiddle from "../../assets/images/photoprofile1.png";

const Profile = (props) => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState({
    checkedA: false,
    expanded: false,
  });

  const [departureCountry, setDepartureCountry] = useState(null);
  const [departureCity, setDepartureCity] = useState(null);


  const handleChangeDepartureCountry=(event)=>{
    setDepartureCountry(event.target.value);
  }
  const handleChangeDepartureCity=(event)=>{
    setDepartureCity(event.target.textContent);   
  }

  const getCountries = ()=> {
    return Country.getAllCountries();
  }
  const getCities = (country) =>{
      const cities = [];
      City.getCitiesOfCountry(country).map((city)=>(cities.push(city.name)));
      return cities;
  }

  const handleChange = (event, expanded) => {
    setState({ ...state, expanded:expanded, [event.target.name]: event.target.checked });
  };

  return (
    <Container className={"Primary-container-style"}>
      <Grid container item xs={12} justifyContent='center' alignItems="center"> 
        <Grid container item xs={11} justifyContent='center'>
          <Box mb={4} ml={10} fontWeight={400} fontSize={22} textAlign={'center'}>Profil</Box>
        </Grid>
        <Grid container item xs={1} justifyContent='center'>
          <Box fontSize={10} className={'Secondary-color'}>
            <SeeProfileBtn>Vizualizeaza profil</SeeProfileBtn>
          </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mb="3%">
        <img src={profilePhotoMiddle} />
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid
          container
          xs={8}
          spacing={3}
          display="flex"
          justifyContent="center"
        >
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Nume" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Prenume" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label="Adresa" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField
              variant="outlined"
              label="Numar de telefon"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroDatePicker
              label="Data de nastere"
              InputLabelProps={{
                style: { fontSize: "17px", marginTop: "3px" },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <CarroTextField
              variant="outlined"
              label="Limbi cunoscute"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField
              variant="outlined"
              label="Adresa de email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <CarroTextField
              variant="outlined"
              label="Particularitati"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      <Grid xs={12}>
        <Box
          mt={3}
          mb={3}
          color={"#00B4D8"}
          fontWeight={500}
          fontSize={22}
          textAlign={"center"}
        >
          INCARCA DOCUMENTELE OBLIGATORII
        </Box>
      </Grid>
      <Accordion square='true' className={classes.AccordionBorderRadius} onChange={(event, expanded)=>{handleChange(event, expanded)}} expanded={state.expanded}>
        <AccordionSummary aria-controls="content" id="transport-header">
          <Grid 
              container 
              direction="column"> 
            <Box display="flex" justifyContent="center" ml="1%">
              <Grid container xs={8}>
                <FormGroup row>
                  <FormControlLabel
                    classes={{ label: classes.label }}
                    control={
                      <Checkbox
                        checked={state.checkedA}
                        // onChange={handleChange}
                        name="checkedA"
                        color="#00B4D8"
                      ></Checkbox>
                    }label="Persoana Juridica"
                  />
                </FormGroup>
              </Grid>
            </Box>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.AccordionDetailsFlex}>
          <Box display="flex" justifyContent="space-evenly" mt="1%">
            <Grid
              container
              xs={8}
              spacing={3}
              display="flex"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <CarroTextField variant="outlined" label="Numele firmei" fullWidth />
              </Grid>
              <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant="outlined" label="CUI" fullWidth />
              </Grid>
              <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant="outlined" label="Adresa " fullWidth />
              </Grid>
              <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant ='outlined' label='Tara' fullWidth
                  select value={departureCountry} onChange={(e)=>handleChangeDepartureCountry(e)}>
                      {getCountries().map((country)=>(
                          <MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>
                      ))}
                </CarroTextField>
              </Grid>
              <Grid container item xs={6} justifyContent="center">
              <CarroAutocomplete options={getCities(departureCountry)} label="Oras" onChange={(e)=>handleChangeDepartureCity(e)}/>
              </Grid>
              <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant="outlined" label="Email firma" fullWidth />
              </Grid>
              <Grid container item xs={6} justifyContent="center">
                <CarroTextField variant="outlined" label="Numar de telefon" fullWidth/>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Grid xs={9}>
        <Box
          mt={3}
          mb={3}
          color={"#A0A0A0"}
          fontWeight={500}
          fontSize={22}
          textAlign={"center"}
        >
          INFORMATII AUTOTURISM (OPTIONAL)
        </Box>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid
          container
          xs={8}
          spacing={3}
          display="flex"
          justifyContent="center"
        >
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Marca" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Model" fullWidth />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField
              variant="outlined"
              label="Numar de inmatriculare"
              fullWidth
            />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <CarroTextField variant="outlined" label="Culoare" fullWidth />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mt="3%" mb="5%">
        <Grid container item xs={3}>
          <PrimaryButton fullWidth variant="contained" endIcon={<EditIcon />}>
            EDITEAZA
          </PrimaryButton>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
