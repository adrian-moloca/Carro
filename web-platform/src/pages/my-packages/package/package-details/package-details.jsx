import React, { useState } from 'react';
import {Box, Grid} from '@material-ui/core';
import fragile from '../../../../assets/images/fragile.png';
import environmentdang from '../../../../assets/images/environmentdang.png';
import firedang from '../../../../assets/images/firedang.png';
import boxHands from '../../../../assets/images/boxHands.png';
import animalPrints from '../../../../assets/images/animalPrints.png';
import Drivers from '../../../../components/drivers/drivers';
import useStyles from './package-details-style';
import { useTranslation } from "react-i18next";
const PackageDetails = (props)=>{
    const[packageExists, setPackageExists] = useState(true);
    const { t } = useTranslation();
    const classes = useStyles();

    return(
    <Box borderRadius='10px' alignItems='center'  boxShadow={3} display ='flex' flexDirection='column' mx='3%' p='2%'>
        <Box my='2%' fontSize={20}>{t("PackageDetails")}</Box>
        <Grid container  xs={12} spacing={0} justifyContent='center'>
            <Grid container item xs={6}>
                <Box>{t("DriverCardDeparture")} {props.departure}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("DriverCardDestination")} {props.destination}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("PickupAddress")} {props.departureAddress}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("DriverCardDestinationAddress")} {props.destinationAddress}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("PackageType")} {props.packageType}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("Sizing")} {props.dimensions}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("Weight")} {props.weight}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("Description")} {props.description}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("Price")} {props.price}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("CardName")} {props.name}</Box>
            </Grid>
            <Grid container item xs={6} justifyContent='space-around'>
                <img src={fragile} className={classes.advStyle} alt={""}/>
                <img src={environmentdang} className={classes.advStyle} alt={""}/>
                <img src={firedang} className={classes.advStyle} alt={""}/>
                <img src={boxHands} className={classes.advStyle} alt={""}/>
                <img src={animalPrints} className={classes.advStyle} alt={""}/>
            </Grid>
        </Grid>
        <Box my='2%' fontSize={20}>{t("AvailableTransports")}</Box>
        <Grid container  xs={12} spacing={0} justifyContent='center'>
            <Drivers packageExists={packageExists}/>
        </Grid>
    </Box>  
    );
}

export default PackageDetails;