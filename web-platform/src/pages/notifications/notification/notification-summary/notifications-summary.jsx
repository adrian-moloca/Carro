import React, { useEffect, useState } from "react";
import { Box, Grid, Button } from '@material-ui/core';
import PrimaryButton from '../../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../../components/modals/deleteModal/DeleteModal';
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/config";

const NotificationsSummary = (props) => {

  const { t } = useTranslation();

  const[markAsRead, setMarkAsRead] = useState('');
  const[markAsReadColor, setMarkAsReadColor] = useState('');
  const[detailsBtn, setDetailsBtn] = useState('');

  useEffect(()=>{
    if(props.read)
    {
      setMarkAsRead(t('MarkAsUnread'));
      setMarkAsReadColor('Secondary-color');
    }
    else
    {
      setMarkAsRead(t('MarkAsRead'))
      setMarkAsReadColor('Primary-color');
    }
  }, [props.read]);

  useEffect(()=>{
    if(props.expanded)
      setDetailsBtn(t("DriverCardLessDetailsButton"))
    else
      setDetailsBtn(t("DriverCardDetailsButton"))
  }, [props.expanded])

  useEffect(()=>{
    if(props.read)
    {
      setMarkAsRead(t('MarkAsUnread'));
      setMarkAsReadColor('Secondary-color');
    }
    else
    {
      setMarkAsRead(t('MarkAsRead'))
      setMarkAsReadColor('Primary-color');
    }
    if(props.expanded)
      setDetailsBtn(t("DriverCardLessDetailsButton"))
    else
      setDetailsBtn(t("DriverCardDetailsButton"))

  },[i18n.language])

  return (
    <Box>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="flex-start" alignItems="center" fontWeight= {600} fontStyle='italic'>
            {props.name} {props.actionText}
          </Box>
        </Grid>
        <Grid container item xs={6} sm={3} justifyContent='center'>
            <Button variant='text' onClick={props.clickedMarkAsRead} className={markAsReadColor}>
                {markAsRead}
            </Button>
        </Grid>
        <Grid container item xs={6} sm={3} justifyContent='flex-end'>
          <DeleteModal
            content={t('DeleteNotification')}
            btn1Text={t('Back')}
            btn2Text={t('Delete')}
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
            {detailsBtn}
          </PrimaryButton>
        </Box>
      </Grid>
    </Box>
  );
};

export default NotificationsSummary;
