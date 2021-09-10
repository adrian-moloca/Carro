import React from 'react';
import './loginStyles.jsx';
import useStyles from './loginStyles';
import { Container, Box, TextField, Grid, Checkbox, FormControlLabel, Button, Typography, withStyles } from '@material-ui/core';
import googleicon from '../../assets/images/GoogleIcon.png';
import fbicon from '../../assets/images/fbicon.png';
import CarroTextField from '../../components/textField/CarroTextField.jsx';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton.jsx';
import { Link } from 'react-router-dom';


const Login = () => { 

  const classes = useStyles();

  return (
    <Container className={'Primary-container-style'}>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Autentificare</Box>
      <Box mt={6} alignContent='center' textAlign='center'  mx='30%'>
        <Grid container xs direction='column' alignItems='center' spacing={2}>
          <Grid container item xs={12} >
            <CarroTextField required label='Email' variant='outlined' fullWidth/>
          </Grid>
          <Grid container item xs={12}>
            <CarroTextField required label='Password' variant='outlined' fullWidth/>
          </Grid>
        </Grid>
      </Box>  
      <Box mt={4} alignContent='center' textAlign='center' px={30} className={'Primary-color'}>  
        <Grid container xs direction='row'  spacing={2}>
          <Grid item xs= {6} justifyContent='flex-start'>
            <FormControlLabel 
              control={<Checkbox color='default'/>}
              label='Remind Me'/>
          </Grid>
          <Grid item xs= {6} justifyContent='flex-end'>
            <Link to='/login/forgot-password' style={{ textDecoration: 'none' }}>
              <Button className={'Primary-color'}>Am uitat parola</Button>
            </Link>
          </Grid>
        </Grid>  
      </Box>
      <Box mt={4} alignContent='center' textAlign='center' px={30}>  
          <PrimaryButton size = 'large' variant='contained'>
            AUTENTIFICARE
          </PrimaryButton>
      </Box>
      <Box mt={4} borderTop={1} borderColor={'grey.500'} alignContent='center' textAlign='center'>
        <Box className={['Secondary-color', classes.textBoxStyle]}>
          Autentificare cu
        </Box>
        <Box ml ='40%' mt='3%' width= '20%' display='flex' direction='row' justifyContent='space-between'>
          <img src={googleicon}/>
          <img src={fbicon}/>
        </Box>
      </Box>
    </Container>
  )
}

export default Login;
