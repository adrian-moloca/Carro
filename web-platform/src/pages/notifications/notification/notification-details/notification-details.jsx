import React, { useEffect, useState, Fragment } from "react";
import {Grid, Box, ButtonBase, InputAdornment} from '@material-ui/core';
import GetRide from "../../../search-ride/get-ride";
import GetPackage from "../../../search-package/get-package";
import CarroTextField from "../../../../components/textField/CarroTextField";
import DriverCardNotifications from '../../../../components/cards/DriverCardNotifications/DriverCardNotifications';
import PackageCard from "../../../../components/cards/package-card/package-card";
import GreenCaroButton from "../../../../components/buttons/GreenCaroButton/GreenCaroButton";
import {Rating} from '@material-ui/lab';
import {SendSharp} from '@material-ui/icons';
import axios from "axios";
import data from "../../../../utils/constants";
import { useTranslation } from "react-i18next";

const NotificationDetails = (props) =>{

    const {t} = useTranslation()

    const [ride, setRide] = useState({})
    const [packageN, setPackageN] = useState({})
    const [driver, setDriver] = useState({})
    const [myComment, setMyComment] = useState('');
    const [myRate, setMyRate] = useState(0)
    const [commentSent, setCommentSent] = useState(false)


    const getRide = () => {
            axios.get(data.baseUrl + '/drivers/' + props.rideId, {
                headers:{
                    'Authorization': `Bearer ${props.token}`,
                }
            }).then((response)=> {
                setRide(response.data.data); 
            }).catch(()=>setRide({}))
    }

    const getPackage = () => {
            axios.get(data.baseUrl + '/packages/' + props.packageId, {
                headers:{
                    'Authorization': `Bearer ${props.token}`,
                }
            }).then((response)=> {
                setPackageN(response.data.data); 
            }).catch(()=>setPackageN({}))
    }

    const getDriver = () => {
        axios.get(data.baseUrl + '/my-packages/' + props.packageId + '/drivers', {
                headers:{
                    'Authorization': `Bearer ${props.token}`,
                }
            }).then((response)=> {
                setDriver(response.data.data[0]); 
            }).catch(()=>setDriver({}))
    }

    function getTransportType(type){
        switch(type){
            case 1:   
                return t("PublicTransport");
            case 2:   
                return t("Car");
            case 3:   
                return t("Truck");
            default: 
                return 'Unkown transport type';
        }
    }

    async function sendComment (){
      axios.post(data.baseUrl + '/reviews/' + driver.id + '/comments', {
            comment: myComment,
            rate: parseInt(myRate)
      }, {
        headers:{
            'Authorization': `Bearer ${props.token}`,
        }
      }).then((response)=>{setCommentSent(true)}).catch(error=>console.log(error))
    }

    useEffect(()=>{
        if(props.type === 7 || props.type === 5 || props.type === 3 || props.type ===1)
            getRide() 
    }, [])

    useEffect(()=>{
        if(props.type === 8 || props.type === 6 || props.type === 4 || props.type ===2)
            getPackage() 
    }, [])

    useEffect(()=>{
        if(props.type === 9)
            getDriver() 
    }, [])

    useEffect(()=>{}, [ride, packageN, driver, commentSent])
    
    
    function getNotificationContent(type){
        switch(type){
            case 1:
                return(
                    <Grid container justifyContent='center'>
                        {!(ride.rideId && ride.rideId.length) > 0 ? (
                            <Box>Error on getting ride</Box>
                        ) : (
                            <GetRide name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={ride.statuses.filter((status)=>status.packageId===props.packageId)} interactions={[]} statusUpdated={()=>getRide()}/>
                        )}
                    </Grid>      
                );
            case 2:
                return(
                    <Grid container justifyContent='center'>
                        {!(packageN.id && packageN.id.length) > 0 ? (
                            <Box>Error on getting package</Box>
                        ) : (
                            <GetPackage userId={packageN.userId} packageId={packageN.id} packageQuantity={packageN.numberOfPackages} dimensions={packageN.dimensions} weight={packageN.weight} departureDate={packageN.departureDate.substr(0, 10)} price={packageN.price} departure={packageN.departure} destination={packageN.destination} departureAddress={packageN.departureAddress}  destinationAddress={packageN.destinationAddress} status= {packageN.status}  interactions={packageN.interactions} packageSpecialMention={packageN.packageSpecialMention} packageType={packageN.packageType} statusUpdated={()=>getPackage()}/>
                        )}
                    </Grid>      
                );
            case 3:
                return(
                    <Grid container justifyContent='center'>
                        {!(ride.rideId && ride.rideId.length > 0) ? (
                            <Box>Error on getting ride</Box>
                        ) : (
                            <GetRide name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={ride.statuses.filter((status)=>status.packageId===props.packageId)} interactions={[]} statusUpdated={()=>getRide()}/>
                        )}
                    </Grid>      
                );
            case 4:
                return(
                    <Grid container justifyContent='center'>
                        {!(packageN.id && packageN.id.length) > 0 ? (
                            <Box>Error on getting package</Box>
                        ) : (
                            <GetPackage userId={packageN.userId} packageId={packageN.id} packageQuantity={packageN.numberOfPackages} dimensions={packageN.dimensions} weight={packageN.weight} departureDate={packageN.departureDate.substr(0, 10)} price={packageN.price} departure={packageN.departure} destination={packageN.destination} departureAddress={packageN.departureAddress}  destinationAddress={packageN.destinationAddress} status= {packageN.status}  interactions={packageN.interactions} packageSpecialMention={packageN.packageSpecialMention} packageType={packageN.packageType} statusUpdated={()=>getPackage()}/>
                        )}
                    </Grid>      
                );
            case 5:
                return(
                    <Grid container justifyContent='center'>
                        {!(ride.rideId && ride.rideId.length > 0) ? (
                            <Box>Error on getting ride</Box>
                        ) : (
                            <GetRide name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={ride.statuses.filter((status)=>status.packageId===props.packageId)} interactions={[]} statusUpdated={()=>getRide()}/>
                        )}
                    </Grid>      
                );
            case 6:
                return(
                    <Grid container justifyContent='center'>
                        {!(packageN.id && packageN.id.length) > 0 ? (
                            <Box>Error on getting package</Box>
                        ) : (
                            <GetPackage userId={packageN.userId} packageId={packageN.id} packageQuantity={packageN.numberOfPackages} dimensions={packageN.dimensions} weight={packageN.weight} departureDate={packageN.departureDate.substr(0, 10)} price={packageN.price} departure={packageN.departure} destination={packageN.destination} departureAddress={packageN.departureAddress}  destinationAddress={packageN.destinationAddress} status= {packageN.status}  interactions={packageN.interactions} packageSpecialMention={packageN.packageSpecialMention} packageType={packageN.packageType} statusUpdated={()=>getPackage()}/>
                        )}
                    </Grid>      
                );
            case 7:
                return(
                    <Grid container justifyContent='center'>
                        {!(ride.rideId && ride.rideId.length > 0) ? (
                            <Box>Error on getting ride</Box>
                        ) : (
                            <GetRide name={ride.name} image={ride.image} rate={ride.rate ? ride.rate : 0} id={ride.id} rideId={ride.rideId} departure={ride.departure} destination={ride.destination} departureAddress={ride.departureAddress} destinationaAddress={ride.destinationaAddress} departureDate={ride.departureDate} estimatedTime={ride.estimatedTime} transportType={ride.transportType} statuses={ride.statuses.filter((status)=>status.packageId===props.packageId)} interactions={[]} statusUpdated={()=>getRide()}/>
                        )}
                    </Grid>      
                );
            case 8:
                return(
                    <Grid container justifyContent='center'>
                        {!(packageN.id && packageN.id.length) > 0 ? (
                            <Box>Error on getting package</Box>
                        ) : (
                            <GetPackage userId={packageN.userId} packageId={packageN.id} packageQuantity={packageN.numberOfPackages} dimensions={packageN.dimensions} weight={packageN.weight} departureDate={packageN.departureDate.substr(0, 10)} price={packageN.price} departure={packageN.departure} destination={packageN.destination} departureAddress={packageN.departureAddress}  destinationAddress={packageN.destinationAddress} status= {packageN.status}  interactions={packageN.interactions} packageSpecialMention={packageN.packageSpecialMention} packageType={packageN.packageType} statusUpdated={()=>getPackage()}/>
                        )}
                    </Grid>      
                );
            case 9:
                return(
                    <Grid container justifyContent='space-between'>
                        <Grid container item xs={5}>
                            <DriverCardNotifications 
                                image={"data:image/png;base64,"+driver.image} 
                                name={driver.name}
                                transportType={getTransportType(driver.transportType)}
                                driverRate={driver.rate ? driver.rate : 0}
                                plecare={driver.departure}
                                destinatie={driver.destination}/>
                        </Grid>
                        <Grid  item xs={6}>
                        {!commentSent ? (
                            <Fragment>
                                <Grid item xs={12}>
                                    <Box textAlign='center' fontSize='16px' fontWeight='600' className={'Primary-color'}>Coletul tau a ajuns cu succes!</Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box my={1} px='5px' fontWeight= {400} fontStyle='italic' className={'Secondary-color'}
                                        textAlign='center' >{driver.name} a efectuat livrarea coletului tau pe ruta {driver.departure}-{driver.destination}. Lasa un review!</Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box display="flex" justifyContent='center' alignItems="center" my={2}>
                                        <CarroTextField  
                                            value={myComment}
                                            onChange={(e)=>setMyComment(e.target.value)}
                                            label={t("LeaveAMessage")}
                                            InputProps={{
                                            endAdornment: 
                                                <InputAdornment position="end">
                                                </InputAdornment>}}
                                            fullWidth
                                        />
                                    </Box>
                                </Grid>
                                <Grid container item xs={12} style={{height: 35}} justifyContent='center'>
                                    <Rating name={driver.name} precision={1} value={myRate} onChange={(e)=> setMyRate(parseInt(e.target.value))}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box display="flex" justifyContent='center' alignItems="center">
                                        <GreenCaroButton variant='contained' onClick={()=>sendComment()}>TRIMITE</GreenCaroButton>
                                    </Box>
                                </Grid>
                            </Fragment>
                        ) : (
                            <Grid item xs={12}>
                                <Box textAlign='center' fontSize='16px' fontWeight='600' className={'Primary-color'}>
                                    {t('ReviewSent')}
                                </Box>
                            </Grid>
                        )}
                        </Grid>
                    </Grid>
                );
            case 10:
                return('')
            case 11:
                return('')
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