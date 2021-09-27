import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Grid, FormControlLabel, Button } from '@material-ui/core';
import googleicon from '../../assets/images/GoogleIcon.png';
import fbicon from '../../assets/images/fbicon.png';
import greyLine from '../../assets/images/greyLine.png';
import CarroTextField from '../../components/textField/CarroTextField.jsx';
import CarroCheckbox from '../../components/checkbox/CarroCheckbox.jsx';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton.jsx';
import useStyles from './loginStyles';

const Login = () => { 

  const classes = useStyles();

  return (
    <Container className={'Primary-container-style'}>
      <Box display= 'flex' flexDirection='column' justifyContent ='center' alignItems='center'>
        <Grid container xs={12}  spacing={3} justifyContent='center'>
          <Grid container item xs={12} justifyContent='center'> 
              <Box mt='5%' fontWeight={400} fontSize={21} textAlign={'center'}>Autentificare</Box>
            </Grid>  
            <Grid container item xs={8} >
              <CarroTextField required label='Email' variant='outlined' fullWidth/>
            </Grid>
            <Grid container item xs={8}>
              <CarroTextField required label='Password' variant='outlined' fullWidth/>
            </Grid>    
            <Grid container item xs= {6} justifyContent='center'>
              <FormControlLabel 
                control={<CarroCheckbox color='default'/>}
                label='Remind Me'/>
            </Grid>
            <Grid container item xs= {6} justifyContent='center'>
              <Link to='/login/forgot-password' style={{ textDecoration: 'none' }}>
                <Button className={'Primary-color'}>Am uitat parola</Button>
              </Link>
            </Grid>
            <Grid container item xs={6} justifyContent='center'>  
                <PrimaryButton size = 'large' variant='contained' fullWidth>
                  AUTENTIFICARE
                </PrimaryButton>
            </Grid>
        </Grid>
        <Box display='flex' justifyContent='center' mt='4%'>
          <Grid container xs={12} justifyContent='center' spacing={3}>
            <Grid container item xs={5} alignItems='center'>
              <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
            </Grid>
            <Grid container item xs={2} justifyContent='center'>
                <Box textAlign='center'>
                  Autentificare cu
                </Box>
            </Grid>
            <Grid container item xs={5} alignItems='center'>
              <img src={greyLine}  className={classes.greyLinesStyle} alt={""}/>
            </Grid>
            <Grid container item xs={3} justifyContent='space-between'>
                <img src={googleicon} alt={""}/>
                <img src={fbicon} alt={""}/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Login;
