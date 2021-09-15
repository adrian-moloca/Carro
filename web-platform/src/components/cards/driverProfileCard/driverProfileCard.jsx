import React, { useState } from 'react';
import {Box, Grid} from '@material-ui/core';
import {Star, StarBorder, StarHalf} from '@material-ui/icons';
import HalfRating from '../../rating/rating';
import BackdropSelectDriver from '../../backdrop/backDrop';
import useStyles from './driverProfileCardStyle';

const DriverProfileCard =(props)=>{

  const classes = useStyles();

  const[open, setOpen]=useState(false);

  const handleBtn =()=>{
      setOpen(!open);
  };

  const handleCloseBd=()=>{
      setOpen(false);
  };

  return(
    <Box mt='7%'  width='0.92' p={1}>
      <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        direction="row">
        <Grid container item xs={6} justifyContent='center' direction="column">
          <Grid container item xs={12} justifyContent='center'>
              <img src={props.image} className={classes.profileImg}/>
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
            {/* <Grid container item xs={8} justifyContent='space-around'>
                <Star className={classes.starsStyle}/>
                <Star className={classes.starsStyle}/>
                <Star className={classes.starsStyle}/>
                <StarHalf className={classes.starsStyle}/>
                <StarBorder className={classes.starsStyle}/>
            </Grid> */}
        <BackdropSelectDriver 
            open={open} 
            clicked={handleCloseBd}
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