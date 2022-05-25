import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Stepper, Step, StepLabel, Grid, Modal } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import { ArrowBackIos, ArrowForwardIos, Close } from '@material-ui/icons';
import StepOne from './step1/step1';
import StepTwo from './step2/step2';
import StepThree from './step3/step3';
import StepFour from './step4/step4';
import { useHistory } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createNewPackage } from '../../redux/actions/MyPackagesActions';
import IconButtonNoVerticalPadding from '../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';

const StepLabelPersonalized = withStyles({
  root: {
    '& .MuiStepLabel-active': {
      fontWeight: '600',
    },
    '& .MuiStepLabel-iconContainer': {
      '& .MuiStepIcon-root': {
        '&.MuiStepIcon-active': {
          color: '#00b4d8',
        },
        '&.MuiStepIcon-completed': {
          color: '#00b4d8',
        },
      },
    },
  },

})(StepLabel);

const AddPackage = ({ data, packageData, createNewPackage, ...props }) => {

  const { t } = useTranslation();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const [pickUpAddress, setPickUpAddress] = useState('');
  const [departureDate, setDepartureDate] = useState(props.departureDate ? props.departureDate : new Date());
  const [departureCountry, setDepartureCountry] = useState(props.departureCountry ? props.departureCountry : '');
  const [departureCity, setDepartureCity] = useState(props.departureCity ? props.departureCity : '');
  const [destinataryName, setDestinataryName] = useState('');
  const [destinationCountry, setDestinationCountry] = useState(props.destinationCountry ? props.destinationCountry : '');
  const [destinationCity, setDestinationCity] = useState(props.destinationCity ? props.destinationCity : '');
  const [destinataryAddress, setDestinataryAddress] = useState('');
  const [destinataryPhoneNumber, setDestinataryPhoneNumber] = useState('');
  const [packageSize, setPackageSize] = useState(0);
  const [currency, setCurrency] = useState('ron');
  const [weight, setWeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [length, setLength] = useState(0);
  const [smallDescription, setSmallDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [isFlammable, setIsFlammable] = useState(false);
  const [isFragile, setIsFragile] = useState(false);
  const [isFoodGrade, setIsFoodGrade] = useState(false);
  const [isHandleWithCare, setIsHandleWithCare] = useState(false);
  const [isAnimal, setIsAnimal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [hasErrors, setHasErrors] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorsOnAdd, setErrorsOnAdd] = useState([])

  function formsComplete(step) {
    switch (step) {
      case 0:
        if (pickUpAddress && departureDate && departureCountry && departureCity && !hasErrors)
          return true
        else
          return false
      case 1:
        if (destinataryName && destinationCity && destinationCountry && destinataryAddress && destinataryPhoneNumber && !hasErrors)
          return true
        else
          return false
      case 2:
        if (packageSize === 3)
          if (packageSize && currency && width && height && length && smallDescription && !hasErrors)
            return true
          else
            return false
        else
          if (packageSize && currency && smallDescription && !hasErrors)
            return true
          else
            return false
      case 3:
        if (paymentMethod !== 0)
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

  const handleNext = () => {
    const nextActiveStep = activeStep === steps.length - 1 ? activeStep : activeStep + 1;
    setActiveStep(nextActiveStep);

  };
  const handleBack = () => setActiveStep(activeStep - 1);

  const steps = getSteps();

  function getSteps() { return [t('Sender'), t('Destinatary'), t('PackageDetails'), t('PaymentMethod')] };

  const redirectAfterPackageCreated = () => {
    if (packageData.hasErrors === true) {
      console.log('Crearea pachetului a esuat');
    } else {
      history.push('/my-packages');
    }
  }

  const handleCreateNewPackage = () => {
    if (data.isUserValidated === 'True') {
      createNewPackage(departureDate, departureCountry, departureCity, destinationCountry, destinationCity, pickUpAddress, destinataryAddress, packageSize, weight, height, length, width, smallDescription, description, price, currency, destinataryName, destinataryPhoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, data.name, data.token);
      setRequestSent(true)
    } else {
      history.push('/profile')
    }
  }


  useEffect(() => {

    if (requestSent && !props.modal) {
      setLoading(true)
      setTimeout(() => { redirectAfterPackageCreated() }, 1000);
    }
    else
      if (requestSent && props.modal)
        props.packageCreated()

  }, [packageData, requestSent])

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <StepOne departureCountry={departureCountry} departureCity={departureCity} pickUpAddress={pickUpAddress} departureDate={departureDate}
            setDepartureCountry={setDepartureCountry} setDepartureCity={setDepartureCity} setPickUpAddress={setPickUpAddress} setDepartureDate={setDepartureDate}
            setHasErrors={setHasErrors} />

        );
      case 1:
        return (
          <StepTwo destinataryName={destinataryName} destinationCountry={destinationCountry} destinationCity={destinationCity} destinataryAddress={destinataryAddress} phoneNumber={destinataryPhoneNumber}
            setDestinataryName={setDestinataryName} setDestinationCountry={setDestinationCountry} setDestinationCity={setDestinationCity} setDestinataryAddress={setDestinataryAddress}
            setPhoneNumber={setDestinataryPhoneNumber} setHasErrors={setHasErrors} />
        );
      case 2:
        return (
          <StepThree packageSize={packageSize} weight={weight} width={width} height={height} length={length} currency={currency} price={price} smallDescription={smallDescription} description={description}
            isFlammable={isFlammable} isFoodGrade={isFoodGrade} isFragile={isFragile} isHandleWithCare={isHandleWithCare} isAnimal={isAnimal} setPackageSize={setPackageSize} setWeight={setWeight}
            setWidth={setWidth} setHeight={setHeight} setLength={setLength} setCurrency={setCurrency} setSmallDescription={setSmallDescription} setDescription={setDescription} setPrice={setPrice}
            setIsFlammable={setIsFlammable} setIsFoodGrade={setIsFoodGrade} setIsFragile={setIsFragile} setIsHandleWithCare={setIsHandleWithCare}
            setIsAnimal={setIsAnimal} setHasErrors={setHasErrors} />
        );
      case 3:
        return (
          <StepFour paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        );
      default:
        return 'Unknown step';
    }
  }

  return (
    <Container className={'Primary-container-style'}>
      {props.modal ? (
        <Box width='100%' display={'flex'} justifyContent={'flex-end'}>
          <IconButtonNoVerticalPadding onClick={() => { props.close() }}>
            <Close />
          </IconButtonNoVerticalPadding>
        </Box>
      ) : null}
      <Box display='flex' justifyContent='center' fontSize={22} fontWeight={400}>{t('AddPackageTitle')}</Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabelPersonalized>{label}</StepLabelPersonalized>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === (steps.length - 1) ? (
          <Box>
            {getStepContent(activeStep)}
            <Box mt={5} mb={2} display='flex' justifyContent='center'>
              <Grid container spacing={7}>
                <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} justifyContent='center'>
                  <SecondaryButton onClick={handleBack} startIcon={<ArrowBackIos />} variant='outlined' fullWidth>{t('DriverCardBackButton')}</SecondaryButton>
                </Grid>
                <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} justifyContent='center'>
                  <PrimaryButton onClick={() => handleCreateNewPackage()}
                    disabled={!formsComplete(activeStep)} endIcon={<ArrowForwardIos />} variant='contained' fullWidth>{t('Finish')}</PrimaryButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box>
            {getStepContent(activeStep)}
            <Box mt={5} mb={2} display='flex' justifyContent='center'>
              <Grid container spacing={7}>
                <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} justifyContent='center'>
                  {activeStep === 0 ? (
                    <Link to='/home' style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                      <SecondaryButton startIcon={<ArrowBackIos />} variant='outlined' fullWidth>{t('Home')}</SecondaryButton>
                    </Link>
                  ) : (
                    <SecondaryButton onClick={handleBack} startIcon={<ArrowBackIos />} variant='outlined' fullWidth>{t('DriverCardBackButton')}</SecondaryButton>
                  )}
                </Grid>
                <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} justifyContent='center'>
                  <PrimaryButton disabled={!formsComplete(activeStep)} onClick={handleNext} endIcon={<ArrowForwardIos />}
                    variant='contained' fullWidth color="primary">{t('NextStep')}</PrimaryButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Box>
      <Modal open={loading} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress style={{ color: '#ffffff' }} />
      </Modal>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({ createNewPackage: (departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, packageType, weight, height, length, width, smallDescription, description, price, currency, destinataryName, phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, senderName, token) => dispatch(createNewPackage(departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, packageType, weight, height, length, width, smallDescription, description, price, currency, destinataryName, phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, senderName, token)) })

const mapStateToProps = state => ({ data: state.userData, packageData: state.myPackagesData })

export default connect(mapStateToProps, mapDispatchToProps)(AddPackage);
