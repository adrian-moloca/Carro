import React from 'react';
import {Box, Grid} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import useStyles from './driverProfileCardStyle';
import { useTranslation } from 'react-i18next';
const DriverProfileCard =(props)=>{

  const classes = useStyles();
  const { t } = useTranslation();
  return(
    <Box display='flex' justifyContent='center' p={2}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid container item xs={6} justifyContent='center' direction="column">
          <Grid container item xs={12} justifyContent='center'>
              <img src={props.image} className={classes.profileImg}  alt={""}/>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
            <Box marginTop='7%'>
              <Rating readOnly precision={0.5} value={props.rate}/>
            </Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box marginTop='7%' className={'Secondary-color'} marginBottom='5%' fontSize='20px' fontWeight='300'> {t("TotalRides")}: {props.totalCurse}</Box>
          </Grid>
        </Grid>
        <Grid container item xs={6} justifyContent='center' direction="column">
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%' fontSize='20px' fontWeight='300'>{t("Car")}: {props.masina}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'  fontSize='20px' fontWeight='300'>{t("Year")} {props.an}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'  fontSize='20px' fontWeight='300'>{t("Color")} {props.culoare}</Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DriverProfileCard;