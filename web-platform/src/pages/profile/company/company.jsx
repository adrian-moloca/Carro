import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box, FormControlLabel } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import CarroTextField from '../../../components/textField/CarroTextField';
import CarroCheckbox from '../../../components/checkbox/CarroCheckbox';
import CarroAutocomplete from '../../../components/autocomplete/CarroAutocomplete';
import PhoneTextField from '../../../components/telephoneNumberField/PhoneTextField';
import { SaveAlt, Create } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getUserCompany } from '../../../redux/actions/UserActions';
import { useTranslation } from 'react-i18next';
import { getCountries, getCities } from '../../../utils/Functions/countries-city-functions';
import { phoneValidator } from '../../../utils/Functions/input-validators';
import axios from 'axios';
import utilData from '../../../utils/constants';

const Company = ({userData, getUserCompany})=>{
    
    const {t} = useTranslation();

    const [isCompany, setIsCompany] = useState(false)
    const [name, setName] = useState('')
    const [cui, setCUI] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [countryPhoneCode, setCountryPhoneCode] = useState('');
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(''); 

    const [onEditMode, setOnEditMode] = useState(false);
    const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);
    const [companyChanged, setCompanyChanged] = useState(false);

    useEffect(()=>{
        getUserCompany(userData.token)
    }, [onEditMode])

    useEffect(()=>{
        userData.company.isCompany ? setIsCompany(isCompany) : setIsCompany(false)
        userData.company.name && userData.company.name.length > 0 && isCompany ? setName(userData.company.name) : setName('')
        userData.company.email && userData.company.email.length > 0 && isCompany ? setEmail(userData.company.email) : setEmail('')
        userData.company.taxIdentificationNumber && userData.company.taxIdentificationNumber.length > 0 && isCompany ? setCUI(userData.company.taxIdentificationNumber) : setCUI('')
        userData.company.address && userData.company.address.length > 0 && isCompany ? setAddress(userData.company.address) : setAddress('')
        userData.company.city && userData.company.city.length > 0 && isCompany ? setCity(userData.company.city) : setCity('')
        userData.company.country && userData.company.country.length > 0 && isCompany ? setCountry(userData.company.country) : setCountry('')
        if(userData.company.phoneNumber && userData.company.phoneNumber.length > 0 && isCompany){
                setCountryPhoneCode(String(userData.company.phoneNumber).substring(0, String(userData.company.phoneNumber).length-10) === '+4' ? '40' : String(userData.company.phoneNumber).substring(0, String(userData.company.phoneNumber).length-10))
                setInputValuePhoneNumber(String(userData.company.phoneNumber).substring(String(userData.company.phoneNumber).length-10, String(userData.company.phoneNumber).length))
        } else {
                setCountryPhoneCode('')
                setInputValuePhoneNumber('')
        }
      }, [userData.company])

    const handleIsCompany = (event) => {
      event.target.checked ? setIsCompany(true) : setIsCompany(false);
    };

    const handleChangeCountry=(newValue)=> setCountry(newValue);
    const handleChangeCity=(newValue)=> setCity(newValue);

    async function updateChangedData(){
        if(companyChanged && isCompany){
            axios.put(utilData.baseUrl + '/users/companies', {
                isCompany: isCompany,
                name: name,
                email: email,
                taxIdentificationNumber: cui,
                address: address,
                city: city,
                country: country,
                phoneNumber: countryPhoneCode.endsWith("0") && inputValuePhoneNumber.charAt(0) === "0" ? countryPhoneCode.substring(0,countryPhoneCode.length-1) +inputValuePhoneNumber : countryPhoneCode + inputValuePhoneNumber,
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
          <Grid container item sm={11}>
            <FormControlLabel
              checked={isCompany}
              onChange={handleIsCompany}
              control={<CarroCheckbox disabled = {!onEditMode}/>}
              label={t("IsCompany")}
            />
          </Grid>
          <Grid container item sm={11}>
            <Box color={"#A0A0A0"} fontWeight={500} fontSize={15} textAlign={"center"}>
              {t("OnlyCompany")}
            </Box>
          </Grid>
          <Grid container item sm={11}>
            <CarroTextField value={name} variant="outlined" label={t("CompanyName")} onChange={(e)=>{setName(e.target.value); setCompanyChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5}>
            <CarroTextField value={cui} variant="outlined" label={t("TaxIdentificationNumber")} onChange={(e)=>{setCUI(e.target.value); setCompanyChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5}>
            <CarroTextField value={address} variant="outlined" label={t("Address")} onChange={(e)=>{setAddress(e.target.value); setCompanyChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5} justifyContent="center">
            <CarroAutocomplete label={t("Country")} disabled = {!onEditMode} size="small" value={country} options={getCountries()} onChange={(e, newValue)=>{handleChangeCountry(newValue); setCompanyChanged(true)}}/>
          </Grid> 
          <Grid container item sm={5}  justifyContent="center">
            <CarroAutocomplete disabled = {!onEditMode} options={getCities(country)} size="small" label={t("City")} value={city} onChange={(e, newValue)=>{handleChangeCity(newValue); setCompanyChanged(true)}}/>
          </Grid>
          <Grid container item sm={5}>
            <CarroTextField value={email} variant="outlined" label={t("CompanyEmail")} onChange={(e)=>{setEmail(e.target.value); setCompanyChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={5}>
            <PhoneTextField value={inputValuePhoneNumber}
                            onChange = {(e) => {setInputValuePhoneNumber(e.target.value); setCompanyChanged(true)}}
                            countryPhoneCode={countryPhoneCode == '+4' ? '40' : countryPhoneCode.substring(1, countryPhoneCode.length-1)} 
                            handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value.includes('+') ? e.target.value : '+'+e.target.value)}
                            error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}
                            disabled={!onEditMode} size="small"/>
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
const mapDispatchToProps = (dispatch) =>({getUserCompany: (token) => dispatch(getUserCompany(token))})
export default connect(mapStateToProps, mapDispatchToProps)(Company)