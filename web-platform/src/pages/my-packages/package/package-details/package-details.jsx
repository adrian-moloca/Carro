import React from 'react';
import {Box, Grid} from '@material-ui/core';
import fragile from '../../../../assets/images/fragile.png';
import environmentdang from '../../../../assets/images/environmentdang.png';
import firedang from '../../../../assets/images/firedang.png';
import boxHands from '../../../../assets/images/boxHands.png';
import animalPrints from '../../../../assets/images/animalPrints.png';
import Drivers from './drivers/drivers';
import useStyles from './package-details-style';

const PackageDetails = (props)=>{

    const classes = useStyles();

    return(
    <Box borderRadius='10px' alignItems='center'  boxShadow={3} display ='flex' flexDirection='column' mx='3%'px='2%'>
        <Box my='2%' fontSize={20}>Detalii pachet</Box>
        <Grid container  xs={12} spacing={0} justifyContent='center'>
            <Grid container item xs={6}>
                <Box>Plecare: {props.departure}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Destinatie: {props.destination}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Adresa de preluare: {props.departureAddress}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Adresa destinatie: {props.destinationAddress}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Tip Colet: {props.packageType}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Dimensiuni: {props.dimensions}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Greutate: {props.weight}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Descriere: {props.description}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Pret: {props.price}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>Nume: {props.name}</Box>
            </Grid>
            <Grid container item xs={6} justifyContent='space-around'>
                <img src={fragile} className={classes.advStyle} alt={""}/>
                <img src={environmentdang} className={classes.advStyle} alt={""}/>
                <img src={firedang} className={classes.advStyle} alt={""}/>
                <img src={boxHands} className={classes.advStyle} alt={""}/>
                <img src={animalPrints} className={classes.advStyle} alt={""}/>
            </Grid>
        </Grid>
        <Box my='2%' fontSize={20}>Transporturi disponibile</Box>
        <Grid container  xs={12} spacing={0} justifyContent='center'>
            <Drivers departure={props.departure} destination={props.destination} departureDate={props.departureDate}/>
        </Grid>
    </Box>  
    );
}

export default PackageDetails;