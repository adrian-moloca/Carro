import React, { useState } from 'react';
import {Box, Grid, FormControlLabel} from '@material-ui/core';
import LoginContainer from '../../../components/container/login-page/login-page-container';
import LoginBox from '../../../components/box/login-page/primary-box-login-page';
import CarroTextField from '../../../components/textField/CarroTextField';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
import { Link } from 'react-router-dom';

const ForgotPassword = () => { 

  const[Email, setEmail] = useState(null);

  const[emailSent, setEmailSent] = useState(false);

  return (
      <LoginContainer>
        <LoginBox>
          <Box marginBottom={8} fontSize={25}>
              Resetare parola
          </Box>
          { !emailSent ? (
            <Grid container xl={7} spacing={4}>
                <Grid container item xl={12}>
                  <CarroTextField value = {Email} onChange = {(e)=> setEmail(e.target.value)} 
                                  label='Email' variant='outlined' fullWidth/>
                </Grid>
                <Grid container item xl={6} justifyContent='flex-end' alignItems='center'>
                  <Link to='/login' style={{textDecoration:'none', width:'100%'}}>
                    <SecondaryButton variant='outlined' fullWidth>INAPOI</SecondaryButton>
                  </Link>
                </Grid>
                <Grid container item xl={6}>
                  <PrimaryButton variant='contained' onClick={()=>setEmailSent(true)} fullWidth>TRIMITE</PrimaryButton>
                </Grid>
            </Grid>
          ) : (
            <Grid container xl={12} spacing={4} justifyContent='center'>
                <Grid container item xl={12} justifyContent='center'>
                  <Box fontSize={18}>
                    Un link cu resetarea parolei a fost trimis la adresa de email!
                  </Box>
                </Grid>
                <Grid container item xl={7}>
                  <Link to='/login' style={{textDecoration:'none', width:'100%'}}>
                    <PrimaryButton variant='contained' fullWidth>INAPOI LA AUTENTIFICARE</PrimaryButton>
                  </Link>
                </Grid>
            </Grid>
          )}
        </LoginBox>
      </LoginContainer>
  );
}

export default ForgotPassword;
