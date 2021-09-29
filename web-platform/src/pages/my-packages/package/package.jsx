import React from 'react';
import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, Typography, } from '@material-ui/core';
import {ExpandMore, ArrowForward, Delete, Create} from '@material-ui/icons';
import PackageDetails from './package-details/package-details';
import EditOpenPackage from './edit-open-package/edit-open-package';
import TrackPackage from './track-package/track-package';
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import useStyles from  './package-style';

const Package = (props) =>{

function getStatusColor(status){ 
    switch (status) {
      case 'Deschis':
        return (
          'Green-carro'
        );
      case 'Luat':
        return (
          'Green-carro'
        );
      case 'In livrare':
        return (
          'Primary-color'
        );  
      case 'Inchis':
        return (
          'Pink-carro'
        );
      case 'Livrat':
        return (
          'Pink-carro'
        );

      default:
        return 'black';
    }
  }

  const classes = useStyles();

  return(
      <Box mb={1.5} borderRadius='10px' boxShadow={3} >
        <Accordion square='true' className={classes.AccordionBorderRadius}>
          <AccordionSummary id="transport-header">
            <Grid container justifyContent='space-between'>
              <Grid container item xs = {1} justifyContent='flex-starts'>
                <Typography >{props.packageIndex}.</Typography>
              </Grid>
              <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                <Box fontWeight= {600} fontStyle='italic' >{props.departure}</Box>
              </Grid>
              <Grid container  item xs={1} justifyContent='center' className='hide-on-mobile'>
                  <ArrowForward className={'Primary-color'}/>
              </Grid>
              <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                <Box fontWeight= {600} fontStyle='italic'>{props.destination}</Box>
              </Grid>
              <Grid container item xs={3} justifyContent='center' className='hide-on-mobile'>
                <Box >{props.departureDate}</Box>
              </Grid>
              <Grid container item xs={1} justifyContent='center'>
                <Box fontSize={16} className={getStatusColor(props.status)} textAlign='center'>{props.status}</Box>
              </Grid>
              <Grid container item xs={2} justifyContent='flex-end'>
                {props.status === 'Deschis' ? <EditOpenPackage package= {props.package}/> : null}
                {props.status === 'In livrare' ? <TrackPackage departure={props.departure} destination={props.destination} 
                                                              departureDate={props.departureDate} packageLocation={props.packageLocation}/> : null}
                <IconButtonNoVerticalPadding onClick={props.deletePackageClicked}>
                  <Delete className={'Pink-carro'}/>
                </IconButtonNoVerticalPadding>
                <ExpandMore className={'Primary-color'}/>
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