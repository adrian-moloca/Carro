import React, {useState, useLayoutEffect, useEffect} from "react";
import { Container, Box, Grid, Checkbox, StepConnector, Avatar } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GoogleIcon from "../../assets/images/GoogleIcon.png";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import CarroTextField from "../../components/textField/CarroTextField";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import CarroDatePicker from "../../components/datePicker/CarroDatePicker";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PhoneTextField from "../../components/telephoneNumberField/PhoneTextField";
import useStyles from "./registerStyles";
import "../../App.css";
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import {createNewUser} from '../../redux/actions/UserActions';
import {mailValidator, nameValidator, passwordValidator, phoneValidator} from "../../utils/Functions/input-validators";
import { useHistory } from "react-router";

const Register = ({createNewUser, data}) => {
  
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  const [userCreated, setUserCreated] = useState(String(data.token).length > 0 ? true : false);
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState('');
  const [countryPhoneCode, setCountryPhoneCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(countryPhoneCode.includes('+') ? countryPhoneCode : ('+' + countryPhoneCode) + inputValuePhoneNumber);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date(new Date().getFullYear()-14, new Date().getMonth(),new Date().getDate(), 0));
  const [terms, setTerms] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  useLayoutEffect(()=>{
    setPhoneNumber(countryPhoneCode.includes('+') ? countryPhoneCode : ('+' + countryPhoneCode) + inputValuePhoneNumber)
  }, [inputValuePhoneNumber, countryPhoneCode])

  const redirectPhoneNumberVerification = () => {
    if(userCreated === true) {
        history.push('/register/phone-number-verification');
    } else {
        history.push('/register');
    }
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
  
  useEffect(() => {
    setUserCreated(String(data.token).length > 0 ? true : false);
    setTimeout(() => {redirectPhoneNumberVerification()}, 500)
  }, [data])

  return (
    <Container className={"Primary-container-style"}>
      <Grid container display="flex" justifyContent="center">
        <Box mt={3} mb={2} fontWeight={400} fontSize={21} textAlign={"center"}>
        {t("Register")}
        </Box>
      </Grid>
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid container spacing={3} display="flex" justifyContent="center">
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
              error={phoneValidator(inputValuePhoneNumber)} helperText={phoneValidator(inputValuePhoneNumber) ? t('ValidPhoneNumber') : ''}
            />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" ml="1%" mt='2%'>
      <Grid  container item xs={12}> 
          <FormControlLabel
            classes={{ label: classes.label }}
            control={<Checkbox checked={terms} onChange={() => setTerms(!terms)} color="default"/>}
            label={t("TermsAndConditions")}
          />
      </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mt="3%" mb="5%">
      <Grid container item xs={8}>
      {/* <Link to="/register/phone-number-verification" style={{textDecoration: 'none', color: 'inherit', width: '100%'}}> */}
        <PrimaryButton className="ButtonTextSize" fullWidth variant="contained" endIcon={<PersonAddIcon />} 
          disabled={terms && lastName && firstName && phoneNumber && email && password && confirmPassword && dateOfBirth && password===confirmPassword && !hasErrors ? false : true}
          onClick={() => createNewUser(email, password, phoneNumber, firstName, lastName, dateOfBirth, 'True')}
        >
          
          {t("Register")}
          
        </PrimaryButton>
        {/* </Link> */}
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
        <Box display="flex" justifyContent="center">
          <Avatar alt="Google" src={GoogleIcon} className={classes.large} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Avatar alt="Facebook" src={FacebookIcon} className={classes.large} />
        </Box>
      </Grid>
      </Box>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({createNewUser: (email, password, phoneNumber, firstName, lastName, dateOfBirth, termsAndConditions) => dispatch(createNewUser(email, password, phoneNumber, firstName, lastName, dateOfBirth, termsAndConditions))})
const mapStateToProps = state => ({data: state.userData});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
