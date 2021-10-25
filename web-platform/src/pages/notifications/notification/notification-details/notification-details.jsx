import React, {Fragment} from "react";
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
        status: 'package rejected', 
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
        status: 'notification ride request', 
        rideExists: true,
    }
    

    function getNotificationContent(type){
        switch(type){
            case 'colet livrat':
                return(
                    <Fragment>
                        <Grid container item xs={6}>
                            <DriverCardNotifications 
                                image={Driver.image} 
                                name={Driver.name}
                                transportType={Driver.transportType}
                                driverRate={Driver.rate}
                                plecare={Driver.departure}
                                destinatie={Driver.destination}/>
                        </Grid>
                        <Grid container item xs={6}>
                            <Grid container item xs={12} justifyContent='center'>
                                <Box fontSize='16px' fontWeight='600' className={'Primary-color'}>Coletul tau a ajuns cu succes!</Box>
                            </Grid>
                            <Grid container item xs={12} justifyContent='center'>
                                <Box px='5px' fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>{Driver.name} a efectuat livrarea coletului tau pe ruta {Driver.departure}-{Driver.destination}. Lasa un review!</Box>
                            </Grid>
                            <Grid container item xs={12} justifyContent='center'>
                                <ButtonBase className={'Primary-color'}>
                                    <Chat size='small'/>
                                    <Box px='5px'>TRIMITE UN MESAJ</Box>
                                </ButtonBase>
                            </Grid>
                            <Grid container item xs={12} justifyContent='center'>
                                <Rating/>
                            </Grid>
                            <Grid container item xs={12} justifyContent='center'>
                                <GreenCaroButton variant='contained'>TRIMITE</GreenCaroButton>
                            </Grid>
                        </Grid>
                    </Fragment>
                );
            case 'transport anulat':
                return(
                    <Fragment>
                        <Grid container item xs={4} justifyContent='center'>
                            <PackageCard packageQuantity={Package.packageQuantity} packageDimensions={Package.packageDimensions} 
                                 senderPhone={Package.senderPhone} destinatary={Package.destinatary} destinataryPhone={Package.destinataryPhone}
                                 packageWeight={Package.packageWeight} departureDate={Package.departureDate} price={Package.price}
                                 departureAddress={Package.departureAddress} destinationAddress={Package.destinationAddress} details={Package.details}
                                 status= {Package.status} rideExists={Package.rideExists}/>
                        </Grid>
                    </Fragment>
                );
            case 'cerere transport':
                return(
                    <Fragment>
                        <Grid container item xs={4} justifyContent='center'>
                            <PackageCard packageQuantity={Package2.packageQuantity} packageDimensions={Package2.packageDimensions} 
                                 senderPhone={Package2.senderPhone} destinatary={Package2.destinatary} destinataryPhone={Package2.destinataryPhone}
                                 packageWeight={Package2.packageWeight} departureDate={Package2.departureDate} price={Package2.price}
                                 departureAddress={Package2.departureAddress} destinationAddress={Package2.destinationAddress} details={Package2.details}
                                 status= {Package2.status} rideExists={Package2.rideExists}/>
                        </Grid>
                    </Fragment>
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
        <Grid container>
            {getNotificationContent(props.type)}
        </Grid>
    );

}

export default NotificationDetails;