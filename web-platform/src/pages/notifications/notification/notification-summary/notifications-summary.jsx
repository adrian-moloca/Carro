import React from "react";
import { Box, Grid, Button } from '@material-ui/core';
import PrimaryButton from '../../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../../components/modals/deleteModal/DeleteModal';
import { useTranslation } from "react-i18next";

const NotificationsSummary = (props) => {

  const { t } = useTranslation();
  

  return (
    <Box>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="flex-start" alignItems="center" fontWeight= {600} fontStyle='italic'>
            {props.name} {props.actionText}
          </Box>
        </Grid>
        <Grid container item xs={6} sm={3} justifyContent='center'>
            <Button variant='text' onClick={props.clickedMarkAsRead} className={props.markAsReadColor}>
                {props.markAsReadBtnText}
            </Button>
        </Grid>
        <Grid container item xs={6} sm={3} justifyContent='flex-end'>
          <DeleteModal
            content="Doresti sa stergi notificarea?"
            btn1Text="Anuleaza"
            btn2Text="Sterge"
            clickedBtn2={props.clickedDelete}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
        <Grid item xs={4} sm={3}>
          <Box m={2} fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            {t("Route")}: {props.plecare} - {props.destinatie}
          </Box>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Box m={2} fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            {t("PickupAddress")} {props.pickUpAdress}
          </Box>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Box m={2} fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            {t("Price")}: {props.price}
          </Box>
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between" alignItems="center" spacing={1}>
        <Grid item xs={4} sm={3}>
          <Box m={2} fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            {t("PickupDate")} {props.dataPlecare}
          </Box>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Box m={2} fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            {t("DriverCardDestinationAddress")} {props.dropOffAdress}
          </Box>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Box m={2} fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            {t("DriverCardType")} {props.tipTransport}
          </Box>
        </Grid>
      </Grid>
      <Grid  container  direction="row" justifyContent="center">
        <Box mt={3}>
          <PrimaryButton variant="contained" onClick={props.clickedDetails} className={'details-button'}>
            {props.detailsBtnText}
          </PrimaryButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default NotificationsSummary;
