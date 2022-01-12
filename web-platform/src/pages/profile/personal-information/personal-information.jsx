import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box, MenuItem } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import CarroTextField from '../../../components/textField/CarroTextField';
import PhoneTextField from '../../../components/telephoneNumberField/PhoneTextField';
import CarroDatePicker from '../../../components/datePicker/CarroDatePicker';
import CarroAutocomplete from '../../../components/autocomplete/CarroAutocomplete';
import { SaveAlt, Create } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getUserPersonalInfo } from '../../../redux/actions/UserActions';
import { useTranslation } from 'react-i18next';
import { getCountries , getCities} from '../../../utils/Functions/countries-city-functions';
import { phoneValidator, mailValidator } from '../../../utils/Functions/input-validators';
import axios from 'axios';
import utilData from '../../../utils/constants';

const PersonalInformation = ({userData, getUserPersonalInfo})=>{
    
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
        getUserPersonalInfo(userData.token)
    }, [onEditMode])

    useEffect(()=>{
        userData.personalInfo.email && userData.personalInfo.email.length > 0 ? setEmail(userData.personalInfo.email) : setEmail('')
        userData.personalInfo.firstName && userData.personalInfo.firstName.length > 0 ? setFirstName(userData.personalInfo.firstName) : setFirstName('')
        userData.personalInfo.lastName && userData.personalInfo.lastName.length > 0 ? setLastName(userData.personalInfo.lastName) : setLastName('')
        userData.personalInfo.dateOfBirth && userData.personalInfo.dateOfBirth.length > 0 ? setDateOfBirth(userData.personalInfo.dateOfBirth) : setDateOfBirth('')
        if(userData.personalInfo.phoneNumber && userData.personalInfo.phoneNumber.length > 0){
                setCountryPhoneCode(String(userData.personalInfo.phoneNumber).substring(0, String(userData.personalInfo.phoneNumber).length-10) === '+4' ? '40' : String(userData.personalInfo.phoneNumber).substring(0, String(userData.personalInfo.phoneNumber).length-10))
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
                address: address,
                city: city,
                country: country,
                phoneNumber: countryPhoneCode.endsWith("0") && inputValuePhoneNumber.charAt(0) === "0" ? countryPhoneCode.substring(0,countryPhoneCode.length-1) +inputValuePhoneNumber : countryPhoneCode + inputValuePhoneNumber ,
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


    return(
        <Fragment>
          <Grid container item sm={5}>
            <CarroTextField value={lastName} variant="outlined" label={t("LastName")} onChange={(e)=>{setLastName(e.target.value); setPersonalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5}>
            <CarroTextField value={firstName} variant="outlined" label={t("FirstName")} onChange={(e)=>{setFirstName(e.target.value);  setPersonalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5}>
            <PhoneTextField value={inputValuePhoneNumber}
                            onChange = {(e) => {setInputValuePhoneNumber(e.target.value); setPersonalInfoChanged(true)}}
                            countryPhoneCode={countryPhoneCode == '+4' ? '40' : countryPhoneCode.substring(1, countryPhoneCode.length-1)} 
                            handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value.includes('+') ? e.target.value : '+'+e.target.value)}
                            error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}
                            disabled={!onEditMode} size="small"/>
          </Grid>
          <Grid container item sm={5}>
            <CarroDatePicker value={dateOfBirth} onChange={(date) =>{ setDateOfBirth(date); setPersonalInfoChanged(true) }} format='dd/MM/yyyy' views={["year", "month", "date"]}
                             maxDate={(new Date().getFullYear()-14).toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString()}
                             label={t("Birthday")} disabled = {!onEditMode} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }}} openTo="year" size={"small"}/>
          </Grid>
          <Grid container item sm={5}>
            <CarroTextField value={email} variant="outlined" error={mailValidator(email)} label={t("Mail")} size="small" onChange={(e)=>{setEmail(e.target.value); setPersonalInfoChanged(true)}} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5}>
            <CarroTextField value={address}variant="outlined" label={t("Address")} size="small" fullWidth onChange={(e)=>{setAddress(e.target.value); setPersonalInfoChanged(true)}} disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5} justifyContent="center">
            <CarroAutocomplete label={t("Country")} disabled = {!onEditMode} size="small" value={country} options={getCountries()} onChange={(e, newValue)=>{handleChangeCountry(newValue); setPersonalInfoChanged(true)}}/>
          </Grid> 
          <Grid container item sm={5}  justifyContent="center">
            <CarroAutocomplete disabled = {!onEditMode} options={getCities(country)} size="small" label={t("City")} value={city} onChange={(e, newValue)=>{handleChangeCity(newValue); setPersonalInfoChanged(true)}}/>
          </Grid>
          <Grid container item sm={5}  justifyContent="center">
            {onEditMode ? (
                    <PrimaryButton variant='contained' onClick={()=>updateChangedData()} style={{height:35, width:250, marginTop:"10px"}} fullWidth>
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
const mapDispatchToProps = (dispatch) =>({getUserPersonalInfo: (token) => dispatch(getUserPersonalInfo(token))})
export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformation)