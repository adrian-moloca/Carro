import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Box, Grid, MenuItem, FormControlLabel, IconButton} from "@material-ui/core";
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import CarroTextField from "../../components/textField/CarroTextField";
import PhoneTextField from "../../components/telephoneNumberField/PhoneTextField";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import CarroCheckbox from "../../components/checkbox/CarroCheckbox";
import profilePhotoMiddle from "../../assets/images/photoprofile1.png";
import { useTranslation } from "react-i18next";
import useStyles from "./profileStyle";
import {SaveAlt, Create, Cancel} from '@material-ui/icons';
import "../../App.css";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import { getCountries, getCities } from "../../utils/Functions/countries-city-functions";
import { connect } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/Functions/capitalize-first-letter";
import { phoneValidator } from "../../utils/Functions/input-validators";
import { fetchCourierProfile } from "../../redux/actions/CourierActions";

const Profile = ({userData, courierProfile, fetchCourierProfile}) => {

  const history = useHistory();

  const classes = useStyles();
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState(capitalizeFirstLetter(String(userData.name).substring(0, String(userData.name).indexOf(' '))))
  const [lastName, setLastName] = useState(capitalizeFirstLetter(String(userData.name).substring(String(userData.name).indexOf(' ')+1, String(userData.name).length)))
  const [email, setEmail] = useState(userData.email);
  const [countryPhoneCode, setCountryPhoneCode] = useState(String(userData.phoneNumber).substring(1, String(userData.phoneNumber).length-10));
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(String(userData.phoneNumber).substring(String(userData.phoneNumber).length-10, String(userData.phoneNumber).length));
  const [dateOfBirth, setDateOfBirth] = useState(new Date(new Date().getFullYear()-14, new Date().getMonth(),new Date().getDate(), 0));
  const [legalPersonChecked, setLegalPersonChecked] = useState(false);
  const [mandatoryDocuments, setMandatoryDocuments] = useState([]);
  const [departureCountry, setDepartureCountry] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [onEditMode, setOnEditMode] = useState(false);
  const handleChangeDepartureCountry=(event, newValue)=> setDepartureCountry(newValue);
  const handleChangeDepartureCity=(event, newValue)=> setDepartureCity(newValue);
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

  const redirectAfterFetchCourierProfile = () => {
      if(courierProfile.hasErrors === true){
        alert("Profilul curierului nu este disponibil")
      }else{
        history.push("/courier-profile")
      }
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
                <SeeProfileBtn onClick={()=>{
                    fetchCourierProfile(userData.id, userData.token)
                    setTimeout(()=>redirectAfterFetchCourierProfile(), 500)
                }}>{t("ViewProfile")}</SeeProfileBtn>
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
            <CarroTextField value={lastName} variant="outlined" label={t("LastName")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6} >
            <CarroTextField value={firstName} variant="outlined" label={t("FirstName")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label={t("Address")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneTextField value={inputValuePhoneNumber}
              onChange = {(e) => setInputValuePhoneNumber(e.target.value)}
              countryPhoneCode={countryPhoneCode} 
              handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
              error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}
              disabled={!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroDatePicker value={dateOfBirth} onChange={(date) => setDateOfBirth(date)} format='dd/MM/yyyy' views={["year", "month", "date"]}
                             minDate={(new Date().getFullYear()-14).toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString()}
                             label={t("Birthday")} disabled = {!onEditMode} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }}} openTo="year"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Languages")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField value={email} variant="outlined" label={t("Mail")} fullWidth disabled = {!onEditMode}/>
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
                        <PrimaryButton variant='contained' /* onClick={} */ fullWidth>
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
          ) : ''}
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

const mapStateToProps = state =>({userData: state.userData, courierProfile: state.courierData})
const mapDispatchToProps = dispatch =>({fetchCourierProfile: (userId, token) => dispatch(fetchCourierProfile(userId, token))})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);