import React, { useState, Fragment, useEffect } from 'react';
import {Grid, Box, Container, FormControlLabel, RadioGroup, Modal, Fade} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Rating } from '@material-ui/lab';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import GreyLine from '../../../assets/images/greyLine.png';
import useStyles from './driver-select-style';
import CreditCardsManager from '../../credit-cards-manager/credit-cards-manager';
import AddCard from '../../add-card/add-card';
import CarroRadio from '../../radio/CarroRadio';
import { useTranslation } from "react-i18next";

const MyGrid = withStyles({
    'spacing-xs-3':{
        margin: 0,
    },
    'spacing-xs-2':{
        margin: 0,
    },
    'spacing-xs-1':{
        margin: 0,
    },
    'spacing-xs-5':{
        margin: 0,
    },
})(Grid);

const SelectDriver=(props)=>{
    const { t } = useTranslation();
    const classes = useStyles();

    /* const[payment, setPayment] = useState('cardOnline');
    // state
    const [cardNumber, setCardNumber] = useState('');
    const [dateValue, setDateValue] = useState(new Date());
    const [completeName, setCompleteName] = useState('');
    const [CVV, setCVV] = useState('');
    // handlers
    const handleSetCompleteName = (event) => setCompleteName(event.target.value);
    const handleSetCardNumber = (event) => setCardNumber(event.target.value);
    const handleDateSelect = (event) => setDateValue(event);
    const handleSetCVV = (event) => setCVV(event.target.value);
    const handlePayment = (event)=> setPayment(event.target.value);
     */


    const[open, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return(
        <Fragment>
            <Grid container item xs={8} justifyContent='center'>
                <Box mt='26%' mb='2%' width={1}>
                    <GreenCaroButton variant='contained'  onClick={handleOpen} fullWidth>
                            {t('DriverCardSelectButton')}
                    </GreenCaroButton>
                </Box>
            </Grid>
            <Modal open={open} onClose={handleClose} className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop + ' textSizeMobile'}>
                        <MyGrid container justifyContent='center' spacing={1}>
                            <Grid container item xs={12} justifyContent='center'>
                                <Box  fontWeight={400} fontSize={21}>
                                    {t("SelectCourier")}
                                </Box>
                            </Grid>
                            <Grid container item xs={12} justifyContent='center'>
                                    <img src={GreyLine} alt={""}/>
                            </Grid>
                            <Grid container item xs={5} justifyContent='flex-end'>
                                    <img src={props.image} alt={""} className={classes.profileImage}/>
                            </Grid>
                            <Grid container item xs={7} justifyContent='flex-start' alignItems='center'>
                                <Box fontSize={22} fontWeight={600} paddingLeft='10px'  className='textSizeMobile'>{props.name}</Box>
                            </Grid>
                            <Grid container item xs={9} justifyContent='center'>
                                <Grid container item xs={12} justifyContent='center'>{t("DriverCardDeparture")} {props.plecare}</Grid>
                                <Grid container item xs={12} justifyContent='center'>{t("DriverCardDepartureDate")} {props.dataPlecare}</Grid>
                                <Grid container item xs={12} justifyContent='center'>{t("DriverCardDestination")} {props.destinatie}</Grid>
                                <Grid container item xs={12} justifyContent='center'>{t("DriverCardType")} {props.tipTransport}</Grid>
                                <Grid container item xs={12} justifyContent='center'>
                                    <Rating value={props.driverRate} readOnly precision={0.5}/>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12} justifyContent='center'>
                                <Box fontWeight='500'>{t("PaymentMethod")}</Box>
                            </Grid>
    {/*                         <Grid container item xs={12} justifyContent='center'>
                                <RadioGroup row value = {payment} onChange={handlePayment}>                   
                                    <FormControlLabel value = 'cardOnline' control={<CarroRadio/>} label={t("Card")}/>
                                    <FormControlLabel value = 'ordinDePlata' control={<CarroRadio/>} label={t("PaymentOrder")}/>
                                    <FormControlLabel value = 'ramburs' control={<CarroRadio/>} label={t("CashOnDelivery")}/>
                                </RadioGroup>
                            </Grid>
                            {payment === 'cardOnline' ? (
                                    localStorage.getItem('paymentMethodExist') ? (   
                                                        <MyGrid container item xs={12} justifyContent='center' spacing={2}>
                                                            <CreditCardsManager/>
                                                        </MyGrid>) : (
                                                        <Fragment>
                                                            <MyGrid container item xs={12} justifyContent='center' spacing={2}>
                                                                <AddCard 
                                                                        showSaveButton='true'
                                                                        cardNumber = {cardNumber} 
                                                                        cardNumberSet = {(e)=>handleSetCardNumber(e)} 
                                                                        dateValue={dateValue} 
                                                                        handleDateSelect={handleDateSelect} 
                                                                        completeName = {completeName} 
                                                                        completeNameSet={(e)=>handleSetCompleteName(e)}
                                                                        cvv={CVV}
                                                                        cvvSet={(e)=>handleSetCVV(e)}/>
                                                            </MyGrid>

                                                        </Fragment>
                                                        ))  : ""} */}
                            <Grid container item xs={6} justifyContent='flex-end'>
                                <SecondaryButton variant='outlined' onClick={handleClose}>{t("Cancel")}</SecondaryButton>
                            </Grid>
                            <Grid container item xs={6} justifyContent='flex-start'>    
                                <PrimaryButton variant='contained'>{t("DriverCardSelectButton")}</PrimaryButton>
                            </Grid>
                        </MyGrid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>
    );
};

export default SelectDriver;