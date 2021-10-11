import React, { useState } from 'react';
import {Grid, Backdrop, Box, Container, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Rating } from '@material-ui/lab';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreyLine from '../../../assets/images/greyLine.png';
import useStyles from './backDropStyle';
import CardSelected from '../../card-selected/card-selected';
import AddCard from '../../add-card/add-card';
import { useTranslation } from "react-i18next";

const MyBackdrop = withStyles({
    '& element.style':{
        visibility: 'visible',
    },
    /* '.MuiBackdrop-root' */
    root:{
        zIndex: '2',
        backgroundColor: 'black 0.7',
    },

})(Backdrop);

const MyGrid = withStyles({
    'spacing-xs-3':{
        margin: 0,
    },
    'spacing-xs-2':{
        margin: 0,
    },
    'spacing-xs-5':{
        margin: 0,
    },
})(Grid);

const BackdropSelectDriver=(props)=>{
    const { t } = useTranslation();
    const classes = useStyles();

    const[payment, setPayment] = useState('cardOnline');
    const handlePayment = (event)=> setPayment(event.target.value);

    return(
        <MyBackdrop className='backdrop' open={props.open} onClick={props.clicked}>
            <Container className={classes.containerBackdrop}>
                <MyGrid container xs = {12} justifyContent='center' spacing='3'>
                    <Grid container item xs={12} justifyContent='center'>
                        <Box  fontWeight={400} fontSize={21}>
                            {t("SelectCourier")}
                        </Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                            <img src={GreyLine} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                            <img src={props.image} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                        <Box fontSize={22} fontWeight={600}>{props.name}</Box>
                    </Grid>
                    <Grid container item xs={9} justifyContent='center'>
                        <Grid container xs={12}>
                            <Grid container item xs={6}>{t("DriverCardDeparture")} {props.plecare}</Grid>
                            <Grid container item xs={6}>{t("DriverCardDepartureDate")} {props.dataPlecare}</Grid>
                            <Grid container item xs={6}>{t("DriverCardDestination")} {props.destinatie}</Grid>
                            <Grid container item xs={6}>
                                <Rating value={props.driverRate} readOnly precision={0.5}/>
                            </Grid>
                            <Grid container item xs={6} justifyContent='flex-start'>{t("DriverCardType")} {props.tipTransport}</Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
    
                        <Box fontWeight='500'>{t("PaymentMethod")}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                        <RadioGroup row value = {payment} onChange={handlePayment} className={classes.radioGroupStyle}>                   
                            <FormControlLabel value = 'cardOnline' control={<Radio/>} label={t("Card")}/>
                            <FormControlLabel value = 'ordinDePlata' control={<Radio/>} label={t("PaymentOrder")}/>
                            <FormControlLabel value = 'ramburs' control={<Radio/>} label={t("CashOnDelivery")}/>
                        </RadioGroup>
                    </Grid>
                    {payment === 'cardOnline' ? (
                            localStorage.getItem('paymentMethodExist') ? (   
                                                <MyGrid container item xs={12} justifyContent='center' spacing={2}>
                                                    <CardSelected/>
                                                </MyGrid>) : (
                                                <MyGrid container item xs={12} justifyContent='center' spacing={2}>
                                                    <AddCard/>
                                                </MyGrid>
                                                ))  : null}
                    <Grid container item xs={6} justifyContent='flex-end'>
                        <SecondaryButton variant='outlined' onClick={props.clickedBackBtn}>{t("Cancel")}</SecondaryButton>
                    </Grid>
                    <Grid container item xs={6} justifyContent='flex-start'>    
                        <PrimaryButton variant='contained'>{t("DriverCardSelectButton")}</PrimaryButton>
                    </Grid>
                </MyGrid>
            </Container>
        </MyBackdrop>
    );
};

export default BackdropSelectDriver;