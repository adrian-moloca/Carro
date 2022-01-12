import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Box, Grid, Avatar, MenuItem, FormControlLabel, IconButton} from "@material-ui/core";
import CarroAutocomplete from "../../components/autocomplete/CarroAutocomplete";
import CarroTextField from "../../components/textField/CarroTextField";
import PhoneTextField from "../../components/telephoneNumberField/PhoneTextField";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import CarroCheckbox from "../../components/checkbox/CarroCheckbox";
import AvatarImage from "../../assets/images/avatarImg.png";
import { useTranslation } from "react-i18next";
import useStyles from "./profileStyle";
import {SaveAlt, Create, Cancel} from '@material-ui/icons';
import "../../App.css";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import { getCountries, getCities } from "../../utils/Functions/countries-city-functions";
import { connect } from "react-redux";
import { phoneValidator } from "../../utils/Functions/input-validators";
import { fetchCourierProfile } from "../../redux/actions/CourierActions";
import axios from "axios";
import { getBase64Image } from "../../utils/Functions/base64Image";
import utilData from '../../utils/constants';
import { getUserProfileImage, getUserPersonalInfo } from "../../redux/actions/UserActions";

const Profile = ({userData, courierProfile, fetchCourierProfile, getUserProfileImage, getUserPersonalInfo}) => {

  const history = useHistory();

  const classes = useStyles();
  const { t } = useTranslation();
  const [profilePhoto, setProfilePhoto] = useState('');
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [countryPhoneCode, setCountryPhoneCode] = useState();
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState();
  const [address, setAddress] = useState('') 
  const [dateOfBirth, setDateOfBirth] = useState(new Date(new Date().getFullYear()-14, new Date().getMonth(),new Date().getDate(), 0));
  const [legalPersonChecked, setLegalPersonChecked] = useState(false);
  const [mandatoryDocuments, setMandatoryDocuments] = useState([]);
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [onEditMode, setOnEditMode] = useState(false);
  const [profilePhotoChanged, setProfilePhotoChanged] = useState(false);
  const [personalInfoChanged, setPersonalInfoChanged] = useState(false);
  const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);
  const handleChangeCountry=(event, newValue)=> setCountry(newValue);
  const handleChangeCity=(event, newValue)=> setCity(newValue);
  const handleLegalPersonCheckboxClick = (event) => {
    event.target.checked ? setLegalPersonChecked(true) : setLegalPersonChecked(false);
  };

  useEffect(()=>{
    getUserProfileImage(userData.token)
    getUserPersonalInfo(userData.token)
  }, [onEditMode])

  useEffect(()=>{
	userData.profileImage && userData.profileImage.length > 0 ? setProfilePhoto(userData.profileImage) : setProfilePhoto('')
	userData.personalInfo.email && userData.personalInfo.email.length > 0 ? setEmail(userData.personalInfo.email) : setEmail('')
	userData.personalInfo.firstName && userData.personalInfo.firstName.length > 0 ? setFirstName(userData.personalInfo.firstName) : setFirstName('')
	userData.personalInfo.lastName && userData.personalInfo.lastName.length > 0 ? setLastName(userData.personalInfo.lastName) : setLastName('')
	userData.personalInfo.dateOfBirth && userData.personalInfo.dateOfBirth.length > 0 ? setDateOfBirth(userData.personalInfo.dateOfBirth) : setDateOfBirth('')
	if(userData.personalInfo.phoneNumber && userData.personalInfo.phoneNumber.length > 0){
			setCountryPhoneCode(String(userData.personalInfo.phoneNumber).substring(0, String(userData.personalInfo.phoneNumber).length-10))
			setInputValuePhoneNumber(String(userData.personalInfo.phoneNumber).substring(String(userData.personalInfo.phoneNumber).length-10, String(userData.personalInfo.phoneNumber).length))
	} else {
			setCountryPhoneCode('')
			setInputValuePhoneNumber('')
	}
	userData.personalInfo.address && userData.personalInfo.address.length > 0 ? setAddress(userData.personalInfo.address) : setAddress('')
	userData.personalInfo.city && userData.personalInfo.city.length > 0 ? setCity(userData.personalInfo.city) : setCity('')
	userData.personalInfo.country && userData.personalInfo.country.length > 0 ? setCountry(userData.personalInfo.country) : setCountry('')

  }, [userData.profileImage, userData.personalInfo])

  async function updateChangedData(){
      if(profilePhotoChanged){
			const img = new Image();
			img.src = profilePhoto;
		  	const base64Image = getBase64Image(img); 
          	axios.put(utilData.baseUrl + '/users/profile-images', {
              	profileImage: base64Image,
          	}, {
				  headers:{
					'Authorization': `Bearer ${userData.token}`,
				  }
			  }).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)})
      }
	  if(personalInfoChanged){
			axios.put(utilData.baseUrl + '/users/personal-info', {
				firstName: firstName,
				lastName: lastName,
				address: address,
				city: city,
				country: country,
				phoneNumber: countryPhoneCode+inputValuePhoneNumber,
				dateOfBirth: dateOfBirth
			}, {
				headers:{
					'Authorization': `Bearer ${userData.token}`,
				}
			}).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)})
	  }
	  if(!inUpdateDataHasErrors){ 
		    setOnEditMode(false);
	  } else {
			alert('Update has errors, try later please.');
			setInUpdateDataHasErrors(false);
	  }
  }

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
      {/* required infos */}
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid container spacing={3} display="flex" justifyContent="center">
          <Grid container item xs={12} justifyContent="center">
                <label style={{cursor: 'pointer', height:'60px', width: '60px'}}>
                  <input type="file" accept=".jpg, .jpeg, .png" style={{display: 'none'}} onChange={(e)=>{setProfilePhoto(URL.createObjectURL(e.target.files[0])); setProfilePhotoChanged(true)}} disabled={!onEditMode}/>
                  <Avatar className={onEditMode ? classes.profilePhotoEdit : classes.profilePhoto} src={profilePhoto && profilePhoto.length > 0 ? profilePhoto : AvatarImage}/>
                </label>
          </Grid>
          {onEditMode ? (
                  <Grid container item xs={12} justifyContent="center">
                    <Box style={{color: "#00b4d8",  fontSize: '12px'}}>
                      Apasati poza pentru a edita
                    </Box>
                  </Grid>
              ) : null}
          <Grid item xs={12} sm={6}>
            <CarroTextField value={lastName} variant="outlined" label={t("LastName")} onChange={(e)=>{setLastName(e.target.value); setPersonalInfoChanged(true)}} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6} >
            <CarroTextField value={firstName} variant="outlined" label={t("FirstName")} onChange={(e)=>{setFirstName(e.target.value);  setPersonalInfoChanged(true)}} fullWidth disabled = {!onEditMode}/>
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
                             maxDate={(new Date().getFullYear()-14).toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString()}
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
                  <CarroTextField variant ='outlined' label={t("Country")} fullWidth disabled = {!onEditMode} select value={country} onChange={(e)=>handleChangeCountry(e)}>
                    {getCountries().map((country)=>(<MenuItem key={country.isoCode} value={country.isoCode}>{country.name}</MenuItem>))}
                  </CarroTextField>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroAutocomplete disabled = {!onEditMode} options={getCities(country)} label={t("City")} onChange={(e)=>handleChangeCity(e)}/>
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
			{
				onEditMode ? (
					<PrimaryButton variant='contained' onClick={()=>updateChangedData()} fullWidth>
						<Box px='3px'>{t('SaveButton')}</Box>
						<SaveAlt fontSize='small'/>
					</PrimaryButton>
				) : (
					<PrimaryButton variant='contained' onClick={()=>setOnEditMode(true)} fullWidth>
						<Box px='3px'>{t('EditButton')}</Box>
						<Create fontSize='small'/>
					</PrimaryButton>
				)
			}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const mapStateToProps = state =>({userData: state.userData, courierProfile: state.courierData})
const mapDispatchToProps = dispatch =>({fetchCourierProfile: (userId, token) => dispatch(fetchCourierProfile(userId, token)), getUserProfileImage: (token) => dispatch(getUserProfileImage(token)), getUserPersonalInfo: (token) => dispatch(getUserPersonalInfo(token))})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);