import React from 'react';
import {Box, Grid} from '@material-ui/core';
import HalfRating from '../../rating/rating';
import BackdropSelectDriver from '../../backdrop/driver-select/backDrop';
import useStyles from './driverProfileCardStyle';
import { useTranslation } from 'react-i18next';
const DriverProfileCard =(props)=>{

  const classes = useStyles();
  const { t } = useTranslation();
  return(
    <Box mt='7%'  fullWidth p={1}>
      <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        direction="row">
        <Grid container item xs={6} justifyContent='center' direction="column">
          <Grid container item xs={12} justifyContent='center'>
              <img src={props.image} className={classes.profileImg}  alt={""}/>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
            <Box marginTop='7%'>
              <HalfRating/>
            </Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box marginTop='7%' className={'Secondary-color'} marginBottom='5%'> {t("TotalRides")} {props.totalCurse}</Box>
          </Grid>
        </Grid>
        <Grid container item xs={6} justifyContent='center' direction="column">
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'>{t("Car")} {props.masina}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'>{t("Year")} {props.an}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'>{t("Color")} {props.culoare}</Box>
          </Grid>
        </Grid>
        <BackdropSelectDriver 
            image={props.image}
            masina={props.masina}
            an={props.an}
            culoare= {props.culoare}
            totalCurse = {props.totalCurse}
        />
      </Grid>
    </Box>
  );
};

export default DriverProfileCard;