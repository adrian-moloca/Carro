import React, { useState } from 'react';
import {Grid, Backdrop, Box, Container, FormControlLabel, Radio, RadioGroup} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Star, StarHalf, StarBorder, } from '@material-ui/icons';
import PrimaryButton from '../buttons/primaryButton/primaryButton';
import SecondaryButton from '../buttons/secondaryButton/secondaryButton';
import GreyLine from '../../assets/images/greyLine.png';
import useStyles from './backDropStyle';
import CardSelected from '../card-selected/card-selected';
import AddCard from '../add-card/add-card';

const MyBackdrop = withStyles({
    '& element.style':{
        visibility: 'visible',
    },
    /* '.MuiBackdrop-root' */
    root:{
        zIndex:'1',
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

    const classes = useStyles();

    const[payment, setPayment] = useState('cardOnline');
    const handlePayment = (event)=> setPayment(event.target.value);

    return(
        <MyBackdrop id='backdrop' open={props.open} onClick={props.clicked}>
            <Container className={classes.containerBackdrop}>
                <MyGrid container xs = {12} justifyContent='center' spacing='3'>
                    <Grid container item xs={12} justifyContent='center'>
                        <Box  fontWeight={400} fontSize={21}>
                            Selecteaza Curierul
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
                            <Grid container item xs={6}>Plecare: {props.plecare}</Grid>
                            <Grid container item xs={6}>Data plecare: {props.dataPlecare}</Grid>
                            <Grid container item xs={6}>Destinatie: {props.destinatie}</Grid>
                            <Grid container item xs={6}>
                                <Star className={classes.starsStyle}/>
                                <Star className={classes.starsStyle}/>
                                <Star className={classes.starsStyle}/>
                                <StarHalf className={classes.starsStyle}/>
                                <StarBorder className={classes.starsStyle}/>
                            </Grid>
                            <Grid container item xs={6} justifyContent='flex-start'>telefon: {props.telefon}</Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                        <Box fontWeight='500'>Metoda de plata</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                        <RadioGroup row value = {payment} onChange={handlePayment} className={classes.radioGroupStyle}>                   
                            <FormControlLabel value = 'cardOnline' control={<Radio/>} label='card Online'/>
                            <FormControlLabel value = 'ordinDePlata' control={<Radio/>} label='ordin de Plata'/>
                            <FormControlLabel value = 'ramburs' control={<Radio/>} label='Ramburs'/>
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
                        <SecondaryButton variant='outlined' onClick={props.clickedBackBtn}>ANULEAZA</SecondaryButton>
                    </Grid>
                    <Grid container item xs={6} justifyContent='flex-start'>    
                        <PrimaryButton variant='contained'>SELECTEAZA</PrimaryButton>
                    </Grid>
                </MyGrid>
            </Container>
        </MyBackdrop>
    );
};

export default BackdropSelectDriver;