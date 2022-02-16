import React, { Fragment, useEffect, useState } from "react";
import { Box, Grid, Button } from '@material-ui/core';
import PrimaryButton from '../../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../../components/modals/deleteModal/DeleteModal';
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n/config";
import { connect } from 'react-redux';
import { deleteNotification } from "../../../../redux/actions/NotificationsActions";

const NotificationsSummary = ({userData, deleteNotification, ...props}) => {

  const { t } = useTranslation();

  const getActionText = () =>{
    switch(props.type){
      case 1:
        return(t('PackageAsked') + ' ' +props.packageName)
      case 2:
        return(t('RideAsked'))
      case 3:
        return(t('PackageAccepted') + ' ' +props.packageName)
      case 4:
        return(t('RideAccepted'))
      case 5:
        return(t('PackageRejected')  + ' ' +props.packageName)
      case 6:
        return(t('RideRejected'))
      case 7:
        return(t('PackageRejectedWithReason')  + ' ' +props.packageName)
      case 8:
        return(t('RideRejectedWithReason'))
      case 9:
        return(t('PackageDelivered')  + ' ' +props.packageName)
      case 10:
        return(t('UserValidated'))
      case 11:
        return(t('UserInvalidated'))
      default: 
        return('default')
    }
  }

  return (
    <Fragment>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="flex-start" alignItems="center" fontWeight= {600} fontStyle='italic'>
            {props.name + ' ' + getActionText()}
          </Box>
        </Grid>
        <Grid container item xs={6} sm={3} justifyContent='center'>
            <Button variant='text' onClick={() => props.markAsReadNotification()} className={props.read ? 'Secondary-color' : 'Primary-color'}>
                {props.read ? t('MarkAsUnread') : t('MarkAsRead')}
            </Button>
        </Grid>
        <Grid container item xs={6} sm={3} justifyContent='flex-end'>
          <DeleteModal
            content={t('DeleteNotification')}
            btn1Text={t('Back')}
            btn2Text={t('Delete')}
            clickedBtn2={()=>deleteNotification(userData.token, props.notificationId)}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid container item xs={6} sm={4} justifyContent='center'>
          <Box m={1} fontWeight= {400} fontStyle='italic' textAlign={'center'} className={'Secondary-color'}>
            <Box fontWeight={500}>{t("Route")}:</Box> {props.plecare} - {props.destinatie}
          </Box>
        </Grid>
        <Grid container item xs={6} sm={4} justifyContent='center'>
          <Box m={1} fontWeight= {400} fontStyle='italic' textAlign={'center'} className={'Secondary-color'}>
            <Box fontWeight={500}>{t("PickupAddress")}:</Box> {props.pickUpAdress}
          </Box>
        </Grid>
        <Grid container item xs={6} sm={4} justifyContent='center'>
          <Box m={1} fontWeight= {400} fontStyle='italic' textAlign={'center'} className={'Secondary-color'}>
            <Box fontWeight={500}>{t("Price")}:</Box> {props.price}
          </Box>
        </Grid>
        <Grid container item xs={6} sm={4} justifyContent='center'>
          <Box m={1} fontWeight= {400} fontStyle='italic' textAlign={'center'} className={'Secondary-color'}>
            <Box fontWeight={500}>{t("PickupDate")}: </Box> {props.dataPlecare}
          </Box>
        </Grid>
        <Grid container item xs={12} sm={4} justifyContent='center'>
          <Box m={1} fontWeight= {400} fontStyle='italic' textAlign={'center'} className={'Secondary-color'}>
            <Box fontWeight={500}>{t("DriverCardDestinationAddress")}:</Box> {props.dropOffAdress}
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteNotification: (token, notificationId) => dispatch(deleteNotification(token, notificationId)),
});

const mapStateToProps = state => ({userData: state.userData})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsSummary);
