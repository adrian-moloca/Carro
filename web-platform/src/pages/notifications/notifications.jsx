import React, { useState } from 'react';
import {Container, Box, Grid} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import Notification from './notification/notification';

const notifications_a = [
    
    {
        type: 'colet livrat',
        name: 'Marius Popescu',
        action: 'a efectuat livrarea coletului tau! Lasa un review.',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina', 
        read: false,
    },
    {
        type: 'colet acceptat',
        name: 'Marius Popescu',
        action: 'a acceptat livrarea coletului tau!',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina',
        read: false,
    },
    {
        type: 'colet refuzat',
        name: 'Marius Popescu',
        action: 'a refuzat livrarea coletului tau!',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina',
        read: false,
    },
    {
        type: 'transport acceptat',
        name: 'Marius Popescu',
        action: 'a acceptat transportul tau pe ruta Timisoara-Bucuresti.',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina',
        read: false,
    },
    {
        type: 'transport refuzat',
        name: 'Marius Popescu',
        action: 'a refuzat transportul tau pe ruta Timisoara-Bucuresti.',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina',
        read: false,
    },
    {
        type: 'transport anulat',
        name: 'Marius Popescu',
        action: 'a anulat transportul pentru coletul tau!',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina',
        read: false,
    },
    {
        type: 'cerere pachet',
        name: 'Marius Popescu',
        action: 'doreste sa livreze coletul tau.',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina',
        read: false,
    },
    {
        type: 'cerere transport',
        name: 'Marius Popescu',
        action: 'a facut o cerere de transport pe ruta ta!',
        departure: 'Timisoara',
        destination: 'Bucuresti',
        departureAddress: '1 Decembrie',
        destinationAddress: '2 Mai',
        departureDate: '26/08/2021 02:00am',
        price: '20 RON',
        transportType: 'Masina',
        read: false,
    },
];

const Notifications =()=>{

    const { t } = useTranslation();
    const[notifications, setNotifications] = useState(notifications_a)
    const readNotification = (index) => {
        const temp = [...notifications];
        temp.map((el, i)=>{
            if(i==index)
            {
                const b = el.read;
                el.read = !b;
            }
        })
        setNotifications(temp);
    }

    const deleteNotification=(index)=>{
        const temp=[...notifications] 
        temp.splice(index, 1);
        setNotifications(temp);
    }

    return(
        <Container className='Primary-container-style'>
            <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t('Notifications')}</Box>
            <Grid container justifyContent='center'>
                {notifications.map((not)=>{
                    return  <Grid container item xs={12}>
                                <Notification type={not.type} name={not.name} action={not.action} 
                                            departure={not.departure} destination={not.destination} price={not.price} transportType={not.transportType}
                                            departureAddress={not.departureAddress} destinationAddress={not.destinationAddress} departureDate={not.departureDate}
                                            handleRead={readNotification} read={not.read} handleDelete={deleteNotification}/>
                            </Grid>
                })}
            </Grid>
        </Container>
    )

}

export default Notifications;