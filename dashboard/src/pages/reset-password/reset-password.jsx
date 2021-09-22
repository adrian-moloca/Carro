import React, { useState } from 'react';
import {Box, Grid, FormControlLabel} from '@material-ui/core';
import LoginContainer from '../../components/container/login-page/login-page-container';
import LoginBox from '../../components/box/login-page/primary-box-login-page';
import CarroTextField from '../../components/textField/CarroTextField';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import CarroCheckbox from '../../components/checkbox/CarroCheckbox';
import { Link } from 'react-router-dom';

const ResetPassword = () => { 

  const[ConfirmPassword, setConfirmPassword] = useState(null);

  const[Password, setPassword] = useState(null);

  return (
      <LoginContainer>
        <LoginBox>
          <Box marginBottom={8} fontSize={25}>
                Resetare parola
          </Box>
          <Grid container xl={7} spacing={3}>
            <Grid container item xl={12}>
                <CarroTextField value = {Password} onChange = {(e)=> setPassword(e.target.value)} 
                            label='Parola' variant='outlined' fullWidth/>
            </Grid>
            <Grid container item xl={12}>
                <CarroTextField value= {ConfirmPassword} onChange = {(e)=> setConfirmPassword(e.target.value)} 
                            label='Confirmare parola' variant='outlined' fullWidth/>
            </Grid>
            <Grid container item xl={6} justifyContent='flex-end' alignItems='center'>
                <Link to='/login' style={{textDecoration:'none', width:'100%'}}>
                    <SecondaryButton variant='outlined' fullWidth>INAPOI</SecondaryButton>
                </Link>
            </Grid>
            <Grid container item xl={6}>
                <Link to='/login' style={{textDecoration:'none', width:'100%'}}>
                    <PrimaryButton variant='contained' fullWidth>TRIMITE</PrimaryButton>
                </Link>
            </Grid>
          </Grid>
        </LoginBox>
      </LoginContainer>
  );
}

export default ResetPassword;
