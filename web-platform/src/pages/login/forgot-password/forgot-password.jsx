import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Box, Grid} from '@material-ui/core';
import CarroTextField from '../../../components/textField/CarroTextField.jsx';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton.jsx';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton.jsx';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import './forgot-passwordStyles.jsx';
import { useTranslation } from "react-i18next";
const ForgotPassword = () => { 
  const { t } = useTranslation();
  return (
    <Container className={'Primary-container-style'}>
      <Box>
        <Grid container spacing={3} justifyContent='center'> 
          <Grid container item xs={12} justifyContent='center'><Box mt='5%' mb='8%' fontSize={22}>{t("ResetPassword")}</Box></Grid>
          <Grid container item xs={10} justifyContent='center'>
            <CarroTextField label = 'email' variant = 'outlined' fullWidth/>
          </Grid>
          <Grid container item xs={6} justifyContent='flex-end'>
            <Link  to='/login/' style={{ textDecoration: 'none', width:'70%' }}>
              <SecondaryButton startIcon={<ArrowBackIos/>} className="ButtonTextSize" variant='outlined' fullWidth>
               {t("DriverCardBackButton")}
              </SecondaryButton>
            </Link>
          </Grid>
          <Grid container item xs={6} alignItems='flex-end' justifyContent='flex-start'>
            <Link to='/login/forgot-password/email-sent' style={{ textDecoration: 'none', width:'70%'  }}>
              <PrimaryButton endIcon={<ArrowForwardIos/>} className="ButtonTextSize" variant='contained' fullWidth>
               {t("Send")}
              </PrimaryButton>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
