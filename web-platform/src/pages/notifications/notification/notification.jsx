import React, {useState, useEffect, useLayoutEffect} from "react";
import {Box, Collapse} from '@material-ui/core';
import NotificationsSummary from "./notification-summary/notifications-summary";
import NotificationDetails from "./notification-details/notification-details";
import useStyles from "./notification-style";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../../../components/buttons/primaryButton/primaryButton";
import { markAsReadNotification } from "../../../redux/actions/NotificationsActions";
import axios from "axios";
import data from "../../../utils/constants";
import { connect } from "react-redux";
import SecondaryButton from "../../../components/buttons/secondaryButton/secondaryButton";

const Notification = ({userData, markAsReadNotification, ...props}) =>{

    const classes = useStyles();
    const { t } = useTranslation();
    const[expanded, setExpanded] = useState(false)

    const detailsNotification = () => {
      setExpanded(!expanded)
      if(props.read === false) {
        markAsReadNotification(userData.token, props.notificationId);
      }
    }
    

    return(
      <Box mb={1.5} borderRadius='12px' width={'100%'} boxShadow={3} paddingX='20px' paddingY='12px'>
          <NotificationsSummary
                  notificationId={props.notificationId}
                  type={props.type}
                  name={props.name}
                  packageName={props.packageName}
                  plecare={props.departure}
                  destinatie={props.destination}
                  dataPlecare={props.departureDate}
                  pickUpAdress={props.departureAddress}
                  dropOffAdress={props.destinationAddress}
                  price={props.price}
                  read={props.read}
                  expanded={expanded}
          />
          <Collapse in={expanded} timeout={600}>
            <NotificationDetails
                token={userData.token}
                notificationId={props.notificationId}
                type={props.type}
                name={props.name}
                packageName={props.packageName}
                plecare={props.departure}
                destinatie={props.destination}
                dataPlecare={props.departureDate}
                pickUpAdress={props.departureAddress}
                dropOffAdress={props.destinationAddress}
                price={props.price}
                packageId={props.packageId}
                rideId={props.rideId}
                interactionId={props.interactionid}
            />
          </Collapse>
          <Box width={'100%'} display={'flex'} justifyContent= 'center' mt={2}>
          {!expanded ? (  
            <PrimaryButton variant="contained" onClick={()=>detailsNotification()}>
                 {t('Details')}
            </PrimaryButton>) : (
              <SecondaryButton variant="contained" onClick={()=>detailsNotification()}>
                  {t('LessDetails')}
              </SecondaryButton>
          )}
          </Box>
        </Box>
    );

}

const mapStateToProps = (state) => ({userData: state.userData})
const mapDispatchToProps = dispatch => ({
  markAsReadNotification: (token, notificationId) => dispatch(markAsReadNotification(token, notificationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);