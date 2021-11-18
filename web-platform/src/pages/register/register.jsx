import React, {useState} from "react";
import { Container, Box, Grid, Checkbox, StepConnector, Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
import FormGroup from "@material-ui/core/FormGroup";
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

const Register = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [terms, setTerms] = useState(false);

  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(null);
  const [countryPhoneCode, setCountryPhoneCode] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  // const handleChange = (event) => {setState({ ...state, [event.target.name]: event.target.checked })};

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
            <CarroTextField variant="outlined" label={t("LastName")} fullWidth />
          </Grid>
          <Grid container item xs={12} xl={6} justifyContent="center">
            <CarroTextField variant="outlined" label={t("FirstName")} fullWidth />
          </Grid>
          <Grid container item xs={12} xl={6} justifyContent="center">
            <CarroTextField variant="outlined" label={t("PickupAddress")} fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroDatePicker label={t("Birthday")} InputLabelProps={{style: { fontSize: "17px", marginTop: "3px" }}}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Mail")} fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <PhoneTextField 
              value={inputValuePhoneNumber}
              onChange = {(e)=>setInputValuePhoneNumber(e.target.value)}
              countryPhoneCode={countryPhoneCode} 
              handleselectcountry = {(e)=>setCountryPhoneCode(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Password")} type="password" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("ConfirmPassword")} type="password" fullWidth/>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" ml="1%">
      <Grid  container item xs={8}> 
        <FormGroup row>
          <FormControlLabel
            classes={{ label: classes.label }}
            control={<Checkbox checked={terms} onChange={() => setTerms(!terms)} name="checkedA" color="default"/>}
            label={t("TermsAndConditions")}
          />
        </FormGroup>
      </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mt="3%" mb="5%">
      <Grid container item xs={8}>
      <Link to="/register/phone-number-verification" style={{textDecoration: 'none', color: 'inherit', width: '100%'}}>
        <PrimaryButton className="ButtonTextSize" fullWidth variant="contained" endIcon={<PersonAddIcon />} disabled={!terms}>
          
          {t("Register")}
          
        </PrimaryButton>
        </Link>
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

export default Register;
