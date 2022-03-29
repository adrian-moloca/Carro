import React, { Fragment, useEffect, useState } from 'react';
import {Container, Grid, Box, Modal, Fade, FormControlLabel, MenuItem, LinearProgress, Avatar, ButtonBase} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import useStyles from './edit-user-admin-modal-style';
import { Close, AssignmentInd, StarRate, Publish } from '@material-ui/icons';
import CarroTextField from '../../textField/CarroTextField';
import GreenCheckbox from '../../checkbox/GreenCheckbox';
import PhoneTextField from '../../telephoneNumberField/PhoneTextField';
import CarroDatePicker from '../../datePicker/CarroDatePicker';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import CarroAutocomplete from '../../autocomplete/CarroAutocomplete';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { phoneValidator, mailValidator } from '../../../utils/Functions/input-validators';
import { useTranslation } from "react-i18next";
import { adminGetUser, adminGetUsers } from '../../../redux/actions/AdminActions';
import { connect } from 'react-redux';
import { getCountries, getCities } from '../../../utils/Functions/countries-city-functions';
import axios from 'axios';
import utilData from '../../../utils/constants';
import { cleanUserPanel } from '../../../redux/types/AdminTypes';
import { getBase64Image } from '../../../utils/Functions/base64Image';

const EditUserAdmin = ({data, userClickedData, adminGetUser, adminGetUsers, cleanUserPanel, ...props}) =>{
    const { t } = useTranslation();
    const classes = useStyles();

    const userRoles = [
        {
            value: 0, 
            label: 'User'
        },
        {
            value: 1, 
            label: 'Admin'
        },
    ]

    const[open, setOpen] = useState(false);

    const [dateCreated, setDateCreated] = useState('');
    const [userRole, setUserRole] = useState(0);
    const [profileImage, setProfileImage] = useState('');
    const [identityCardImage, setIdentityCardImage] = useState('');
    const [rate, setRate] = useState(0);
    const [fiveStarRate, setFiveStarRate] = useState(0);
    const [fourStarRate, setFourStarRate] = useState(0);
    const [threeStarRate, setThreeStarRate] = useState(0);
    const [twoStarRate, setTwoStarRate] = useState(0);
    const [oneStarRate, setOneStarRate] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [countryPhoneCode, setCountryPhoneCode] = useState('');
    const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState('');
    const [address, setAddress] = useState(''); 
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [numberSeries, setNumberSeries] = useState('');
    const [invalidateReason, setInvalidateReason] = useState('');
    const [rejectIssue, setRejectIssue] = useState('');
    const [isAccountClosed, setIsAccountClosed] = useState(false)
    const [isCompany, setIsCompany] = useState(false);
    const [personalInfo, setPersonalInfo] = useState(false);
    const [identityCardVerified, setIdentityCardVerified] = useState(false);
    const [identityCardUploaded, setIdentityCardUploaded] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState(false);
    const [userValidated, setUserValidated] = useState(false);
    const [subscriptionPaid, setSubscriptionPaid] = useState(false);
    const [freeTrial, setFreeTrial] = useState(false);
    const [closeAccountCreated, setCloseAccountCreated] = useState('');
    const [closeAccountReason, setCloseAccountReason] = useState('');
    const [hasErrorsCheck, setHasErrorsCheck] = useState('');

    useEffect(()=>{}, [hasErrorsCheck])

    useEffect(()=>{
        userClickedData.dateCreated && userClickedData.dateCreated.length > 0 ? setDateCreated(userClickedData.dateCreated) : setDateCreated('')
        userClickedData.role ? setUserRole(userClickedData.role) : setUserRole(0)
        userClickedData.email && userClickedData.email.length > 0 ? setEmail(userClickedData.email) : setEmail('')
        userClickedData.personalInfo.firstName && userClickedData.personalInfo.firstName.length > 0 ? setFirstName(userClickedData.personalInfo.firstName) : setFirstName('')
        userClickedData.personalInfo.lastName && userClickedData.personalInfo.lastName.length > 0 ? setLastName(userClickedData.personalInfo.lastName) : setFirstName('')
        userClickedData.personalInfo.dateOfBirth && userClickedData.personalInfo.dateOfBirth.length > 0 ? setDateOfBirth(userClickedData.personalInfo.dateOfBirth) : setDateOfBirth('')
        if(userClickedData.personalInfo.phoneNumber && userClickedData.personalInfo.phoneNumber.length > 0){
            setCountryPhoneCode(String(userClickedData.personalInfo.phoneNumber).substring(0, String(userClickedData.personalInfo.phoneNumber).length-10))
            setInputValuePhoneNumber(String(userClickedData.personalInfo.phoneNumber).substring(String(userClickedData.personalInfo.phoneNumber).length-10, String(userClickedData.personalInfo.phoneNumber).length))
        } else {
                setCountryPhoneCode('')
                setInputValuePhoneNumber('')
        }
        userClickedData.personalInfo.address && userClickedData.personalInfo.address.length > 0 ? setAddress(userClickedData.personalInfo.address) : setAddress('')
        userClickedData.personalInfo.city && userClickedData.personalInfo.city.length > 0 ? setCity(userClickedData.personalInfo.city) : setCity('')
        userClickedData.personalInfo.country && userClickedData.personalInfo.country.length > 0 ? setCountry(userClickedData.personalInfo.country) : setCountry('')
        userClickedData.profile.profileImage && userClickedData.profile.profileImage.length > 0 ? setProfileImage(userClickedData.profile.profileImage) : setProfileImage('')
        userClickedData.profile.rate && userClickedData.profile.rate > 0 ? setRate(userClickedData.profile.rate) : setRate(0)
        userClickedData.identityCard.attachment && userClickedData.identityCard.attachment.length > 0 ? setIdentityCardImage(userClickedData.identityCard.attachment) : setIdentityCardImage('')
        userClickedData.identityCard.cnp && userClickedData.identityCard.cnp.length > 0 ? setIdNumber(userClickedData.identityCard.cnp) : setIdNumber('');
        userClickedData.identityCard.numberSeries && userClickedData.identityCard.numberSeries.length > 0 ? setNumberSeries(userClickedData.identityCard.numberSeries) : setNumberSeries('');
        userClickedData.userStatus.isAccountClosed ? setIsAccountClosed(userClickedData.userStatus.isAccountClosed) : setIsAccountClosed(false);
        userClickedData.userStatus.isCompany ? setIsCompany(userClickedData.userStatus.isCompany) : setIsCompany(false);
        userClickedData.userStatus.isPersonalInfoCompleted ? setPersonalInfo(userClickedData.userStatus.isPersonalInfoCompleted) : setPersonalInfo(false);
        userClickedData.userStatus.isIdentityCardValidated ? setIdentityCardVerified(userClickedData.userStatus.isIdentityCardValidated) : setIdentityCardVerified(false);
        userClickedData.userStatus.isPhoneNumberValidated ? setPhoneNumber(userClickedData.userStatus.isPhoneNumberValidated) : setPhoneNumber(false);
        userClickedData.userStatus.isIdentityCardUploaded ? setIdentityCardUploaded(userClickedData.userStatus.isIdentityCardUploaded) : setIdentityCardUploaded(false);
        userClickedData.userStatus.isUserValidated ? setUserValidated(userClickedData.userStatus.isUserValidated) : setUserValidated(false);
        userClickedData.userStatus.isSubscriptionPaid ? setSubscriptionPaid(userClickedData.userStatus.isSubscriptionPaid) : setSubscriptionPaid(false);
        userClickedData.userStatus.invalidateReason && userClickedData.userStatus.invalidateReason.length > 0 ? setInvalidateReason(userClickedData.userStatus.invalidateReason) : setInvalidateReason('')
        userClickedData.userStatus.rejectReason && userClickedData.userStatus.rejectReason.length > 0 ? setRejectIssue(userClickedData.userStatus.rejectReason) : setRejectIssue('')
        userClickedData.userStatus.isTrial ? setFreeTrial(userClickedData.userStatus.isTrial) : setFreeTrial(false);
        userClickedData.closeAccount.dateCreated && userClickedData.closeAccount.dateCreated.length > 0 ? setCloseAccountCreated(userClickedData.closeAccount.dateCreated) : setCloseAccountCreated('');
        userClickedData.closeAccount.closeReason && userClickedData.closeAccount.closeReason.length > 0 ? setCloseAccountReason(userClickedData.closeAccount.closeReason) : setCloseAccountReason('');
        userClickedData.profile.starRate.fiveStarCount && userClickedData.profile.starRate.fiveStarCount > 0 ? setFiveStarRate(userClickedData.profile.starRate.fiveStarCount) : setFiveStarRate(0)
        userClickedData.profile.starRate.fourStarCount && userClickedData.profile.starRate.fourStarCount > 0 ? setFourStarRate(userClickedData.profile.starRate.fourStarCount) : setFourStarRate(0)
        userClickedData.profile.starRate.threeStarCount && userClickedData.profile.starRate.threeStarCount > 0 ? setThreeStarRate(userClickedData.profile.starRate.threeStarCount) : setThreeStarRate(0)
        userClickedData.profile.starRate.twoStarCount && userClickedData.profile.starRate.twoStarCount > 0 ? setTwoStarRate(userClickedData.profile.starRate.twoStarCount) : setTwoStarRate(0)
        userClickedData.profile.starRate.oneStarCount && userClickedData.profile.starRate.oneStarCount > 0 ? setOneStarRate(userClickedData.profile.starRate.oneStarCount) : setOneStarRate(0)
    }, [userClickedData])

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false)
        cleanUserPanel()
    }

    useEffect(()=>{}, [dateCreated, userRole, email, firstName, lastName, dateOfBirth, countryPhoneCode, inputValuePhoneNumber, address, city, country, profileImage, rate, identityCardImage,idNumber, numberSeries,isAccountClosed, isCompany, personalInfo, identityCardVerified, phoneNumber,identityCardUploaded, userValidated, subscriptionPaid, rejectIssue, freeTrial, closeAccountCreated, closeAccountReason])

    const handleIsAccountClosed = (event) => {
        event.target.checked ? setIsAccountClosed(true) : setIsAccountClosed(false);
    };

    const handleIsCompany = (event) => {
        event.target.checked ? setIsCompany(true) : setIsCompany(false);
    };

    const handlePersonalInfo = (event) => {
        event.target.checked ? setPersonalInfo(true) : setPersonalInfo(false);
    };

    const handleIdentityCardVerified = (event) => {
        event.target.checked ? setIdentityCardVerified(true) : setIdentityCardVerified(false);
    };
    const handleIdentityCardUploaded = (event) => {
        event.target.checked ? setIdentityCardUploaded(true) : setIdentityCardUploaded(false);
    };
    const handlePhoneNumber = (event) => {
        event.target.checked ? setPhoneNumber(true) : setPhoneNumber(false);
    };
    const handleUserValidated = (event) => {
        event.target.checked ? setUserValidated(true) : setUserValidated(false);
    };
    const handleSubscriptionPaid = (event) => {
        event.target.checked ? setSubscriptionPaid(true) : setSubscriptionPaid(false);
    };
    const handleFreeTrial = (event) => {
        event.target.checked ? setFreeTrial(true) : setFreeTrial(false);
    };

    const handleChangeCountry=(newValue)=> setCountry(newValue);
    const handleChangeCity=(newValue)=> setCity(newValue);

    const openIdImage = ()=>{
        var w = window.open('about:blank');
        setTimeout(function(){ //FireFox seems to require a setTimeout for this to 
            w.document.body.appendChild(w.document.createElement('iframe'))
                .src = "data:image/png;base64,"+ identityCardImage;
            w.document.getElementsByTagName("iframe")[0].style.width = '100%';
            w.document.getElementsByTagName("iframe")[0].style.height = '100%';
        }, 0);
    }

    async function setIdCard(file){
        const base64 = await getBase64Image(file)
        setIdentityCardImage(base64.replace("data:image/jpeg;base64," || "data:image/png;base64," || "data:image/jpg;base64,", ""))
    }

    useEffect(()=>{},[identityCardImage])

    async function acceptID(){
        axios.put(utilData.adminUrl+'/users/'+userClickedData.id+'/accept', {}, {
                headers:{
                    'Authorization': `Bearer ${data.token}`,
                }
            }
        ).then(()=>adminGetUser(userClickedData.id, data.token)).catch(error=>alert('error accepting id'))
    }

    async function checkID(){
        axios.put(utilData.adminUrl+'/users/'+userClickedData.id+'/check-identity', {
                personalNumber: idNumber,
                numberSeries: numberSeries
        }, {
            headers:{
                'Authorization': `Bearer ${data.token}`,
            }
        }).then(()=>acceptID()).catch((error)=>{setHasErrorsCheck(error.response.data.errors[0].message)})
    }

    async function rejectID(){
        axios.put(utilData.adminUrl+'/users/'+userClickedData.id+'/reject', {
                rejectReason: rejectIssue,
                deleteIdentityCard: true
            }, {
                headers:{
                    'Authorization': `Bearer ${data.token}`,
                }
            }
        ).then(()=>adminGetUser(userClickedData.id, data.token)).catch(error=>alert('error rejecting id'))
    }

    async function updateUser(){
        axios.put(utilData.adminUrl+'/users/'+userClickedData.id, {data: {
                email: email,
                role: userRole,
                termsAndConditions: true,
                personalInfo: {
                    firstName: firstName,
                    lastName: lastName,
                    address: address,
                    city: city,
                    country: country,
                    phoneNumber: countryPhoneCode+inputValuePhoneNumber,
                    dateOfBirth: dateOfBirth
                },
                identityCard: {
                    attachment: identityCardImage,
                    cnp: idNumber,
                    numberSeries: numberSeries
                },
                userStatus: {
                    isAccountClosed: isAccountClosed,
                    isCompany: isCompany,
                    isPersonalInfoCompleted: personalInfo,
                    isIdentityCardValidated: identityCardVerified,
                    isPhoneNumberValidated: phoneNumber,
                    isIdentityCardUploaded: identityCardUploaded,
                    isUserValidated: userValidated,
                    isSubscriptionPaid: subscriptionPaid,
                    rejectReason: rejectIssue,
                    invalidateReason: invalidateReason
                },   
            }}, {
                headers:{
                    'Authorization': `Bearer ${data.token}`,
                }
            }
        ).then(()=>{handleClose(); adminGetUsers(data.token)}).catch(error=>alert('error update user'))
    }

    const saveUserData = () =>{
        if(userValidated !== userClickedData.userStatus.isUserValidated){
            if(userValidated)
                axios.put(utilData.adminUrl + '/users/'+userClickedData.id + '/validate', {}, {
                    headers:{
                        Authorization: `Bearer ${data.token}`,
                    }
                }).then(()=>updateUser()).catch(()=>setUserValidated(!userValidated))
            else
                axios.put(utilData.adminUrl + '/users/'+userClickedData.id + '/invalidate', {
                    invalidateReason
                }, {
                    headers:{
                        Authorization: `Bearer ${data.token}`,
                    }
                }).then(()=>updateUser()).catch(()=>setUserValidated(!userValidated))
                
        }
        else
         updateUser()

    }

    return(
        <Fragment>
            <IconButtonNoVerticalPadding name='edit' onClick={()=>{props.userCardClicked(); handleOpen()}}>
                <AssignmentInd style={{color:"#00B4D8"}} size="small"/>
            </IconButtonNoVerticalPadding>
            <Modal open={open} onClose={handleClose}  className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Box borderBottom='2px' marginBottom={2} borderColor='black'>
                            <Grid container>
                                <Grid container item sm={10} justifyContent='flex-start'>
                                    <Box fontSize='18px' color='grey.500'>{t("EditButton")}</Box>
                                </Grid>
                                <Grid container item sm={2} justifyContent='flex-end'>
                                    <IconButtonNoVerticalPadding onClick={handleClose}>
                                        <Close />
                                    </IconButtonNoVerticalPadding>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container>
                            <Grid container item sm={4} justifyContent='center' style={{paddingBottom:"15px"}}>
                                <Grid container item sm={12} justifyContent='center'>
                                    <Avatar className={classes.profileImg} src={"data:image/png;base64,"+ profileImage} style={{marginBottom: window.innerWidth <= 850 ? "20px" : 0 }}/>
                                </Grid>
                                <Grid container item sm={12} justifyContent='center'>
                                    <Box marginTop='7%'>
                                        <Rating readOnly precision={0.1} value={rate}/>
                                    </Box>
                                </Grid>
                                <Grid container item sm={11} justifyContent='space-between'>
                                    <Grid item sm={8} style={{paddingTop:'7%', paddingRight:'10px'}}>
                                        <LinearProgress variant='determinate' color={'primary'} value={fiveStarRate*100/(fiveStarRate+fourStarRate+threeStarRate+twoStarRate+oneStarRate)}/>
                                    </Grid>
                                    <Grid container item sm={4} justifyContent='flex-end' style={{paddingTop:'3%'}}>
                                        <Box>{fiveStarRate}</Box><Box paddingLeft={"10px"} fontWeight={500}>5</Box><StarRate size='small' style={{color: '#ffb400'}}/>
                                    </Grid>
                                </Grid>
                                <Grid container item sm={11} justifyContent='space-between'>
                                    <Grid item sm={8} style={{paddingTop:'7%', paddingRight:'10px'}}>
                                        <LinearProgress variant='determinate' color='primary' value={fourStarRate*100/(fiveStarRate+fourStarRate+threeStarRate+twoStarRate+oneStarRate)}/>
                                    </Grid>
                                    <Grid container item sm={4} justifyContent='flex-end' style={{paddingTop:'3%'}}>
                                        <Box>{fourStarRate}</Box><Box paddingLeft={"10px"} fontWeight={500}>4</Box><StarRate size='small' style={{color: '#ffb400'}}/>
                                    </Grid>
                                </Grid>
                                <Grid container item sm={11} justifyContent='space-between'>
                                    <Grid item sm={8} style={{paddingTop:'7%', paddingRight:'10px'}}>
                                        <LinearProgress variant='determinate' color='primary' value={threeStarRate*100/(fiveStarRate+fourStarRate+threeStarRate+twoStarRate+oneStarRate)}/>
                                    </Grid>
                                    <Grid container item sm={4} justifyContent='flex-end' style={{paddingTop:'3%'}}>
                                        <Box>{threeStarRate}</Box><Box paddingLeft={"10px"} fontWeight={500}>3</Box><StarRate size='small' style={{color: '#ffb400'}}/>
                                    </Grid>
                                </Grid>
                                <Grid container item sm={11} justifyContent='space-between'>
                                    <Grid item sm={8} style={{paddingTop:'7%', paddingRight:'10px'}}>
                                        <LinearProgress variant='determinate' color='primary' value={twoStarRate*100/(fiveStarRate+fourStarRate+threeStarRate+twoStarRate+oneStarRate)}/>
                                    </Grid>
                                    <Grid container item sm={4} justifyContent='flex-end' style={{paddingTop:'3%'}}>
                                        <Box>{twoStarRate}</Box><Box paddingLeft={"10px"} fontWeight={500}>2</Box><StarRate size='small' style={{color: '#ffb400'}}/>
                                    </Grid>
                                </Grid>
                                <Grid container item sm={11} justifyContent='space-between'>
                                    <Grid item sm={8} style={{paddingTop:'7%', paddingRight:'10px'}}>
                                        <LinearProgress variant='determinate' color='primary' value={oneStarRate*100/(fiveStarRate+fourStarRate+threeStarRate+twoStarRate+oneStarRate)}/>
                                    </Grid>
                                    <Grid container item sm={4} justifyContent='flex-end' style={{paddingTop:'3%'}}>
                                        <Box>{oneStarRate}</Box><Box paddingLeft={"10px"} fontWeight={500}>1</Box><StarRate size='small' style={{color: '#ffb400'}}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container item sm={8} justifyContent='space-around' style={{paddingBottom:"15px"}}>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <CarroTextField value={lastName} onChange={(e)=>{setLastName(e.target.value);}} variant="outlined" label={t("LastName")} size="small" fullWidth/>
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <CarroTextField value={firstName} onChange={(e)=>{setFirstName(e.target.value);}} variant="outlined" label={t("FirstName")} size="small" fullWidth />
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <PhoneTextField size="small"
                                                    value={inputValuePhoneNumber} countryPhoneCode={countryPhoneCode}
                                                    onChange = {(e) => {setInputValuePhoneNumber(e.target.value);}}
                                                    handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
                                                    error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}/>
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <CarroDatePicker value={dateOfBirth} onChange={(date) =>{ setDateOfBirth(date);}} format='dd/MM/yyyy' views={["year", "month", "date"]}
                                                    maxDate={(new Date().getFullYear()-14).toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString()}
                                                    label={t("Birthday")} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }, shrink: true}} openTo="year" size={"small"}/>
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <CarroTextField value={email} onChange={(e)=>{setEmail(e.target.value);}} error={mailValidator(email)} variant="outlined" label={t("Mail")} size="small" fullWidth/>
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <CarroTextField value={address} onChange={(e)=>{setAddress(e.target.value);}} variant="outlined" label={t("Address")} size="small" fullWidth/>
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5} justifyContent="center">
                                    <CarroAutocomplete label={t("Country")} size="small" value={country} options={getCountries()} onChange={(e, newValue)=>{handleChangeCountry(newValue);}}/>
                                </Grid> 
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}  justifyContent="center">
                                    <CarroAutocomplete size="small" label={t("City")} value={city} options={getCities(country)} onChange={(e, newValue)=>{handleChangeCity(newValue);}}/>
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <CarroDatePicker value={dateCreated} onChange={(date) =>{ setDateCreated(date);}} format='dd/MM/yyyy' views={["year", "month", "date"]}
                                                    maxDate={new Date()}
                                                    label={t("DataCreated")} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }, shrink: true}} openTo="year" size={"small"}/>
                                </Grid>
                                <Grid container item sm={window.innerWidth <= 850 ? 10 : 5}>
                                    <CarroTextField variant ='outlined' label={t("UserRole")} fullWidth select value={userRole} onChange={(e)=>setUserRole(e.target.value)} size="small">
                                            {userRoles.map((option)=>(
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                    </CarroTextField>
                                </Grid>
                            </Grid>
                            <Grid container item sm={4} justifyContent='center' style={{paddingBottom:"15px"}}>
                                <Grid container item sm={12} justifyContent='center'>
                                    {identityCardImage && identityCardImage.length > 0 ?( 
                                            <ButtonBase onClick={()=>openIdImage()} style={{marginBottom: '15px',}}>
                                                <img src={"data:image/png;base64,"+ identityCardImage} className={classes.identityCardImg}  alt={""}/></ButtonBase>
                                        ) : (
                                            <label style={{cursor: 'pointer', height:'120px', width: '200px', marginBottom:'15px'}}>
                                                <input type="file" accept=".jpg, .jpeg, .png" style={{display: 'none'}} onChange={(e)=>{setIdCard(e.target.files[0]);}}/>
                                                    <Box border={1} style={{ height: 120, width: 200, textAlign:'center', alignItems:'center', marginBottom:"15px", borderRadius:"15px"}}>
                                                        <Box marginTop={'45px'}>ID CARD</Box>
                                                        <Publish fontSize='large'/>
                                                    </Box>
                                            </label>
                                        )}
                                </Grid>
                                <Grid container item sm={ 10 }>
                                    <CarroTextField value={idNumber} onChange={(e)=>{setIdNumber(e.target.value);}} variant="outlined" label={t("IdNumber")} size="small" fullWidth/>
                                </Grid>
                                <Grid container item sm={ 10 }>
                                    <CarroTextField value={numberSeries} onChange={(e)=>{setNumberSeries(e.target.value);}} variant="outlined" label={t("Serial")} size="small" fullWidth />
                                </Grid>
                                <Grid container item sm={ 10 } justifyContent='center' style={{marginBottom:"15px"}}>
                                    <Box style={{color: "#ff3333", fontSize:"16px", textAlign:"center"}}>{hasErrorsCheck}</Box>
                                </Grid>
                                <Grid container item sm={ 10 } justifyContent='space-between' style={{marginBottom:"15px"}}>
                                    <Grid container item sm={5} justifyContent="center">
                                                <SecondaryButton variant='contained' onClick={()=>rejectID()} fullWidth><Box fontSize={"12px"}>{t("Reject")}</Box></SecondaryButton>     
                                    </Grid>
                                    <Grid container item sm={5} justifyContent="center">
                                                <GreenCaroButton disabled={userClickedData.userStatus.isIdentityCardValidated} variant='contained' onClick={()=>{checkID()}} fullWidth><Box fontSize={"12px"}>{t("Validate")}</Box></GreenCaroButton>
                                    </Grid>
                                </Grid>
                                <Grid container item sm={ 10 }>
                                    <CarroTextField value={rejectIssue} onChange={(e)=>{setRejectIssue(e.target.value);}} variant="outlined" label={t("RejectIssue")} size="small" fullWidth />
                                </Grid>
                                {userClickedData.userStatus.isIdentityCardValided ? (
                                    <Grid container item sm={12} justifyContent='center'>
                                        <Box fontSize={20} style={{color: '#34D02D', textDecoration:'underline'}}>
                                            {t('IdValidated')}
                                        </Box>
                                    </Grid>
                                ) : null}
                            </Grid>
                            <Grid container item sm={8} justifyContent='center' style={{paddingBottom:"15px"}}>
                                <Grid container item sm={12} justifyContent='center'><Box>{t('UserStatus')}</Box></Grid>
                                <Grid container item sm={11} justifyContent='space-between'>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={isCompany}
                                                onChange={handleIsCompany}
                                                control={<GreenCheckbox/>}
                                                label={t("Company")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={personalInfo}
                                                onChange={handlePersonalInfo}
                                                control={<GreenCheckbox/>}
                                                label={t("PersonalInfo")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={identityCardVerified}
                                                onChange={handleIdentityCardVerified}
                                                control={<GreenCheckbox/>}
                                                label={t("IdentityCard")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={identityCardUploaded}
                                                onChange={handleIdentityCardUploaded}
                                                control={<GreenCheckbox/>}
                                                label={t("IdentityCardUploaded")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={phoneNumber}
                                                onChange={handlePhoneNumber}
                                                control={<GreenCheckbox/>}
                                                label={t("PhoneNumber")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={userValidated}
                                                onChange={handleUserValidated}
                                                control={<GreenCheckbox/>}
                                                label={t("UserValidated")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={subscriptionPaid}
                                                onChange={handleSubscriptionPaid}
                                                control={<GreenCheckbox/>}
                                                label={t("SubscriptionPaid")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={6} justifyContent='flex-start'>
                                        <FormControlLabel
                                                checked={freeTrial}
                                                onChange={handleFreeTrial}
                                                control={<GreenCheckbox/>}
                                                label={t("FreeTrial")}
                                        />
                                    </Grid>
                                    <Grid  container item sm={11} justifyContent='center'>
                                        <FormControlLabel
                                                checked={isAccountClosed}
                                                onChange={handleIsAccountClosed}
                                                control={<GreenCheckbox/>}
                                                label={t("IsAccountClosed")}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container item sm={11} justifyContent='center'>
                                    <CarroTextField value={invalidateReason} onChange={(e)=>{setInvalidateReason(e.target.value);}} variant="outlined" label={t("invalidateReason")} size="small" fullWidth/>
                                </Grid>
                                {closeAccountCreated && closeAccountCreated.length > 0 ? (
                                    <Fragment>
                                        <Grid container item sm={12} justifyContent='center'>
                                            <Box fontSize={20} style={{textDecoration: 'underline', color:'#ff3333'}}>{t('ClosedAccount')}</Box>
                                        </Grid>
                                        <Grid container item sm={11} justifyContent='space-between'>
                                            <Grid container item sm={9} justifyContent='flex-start'>
                                                <Box fontSize={18}>{closeAccountReason.length > 0 ? closeAccountReason.toLocaleUpperCase() : t('NoCloseAccountReason')}</Box>
                                            </Grid>
                                            <Grid container item sm={3} justifyContent='flex-start'>
                                                <Box fontSize={18}>{new Date(closeAccountCreated).getDate().toString()+'-'+(new Date(closeAccountCreated).getMonth()+1).toString()+'-'+new Date(closeAccountCreated).getFullYear().toString()+' '+new Date(closeAccountCreated).getHours()+':'+new Date(closeAccountCreated).getMinutes().toString()+':'+new Date(closeAccountCreated).getSeconds().toString()}</Box>
                                            </Grid>
                                        </Grid>
                                    </Fragment>
                                    ) : null
                                }
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='space-around'>
                            <Grid container item sm={3} justifyContent="center">
                                        <SecondaryButton variant='outlined' onClick={handleClose} fullWidth>{t("CloseButton")}</SecondaryButton>     
                            </Grid>
                            <Grid container item sm={3} justifyContent="center">
                                        <GreenCaroButton variant='contained' onClick={()=>{saveUserData()}} fullWidth>{t("SaveButton")}</GreenCaroButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>

    );

}

const mapDispatchToProps = dispatch =>({adminGetUser: (id, token) => dispatch(adminGetUser(id, token)), adminGetUsers: (token) => dispatch(adminGetUsers(token)), cleanUserPanel: () => dispatch(cleanUserPanel())})
const mapStateToProps = state => ({data: state.userData, userClickedData: state.adminData.user})
export default connect(mapStateToProps, mapDispatchToProps)(EditUserAdmin);