
import React, {useState} from 'react';
import { Container, Box, Stepper, Step, StepLabel, Grid,} from '@mui/material';
import useStyles from './add-packageStyle';
import { withStyles } from '@mui/styles';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import {ArrowBackIos, ArrowForwardIos, Add} from '@mui/icons-material';
import StepOne from './step1/step1';
import StepTwo from './step2/step2';
import StepThree from './step3/step3';
import StepFour from './step4/step4';

const StepLabelPersonalized = withStyles({
      root:{
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

  const [activeStep, setActiveStep] = useState(0);

  const classes = useStyles();

  const steps = getSteps();


  const handleNext = ()=>{

     const nextActiveStep = activeStep === steps.length-1 ? activeStep : activeStep + 1;
     setActiveStep(nextActiveStep);
  
  };

  const handleBack = ()=>{
    setActiveStep(activeStep-1);
  };
  
  


  function getSteps(){
      return ['Step 1','Step 2','Step 3','Step 4'];    
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
         <StepOne/>
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
      <Box display='flex' justifyContent='center' fontSize={22} fontWeight={400}>Adauga pachet</Box>
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
                  <Grid container xs={12} spacing={7}>
                    <Grid container item xs  justifyContent='center'>
                      <SecondaryButton onClick={handleBack} startIcon={<ArrowBackIos/>} variant='outlined' fullWidth>INAPOI</SecondaryButton>
                    </Grid>
                    <Grid container item xs  justifyContent='center'>
                      <PrimaryButton endIcon={<ArrowForwardIos/>} variant='contained' fullWidth>FINALIZEAZA</PrimaryButton>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
        ) : (
              <Box>
                {getStepContent(activeStep)}
                <Box mt={5} mb={2} display ='flex' justifyContent='center'>
                  <Grid container xs={12} spacing={7}>
                    <Grid container item xs  justifyContent='center'>
                    {activeStep === 0 ? 
                      <SecondaryButton disabled startIcon={<ArrowBackIos/>} variant='outlined' fullWidth>INAPOI</SecondaryButton> :
                      <SecondaryButton onClick={handleBack} startIcon={<ArrowBackIos/>} variant='outlined' fullWidth>INAPOI</SecondaryButton> }
                    </Grid>
                    <Grid container item xs  justifyContent='center'>
                      <PrimaryButton onClick={handleNext} endIcon={<ArrowForwardIos/>} variant='contained' fullWidth color="primary">URMATORUL PAS</PrimaryButton>
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
