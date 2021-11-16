import React, {Fragment, useState} from 'react';
import { Box, Grid, Typography, ButtonBase, Collapse} from '@material-ui/core'; 
import {ExpandMore, ArrowForward, Delete, HighlightOff, ExpandLess} from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import EditRide from './edit-ride/edit-ride';
import RideDetails from './ride-details/ride-details';
import { useTranslation } from "react-i18next";

const Ride = (props) =>{

  const { t } = useTranslation();

  const[expanded, setExpanded]=useState(false);
  const getArrowBtn=(expandedState)=>{
    switch(expandedState){
      case true:
        return(
          <ButtonBase disableRipple onClick={()=>setExpanded(false)}>
            <ExpandLess size='small' className={'Secondary-color'}/>
          </ButtonBase>
        );
      case false:
        return(
          <ButtonBase disableRipple onClick={()=>setExpanded(true)}>
            <ExpandMore size='small' className={'Primary-color'}/>
          </ButtonBase>
        );
    }
  }

  function getStatus(status){ 
    switch (status) {
      case 1:
        return (
          <Box fontSize='13px' className={'Green-carro'} textAlign='center'>{t('Open')}</Box>
        );
      case 2:
        return (
          <Box fontSize='13px' className={'Green-carro'} textAlign='center'>{t('ClosedForReceiving')}</Box>
        );
      case 3:
        return (
          <Box fontSize='13px' className={'Primary-color'} textAlign='center'>{t('InTransit')}</Box>
        );  
      case 4:
        return (
          <Box fontSize='13px' className={'Pink-carro'} textAlign='center'>{t('Closed')}</Box>
        );
      case 5:
        return (
          <Box fontSize='13px' className={'Pink-carro'} textAlign='center'>{t('Delivered')}</Box>
        );
      default:
        return 'black';
    }
  }
  
  function actionsByStatus(status){
      switch(status){
        case 1:
          return(
            <Fragment>
              <EditRide ride={props.ride}/>
              <IconButtonNoVerticalPadding onClick={props.closeRideClicked}>
                    <HighlightOff className={'Pink-carro'} fontSize='small'/>
              </IconButtonNoVerticalPadding>
              <IconButtonNoVerticalPadding onClick={props.deleteRideClicked}>
                    <Delete className={'Pink-carro'} fontSize='small'/>
              </IconButtonNoVerticalPadding>
            </Fragment>
          );
        case 2:
          return(
            <Fragment>
              
            </Fragment>
          );
        case 3:
          return(
            <Fragment>
              
            </Fragment>
          );
        case 4:
          return(
            <Fragment>
          
            </Fragment>
          );
        case 5:
          return(
            <Fragment>
              
            </Fragment>
          );
      }
  }


  return(
    <Box mb={1.5} borderRadius='12px' boxShadow={3} paddingX='20px' paddingY='12px'>
        <Grid container justifyContent='space-between'>
              <Grid container item xs = {1} sm = {1} md={1} lg={1}>
                <Typography >{props.rideIndex}.</Typography>
              </Grid>
              <Grid container item md={2} lg={2} justifyContent='center'  alignItems='center' className='hide-on-mobile'>
                <Box fontWeight= {600} fontStyle='italic' fontSize='13px'ù>{props.departure}</Box>
              </Grid>
              <Grid container  item md={1} lg={1} justifyContent='center' alignItems='center' className='hide-on-mobile'>
                  <ArrowForward className={'Primary-color'} fontSize='small'/>
              </Grid>
              <Grid container item md={2} lg={2} justifyContent='center' alignItems='center' className='hide-on-mobile'>
                <Box fontWeight= {600} fontStyle='italic' fontSize='13px'>{props.destination}</Box>
              </Grid>
              <Grid container item xs={4} sm={4} md={3} lg={3} justifyContent='center' alignItems='center' >
                <Box fontSize='13px'>{props.departureDate}</Box>
              </Grid>
              <Grid container item xs={3} sm={3} md={1} lg={1} alignItems='center' justifyContent='center'>
                {getStatus(props.rideStatus)}
              </Grid>
              <Grid container item xs={4} sm={4} md={2} lg={2}  alignItems='center' justifyContent='flex-end'>
                {actionsByStatus(props.rideStatus)}
                {getArrowBtn(expanded)}
              </Grid>
            </Grid>
            <Collapse in={expanded} timeout={600}>
              <RideDetails departure={props.departure} destination={props.destination} departureDate={props.departureDate} 
                        estimatedTime={props.estimatedTime} departureAddress={props.departureAddress} destinationAddress={props.destinationAddress} 
                        transportType={props.transportType} phoneNumber={props.phoneNumber}/>
            </Collapse>
      </Box>
  );
};

export default Ride;