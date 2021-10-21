import React, { useState } from 'react';
import {Box, Grid, Link} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import useStyles from './DriverCardNotificationsStyle';
import { useTranslation } from "react-i18next";
const DriverCardNotifications =(props)=>{
    const { t } = useTranslation();
    const classes = useStyles();

    return(
        <Box display='flex' width='1' height='220px' p={1} borderRadius='10px' boxShadow={3}>
            <Grid container xs={12} justifyContent='center'>
                <Grid container item xs={12} justifyContent='center'>
                    <img src={props.image} className={classes.profileImg} alt={""}/>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Box fontSize='20px' fontWeight='500'>{props.name}</Box>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                    <Box marginTop='5%' fontSize='15px' fontWeight='500' textAlign='center'>{t('DriverCardDeparture')} {props.plecare}</Box>
                </Grid>
                <Grid container item xs={6} justifyContent='center'>
                    <Box fontSize='15px' fontWeight='500' textAlign='center'>{t('DriverCardDestination')} {props.destinatie}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Box marginBottom='5%' fontSize='15px' fontWeight='500' textAlign='center'>{t('DriverCardType')} {props.transportType}</Box>
                </Grid>
                <Grid container item xs={8} justifyContent='space-around'>
                    <Rating value={props.driverRate} readOnly precision={0.5}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DriverCardNotifications;