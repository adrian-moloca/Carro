import React from 'react';
import './forgot-passwordStyles.jsx';
import {Container, Box,} from '@material-ui/core';
import CarroTextField from '../../../components/textField/CarroTextField.jsx';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton.jsx';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton.jsx';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';

const ForgotPassword = () => { 
  return (
    <Container className={'Primary-container-style'}>
      <Box mt ={3 } mb={2} fontWeight={400} fontSize={25} textAlign={'center'}>Resetare parola</Box>
      <Box display='flex' justifyContent='center' mt={10}>
        <CarroTextField label = 'email' variant = 'outlined'/>
      </Box>
      <Box mt={7} ml ='35%' width='30%'display='flex' justifyContent='space-between' >
        <SecondaryButton startIcon={<ArrowBackIos/>} variant='outlined'>
          INAPOI
        </SecondaryButton>  
        <PrimaryButton endIcon={<ArrowForwardIos/>} variant='contained'>
          TRIMITE
        </PrimaryButton>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
