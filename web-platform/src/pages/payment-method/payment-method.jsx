import React, {useState, Fragment} from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import {CreditCard} from '@material-ui/icons/';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import CreditCardsManager from '../../components/credit-cards-manager/credit-cards-manager';
import { useTranslation } from "react-i18next";

const PaymentMethod = () => {
  const { t } = useTranslation();
  const [cardSetted, setCardSetted] =  useState(true);

  const [paymentMethod, setPaymenthMethod] = useState('no assignment');

  return (
    <Container className='Primary-container-style'>
      <Grid container justifyContent='center' spacing={2}>
        <Grid container item xs={12} justifyContent='center'> 
          <Box mb={3} fontSize={22} justifyContent='center' mt='3%'>{t("PaymentMethod")}</Box>
        </Grid>
        {cardSetted ? 
                (
                  <CreditCardsManager marginTopAddCard={2} showSaveButtonAddCard='true'/> 
                ) 
                : 
                (
                  <Fragment>
                    <Grid container item xs={10} justifyContent='center'>
                      <Box fontSize={22} display='flex' justifyContent='center' mt='10%' className={'Secondary-color'}>
                         {t("NoPayment")}
                      </Box>
                    </Grid>
                      <Grid container item xs={12} justifyContent='center'>
                        <Box display='flex' justifyContent='center' mt='10%'>
                            <Link to='/payment-method/add-payment-method' style={{textDecoration: 'none'}}>
                              <PrimaryButton className="ButtonTextSize" variant = 'contained' size='large' endIcon={<CreditCard/>} fullWidth>{t("AddPayment")}</PrimaryButton>
                            </Link>
                        </Box>
                      </Grid>
                  </Fragment>
                )
        }
      </Grid>
    </Container>
  );
};

export default PaymentMethod;
