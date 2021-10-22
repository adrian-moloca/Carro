import React, {Fragment, useState} from 'react';
import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, Typography, ButtonBase, } from '@material-ui/core';
import {ExpandMore, ExpandLess, ArrowForward } from '@material-ui/icons';
import PackageDetails from './package-details/package-details';
import ActionsByStatus from './actions-by-status/actions-by-status';
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import useStyles from  './package-style';
import { useTranslation } from "react-i18next";

const Package = (props) =>{

const { t } = useTranslation();

function getStatusColor(status){ 
    switch (status) {
      case t('Open'):
        return (
          'Green-carro'
        );
      case t('Taken'):
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

  const classes = useStyles();

  const[expanded, setExpanded] = useState(false);
  
  const getArrowBtn=(stateExpanded)=>{
    switch(stateExpanded){
      case true:
        return(
          <ButtonBase disableRipple onClick={()=>setExpanded(false)}>
              <ExpandLess size='small' className={'Secondary-color'}/>
          </ButtonBase>
        )
      case false:
        return(
          <ButtonBase disableRipple onClick={()=>setExpanded(true)}>
              <ExpandMore size='small' className={'Primary-color'}/>
          </ButtonBase>
        );
      default:
        return('err');
    }

  }

  return(
      <Box mb={1.5} borderRadius='10px' boxShadow={3} >
        <Accordion square='true' className={classes.AccordionBorderRadius} expanded={expanded}>
          <AccordionSummary id="transport-header">
            <Grid container justifyContent='space-between'>
              <Grid container item xs={1} sm = {1} md={1} lg={1} justifyContent='flex-starts'>
                <Typography >{props.packageIndex}.</Typography>
              </Grid>
              <Grid container item xs={0} sm={0} md={2} lg={2} justifyContent='center'  alignItems='center' className='hide-on-mobile'>
                <Box fontSize='13px' fontWeight= {600} fontStyle='italic'>{props.departure}</Box>
              </Grid>
              <Grid container  item xs={0} sm={0} md={1} lg={1} justifyContent='center' alignItems='center' className='hide-on-mobile'>
                <ArrowForward className={'Primary-color'} fontSize='small'/>
              </Grid>
              <Grid container item xs={0} sm={0} md={2} lg={2} justifyContent='center'  alignItems='center' className='hide-on-mobile'>
                <Box fontSize='13px' fontWeight= {600} fontStyle='italic'>{props.destination}</Box>
              </Grid>
              <Grid container item xs={4} sm={3} md={3} lg={3} justifyContent='center' alignItems='center'>
                <Box fontSize='13px'>{props.departureDate}</Box>
              </Grid>
              <Grid container item xs={3} sm={3} md={1} lg={1} justifyContent='center' alignItems='center'>
                <Box fontSize='13px' className={getStatusColor(props.status)} textAlign='center'>{props.status}</Box>
              </Grid>
              <Grid container item xs={4} sm={4} md={2}  lg={2} justifyContent='flex-end' alignItems='center'>
                <ActionsByStatus status = {props.status} package={props.package}
                                departure={props.departure} destination={props.destination} 
                                departureDate={props.departureDate} packageLocation={props.packageLocation}
                                deletePackageClicked={props.deletePackageClicked}
                                closePackageClicked={props.closePackageClicked}
                />
                {getArrowBtn(expanded)}
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionDetailsFlex}>
            <PackageDetails departure={props.departure} destination={props.destination} departureAddress={props.departureAddress} 
                            destinationAddress={props.destinationAddress} packageType={props.packageType} weight={props.weight} dimensions={props.dimensions}
                            description={props.description} price={props.price} name={props.name} departureDate={props.departureDate}
                            packageLocation={props.packageLocation}/>
          </AccordionDetails>
        </Accordion>
      </Box>
  );
}

export default Package;