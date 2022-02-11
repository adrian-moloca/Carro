import React, { useEffect, useState } from "react";
import {Grid, Box, ButtonBase} from '@material-ui/core';
import GetRide from "../../../search-ride/get-ride";
import profilePhoto from '../../../../assets/images/photoprofile1.png';
import DriverCardNotifications from '../../../../components/cards/DriverCardNotifications/DriverCardNotifications';
import PackageCard from "../../../../components/cards/package-card/package-card";
import GreenCaroButton from "../../../../components/buttons/GreenCaroButton/GreenCaroButton";
import {Rating} from '@material-ui/lab';
import {Chat} from '@material-ui/icons';
import axios from "axios";
import data from "../../../../utils/constants";

const NotificationDetails = (props) =>{
    const [ride, setRide] = useState({})

    const getRide = () => {
            axios.get(data.baseUrl + '/drivers/' + props.rideId, {
                headers:{
                    'Authorization': `Bearer ${props.token}`,
                }
            }).then((response)=> {
                setRide(response.data.data); 
            }).catch(()=>setRide({}))
    }

    useEffect(()=>{
        if(props.type === 3||props.type ===1)
            getRide() 
    }, [])

    useEffect(()=>{}, [ride])

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
        packageSpecialMention: {
            isFragil: true,
            isFoodGrade: false,
            isFlammable: false,
            isHandleWithCare: true,
            isAnimal: true,
          },
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
        packageSpecialMention: {
            isFragil: true,
            isFoodGrade: false,
            isFlammable: false,
            isHandleWithCare: true,
            isAnimal: true,
        },
    }
    
    
    function getNotificationContent(type){
        switch(type){
            case 1:
                return(
                    <Grid container justifyContent='center'>
                        {!ride.rideId && !ride.rideId.length > 0 ? (
                            <Box>Error on getting ride</Box>
                        ) : (
                            <GetRide name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={ride.statuses.filter((status)=>status.id===props.interactionId)} interactions={[]} ridesUpdate={()=>getRide()}/>
                        )}
                    </Grid>      
                );
            case 3:
                return(
                    <Grid container justifyContent='center'>
                        {!(ride.rideId && ride.rideId.length > 0) ? (
                            <Box>Error on getting ride</Box>
                        ) : (
                            <GetRide name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={[ride.statuses.filter((status)=>status.id===props.interactionId)]} interactions={[]} ridesUpdate={()=>getRide()}/>
                        )}
                    </Grid>      
                );
            /* case 2:
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
            case 6:
                return(
                    <Grid container justifyContent='center'>
                        <PackageCard packageQuantity={Package.packageQuantity} packageDimensions={Package.packageDimensions} 
                                senderPhone={Package.senderPhone} destinatary={Package.destinatary} destinataryPhone={Package.destinataryPhone}
                                packageWeight={Package.packageWeight} departureDate={Package.departureDate} price={Package.price}
                                departureAddress={Package.departureAddress} destinationAddress={Package.destinationAddress} details={Package.details}
                                statuses= {Package.status} packageSpecialMention={Package.packageSpecialMention}/>
                    </Grid>
                );  */
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