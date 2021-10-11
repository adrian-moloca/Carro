import React from 'react'
import { Box, Grid, Button } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../components/modals/deleteModal/DeleteModal';
import BackdropSelectDriver from '../../../components/backdrop/driver-select/backDrop';
import { useTranslation } from "react-i18next";
const NotificationsFieldsTransport = (props) => {
  const { t } = useTranslation();
  return (
    <Grid container direction="column">
      <Grid 
        container 
        direction="row">
        <Grid direction="row" container item xs={8} >
          <Box fontWeight= {600} fontStyle='italic' >
          {props.name} {t("DeliverPackage")}
          </Box>
        </Grid>
        <Grid container item xs={3} justifyContent='center'>
          <Box fontSize={7} className={'Green-carro'}>
            <Button variant="default">
              <Box fontSize={8} className={'Primary-color'}>
              {t("MarkedAsRead")}
              </Box>
            </Button>
          </Box>
        </Grid>
        <Grid container item xs={1} justifyContent='flex-end'>
          <DeleteModal/>
        </Grid>
      </Grid>
      <Grid 
        container 
        direction="row">
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
          {t("Route")} {props.plecare} - {props.destinatie}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
          {t("PickupAddress")} {props.pickUpAdress}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
          {t("Price")} {props.price}
          </Box>
        </Grid>
      </Grid>
      <Grid 
        container 
        direction="row">
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
          {t("PickupDate")} {props.dataPlecare}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
          {t("DriverCardDestinationAddress")} {props.dropOffAdress}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
          {t("DriverCardType")} {props.tipTransport}
          </Box>
        </Grid>
      </Grid>
      <Grid  container  direction="row" justifyContent="center">
        <Box mt={3}>
          <PrimaryButton variant="contained">
          {t("DriverCardDetailsButton")}
          </PrimaryButton>
        </Box>
      </Grid>
      <BackdropSelectDriver 
        image={props.image}
        name={props.name}
        plecare={props.plecare}
        destinatie= {props.destinatie}
        tipTransport = {props.tipTransport}
        dataPlecare = {props.dataPlecare}
        pickUpAdress ={props.pickUpAdress}
        dropOffAdress ={props.dropOffAdress}
        price ={props.price}
      />
    </Grid>
  );
};

export default NotificationsFieldsTransport;
