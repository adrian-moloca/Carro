import React, { useState } from 'react';
import {Container, Box, Grid} from '@material-ui/core';
import { useTranslation } from "react-i18next";
import Notification from './notification/notification';
import { ContactSupportOutlined } from '@material-ui/icons';

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
        read: true,
    },
    {
        type: 'transport anulat',
        name: 'Marius Popescu',
        action: 'a anulat transportul pentru coletul tau.',
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
    const readNotification = (event, index) => {
        event.stopPropagation();
        if(event.target.className.includes('details-button') || event.target.className.includes('label')){
        const temp = [...notifications];
        temp.map((el, i)=>{
            if(i==index)
            {
                el.read=true
            }
        })
        setNotifications(temp);
    }
    }

    const deleteNotification=(index)=>{
        const temp=[...notifications] 
        temp.splice(index, 1);
        setNotifications(temp);
    }

    return(
        <Container className='Primary-container-style'>
            <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t('Notifications')}</Box>
            {console.log(notifications)}
            <Grid container justifyContent='center'>
                {notifications.map((not, index)=>{
                    return  <Grid key={index} container item xs={12}>
                                <Notification type={not.type} name={not.name} action={not.action} 
                                            departure={not.departure} destination={not.destination} price={not.price} transportType={not.transportType}
                                            departureAddress={not.departureAddress} destinationAddress={not.destinationAddress} departureDate={not.departureDate}
                                            handleRead={(e)=>readNotification(e,index)} read={not.read} clickedDelete={()=>deleteNotification(index)}/>
                            </Grid>
                })}
            </Grid>
        </Container>
    )

}

export default Notifications;