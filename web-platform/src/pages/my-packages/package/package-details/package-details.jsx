import React from 'react';
import {Box, Grid} from '@material-ui/core';
import fragil from '../../../../assets/images/fragil.png';
import foodGrade from '../../../../assets/images/foodGrade.png';
import flammable from '../../../../assets/images/flammable.png';
import handleWithCare from '../../../../assets/images/handleWithCare.png';
import animal from '../../../../assets/images/animal.png';
import Rides from '../../../../components/rides/rides';
import useStyles from './package-details-style';
import { useTranslation } from "react-i18next";
const PackageDetails = (props)=>{
    const { t } = useTranslation();
    const classes = useStyles();

    return(
    <Box borderRadius='10px' alignItems='center'  boxShadow={3} display ='flex' flexDirection='column' mt='15px' mx='3%' p='2%'>
        <Box my='2%' fontSize={20}>{t("PackageDetails")}</Box>
        <Grid container justifyContent='center' className="ButtonTextSize" >
            <Grid container item xs={6}>
                <Box>{t("DriverCardDeparture")} {props.departure}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("DriverCardDestination")} {props.destination}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("PickupAddress")}: {props.departureAddress}</Box>
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
                <Box>{t("Description")}: {props.description}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("Price")}: {props.price}</Box>
            </Grid>
            <Grid container item xs={6}>
                <Box>{t("CardName")}: {props.name}</Box>
            </Grid>
            <Grid container item xs={6} justifyContent='space-around'>
                <img src={fragil} className={props.specialMention.isFragile ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={foodGrade} className={props.specialMention.isFoodGrade ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={flammable} className={props.specialMention.isFlammable ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={handleWithCare} className={props.specialMention.isHandleWithCare ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={animal} className={props.specialMention.isAnimal ? classes.advStyle : classes.advNoneStyle} alt={""}/>
            </Grid>
        </Grid>
        <Box my='2%' fontSize={20}>{t("Transports")}</Box>
        <Grid container justifyContent='center'>
            <Rides/>
        </Grid>
    </Box>  
    );
}

export default PackageDetails;