
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Stepper, Step, StepLabel, Grid,} from '@material-ui/core';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import {ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import StepOne from './step1/step1';
import StepTwo from './step2/step2';
import StepThree from './step3/step3';
import StepFour from './step4/step4';
import { withStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const StepLabelPersonalized = withStyles({
      root:{
        '& .MuiStepLabel-active':{
          fontWeight: '600',
        },
        '& .MuiStepLabel-iconContainer':{
            '& .MuiStepIcon-root':{
              '&.MuiStepIcon-active':{
                color: '#00b4d8', 
              },
              '&.MuiStepIcon-completed':{
                color: '#00b4d8',
              },
            },
        },
        },

})(StepLabel);

const AddPackage = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = ()=>{
    const nextActiveStep = activeStep === steps.length-1 ? activeStep : activeStep + 1;
    setActiveStep(nextActiveStep);
    
  };
  const handleBack = () => setActiveStep(activeStep-1);


  const steps = getSteps();

  function getSteps(){return [t('Sender'),t('Destinatary'),t('PackageDetails'),t('PaymentMethod')]};

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
         <StepOne />
        );
      case 1:
        return (
          <StepTwo/>
        );
      case 2:
        return (
          <StepThree/>
        );
      case 3:
        return(
          <StepFour/>
        );
      default:
        return 'Unknown step';
    }
  }

  return (
    <Container className={'Primary-container-style'}>
      <Box display='flex' justifyContent='center' fontSize={22} fontWeight={400}>{t('AddPackageTitle')}</Box>
      <Stepper activeStep={activeStep}>
          {steps.map((label) => (
              <Step key={label}>
                <StepLabelPersonalized>{label}</StepLabelPersonalized>
              </Step>
            ))}
      </Stepper>
      <Box>
        { activeStep===(steps.length-1) ? (
              <Box>
                {getStepContent(activeStep)}
                <Box mt={5} mb={2} display ='flex' justifyContent='center'>
                  <Grid container  spacing={7}>
                    <Grid container item  xs={12} sm={6} md={6} lg={6} xl={6}  justifyContent='center'>
                      <SecondaryButton onClick={handleBack} startIcon={<ArrowBackIos/>} variant='outlined' fullWidth>{t('DriverCardBackButton')}</SecondaryButton>
                    </Grid>
                    <Grid container item  xs={12} sm={6} md={6} lg={6} xl={6} justifyContent='center'>
                      <PrimaryButton endIcon={<ArrowForwardIos/>} variant='contained' fullWidth>{t('Finish')}</PrimaryButton>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
        ) : (
              <Box>
                {getStepContent(activeStep)}
                <Box mt={5} mb={2} display ='flex' justifyContent='center'>
                  <Grid container spacing={7}>
                    <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} justifyContent='center'>
                      { activeStep === 0 ? (
                                            <Link to='/home' style={{textDecoration: 'none', color: 'inherit', width: '100%'}}>
                                              <SecondaryButton startIcon={<ArrowBackIos/>} variant='outlined' fullWidth>{t('Home')}</SecondaryButton>
                                            </Link>
                                          ) : (
                                            <SecondaryButton onClick={handleBack} startIcon={<ArrowBackIos/>} variant='outlined' fullWidth>{t('DriverCardBackButton')}</SecondaryButton>
                                          )}
                    </Grid>
                    <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} justifyContent='center'>
                      <PrimaryButton onClick={handleNext} endIcon={<ArrowForwardIos/>}
                       variant='contained' fullWidth color="primary">{t('NextStep')}</PrimaryButton>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
        )}
      </Box>

    </Container>
  );
};

export default AddPackage;
