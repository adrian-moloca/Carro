import React from 'react';
import './loginStyles.jsx';
import useStyles from './loginStyles';
import { Container, Box, TextField, Grid, Checkbox, FormControlLabel, Button, Typography, withStyles } from '@material-ui/core';
import googleicon from '../../assets/images/GoogleIcon.png';
import fbicon from '../../assets/images/fbicon.png';


const Login = () => { 

  const classes = useStyles();
  const CarroTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#00b4d8',
      },

      '& .MuiInput-underline:after':{
        borderBottomColor: '#00b4d8',
      },

      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#00b4d8',
        },

        '&.Mui-focused fieldset': {
          borderColor: '#00b4d8',
        },
      },


    }
  })(TextField);

  return (
    <Container className={'Primary-container-style'}>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Autentificare</Box>
      <Box mt={6} alignContent='center' textAlign='center' ml='1%' >
        <Grid container xs direction='column' alignItems='center' spacing={2} >
          <Grid item xs={12}>
            <CarroTextField required label='Email' variant='outlined'/>
          </Grid>
          <Grid item xs={12}>
            <CarroTextField required label='Password' variant='outlined'/>
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
            <Button className={'Primary-color'}>Am uitat parola</Button>
          </Grid>
        </Grid>  
      </Box>
      <Box mt={4} alignContent='center' textAlign='center' px={30}>  
        <Button size='large' variant = 'contained' className={'primarybutton'}>
          AUTENTIFICARE
        </Button>
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
