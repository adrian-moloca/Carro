import React, {Fragment, useState} from 'react';
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography, ButtonBase} from '@material-ui/core'; 
import {ExpandMore, ArrowForward, Delete, Edit, HighlightOff, ExpandLess} from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import EditRide from './edit-ride/edit-ride';
import RideDetails from './ride-details/ride-details';
import useStyles from './rideStyle';
import { useTranslation } from "react-i18next";
const Ride = (props) =>{
  const { t } = useTranslation();
    const classes = useStyles();

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

    function getStatusColor(status){ 
      switch (status) {
        case t('Open'):
          return (
            'Green-carro'
          );
        case t('ClosedForReceiving'):
          return (
            'Green-carro'
          );
        case t('InTransit'):
          return (
            'Primary-color'
          );  
        case t('Closed'):
          return (
            'Pink-carro'
          );
        case t('Delivered'):
          return (
            'Pink-carro'
          );
  
        default:
          return 'black';
      }
    }
  
    function actionsByStatus(status){
        switch(status){
          case t('Open'):
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
          case t('ClosedForReceiving'):
            return(
              <Fragment>
                
              </Fragment>
            );
          case t('InTrasit'):
            return(
              <Fragment>
                
              </Fragment>
            );
          case t('Closed'):
            return(
              <Fragment>
            
              </Fragment>
            );
          case t('Delivered'):
            return(
              <Fragment>
                
              </Fragment>
            );
        }
    }


    return(
        <Accordion square='true' expanded={expanded} className={classes.AccordionBorderRadius}>
          <AccordionSummary aria-controls="transport-content" id="transport-header">
          <Grid container justifyContent='space-between'>
                <Grid container item xs = {1} sm = {1} md={1} lg={1} justifyContent='flex-starts'>
                  <Typography >{props.rideIndex}.</Typography>
                </Grid>
                <Grid container item xs={0} sm={0} md={2} lg={2} justifyContent='center'  alignItems='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic' fontSize='13px'ù>{props.departure}</Box>
                </Grid>
                <Grid container  item xs={0} sm={0} md={1} lg={1} justifyContent='center' alignItems='center' className='hide-on-mobile'>
                    <ArrowForward className={['Primary-color']} fontSize='small'/>
                </Grid>
                <Grid container item xs={0} sm={0} md={2} lg={2} justifyContent='center' alignItems='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic' fontSize='13px'>{props.destination}</Box>
                </Grid>
                <Grid container item xs={4} sm={4} md={3} lg={3} justifyContent='center' alignItems='center' >
                  <Box fontSize='13px'>{props.departureDate}</Box>
                </Grid>
                <Grid container item xs={3} sm={3} md={1} lg={1} alignItems='center' justifyContent='center'>
                  <Box  fontSize='13px' className={getStatusColor(props.rideStatus)} textAlign='center'>{props.rideStatus}</Box>
                </Grid>
                <Grid container item xs={4} sm={4} md={2} lg={2}  alignItems='center' justifyContent='flex-end'>
                  {actionsByStatus(props.rideStatus)}
                  {getArrowBtn(expanded)}
                </Grid>
              </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionDetailsFlex}>
              <RideDetails departure={props.departure} destination={props.destination} departureDate={props.departureDate} 
                          estimatedTime={props.estimatedTime} departureAddress={props.departureAddress} destinationAddress={props.destinationAddress} 
                          transportType={props.transportType} phoneNumber={props.phoneNumber}/>
          </AccordionDetails>
        </Accordion>
    );
}

export default Ride;