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
import { connect } from 'react-redux';
import { createNewPackage } from '../../redux/actions/MyPackagesActions';

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

const AddPackage = ({data, createNewPackage}) => {  

  const { t } = useTranslation();
  
  const [activeStep, setActiveStep] = useState(0);
  const [pickUpAddress, setPickUpAddress] = useState('');
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureCountry, setDepartureCountry] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [destinataryName, setDestinataryName] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [destinataryAddress, setDestinataryAddress] = useState('');
  const [destinataryPhoneNumber, setDestinataryPhoneNumber] = useState('');
  const [packageSize, setPackageSize] = useState(new Number());
  const [currency, setCurrency] = useState('');
  const [weight, setWeight] = useState(new Number());
  const [width, setWidth] = useState(new Number());
  const [height, setHeight] = useState(new Number());
  const [length, setLength] = useState(new Number());
  const [smallDescription, setSmallDescription] = useState('');
  const [price, setPrice] = useState(new Number());
  const [description, setDescription] = useState('');
  const [isFlammable, setIsFlammable] = useState(false);
  const [isFragile, setIsFragile] = useState(false);
  const [isFoodGrade, setIsFoodGrade] = useState(false);
  const [isHandleWithCare, setIsHandleWithCare] = useState(false);
  const [isAnimal, setIsAnimal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [hasErrors, setHasErrors] = useState(false);

  function formsComplete(step){
    switch(step){
      case 0:
        if(pickUpAddress && departureDate && departureCountry && departureCity && !hasErrors)
          return true
        else 
          return false
      case 1:
        if(destinataryName && destinationCity && destinationCountry && destinataryAddress &&  destinataryPhoneNumber && !hasErrors)
          return true
        else
          return false
      case 2:
        if(packageSize==3)
           if(packageSize && currency && weight && width && height && length && smallDescription && price && description && !hasErrors)
              return true
           else
              return false
        else
           if(packageSize && currency && weight && smallDescription && price && description && !hasErrors)
              return true
           else
              return false
      case 3:
        if(paymentMethod==0)
          return true
        else 
          return false
      default:
        return 'unkown step'
    }
    /* if(
      (pickUpAddress && departureDate && departureCountry && departureCity && !hasErrors)
      || (destinataryName && destinationCity && destinationCountry && destinataryAddress &&  destinataryPhoneNumber && !hasErrors)
      || (packageSize==3 && packageSize && currency && weight && width && height && lenght && smallDescription && price && description && !hasErrors)
      || (packageSize!=3 && packageSize &&currency && weight && smallDescription && price && description && !hasErrors)
      )
        return true;
    else {} */
  }

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
         <StepOne departureCountry={departureCountry} departureCity={departureCity}  pickUpAddress={pickUpAddress} departureDate={departureDate}
                  setDepartureCountry={setDepartureCountry} setDepartureCity={setDepartureCity} setPickUpAddress={setPickUpAddress} setDepartureDate={setDepartureDate}
                  setHasErrors={setHasErrors}/>

        );
      case 1:
        return (
          <StepTwo destinataryName={destinataryName} destinationCountry={destinationCountry} destinationCity={destinationCity} destinataryAddress={destinataryAddress} phoneNumber={destinataryPhoneNumber}
                   setDestinataryName={setDestinataryName} setDestinationCountry={setDestinationCountry} setDestinationCity={setDestinationCity} setDestinataryAddress={setDestinataryAddress}
                   setPhoneNumber={setDestinataryPhoneNumber} setHasErrors={setHasErrors}/>
        );
      case 2:
        return (
          <StepThree packageSize={packageSize} weight={weight} width={width} height={height} length={length} currency={currency} price={price} smallDescription={smallDescription} description={description} 
                     isFlammable={isFlammable} isFoodGrade={isFoodGrade} isFragile={isFragile} isHandleWithCare={isHandleWithCare} isAnimal={isAnimal} setPackageSize={setPackageSize} setWeight={setWeight}
                     setWidth={setWidth} setHeight={setHeight} setLength={setLength} setCurrency={setCurrency} setSmallDescription={setSmallDescription} setDescription={setDescription} setPrice={setPrice}
                     setIsFlammable={setIsFlammable} setIsFoodGrade={setIsFoodGrade} setIsFragile={setIsFragile} setIsHandleWithCare={setIsHandleWithCare} 
                     setIsAnimal={setIsAnimal} setHasErrors={setHasErrors}/>
        );
      case 3:
        return(
          <StepFour paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}/>
        );
      default:
        return 'Unknown step';
    }
  }

  return (
    <Container className={'Primary-container-style'}>
      <Box display='flex' justifyContent='center' fontSize={22} fontWeight={400}>{t('AddPackageTitle')}</Box>
      <Stepper activeStep={activeStep} alternativeLabel>
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
                      <PrimaryButton  onClick={()=>createNewPackage(departureDate, departureCountry, departureCity, destinationCountry, destinationCity, pickUpAddress, destinataryAddress,packageSize, weight, height, length, width, description, price, currency, destinataryName,destinataryPhoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, data.name, data.token)}
                                      disabled={!formsComplete(activeStep)} endIcon={<ArrowForwardIos/>} variant='contained' fullWidth>{t('Finish')}</PrimaryButton>
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
                      <PrimaryButton disabled={!formsComplete(activeStep)} onClick={handleNext} endIcon={<ArrowForwardIos/>}
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

const mapDispatchToProps = dispatch => ({createNewPackage: (departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, packageType, weight, height, length, width, description, price, currency, destinataryName, phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, senderName, token) =>dispatch(createNewPackage(departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, packageType, weight, height, length, width, description, price, currency, destinataryName, phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, senderName, token))})

const mapStateToProps = state => ({data: state.userData})

export default connect(mapStateToProps, mapDispatchToProps)(AddPackage);
