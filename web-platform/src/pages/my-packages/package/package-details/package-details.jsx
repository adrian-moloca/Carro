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

    const getPackageType = (type) => {
        switch(type){
            case 1:
                return t("Small");
            case 2:
                return t("Medium");
            case 3:
                return t("Big");
            default:
                return 'package';
        }
    }

    return(
    <Box borderRadius='10px' alignItems='center'  boxShadow={3} display ='flex' flexDirection='column' mt='15px' mx='3%' p='2%'>
        <Box my='2%' fontSize={20}>{t("PackageDetails")}</Box>
        <Grid container justifyContent='center' >
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
                <Box>{t("PackageType")} {getPackageType(props.packageType)}</Box>
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
                <img src={fragil} className={Boolean(props.specialMention.isFragil).valueOf() ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={foodGrade} className={Boolean(props.specialMention.isFoodGrade).valueOf() ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={flammable} className={Boolean(props.specialMention.isFlammable).valueOf() ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={handleWithCare} className={Boolean(props.specialMention.isHandleWithCare).valueOf() ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                <img src={animal} className={Boolean(props.specialMention.isAnimal).valueOf() ? classes.advStyle : classes.advNoneStyle} alt={""}/>
            </Grid>
        </Grid>
        <Box my='2%' fontSize={20}>{t("Transports")}</Box>
        <Grid container justifyContent='center'>
            <Rides packageId={props.packageId} token={props.token}/>
        </Grid>
    </Box>  
    );
}

export default PackageDetails;