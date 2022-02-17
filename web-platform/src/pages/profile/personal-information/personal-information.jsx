import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import CarroTextField from '../../../components/textField/CarroTextField';
import PhoneTextField from '../../../components/telephoneNumberField/PhoneTextField';
import CarroDatePicker from '../../../components/datePicker/CarroDatePicker';
import CarroAutocomplete from '../../../components/autocomplete/CarroAutocomplete';
import { SaveAlt, Create } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getUserPersonalInfo, getProfileStatus } from '../../../redux/actions/UserActions';
import { useTranslation } from 'react-i18next';
import { getCountries , getCities} from '../../../utils/Functions/countries-city-functions';
import { phoneValidator, mailValidator } from '../../../utils/Functions/input-validators';
import axios from 'axios';
import utilData from '../../../utils/constants';
import PhoneNumberValidation from '../../../components/modals/phone-number-validation/phone-number-validation';

const PersonalInformation = ({userData, getUserPersonalInfo, getProfileStatus})=>{
    
    const {t} = useTranslation();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [countryPhoneCode, setCountryPhoneCode] = useState('');
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState('');
    const [address, setAddress] = useState('') 
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date(new Date().getFullYear()-14, new Date().getMonth(),new Date().getDate(), 0));

    const [onEditMode, setOnEditMode] = useState(false);
    const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);
    const [personalInfoChanged, setPersonalInfoChanged] = useState(false);

    useEffect(()=>{
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
    }, [userData.personalInfo])

    const handleChangeCountry=(newValue)=> setCountry(newValue);
    const handleChangeCity=(newValue)=> setCity(newValue);
    async function updateChangedData(){
        if(personalInfoChanged){
            axios.put(utilData.baseUrl + '/users/personal-infos', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                city: city,
                country: country,
                phoneNumber: countryPhoneCode + inputValuePhoneNumber,
                dateOfBirth: dateOfBirth
            }, {
                headers:{
                    'Authorization': `Bearer ${userData.token}`,
                }
            }).then(()=>getUserPersonalInfo(userData.token)).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)})
        }
        if(!inUpdateDataHasErrors){ 
                setOnEditMode(false);
        } else {
                alert('Update has errors, try later please.');
                setInUpdateDataHasErrors(false);
        }
    }


    return(
        <Fragment>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
            <CarroTextField value={lastName} variant="outlined" label={t("LastName")} error={onEditMode && lastName.length === 0} onChange={(e)=>{setLastName(e.target.value); setPersonalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
            <CarroTextField value={firstName} variant="outlined" label={t("FirstName")} onChange={(e)=>{setFirstName(e.target.value);  setPersonalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
            <PhoneTextField value={inputValuePhoneNumber}
                            onChange = {(e) => {setInputValuePhoneNumber(e.target.value); setPersonalInfoChanged(true)}}
                            countryPhoneCode={countryPhoneCode} 
                            handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                            error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}
                            disabled={!onEditMode} size="small"/>
            {!Boolean(userData.profileStatus.isPhoneNumberValidated).valueOf() && !onEditMode ?  (
                            <PhoneNumberValidation/>
                            ):null}
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
            <CarroDatePicker value={dateOfBirth} onChange={(date) =>{ setDateOfBirth(date); setPersonalInfoChanged(true) }} format='dd/MM/yyyy' views={["year", "month", "date"]}
                             maxDate={(new Date().getFullYear()-14).toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString()}
                             label={t("Birthday")} disabled = {!onEditMode} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }}} openTo="year" size={"small"}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
            <CarroTextField value={email} variant="outlined" error={mailValidator(email)} label={t("Mail")} size="small" onChange={(e)=>{setEmail(e.target.value); setPersonalInfoChanged(true)}} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
            <CarroTextField value={address}variant="outlined" label={t("Address")} size="small" fullWidth error={onEditMode && !address.length} onChange={(e)=>{setAddress(e.target.value); setPersonalInfoChanged(true)}} disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5} justifyContent="center">
            <CarroAutocomplete label={t("Country")} disabled = {!onEditMode} size="small" value={country} error={onEditMode ? (country && country.length > 0 ? false : true) : false} options={getCountries()} onChange={(e, newValue)=>{handleChangeCountry(newValue); setPersonalInfoChanged(true)}}/>
          </Grid> 
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}  justifyContent="center">
            <CarroAutocomplete disabled = {!onEditMode} options={getCities(country)} size="small" error={onEditMode ? (city && city.length > 0 ? false : true) : false} label={t("City")} value={city} onChange={(e, newValue)=>{handleChangeCity(newValue); setPersonalInfoChanged(true)}}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}  justifyContent="center">
            {onEditMode ? (
                    <PrimaryButton variant='contained' onClick={()=>updateChangedData()} disabled ={firstName && lastName && inputValuePhoneNumber && dateOfBirth && email && address && country && city ? false : true} style={{height:35, width:250, marginTop:"10px"}} fullWidth>
                        <Box px='10px'>{t('SaveButton')}</Box>
                        <SaveAlt fontSize='small'/>
                    </PrimaryButton>
                ) : (
                    <PrimaryButton variant='contained' onClick={()=>setOnEditMode(true)} style={{height:35, width:250,  marginTop:"10px"}} fullWidth>
                        <Box px='10px'>{t('EditButton')}</Box>
                        <Create fontSize='small'/>
                    </PrimaryButton>
            )}
          </Grid>  
        </Fragment>
    );
}

const mapStateToProps = (state) =>({userData: state.userData})
const mapDispatchToProps = (dispatch) =>({getUserPersonalInfo: (token) => dispatch(getUserPersonalInfo(token)), getProfileStatus: (token) => dispatch(getProfileStatus(token))})
export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation)