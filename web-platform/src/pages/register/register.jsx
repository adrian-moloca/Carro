import React, {useState, useLayoutEffect, useEffect} from "react";
import { Container, Box, Grid, StepConnector, Avatar, ButtonBase } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GoogleIcon from "../../assets/images/GoogleIcon.png";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import CarroTextField from "../../components/textField/CarroTextField";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhoneTextField from "../../components/telephoneNumberField/PhoneTextField";
import useStyles from "./registerStyles";
import AvatarImage from "../../assets/images/avatarImg.png";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { connect, useDispatch } from 'react-redux';
import {createNewUser, googleLogin} from '../../redux/actions/UserActions';
import CarroCheckbox from "../../components/checkbox/CarroCheckbox";
import {mailValidator, nameValidator, passwordValidator, phoneValidator} from "../../utils/Functions/input-validators";
import { useHistory } from "react-router";
import { getBase64Image } from "../../utils/Functions/base64Image";
import axios from "axios";
import utilData from '../../utils/constants';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react17-facebook-login/dist/facebook-login-render-props';

const Register = ({createNewUser, googleLogin, data}) => {
  
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [fbglogin, setFBGlogin] = useState(false);
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState('');
  const [countryPhoneCode, setCountryPhoneCode] = useState('+40');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(countryPhoneCode + inputValuePhoneNumber);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date(new Date().getFullYear()-14, new Date().getMonth(),new Date().getDate(), 0));
  const [terms, setTerms] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [hasErrorsRegister, setHasErrorsRegister] = useState({state: false, messages: []})
  const [clickedRegister, setClickedRegister] = useState(0)
  const [fileTooLarge, setFileTooLarge] = useState(false)
  /* const [legalPersonChecked, setLegalPersonChecked] = useState(false); */


  useLayoutEffect(()=>{
    setPhoneNumber(countryPhoneCode + inputValuePhoneNumber)
  }, [inputValuePhoneNumber, countryPhoneCode])

  async function redirectToProfile() {
    if(data.email === email) {
      if(profilePhoto.length > 20) {
        axios.put(utilData.baseUrl + '/users/profile-images', {
            profileImage: profilePhoto.slice(profilePhoto.indexOf(',')+1),
        }, {
            headers:{
              'Authorization': `Bearer ${data.token}`,
            }
        }).then(()=>history.push('/profile')).catch(error=>console.log(error))
      } else {
        history.push('/profile')
      }
    }
  }

    useEffect(()=>{
      if(clickedRegister>0)
        createNewUser(email, password, phoneNumber, firstName, lastName, dateOfBirth, 'True');
    }, [clickedRegister])

    useEffect(() => {
    if(clickedRegister>0 && data.email === email){
      redirectToProfile()
      console.log('Login!')
    } else if(clickedRegister>0)
      setHasErrorsRegister({state: data.hasErrors.state, messages: data.hasErrors.messages})
    }, [data])

  async function setPhoto(file){
      const base64 = await getBase64Image(file)
      if(file.size > 1024000)
        setFileTooLarge(true)
      else{
        setFileTooLarge(false)
        setProfilePhoto(base64)
      }
  }

  async function go_to_profile_by_fbglogin(token) {
    googleLogin(token)
    history.push('/profile')
  }

  useEffect(()=>{
    setHasErrors(nameValidator(firstName))
  }, [firstName])

  useEffect(()=>{
    setHasErrors(nameValidator(lastName))
  }, [lastName])

  useEffect(()=>{
    setHasErrors(mailValidator(email))
  }, [email])

  
  useEffect(()=>{
    setHasErrors(phoneValidator(inputValuePhoneNumber))
  }, [inputValuePhoneNumber])

  /* const handleLegalPersonCheckboxClick = (event) => {
    event.target.checked ? setLegalPersonChecked(true) : setLegalPersonChecked(false);
  }; */

  return (
    <Container className={"Primary-container-style"}>
      <Grid container display="flex" justifyContent="center">
        <Box mt={3} mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
        {t("Register")}
        </Box>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid container spacing={3} display="flex" justifyContent="center">
          <Grid container item xs={12} justifyContent="center">
            <label style={{cursor: 'pointer', height:'60px', width: '60px', justifyContent:'center'}}>
              <input type="file" accept=".jpg, .jpeg, .png, .heic" style={{display: 'none'}} onChange={(e)=> setPhoto(e.target.files[0])}/>
              <Avatar className={classes.profilePhotoEdit} src={profilePhoto && profilePhoto.length > 0 ? profilePhoto : AvatarImage}/>
            </label>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Box style={{color: "#00b4d8",  fontSize: '12px'}}>
              Apasati poza pentru a edita
            </Box>
          </Grid>
          {fileTooLarge ? (
              <Grid container item xs={12} justifyContent="center">
                  <Box style={{color: "#ff3333", fontSize:"12px", textAlign:"center"}}>{t('FileTooLarge')}</Box>
                  <Box style={{color: "#ff3333", fontSize:"12px", textAlign:"center"}}>(Max Size 1MB)</Box>
              </Grid>
          ) : null}
          <Grid container item xs={12} xl={6} justifyContent="center">
            <CarroTextField type='text' error={nameValidator(lastName)} helperText={nameValidator(lastName) ? t('LastNameOnlyLetters') : ''}
                           variant="outlined" label={t("LastName")} fullWidth value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </Grid>
          <Grid container item xs={12} xl={6} justifyContent="center">
            <CarroTextField type='text'  error={nameValidator(firstName)} helperText={nameValidator(firstName) ? t('FirstNameOnlyLetters') : ''}
                           variant="outlined" label={t("FirstName")} fullWidth value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </Grid>
          <Grid item xs={12} sm={12}>
            <CarroTextField type='email' error={mailValidator(email)} helperText={mailValidator(email) ? t('ValidMail') : ''} 
                            variant="outlined" label={t("Mail")} fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField type="password" error={passwordValidator(password)} helperText={t('PasswordMustContain')}
                            variant="outlined" label={t("Password")} fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField type="password" error={password === confirmPassword ? false : true} helperText={password === confirmPassword ? '' : t('PasswordsMustBeEqual')} 
                            variant="outlined" label={t("ConfirmPassword")} fullWidth value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Grid>
          {/* <Grid container item xs={12} xl={6} justifyContent="center">
            <CarroTextField variant="outlined" label={t("PickupAddress")} fullWidth value={date} onChange={(e) => setLastName(e.target.value)}/>
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <CarroDatePicker label={t("Birthday")} value={dateOfBirth} onChange={(date) => setDateOfBirth(date)} format='dd/MM/yyyy' views={["year", "month", "date"]}
                            maxDate={(new Date().getFullYear()-14).toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString()}
                            helperText={t('MinimumAgeForRegister')} openTo="year"/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneTextField 
              value={inputValuePhoneNumber}
              onChange = {(e) => setInputValuePhoneNumber(e.target.value)}
              countryPhoneCode={countryPhoneCode} 
              handleSelectCountry = {(e)=>setCountryPhoneCode(e.target.value)}
              error={phoneValidator(inputValuePhoneNumber) && countryPhoneCode} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}
            />
          </Grid>
        {/* <Grid item xs={6} justifyContent='right'>
            <FormControlLabel
              onChange={handleLegalPersonCheckboxClick}
              control={<CarroCheckbox/>}
              label={t("LegalPerson")}
            />
          </Grid> */}
          <Grid item xs={12}> 
            <FormControlLabel
              classes={{ label: classes.label }}
              control={<CarroCheckbox checked={terms} onChange={() => setTerms(!terms)}/>}
              label={t("TermsAndConditions")}
            />
          </Grid>
          {/* {legalPersonChecked ? (
              <Fragment>
                <Grid container item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("CompanyName")} fullWidth />
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("CUI")} fullWidth />
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("Adress")} fullWidth />
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroAutocomplete options={getCountries()}  label={t('Country')}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroAutocomplete options={getCities()}  label={t('City')}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("CompanyEmail")} fullWidth />
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("PhoneNumber")} fullWidth/>
                </Grid>  
              </Fragment>
          ) : ''} */}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mt="3%" mb="5%">
      <Grid container justifyContent="center">
        <Grid container item xs={8} justifyContent="center">
        {/* <Link to="/register/phone-number-verification" style={{textDecoration: 'none', color: 'inherit', width: '100%'}}> */}
          <PrimaryButton className="ButtonTextSize" fullWidth variant="contained" endIcon={<PersonAddIcon />} 
            disabled={terms && lastName && firstName && inputValuePhoneNumber && countryPhoneCode && email && password && confirmPassword && dateOfBirth && password===confirmPassword && !hasErrors ? false : true}
            onClick={() =>{setClickedRegister(clickedRegister+1)}}
          >
            
            {t("Register")}
            
          </PrimaryButton>
          {/* </Link> */}
        </Grid>
        <Grid container item xs={ 10 } justifyContent='center' style={{marginBottom:"15px"}}>
          {hasErrorsRegister.messages.map((el)=>{return(<Box style={{color: "#ff3333", fontSize:"16px", textAlign:"center", marginTop:"2%"}}>{el.message}</Box>)})}
        </Grid>
      </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mb="3%">
      <Grid xs={8} container item direction="row" justifyContent="center" alignItems="center">
        <StepConnector />
        <Box fontWeight={400} fontSize={16} textAlign={"center"}>
        {t("RegisterThrough")}
        </Box>
        <StepConnector />
      </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mb="1%">
      <Grid container  justifyContent="space-evenly" mx="auto">
        <GoogleLogin
              clientId={utilData.clientIdGoogle}
              render={(props) => (
                <ButtonBase onClick={props.onClick}>
                  <Box display="flex" justifyContent="center">
                    <Avatar alt="Google" src={GoogleIcon} className={classes.large} />
                  </Box>
                </ButtonBase>
              )}
              onSuccess={(response) => go_to_profile_by_fbglogin(response.tokenId)}
              onFailure={(error)=>console.log(error)}
        />
        <FacebookLogin
              appId="424152906125439"
              render={(renderProps) => (
                <ButtonBase onClick={renderProps.onClick}>
                  <Box display="flex" justifyContent="center">
                    <Avatar alt="Facebook" src={FacebookIcon} className={classes.large} />
                  </Box>
                </ButtonBase>
              )}  
              callback={(response)=>console.log(response)}
              xfbml={true}
              /* cookie={true}  */
        />
      </Grid>
      </Box>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  createNewUser: (email, password, phoneNumber, firstName, lastName, dateOfBirth, termsAndConditions) => dispatch(createNewUser(email, password, phoneNumber, firstName, lastName, dateOfBirth, termsAndConditions)),
  googleLogin: (token) => dispatch(googleLogin(token))
})
const mapStateToProps = state => ({data: state.userData});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
