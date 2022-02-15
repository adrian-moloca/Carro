import React, {Fragment, useState} from 'react';
import { Grid, Box } from '@material-ui/core';
import Packages from '../../../../components/packages/packages';
import { useTranslation } from "react-i18next";
const RideDetails = (props) =>{

  function getTransportType(type){
      switch(type){
          case 1:   
              return t("PublicTransport");
          case 2:   
              return t("Car");
          case 3:   
              return t("Truck");
          default: 
              return 'Unkown transport type';
      }
  }

    const { t } = useTranslation();

    return(
        <Fragment>
            <Box borderRadius='10px' alignItems='center'  boxShadow={3} display ='flex' flexDirection='column' mt='15px' mx='3%' p='2%'>
                <Box my='2%' fontSize={20}>{t("RideDetails")}</Box>
                <Grid container justifyContent='center'>
                    <Grid container item xs={6}>
                      <Box >{t('DriverCardDeparture')} {props.departure}</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >{t("DriverCardDestination")} {props.destination}</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >{t("DriverCardDepartureDate")} {props.departureDate}</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box >{t("DriverCardEstimatedHours")} {props.estimatedTime}</Box>                        
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>{t("PickupAddress")}: {props.departureAddress}</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>{t("DriverCardDestinationAddress")} {props.destinationAddress}</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>{t("DriverCardType")} {getTransportType(parseInt(props.transportType))}</Box>  
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>{t("PhoneNumber")}: {props.phoneNumber}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize={13} mb = '2%' className={'Secondary-color'}>
                           {t("MyRidesText")}
                        </Box>
                    </Grid>
                </Grid>
              <Box my='2%' fontSize={20} justifyContent={"center"}>{t("Packages")}</Box>
              <Grid container justifyContent='center' spacing={1}>
                <Packages rideId={props.rideId} token={props.token}/> 
              </Grid>
              </Box>
        </Fragment>
    );

}

export default RideDetails;
