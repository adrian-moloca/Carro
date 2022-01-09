import React, { useEffect, useState } from 'react';
import {Container, Box, Grid} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import Notification from './notification/notification';
import { connect } from 'react-redux';

// const notifications_a = [
    
//     {
//         type: 'colet livrat',
//         name: 'Marius Popescu',
//         action: 'a efectuat livrarea coletului tau! Lasa un review.',
//         departure: 'Timisoara',
//         destination: 'Bucuresti',
//         departureAddress: '1 Decembrie',
//         destinationAddress: '2 Mai',
//         departureDate: '26/08/2021 02:00am',
//         price: '20 RON',
//         transportType: 'Masina', 
//         read: true,
//     },
//     {
//         type: 'transport anulat',
//         name: 'Marius Popescu',
//         action: 'a anulat transportul pentru coletul tau.',
//         departure: 'Timisoara',
//         destination: 'Bucuresti',
//         departureAddress: '1 Decembrie',
//         destinationAddress: '2 Mai',
//         departureDate: '26/08/2021 02:00am',
//         price: '20 RON',
//         transportType: 'Masina',
//         read: true,
//     },
//     {
//         type: 'cerere transport',
//         name: 'Marius Popescu',
//         action: 'a facut o cerere de transport pe ruta ta!',
//         departure: 'Timisoara',
//         destination: 'Bucuresti',
//         departureAddress: '1 Decembrie',
//         destinationAddress: '2 Mai',
//         departureDate: '26/08/2021 02:00am',
//         price: '20 RON',
//         transportType: 'Masina',
//         read: false,
//     },
// ];

const Notifications =({notificationsData})=>{

    const { t } = useTranslation();
    const[notifications, setNotifications] = useState(notificationsData);

    useEffect(() => {
        setNotifications(notificationsData);
    },[notificationsData, t])

    // const readNotification = (index) => {
    //     const temp = [...notifications];
    //     temp.map((el, i)=>{
    //         if(i===index)
    //         {
    //             el.isRead = true;
    //         }
    //         return el;
    //     })
    //     setNotifications(temp);
    // }

    // const handleReadStatus = (index) => {
    //     const temp = [...notifications];
    //     temp.map((el, i)=>{
    //         if(i===index)
    //         {
    //             const prevStatus = el.isRead;
    //             el.isRead = !prevStatus;
    //         }
    //         return el;
    //     })
    //     setNotifications(temp);
    // }

    // const deleteNotification=(index)=>{
    //     const temp=[...notifications] 
    //     temp.splice(index, 1);
    //     setNotifications(temp);
    // }

    return(
        <Container className='Primary-container-style'>
            <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t('Notifications')}</Box>
            <Grid container justifyContent='center'>
                {notifications.map((not, index)=>{ 
                    return  <Grid key={index} container item xs={12}>
                                <Notification type={not.type} name={not.name} action={not.action} 
                                            departure={not.departure} destination={not.destination} price={not.price} transportType={not.transportType} notificationId={not.id}
                                            departureAddress={not.departureAddress} destinationAddress={not.destinationAddress} departureDate={not.departureDate} read={not.isRead}/>
                            </Grid>
                })}
            </Grid>
        </Container>
    )

}

const mapStateToProps = state => ({notificationsData: state.notificationsData.notifications})


export default connect(mapStateToProps, null)(Notifications);
