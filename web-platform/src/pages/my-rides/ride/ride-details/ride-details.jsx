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

    const[rideExists, setRideExists] = useState(true);
    const { t } = useTranslation();

    return(
        <Fragment>
            <Box borderRadius='10px'  boxShadow={3} display ='flex' px='4%' pt='2%' mt = '2%'>
                <Grid container spacing={0} justifyContent='center' className="ButtonTextSize">
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
              </Box>
              <Box mx={-2} mt={1} p='2%' borderTop={1} borderColor= 'grey.400' >
                <Packages/> 
              </Box>
        </Fragment>
    );

}

export default RideDetails;
