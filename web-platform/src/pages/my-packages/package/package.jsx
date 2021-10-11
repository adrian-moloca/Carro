import React, {Fragment} from 'react';
import { Box, Grid, Accordion, AccordionDetails, AccordionSummary, Typography, } from '@material-ui/core';
import {ExpandMore, ArrowForward, Delete} from '@material-ui/icons';
import PackageDetails from './package-details/package-details';
import PartialEditPackage from './partial-edit-package/partial-edit-package';
import EditOpenPackage from './edit-open-package/edit-open-package';
import TrackPackage from './track-package/track-package';
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

  function ActionsByStatus(status){

    switch(status){
        case t('Open'):
            return(
              <Fragment>
                <EditOpenPackage package= {props.package}/>
                <IconButtonNoVerticalPadding onClick={props.deletePackageClicked}>
                      <Delete className={'Pink-carro'}/>
                </IconButtonNoVerticalPadding>
              </Fragment>
            );
          case t('Taken'):
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}/>
                </Fragment>
              );
          case t('InTransit'):
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}/>  
                </Fragment>
              );
          case t('Closed'):
            return('');
          case t('Delivered'):
            return('');
          default:
              return('Unkown status');
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
                {ActionsByStatus(props.status)}
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