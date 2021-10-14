import React, { useState } from "react";
import { Box, Grid, Button } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../components/modals/deleteModal/DeleteModal';
import BackdropSelectDriver from '../../../components/backdrop/driver-select/backDrop';
import { useTranslation } from "react-i18next";

const NotificationsFieldsTransport = (props) => {

  const [title, setTitle] = useState("Marcheaza ca citit");
  const { t } = useTranslation();

  return (
    <Grid container direction="column">
      <Grid 
        container 
        direction="row">
        <Grid direction="row" container item xs={8} >
          <Box fontWeight= {600} fontStyle='italic' >
          {props.name} {props.actionText}
          </Box>
        </Grid>
        <Grid container item xs={3} justifyContent='center'>
          <Box>
            <Button variant="default" onClick={() => setTitle("Citit")}>
              <Box fontSize={10} className={'Primary-color'}>
              {title}
              </Box>
            </Button>
          </Box>
        </Grid>
        <Grid container item xs={1} justifyContent='flex-end'>
          <DeleteModal
            content="Doresti sa stergi notificarea?"
            btn1Text="Anuleaza"
            btn2Text="Sterge"
          />
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
      <Grid container direction="row">
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
        actionText={props.actionText}
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
