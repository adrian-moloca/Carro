import React from "react";
import {Grid, Box, ButtonBase} from '@material-ui/core';
import profilePhoto from '../../../../assets/images/photoprofile1.png';
import DriverCardNotifications from '../../../../components/cards/DriverCardNotifications/DriverCardNotifications';
import PackageCard from "../../../../components/cards/package-card/package-card";
import GreenCaroButton from "../../../../components/buttons/GreenCaroButton/GreenCaroButton";
import {Rating} from '@material-ui/lab';
import {Chat} from '@material-ui/icons';

const NotificationDetails = (props) =>{

    const Driver = {
        image: profilePhoto,
        name: 'Marius Popescu',
        transportType: 'Masina',
        departure: 'Timisoara, Romania',
        destination: 'Bucuresti, Romania',
        rate: 4.5,
    }

    const Package ={
        sender: 'George Micu',
        senderPhone: '0888888888',
        destinatary: 'George Mare',
        destinataryPhone: '0999999999',
        packageQuantity: 1,
        packageDimensions: '0x0x0',
        packageWeight: '1 Kg',
        departureDate: '26/08/2021 02:00 AM',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        details: 'ceva de trimis',
        price: '15 RON',
        status: 6, 
        rideExists: true,
    }

    const Package2 ={
        sender: 'George Micu',
        senderPhone: '0888888888',
        destinatary: 'George Mare',
        destinataryPhone: '0999999999',
        packageQuantity: 1,
        packageDimensions: '0x0x0',
        packageWeight: '1 Kg',
        departureDate: '26/08/2021 02:00 AM',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        details: 'ceva de trimis',
        price: '15 RON',
        status: 2, 
        rideExists: true,
    }
    

    function getNotificationContent(type){
        switch(type){
            case 'colet livrat':
                return(
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={5}>
                            <DriverCardNotifications 
                                image={Driver.image} 
                                name={Driver.name}
                                transportType={Driver.transportType}
                                driverRate={Driver.rate}
                                plecare={Driver.departure}
                                destinatie={Driver.destination}/>
                        </Grid>
                        <Grid  item xs={6}>
                            <Grid item xs={12}>
                                <Box textAlign='center' fontSize='16px' fontWeight='600' className={'Primary-color'}>Coletul tau a ajuns cu succes!</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box my={1} px='5px' fontWeight= {400} fontStyle='italic' className={'Secondary-color'}
                                     textAlign='center' >{Driver.name} a efectuat livrarea coletului tau pe ruta {Driver.departure}-{Driver.destination}. Lasa un review!</Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent='center' alignItems="center" my={2}>
                                    <ButtonBase className={'Primary-color'}>
                                        <Chat size='small'/>
                                        <Box px='5px'>TRIMITE UN MESAJ</Box>
                                    </ButtonBase>
                                </Box>
                            </Grid>
                            <Grid container item xs={12} justifyContent='center'>
                                <Rating name={Driver.name}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent='center' alignItems="center">
                                    <GreenCaroButton variant='contained'>TRIMITE</GreenCaroButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            case 'transport anulat':
                return(
                    <Grid container justifyContent='center'>
                        <PackageCard packageQuantity={Package.packageQuantity} packageDimensions={Package.packageDimensions} 
                                senderPhone={Package.senderPhone} destinatary={Package.destinatary} destinataryPhone={Package.destinataryPhone}
                                packageWeight={Package.packageWeight} departureDate={Package.departureDate} price={Package.price}
                                departureAddress={Package.departureAddress} destinationAddress={Package.destinationAddress} details={Package.details}
                                status= {Package.status} rideExists={Package.rideExists}/>
                    </Grid>
                );
            case 'cerere transport':
                return(
                    <Grid container justifyContent='center'>
                        <PackageCard packageQuantity={Package2.packageQuantity} packageDimensions={Package2.packageDimensions} 
                                senderPhone={Package2.senderPhone} destinatary={Package2.destinatary} destinataryPhone={Package2.destinataryPhone}
                                packageWeight={Package2.packageWeight} departureDate={Package2.departureDate} price={Package2.price}
                                departureAddress={Package2.departureAddress} destinationAddress={Package2.destinationAddress} details={Package2.details}
                                status= {Package2.status} rideExists={Package2.rideExists}/>
                    </Grid>      
                );
            default:
                return(
                    <div>
                        unkown type
                    </div>
                );
        }
    }

    return(
        <Box mt='4%'>
            <Grid container justifyContent='space-around'>
                {getNotificationContent(props.type)}
            </Grid>
        </Box>
    );

}

export default NotificationDetails;