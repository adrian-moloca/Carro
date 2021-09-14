import React, {useState, useLayoutEffect} from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import {CreditCard} from '@material-ui/icons/';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import CardSelected from './card-selected/card-selected';

//TREBUIE FACUT REVIEW PE useLayoutEffect

const PaymentMethod = () => {
  
  const [cardSetted, setCardSetted] =  useState(localStorage.getItem("paymentMethodExist"));

  const [paymentMethod, setPaymenthMethod] = useState('no assignment');

  return (
      <Container column className='Primary-container-style'>
        <Grid container xs={12} justifyContent='center' spacing={1}>
          <Grid container item xs={12} justifyContent='center'> 
            <Box fontSize={22} justifyContent='center' mt='3%'>Metoda de plata</Box>
          </Grid>
          {cardSetted ? <CardSelected/> : (
            <Grid container item xs={12} justifyContent='center'>
              <Box fontSize={22} display='flex' justifyContent='center' mt='10%' className={'Secondary-color'}>Nu aveti nici o metoda de plata adaugata!</Box>
              <Grid container item xs={12} justifyContent='center'>
                <Box display='flex' justifyContent='center' mt='10%'>
                    <Link to='/payment-method/add-card' style={{textDecoration: 'none'}}>
                      <PrimaryButton size='large' endIcon={<CreditCard/>} fullWidth>Adauga metoda de plata</PrimaryButton>
                    </Link>
                </Box>
              </Grid>
            </Grid>)}
        </Grid>
      </Container>
  )
}

export default PaymentMethod;
