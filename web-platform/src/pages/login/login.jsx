import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Grid, FormControlLabel, Button, ButtonBase, Avatar } from '@material-ui/core';
import CarroTextField from '../../components/textField/CarroTextField.jsx';
import CarroCheckbox from '../../components/checkbox/CarroCheckbox.jsx';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton.jsx';
import useStyles from './loginStyles';
import { useTranslation } from "react-i18next";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { fetchLogin, googleLogin } from '../../redux/actions/UserActions';
import { useHistory } from 'react-router-dom';
import { mailValidator } from '../../utils/Functions/input-validators';
import { rememberMeToggle } from '../../redux/types/UserTypes';
import GoogleIcon from '../../assets/images/GoogleIcon.png';
import FacebookIcon from '../../assets/images/facebook-icon.png';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react17-facebook-login/dist/facebook-login-render-props';
import utilData from '../../utils/constants';


const Login = ({ fetchLogin, googleLogin, rememberMeToggle, data }) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasErrorsLogin, setHasErrorsLogin] = useState({ state: false, messages: [] })
  const [clickedLogin, setClickedLogin] = useState(0)

  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    if (clickedLogin > 0)
      fetchLogin(email.toLowerCase(), password)
  }, [clickedLogin])

  useEffect(() => {
    if (clickedLogin > 0 && data.token && data.token.length > 0)
      history.push('/home')
    else
      if (clickedLogin > 0)
        setHasErrorsLogin({ state: data.hasErrors.state, messages: data.hasErrors.messages })
  }, [data])

  async function go_to_profile_by_fbglogin(token) {
    googleLogin(token)
    history.push('/profile')
  }

  return (
    <Container className={'Primary-container-style'}>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Grid container spacing={3} justifyContent='center'>
          <Grid container item xs={12} justifyContent='center'>
            <Box mt='5%' fontWeight={400} fontSize={21} textAlign={'center'}>{t("Login")}</Box>
          </Grid>
          <Grid container item xs={10} xl={8} >
            <CarroTextField required error={mailValidator(email)} helperText={mailValidator(email) ? t('ValidMail') : ''}
              label={t("Mail")} variant='outlined' fullWidth value={email} onChange={(e) => setEmail(e.target.value.trim())} />
          </Grid>
          <Grid container item xs={10} xl={8}>
            <CarroTextField required type='password'
              label={t("Password")} variant='outlined' fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
          </Grid>
          <Grid container item xs={10} xl={8} justifyContent='space-between'>
            <Box display='flex'>
              <FormControlLabel
                checked={data.rememberMe} onChange={() => rememberMeToggle()}
                control={<CarroCheckbox color='default' />}
                label={t("SaveData")} />
            </Box>
            <Box display='flex' justifyContent='flex-end'>
              <Link to='/login/forgot-password' style={{ textDecoration: 'none' }}>
                <Button className={'Primary-color'}>{t("ForgotPassword")}</Button>
              </Link>
            </Box>
          </Grid>
          <Grid container item xs={10} xl={8} justifyContent='center'>
            <PrimaryButton disabled={email && password && !mailValidator(email) ? false : true} onClick={() => setClickedLogin(clickedLogin + 1)} className="ButtonTextSize" size='large' variant='contained' fullWidth endIcon={<ExitToAppIcon />}>
              {t("Login")}
            </PrimaryButton>
          </Grid>
          <Grid container item xs={10} justifyContent='center' style={{ marginBottom: "15px" }}>
            {hasErrorsLogin.messages.map((el) => { return (<Box style={{ color: "#ff3333", fontSize: "16px", textAlign: "center", marginTop: "2%" }}>{el.message}</Box>) })}
          </Grid>
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
  )
}

const mapDispatchToProps = dispatch => ({
  fetchLogin: (email, password) => dispatch(fetchLogin(email, password)),
  rememberMeToggle: () => dispatch(rememberMeToggle()),
  googleLogin: (token) => dispatch(googleLogin(token))
})
const mapStateToProps = state => ({ data: state.userData })

export default connect(mapStateToProps, mapDispatchToProps)(Login);
