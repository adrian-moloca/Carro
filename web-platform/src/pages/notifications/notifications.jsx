import React, { useEffect, useState } from 'react';
import {Container, Box, Grid} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import Notification from './notification/notification';
import { connect } from 'react-redux';

const Notifications =({notificationsData})=>{

    const { t } = useTranslation();
    const[notifications, setNotifications] = useState(notificationsData);

    useEffect(() => {
        setNotifications(notificationsData);
    },[notificationsData, t])

    useEffect(()=>{}, [notifications])

    return(
        <Container className='Primary-container-style'>
            <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t('Notifications')}</Box>
            <Grid container justifyContent='center'>
                {notifications.map((not, index)=>{ 
                    const date =  new Date(not.departureDate)
                    return  <Grid key={index} container item xs={12}>
                                <Notification type={not.type} name={not.name.replace(',', '')} departure={not.departure} destination={not.destination} price={not.price} notificationId={not.id} departureAddress={not.departureAddress} destinationAddress={not.destinationAddress} departureDate={date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' +date.getFullYear().toString()} packageName={not.packageName} packageId={not.packageId} interactionId={not.interactionId} rideId={not.rideId} read={not.isRead}/>
                            </Grid>
                })}
            </Grid>
        </Container>
    )

}

const mapStateToProps = state => ({notificationsData: state.notificationsData.notifications})


export default connect(mapStateToProps, null)(Notifications);
