import React, { useState } from 'react';
import {Box, Grid, FormControlLabel} from '@material-ui/core';
import LoginContainer from '../../components/container/login-page/login-page-container';
import LoginBox from '../../components/box/login-page/primary-box-login-page';
import CarroTextField from '../../components/textField/CarroTextField';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import CarroCheckbox from '../../components/checkbox/CarroCheckbox';
import { Link } from 'react-router-dom';

const Login = () => { 

  const[remindMe, setRemindMe] = useState(false);

  const[Email, setEmail] = useState(null);

  const[Password, setPassword] = useState(null);

  const handleRemindMe = (event) =>{

    !event.target.checked ? setRemindMe(false) : setRemindMe(true)
  }

  return (
      <LoginContainer>
        <LoginBox>
          <Box marginBottom={8} fontSize={25}>
            Autentificare
          </Box>
          <Grid container xl={7} spacing={3}>
              <Grid container item xl={12}>
                <CarroTextField value = {Email} onChange = {(e)=> setEmail(e.target.value)} 
                                label='Email' variant='outlined' fullWidth/>
              </Grid>
              <Grid container item xl={12}>
                <CarroTextField value= {Password} onChange = {(e)=> setPassword(e.target.value)} 
                                label='Parola' variant='outlined' fullWidth/>
              </Grid>
              <Grid container item xl={6}>
                <FormControlLabel onChange={(e)=>handleRemindMe(e) }control={<CarroCheckbox/>} 
                                  label='Remind me' style={{color:'#00b4d8'}}/>
              </Grid>
              <Grid container item xl={6} justifyContent='flex-end' alignItems='center'>
                <Link to='/login/forgot-password' style={{color:'#00b4d8', textDecoration:'none', fontSize: '17px'}}>
                  Am uitat parola
                </Link>
              </Grid>
              <Grid container item xl={12}>
                <PrimaryButton variant='contained' fullWidth>AUTENTIFICARE</PrimaryButton>
              </Grid>
          </Grid>
        </LoginBox>
      </LoginContainer>
  );
}

export default Login;
