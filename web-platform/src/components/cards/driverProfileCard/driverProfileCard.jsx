import React from 'react';
import {Box, Grid} from '@material-ui/core';
import HalfRating from '../../rating/rating';
import BackdropSelectDriver from '../../backdrop/backDrop';
import useStyles from './driverProfileCardStyle';

const DriverProfileCard =(props)=>{

  const classes = useStyles();

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
              <Box marginTop='7%' className={'Secondary-color'} marginBottom='5%'>Total curse: {props.totalCurse}</Box>
          </Grid>
        </Grid>
        <Grid container item xs={6} justifyContent='center' direction="column">
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'>Masina: {props.masina}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'>An: {props.an}</Box>
          </Grid>
          <Grid container item xs={12} justifyContent='center'>
              <Box className={'Secondary-color'} marginTop='3%'>Culoare: {props.culoare}</Box>
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