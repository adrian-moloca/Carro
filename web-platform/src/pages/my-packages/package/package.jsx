import React, { useState } from 'react';
import { Box, Grid, Collapse, Typography } from '@material-ui/core';
import {ExpandMore, ExpandLess, ArrowForward } from '@material-ui/icons';
import PackageDetails from './package-details/package-details';
import ActionsByStatus from './actions-by-status/actions-by-status';
import { useTranslation } from "react-i18next";
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';

const Package = (props) =>{

const { t } = useTranslation();

  function getStatus(status){ 
    switch (status) {
      case 1:
        return (
          <Box fontSize='13px' className={'Green-carro'} textAlign='center'>{t('Open')}</Box>
        );
      case 2:
        return (
          <Box fontSize='13px' className={'Green-carro'} textAlign='center'>{t('Taken')}</Box>
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
        return 'Unkown Status';
    }
  }

  const[expanded, setExpanded] = useState(false);
  
  const getArrowBtn=(stateExpanded)=>{
    switch(stateExpanded){
      case true:
        return(
          <IconButtonNoVerticalPadding onClick={()=>setExpanded(false)} ico>
              <ExpandLess size='small' className={'Secondary-color'}/>
          </IconButtonNoVerticalPadding>
        )
      case false:
        return(
          <IconButtonNoVerticalPadding disableRipple onClick={()=>setExpanded(true)}>
              <ExpandMore size='small' className={'Primary-color'}/>
          </IconButtonNoVerticalPadding>
        );
      default:
        return('err');
    }

  }

  return(
      <Box mb={1.5} borderRadius='12px' boxShadow={3} paddingX='20px' paddingY='12px'>
            <Grid container justifyContent='space-between'>
              <Grid container item xs={1} sm = {1} md={1} lg={1}>
                <Typography >{props.packageIndex}.</Typography>
              </Grid>
              <Grid container item md={2} lg={2} justifyContent='center'  alignItems='center' className='hide-on-mobile'>
                <Box fontSize='13px' fontWeight= {600} fontStyle='italic'>{props.departure}</Box>
              </Grid>
              <Grid container  item md={1} lg={1} justifyContent='center' alignItems='center' className='hide-on-mobile'>
                <ArrowForward className={'Primary-color'} fontSize='small'/>
              </Grid>
              <Grid container item md={2} lg={2} justifyContent='center'  alignItems='center' className='hide-on-mobile'>
                <Box fontSize='13px' fontWeight= {600} fontStyle='italic'>{props.destination}</Box>
              </Grid>
              <Grid container item xs={4} sm={3} md={3} lg={3} justifyContent='center' alignItems='center'>
                <Box fontSize='13px'>{props.departureDate}</Box>
              </Grid>
              <Grid container item xs={3} sm={3} md={1} lg={1} justifyContent='center' alignItems='center'>
                {getStatus(props.status)}
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
            <Collapse in={expanded} timeout={600}> 
                        <PackageDetails departure={props.departure} destination={props.destination} departureAddress={props.departureAddress} 
                            destinationAddress={props.destinationAddress} packageType={props.packageType} weight={props.weight} dimensions={props.dimensions}
                            description={props.description} price={props.price} name={props.name} departureDate={props.departureDate}
                            packageLocation={props.packageLocation} specialMention={props.packageSpecialMention} packageId={props.packageId} token={props.token}/>
            </Collapse>
      </Box>  
  );
}

export default Package;