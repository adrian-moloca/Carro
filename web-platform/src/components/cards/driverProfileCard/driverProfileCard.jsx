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
            <Box mb={2} fontWeight={500} fontSize={22} textAlign={'center'} marginTop={"20px"}>{props.name}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
            <Box marginTop='7%'>
              <Rating readOnly precision={0.1} value={props.rate}/>
            </Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box marginTop='7%' className={'Secondary-color'} marginBottom='5%' fontSize='20px' fontWeight='300'> {t("TotalRides")}: {props.totalCurse}</Box>
          </Grid>
        </Grid>
        <Grid container item xs={6} justifyContent='center' direction="column">
          <Grid container item xs={12} justifyContent='flex-start'>
              <Box className={'Secondary-color'} marginTop='3%' fontSize='20px' fontWeight='300' width={"200px"} >{t("Car") + ": "}</Box>
              <Box marginTop='3%' fontSize='20px' style={{fontWeight:400, textAlign:"left", marginLeft:"15px"}}>{props.masina}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='flex-start'>
              <Box className={'Secondary-color'} marginTop='3%' fontSize='20px' fontWeight='300' width={"200px"} >{t("Model") + ": "}</Box>
              <Box marginTop='3%' fontSize='20px' style={{fontWeight:400, textAlign:"left", marginLeft:"15px"}}>{props.model}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='flex-start'>
              <Box className={'Secondary-color'} marginTop='3%' fontSize='20px' fontWeight='300' width={"200px"} >{t("Color") + ": "}</Box>
              <Box marginTop='3%' fontSize='20px' style={{fontWeight:400, textAlign:"left", marginLeft:"15px"}}>{props.color}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='flex-start'>
              <Box className={'Secondary-color'} marginTop='3%' fontSize='20px' fontWeight='300' width={"200px"} >{t("RegistrationNumber") + ": "}</Box>
              <Box marginTop='3%' fontSize='20px' style={{fontWeight:400, textAlign:"left", marginLeft:"15px"}}>{props.carNumber}</Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DriverProfileCard;