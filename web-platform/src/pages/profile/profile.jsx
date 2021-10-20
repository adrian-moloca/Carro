import React, { useState } from "react";
import { Country, City }  from 'country-state-city';
import { Link } from "react-router-dom";
import { Container, Box, Grid, Checkbox, MenuItem, AccordionSummary, AccordionDetails, Accordion, FormControlLabel, FormGroup } from "@material-ui/core";
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import CarroTextField from "../../components/textField/CarroTextField";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import ProfileEditModal from '../../components/modals/profileModal/ProfileEditModal';
import profilePhotoMiddle from "../../assets/images/photoprofile1.png";
import { useTranslation } from "react-i18next";
import useStyles from "./profileStyle";
import "../../App.css";

const Profile = (props) => {

  const classes = useStyles();
  const { t } = useTranslation();
  const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState({
    checkedA: false,
    expanded: false,
  });

  const [departureCountry, setDepartureCountry] = useState(null);
  const [departureCity, setDepartureCity] = useState(null);

  const handleChangeDepartureCountry=(event)=> setDepartureCountry(event.target.value);
  const handleChangeDepartureCity=(event)=> setDepartureCity(event.target.textContent);

  const getCountries = ()=> {
    return Country.getAllCountries();
  }
  const getCities = (country) =>{
      const cities = [];
      City.getCitiesOfCountry(country).map((city)=>(cities.push(city.name)));
      return cities;
  }

  const handleChange = (event, expanded) => setState({ ...state, expanded:expanded, [event.target.name]: event.target.checked });

  return (
    <Container className={"Primary-container-style"}>
      {/* head */}
      <Grid container justifyContent="space-between" alignItems="center"> 
        <Grid item xs={2} >
          <Box mb={4} fontWeight={400} fontSize={22}></Box>
        </Grid>
        <Grid item xs={8} alignItems="center" justifyContent='center'>
          <Box display="flex" alignItems="center" justifyContent='center' mb={4} fontWeight={400} fontSize={22}>{t("Profile")}</Box>
        </Grid>
        <Grid item xs={2} >
            <Box display="flex" alignItems="center" justifyContent='center' fontSize={10} className={'Secondary-color'}>
              <Link to="/courier-profile" style={{textDecoration: "none"}}>
                <SeeProfileBtn>{t("ViewProfile")}</SeeProfileBtn>
              </Link>
            </Box>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" mb="3%">
        <img src={profilePhotoMiddle} alt={""}/>
      </Box>
      {/* required infos */}
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid container xs={8} spacing={3} display="flex" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("LastName")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12} sm={6} >
            <CarroTextField variant="outlined" label={t("FirstName")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label={t("PickupAddress")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("PhoneNumber")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroDatePicker label={t("Birthday")} disabled InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }}}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Languages")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Mail")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label={t("Particularities")} fullWidth disabled/>
          </Grid>
        </Grid>
      </Box>
      {/* doc text */}
      <Grid xs={12}>
        <Box mt={3} mb={3} color={"#00B4D8"} fontWeight={500} fontSize={22} textAlign={"center"}>
          {t("AddDocuments")}
        </Box>
      </Grid>
      {/* persoana juridica */}
      <Accordion square='true' className={classes.AccordionBorderRadius} onChange={(event, expanded)=>{handleChange(event, expanded)}} expanded={state.expanded}>
        <AccordionSummary aria-controls="content" id="transport-header">
          <Grid  container  direction="column"> 
            <Box display="flex" justifyContent="center" ml="1%">
              <Grid container xs={8}>
                <FormGroup row>
                  <FormControlLabel classes={{ label: classes.label }} control={<Checkbox checked={state.checkedA} name="checkedA" color="#00B4D8"/>} label={t("LegalPerson")}/>
                </FormGroup>
              </Grid>
            </Box>
          </Grid>
        </AccordionSummary>
        <AccordionDetails className={classes.AccordionDetailsFlex}>
          <Box display="flex" justifyContent="space-evenly" mt="1%">
            <Grid container xs={8} spacing={3} display="flex" justifyContent="center">
              <Grid item item xs={12} sm={6}>
                <CarroTextField variant="outlined" label={t("CompanyName")} fullWidth disabled/>
              </Grid>
              <Grid item xs={12} sm={6} justifyContent="center">
                <CarroTextField variant="outlined" label={t("CUI")} fullWidth disabled/>
              </Grid>
              <Grid item xs={12} sm={6} justifyContent="center">
                <CarroTextField variant="outlined" label={t("Adress")} fullWidth disabled/>
              </Grid>
              <Grid item xs={12} sm={6} justifyContent="center">
                <CarroTextField variant ='outlined' label={t("Country")} fullWidth disabled select value={departureCountry} onChange={(e)=>handleChangeDepartureCountry(e)}>
                  {getCountries().map((country)=>(<MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>))}
                </CarroTextField>
              </Grid>
              <Grid item xs={12} sm={6} justifyContent="center">
                <CarroAutocomplete disabled options={getCities(departureCountry)} label={t("City")} onChange={(e)=>handleChangeDepartureCity(e)}/>
              </Grid>
              <Grid item xs={12} sm={6} justifyContent="center">
                <CarroTextField disabled variant="outlined" label={t("CompanyEmail")} fullWidth />
              </Grid>
              <Grid item xs={12} sm={6} justifyContent="center">
                <CarroTextField disabled variant="outlined" label={t("PhoneNumber")} fullWidth/>
              </Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* car info */}
      <Grid xs={9}>
        <Box mt={3} mb={3} color={"#A0A0A0"} fontWeight={500} fontSize={22} textAlign={"center"}>
         {t("CarInfo")}
        </Box>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid container xs={8} spacing={3} display="flex" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarBrand")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarModel")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarNR")} fullWidth disabled/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Color")} fullWidth disabled/>
          </Grid>
        </Grid>
      </Box>
      {/* edit btn */}
      <Box display="flex" justifyContent="center" alignItems="center" mt="5%" mb="5%">
        <Grid container justifyContent="center" alignItems="center">
          <ProfileEditModal/>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
