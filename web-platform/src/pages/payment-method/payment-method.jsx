import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import {CreditCard} from '@material-ui/icons/';

const PaymentMethod = () => { 
  return (
      <Container className='Primary-container-style'>
        <Box fontSize={22} display='flex' justifyContent='center'>Metoda de plata</Box>
        <Box fontSize={22} display='flex' justifyContent='center' mt={12} className={'Secondary-color'}>Nu aveti nici o metoda de plata adaugata!</Box>
        <Box display='flex' justifyContent='center' mt={8}>
            <Link to='/payment-method/add-method' style={{textDecoration: 'none'}}>
              <PrimaryButton size='large' endIcon={<CreditCard/>}>Adauga metoda de plata</PrimaryButton>
            </Link>
        </Box>
      </Container>
  )
}

export default PaymentMethod;
