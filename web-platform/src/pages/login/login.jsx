import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Grid, FormControlLabel, Button } from '@material-ui/core';
import googleicon from '../../assets/images/GoogleIcon.png';
import fbicon from '../../assets/images/fbicon.png';
import greyLine from '../../assets/images/greyLine.png';
import CarroTextField from '../../components/textField/CarroTextField.jsx';
import CarroCheckbox from '../../components/checkbox/CarroCheckbox.jsx';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton.jsx';
import useStyles from './loginStyles';
import { useTranslation } from "react-i18next";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import {fetchLogin} from '../../redux/actions/UserActions';
import { useHistory } from 'react-router-dom';
import { mailValidator } from '../../utils/Functions/input-validators';

const Login = ({fetchLogin, data}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(data.email.length > 0 ? true : false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const redirectAfterLoginSuccess = () => {
    if(isLoggedIn === true) {
        history.push('/home');
    } else {
      history.push('/login');
    }
  }

  useEffect(() => {
    setIsLoggedIn(data.email.length > 0 ? true : false);
    setTimeout(() => {redirectAfterLoginSuccess()}, 500)
  }, [data])

  return (
    <Container className={'Primary-container-style'}>
      <Box display= 'flex' flexDirection='column' justifyContent ='center' alignItems='center'>
        <Grid container spacing={3} justifyContent='center'>
            <Grid container item xs={12} justifyContent='center'> 
              <Box mt='5%' fontWeight={400} fontSize={21} textAlign={'center'}>{t("Login")}</Box>
            </Grid>  
            <Grid container item xs={10} xl={8} >
              <CarroTextField required error={mailValidator(email)} helperText={mailValidator(email) ? t('ValidMail') : ''} 
                              label={t("Mail")} variant='outlined' fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Grid>
            <Grid container item xs={10} xl={8}>
              <CarroTextField required type='password' 
                              label={t("Password")} variant='outlined' fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Grid>  
            <Grid container item xs={10} xl={8} justifyContent='space-between'>  
            <Box display ='flex'>
              <FormControlLabel 
                control={<CarroCheckbox color='default'/>}
                label={t("SaveData")}/>
            </Box>
            <Box display ='flex' justifyContent='flex-end'>
              <Link to='/login/forgot-password' style={{ textDecoration: 'none' }}>
                <Button className={'Primary-color'}>{t("ForgotPassword")}</Button>
              </Link>
            </Box>
            </Grid>
            <Grid container item xs={10} xl={8} justifyContent='center'>  
                <PrimaryButton onClick={() => {fetchLogin(email.toLowerCase(), password);}} className="ButtonTextSize" size = 'large' variant='contained' fullWidth endIcon={<ExitToAppIcon />}>
                {t("Login")}
                </PrimaryButton>
            </Grid>
        </Grid>
        <Box display='flex' justifyContent='center' mt='4%'>
          <Grid container justifyContent='center' spacing={3}>
            <Grid container item xs={5} alignItems='center'>
              <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
            </Grid>
            <Grid container item xs={2} xl={2} justifyContent='center'>
                <Box textAlign='center' className="ButtonTextSize">
                
                {t("LoginThrough")}
                </Box>
            </Grid>
            <Grid container item xs={5} alignItems='center'>
              <img src={greyLine}  className={classes.greyLinesStyle} alt={""}/>
            </Grid>
            <Grid container item xs={7} xl={3} justifyContent='space-between'>
                <img src={googleicon} alt={""}/>
                <img src={fbicon} alt={""}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

const mapDispatchToProps = dispatch => ({fetchLogin: (email,password) => dispatch(fetchLogin(email, password))})
const mapStateToProps = state => ({data: state.userData})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
