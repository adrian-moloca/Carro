import React, { useState } from "react";
import { Modal, Container, Box, Grid, Checkbox, MenuItem, AccordionSummary, AccordionDetails, Accordion, FormControlLabel, FormGroup } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from "react-i18next";
import { Country, City }  from 'country-state-city';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import CarroTextField from '../../textField/CarroTextField';
import CarroDatePicker from '../../datePicker/CarroDatePicker';
import CarroAutocomplete from '../../autocomplete/CarroAutocomplete';
import useStyles from './ProfileEditModalStyle'

const ProfileEditModal = () =>  {

  const { t } = useTranslation();
  const classes = useStyles();
  // state & handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <Box>
      <PrimaryButton fullWidth variant="contained" endIcon={<EditIcon />} onClick={handleOpen}>
        {t("EditButton")}
      </PrimaryButton>
      <Modal open={open} className={classes.modal} onClose={handleClose}>
        <Container>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  className={classes.paper}>
            <Box mb={4} fontWeight={400} fontSize={22} textAlign={'center'}>{t("EditProfileButton")}</Box>
            {/* required infos */}
            <Box display="flex" justifyContent="space-evenly" mt="1%">
              <Grid container xs={8} spacing={3} display="flex" justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("LastName")} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6} >
                  <CarroTextField variant="outlined" label={t("FirstName")} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                  <CarroTextField variant="outlined" label={t("PickupAddress")} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("PhoneNumber")} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CarroDatePicker label={t("Birthday")} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("Languages")} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("Mail")} fullWidth/>
                </Grid>
                <Grid item xs={12}>
                  <CarroTextField variant="outlined" label={t("Particularities")} fullWidth/>
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
                    <Grid item xs={12} sm={6}>
                      <CarroTextField variant="outlined" label={t("CompanyName")} fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CarroTextField variant="outlined" label={t("CUI")} fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CarroTextField variant="outlined" label={t("Adress")} fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CarroTextField variant ='outlined' label={t("Country")} fullWidth select value={departureCountry} onChange={(e)=>handleChangeDepartureCountry(e)}>
                        {getCountries().map((country)=>(<MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>))}
                      </CarroTextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CarroAutocomplete options={getCities(departureCountry)} label={t("City")} onChange={(e)=>handleChangeDepartureCity(e)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CarroTextField variant="outlined" label={t("CompanyEmail")} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CarroTextField variant="outlined" label={t("PhoneNumber")} fullWidth/>
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
                  <CarroTextField variant="outlined" label={t("CarBrand")} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("CarModel")} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("CarNR")} fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("Color")} fullWidth/>
                </Grid>
              </Grid>
            </Box>
            <Box display="flex" mt={3}>
              <Box mr={2}>
                <SecondaryButton variant="outlined" onClick={handleClose}>{t("Cancel")}</SecondaryButton>
              </Box>
              <Box ml={2}>
                <GreenCaroButton variant="contained">{t("SaveButton")}</GreenCaroButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Modal>
    </Box>
  );
};

export default ProfileEditModal;