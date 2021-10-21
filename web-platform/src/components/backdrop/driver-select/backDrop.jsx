import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Grid, Backdrop, Box, Container, FormControlLabel, RadioGroup} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Rating } from '@material-ui/lab';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreyLine from '../../../assets/images/greyLine.png';
import useStyles from './backDropStyle';
import CardSelected from '../../card-selected/card-selected';
import AddCard from '../../add-card/add-card';
import CarroRadio from '../../radio/CarroRadio';
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
    'spacing-xs-1':{
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
        <MyBackdrop open={props.open} onClick={props.clicked} className='backdrop'>
            <Container className={[classes.containerBackdrop, 'textSizeMobile']}>
                <MyGrid container xs = {12} justifyContent='center' spacing='1'>
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
                    <Grid container item xs={12} justifyContent='center'>
                        <RadioGroup row value = {payment} onChange={handlePayment}>                   
                            <FormControlLabel value = 'cardOnline' control={<CarroRadio/>} label={t("Card")}/>
                            <FormControlLabel value = 'ordinDePlata' control={<CarroRadio/>} label={t("PaymentOrder")}/>
                            <FormControlLabel value = 'ramburs' control={<CarroRadio/>} label={t("CashOnDelivery")}/>
                        </RadioGroup>
                    </Grid>
                    {payment === 'cardOnline' ? (
                            localStorage.getItem('paymentMethodExist') ? (   
                                                <MyGrid container item xs={12} justifyContent='center' spacing={2}>
                                                    <CardSelected/>
                                                </MyGrid>) : (
                                                <Fragment>
                                                    <MyGrid container item xs={12} justifyContent='center' spacing={2} className={'hide-on-mobile'}>
                                                        <AddCard/>
                                                    </MyGrid>
                                                    <MyGrid container item xs={10} justifyContent='center' spacing={2} className={'hide-on-desktop'}>
                                                        <Box paddingY='30px'>
                                                            <Link to='/payment-method/add-payment-method' style={{textDecoration: 'none', width:'1'}}>
                                                                <PrimaryButton variant='outlined' fullWidth>
                                                                    ADAUGA CARD
                                                                </PrimaryButton>
                                                            </Link>
                                                        </Box>
                                                    </MyGrid>
                                                </Fragment>
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