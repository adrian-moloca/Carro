import React, { Fragment, useState, useLayoutEffect } from 'react';
import {Container, Grid, Box, Modal, Fade} from '@material-ui/core';
import useStyles from './edit-package-style';
import { Close, Create } from '@material-ui/icons';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import FormPackage from './form-package/form-package';
import { useTranslation } from "react-i18next";

const EditPackage = (props) =>{
    const { t } = useTranslation();
    const classes = useStyles();

    const[open, setOpen] = useState(false);

    const [pickUpAddress, setPickUpAddress] = useState(props.pickUpAddress);
    const [departureDate, setDepartureDate] = useState(new Date(parseInt(String(props.departureDate).substring(0, 4)),parseInt(String(props.departureDate).substring(5,7)) - 1,parseInt(String(props.departureDate).substring(8,10)), 0));
    const [departureCountry, setDepartureCountry] = useState(String(props.departure).substring(String(props.departure).indexOf(',')+2, String(props.departure).length));
    const [departureCity, setDepartureCity] = useState(String(props.departure).substring(0, String(props.departure).indexOf(',')));
    const [destinataryName, setDestinataryName] = useState(props.destinataryName);
    const [destinationCountry, setDestinationCountry] = useState(String(props.destination).substring(String(props.destination).indexOf(',')+2, String(props.destination).length));
    const [destinationCity, setDestinationCity] = useState(String(props.destination).substring(0, String(props.destination).indexOf(',')));
    const [destinataryAddress, setDestinataryAddress] = useState(props.destinataryAddress);
    const [destinataryPhoneNumber, setDestinataryPhoneNumber] = useState(props.destinataryPhoneNumber);
    const [packageSize, setPackageSize] = useState(props.packageSize);
    const [currency, setCurrency] = useState(String(props.price).substr(String(props.price).indexOf(' ')+1));
    const [weight, setWeight] = useState(String(props.weight).substr(0, String(props.price).indexOf(' ')));
    const [width, setWidth] = useState(props.width);
    const [height, setHeight] = useState(props.height);
    const [length, setLength] = useState(props.length);
    const [smallDescription, setSmallDescription] = useState(props.smallDescription);
    const [price, setPrice] = useState(String(props.price).substr(0, String(props.price).indexOf(' ')));
    const [description, setDescription] = useState(props.description);
    const [isFlammable, setIsFlammable] = useState(props.isFlammable);
    const [isFragile, setIsFragile] = useState(props.isFragile);
    const [isFoodGrade, setIsFoodGrade] = useState(props.isFoodGrade);
    const [isHandleWithCare, setIsHandleWithCare] = useState(props.isHandleWithCare);
    const [isAnimal, setIsAnimal] = useState(props.isAnimal);
    const [hasErrors, setHasErrors] = useState(false);

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return(
        <Fragment>
            <IconButtonNoVerticalPadding onClick={handleOpen}>
                <Create className={'Primary-color'} fontSize='small'/> 
            </IconButtonNoVerticalPadding >
            <Modal open={open} onClose={handleClose}  className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Box borderBottom='2px' borderColor='black'>
                            <Grid container>
                                <Grid container item xs={10} justifyContent='flex-start'>
                                    <Box fontSize='18px' color='grey.500'>{t("EditButton")}</Box>
                                </Grid>
                                <Grid container item xs={2} justifyContent='flex-end'>
                                    <IconButtonNoVerticalPadding onClick={handleClose}>
                                        <Close />
                                    </IconButtonNoVerticalPadding>
                                </Grid>
                            </Grid>
                        </Box>
                        <FormPackage departureCountry={departureCountry} departureCity={departureCity} pickUpAddress={pickUpAddress}
                                     departureDate={departureDate} destinataryName={destinataryName} phoneNumber={destinataryPhoneNumber}
                                     destinataryName={destinataryName} destinationCountry={destinationCountry} destinationCity={destinationCity} destinataryAddress={destinataryAddress}
                                     packageSize={packageSize} weight={weight} width={width} length={length} height={height} smallDescription={smallDescription} price={price} currency={currency}
                                     description={description} flammable={isFlammable} fragile={isFragile} foodGrade={isFoodGrade} animal={isAnimal} handleWithCare={isHandleWithCare} hasErrors={hasErrors}
                                     setDepartureCountry={setDepartureCountry} setDepartureCity={setDepartureCity} setPickUpAddress={setPickUpAddress} setDepartureDate={setDepartureDate}
                                     setPackageSize={setPackageSize} setWeight={setWeight} setWidth={setWidth} setHeight={setHeight} setLength={setLength} setCurrency={setCurrency} 
                                     setDestinataryName={setDestinataryName} setDestinationCountry={setDestinationCountry} setDestinationCity={setDestinationCity} setDestinataryAddress={setDestinataryAddress}
                                     setPhoneNumber={setDestinataryPhoneNumber} setSmallDescription={setSmallDescription} setDescription={setDescription} 
                                     setPrice={setPrice} setFlammable={setIsFlammable} setFoodGrade={setIsFoodGrade} setFragile={setIsFragile} setHandleWithCare={setIsHandleWithCare} setAnimal={setIsAnimal}
                                     setHasErrors={setHasErrors}/>
                    <Grid container justifyContent='space-around'>
                            <Grid container item xs={3} justifyContent="center">
                                        <SecondaryButton variant='outlined' onClick={handleClose} fullWidth>{t("CloseButton")}</SecondaryButton>     
                            </Grid>
                            <Grid container item xs={3} justifyContent="center">
                                        <GreenCaroButton variant='contained' onClick={console.log('')}fullWidth>{t("SaveButton")}</GreenCaroButton>
                            </Grid>
                    </Grid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>

    );

}

export default EditPackage;