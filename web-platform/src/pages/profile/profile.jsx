import React, { Fragment, useState } from "react";
import { Country, City }  from 'country-state-city';
import { Link } from "react-router-dom";
import { Container, Box, Grid, MenuItem, FormControlLabel, IconButton} from "@material-ui/core";
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import CarroTextField from "../../components/textField/CarroTextField";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import CarroCheckbox from "../../components/checkbox/CarroCheckbox";
import profilePhotoMiddle from "../../assets/images/photoprofile1.png";
import { useTranslation } from "react-i18next";
import useStyles from "./profileStyle";
import {SaveAlt, Create, Cancel} from '@material-ui/icons';
import "../../App.css";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";

const Profile = (props) => {

  const classes = useStyles();
  const { t } = useTranslation();
  const [legalPersonChecked, setLegalPersonChecked] = useState(false);
  const [mandatoryDocuments, setMandatoryDocuments] = useState([]);
  const [departureCountry, setDepartureCountry] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [onEditMode, setOnEditMode] = useState(false);
  const handleChangeDepartureCountry=(event)=> setDepartureCountry(event.target.value);
  const handleChangeDepartureCity=(event)=> setDepartureCity(event.target.textContent);
  const handleLegalPersonCheckboxClick = (event) => {
    event.target.checked ? setLegalPersonChecked(true) : setLegalPersonChecked(false);
  };

  const handleUploadFile=(files)=>{
    const temp = [...mandatoryDocuments]
    for(const file of files)
      temp.push(file)
    setMandatoryDocuments(temp);
  }

  const handleDeleteFile=(index)=>{
    const temp = [...mandatoryDocuments];
    temp.splice(index, 1);
    setMandatoryDocuments(temp);
  }

  const getCountries = ()=> {
    return Country.getAllCountries();
  }
  const getCities = (country) =>{
      const cities = [];
      City.getCitiesOfCountry(country).map((city)=>(cities.push(city.name)));
      return cities;
  }

  return (
    <Container className={"Primary-container-style"}>
      {/* head */}
      <Grid container justifyContent="space-between" alignItems="center"> 
        <Grid container item xs={2} >
          <Box mb={4} fontWeight={400} fontSize={22}></Box>
        </Grid>
        <Grid container item xs={8} alignItems="center" justifyContent='center'>
          <Box display="flex" alignItems="center" justifyContent='center' mb={4} fontWeight={400} fontSize={22}>{t("Profile")}</Box>
        </Grid>
        <Grid container item xs={2} >
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
        <Grid container spacing={3} display="flex" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("LastName")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6} >
            <CarroTextField variant="outlined" label={t("FirstName")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label={t("PickupAddress")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("PhoneNumber")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroDatePicker label={t("Birthday")} disabled = {!onEditMode} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }}}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Languages")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Mail")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label={t("Particularities")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          {onEditMode ? (
                      <Grid item xs={12}>
                        <Box mt={3} mb={3} color={"#00B4D8"} fontWeight={500} fontSize={22} textAlign={"center"}>
                            <label style={{cursor:'pointer'}}>
                              {t('AddDocuments')}
                              <input type='file' style={{display:'none'}} accept=".jpg, .jpeg, .png" multiple onChange={(e)=>handleUploadFile(e.target.files)}/>
                            </label> 
                        </Box>
                      </Grid>
          ) : null}
          {mandatoryDocuments.map((file, index)=>{
            return    <Fragment key={index}>
                        <Grid item xs={11}>
                          <Box fontWeight='500' className='Secondary-color'>
                            {file.name}
                          </Box>
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton onClick={()=>handleDeleteFile(index)}  size='small'>
                            <Cancel  className='Secondary-color'/>
                          </IconButton>
                        </Grid>
                      </Fragment>
          })}
          {mandatoryDocuments.length ? (
                      <Grid item xs={5}>
                        <PrimaryButton variant='contained' onClick={()=> console.log(mandatoryDocuments)} fullWidth>
                          {t('Send')}
                        </PrimaryButton>
                      </Grid> 
          ) : null}
          <Grid item xs={12}>
            <FormControlLabel
              onChange={handleLegalPersonCheckboxClick}
              control={<CarroCheckbox disabled = {!onEditMode}/>}
              label={t("LegalPerson")}
            />
          </Grid>
          {legalPersonChecked ? (
              <Fragment>
                <Grid container item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("CompanyName")} fullWidth disabled = {!onEditMode}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("CUI")} fullWidth disabled = {!onEditMode}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("Adress")} fullWidth disabled = {!onEditMode}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant ='outlined' label={t("Country")} fullWidth disabled = {!onEditMode} select value={departureCountry} onChange={(e)=>handleChangeDepartureCountry(e)}>
                    {getCountries().map((country)=>(<MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>))}
                  </CarroTextField>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroAutocomplete disabled = {!onEditMode} options={getCities(departureCountry)} label={t("City")} onChange={(e)=>handleChangeDepartureCity(e)}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField disabled = {!onEditMode} variant="outlined" label={t("CompanyEmail")} fullWidth />
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField disabled = {!onEditMode} variant="outlined" label={t("PhoneNumber")} fullWidth/>
                </Grid>  
              </Fragment>
          ) : null}
          <Grid item xs={12}>
            <Box mt={3} mb={3} color={"#A0A0A0"} fontWeight={500} fontSize={22} textAlign={"center"}>
              {t("CarInfo")}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarBrand")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarModel")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarNR")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Color")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={5}>
            <PrimaryButton variant='contained' onClick={()=>setOnEditMode(!onEditMode)} fullWidth>
              {
                onEditMode ? (
                  <Fragment>
                    <Box px='3px'>{t('SaveButton')}</Box>
                    <SaveAlt fontSize='small'/>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Box px='3px'>{t('EditButton')}</Box>
                    <Create fontSize='small'/>
                  </Fragment>
                )
              }
            </PrimaryButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
