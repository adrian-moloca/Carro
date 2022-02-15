import React, {Fragment, useEffect, useState} from 'react';
import {Box, Grid } from '@material-ui/core';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import { connect } from 'react-redux';
import axios from 'axios';
import data from '../../../utils/constants';
import { useTranslation } from 'react-i18next';

const RideRequestCard = ({userData, ...props}) =>{

    const [name, setName] = useState(props.name)
    const [rideId, setRideId] = useState(props.rideId)
    const [rideUserId, setRideUserId] = useState(props.rideUserId)
    const [statuses, setStatuses] = useState(props.statuses)
    const [interactions, setInteractions] = useState(props.interactions)
    const [isFlipped, setIsFlipped] = useState(false)
    const [statusRequested, setStatusRequested] = useState(props.statuses[0].status)

    const {t} = useTranslation()

    useEffect(()=>{
        setName(props.name)
        setRideId(props.rideId)
        setRideUserId(props.rideUserId)
        setStatuses(props.statuses)
        setInteractions(props.interactions)
    }, [props.name, props.rideId, props.rideUserId, props.statuses, props.interactions])

     const handleClick = () => {
        const temp = isFlipped;
        setIsFlipped(!temp);
    }

    const requestRide = (packageId, rideId, rideUserId) =>{
        axios.post(data.baseUrl + '/rides/' + rideId + '/statuses', {
            packageId: packageId,
            rideUserId: rideUserId
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        } ).then((response)=>{setStatuses(statuses.concat(response.data.data)); props.ridesUpdate(); setStatusRequested(1)}).catch((error)=>console.log(error))
    }

    const updateStatus = (newStatus, rideId, statusId) => {
        axios.put(data.baseUrl + '/rides/' + rideId + '/statuses/' + statusId, {
            status: newStatus,
            rejectReason: ''
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        }).then((response)=>{setStatuses(statuses.concat(response.data.data)); props.ridesUpdate()}).catch((error)=>console.log(error))
    }

    function getFrontCardBtns(){

        if(props.interactions.length > 0){
            return(
                props.interactions.map(pack => {
                        return(
                                <Grid container item xs={8} style={{height: '50px'}} justifyContent = 'center'>
                                    <GreenCaroButton variant='contained' size='small' fullWidth 
                                                    onClick={()=>requestRide(pack.packageId, rideId, rideUserId)}>
                                        Cere transport              
                                    </GreenCaroButton>
                                </Grid>            
                        )}
                )
            )
        } else {
            if(statuses.length > 0 && Array.isArray(statuses)){
                return(
                    <Fragment>
                        {statuses.map(pack => {
                                switch(statusRequested){
                                    case 1:
                                        return(
                                            <Grid container item xs={8} justifyContent='center'>
                                                <Box my='10%' className='Secondary-color' fontSize='18px' fontWeight='500'>
                                                    {t('DriverCardWaitingStatus')}
                                                </Box>
                                            </Grid>
                                        )
                                    case 2:
                                        return(
                                            <Grid container justifyContent = 'center'  spacing={2} style={{marginBottom: '10px'}}>
                                                <Grid container item xs={10} sm={4} justifyContent = 'center'>
                                                    <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(1, props.rideId, pack.id)} fullWidth>
                                                        {t("Approve")}
                                                    </GreenCaroButton>
                                                </Grid>
                                                <Grid container item xs={10} sm={4} justifyContent = 'center'>
                                                    <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(2, props.rideId, pack.id)} fullWidth>
                                                        {t("Refuse")}
                                                    </SecondaryButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    case 3:
                                        return(
                                            <Grid container justifyContent = 'center' style={{marginBottom: '10px'}} spacing={1}>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <GreenCaroButton variant='contained' size='medium' onClick={()=>updateStatus(4, props.rideId, pack.id)} fullWidth>{t('Delivery')}</GreenCaroButton>
                                                </Grid>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <PrimaryButton variant='contained' size='medium' onClick={handleClick}fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    case 4:
                                        return(
                                            <Grid container justifyContent = 'center' style={{marginBottom: '10px'}} spacing={1}>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <GreenCaroButton variant='contained' size='medium' onClick={()=>updateStatus(4, props.rideId, pack.id)} fullWidth>{t('Delivery')}</GreenCaroButton>
                                                </Grid>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <PrimaryButton variant='contained' size='medium' onClick={handleClick}fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    case 5:
                                        return(
                                            <Grid container item xs={10} justifyContent = 'center'>
                                                <Box my='10%' color='#F50057' fontSize='18px' fontWeight='500'>{t("Rejected")}</Box>
                                            </Grid>
                                        )
                                    case 6:
                                        return(
                                            <Grid container item xs={10} justifyContent = 'center'  spacing={2}>
                                                <Grid container item xs={12} justifyContent = 'center'>
                                                    <Box my='10' color='#F50057' fontSize='18px' fontWeight='500' textAlign='center'>{t('DeclinedWithReason')}</Box>
                                                </Grid>
                                                <Grid container item xs={12} justifyContent = 'center'>
                                                    <Box my='5%' className='Secondary-color' fontSize='18px' fontWeight='500'>{pack.rejectReason}</Box>
                                                </Grid>
                                            </Grid>
                                        )
                                    case 8:
                                        return(
                                            <Grid container justifyContent = 'center'  spacing={2} style={{marginBottom: '10px'}}>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <PrimaryButton variant='contained' size='medium' onClick={handleClick}fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    case 9:
                                        return(
                                            <Grid container justifyContent = 'center' style={{marginBottom: '10px'}} spacing={1}>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <Box fontWeight={20}>{t('PackageWasPicked')}</Box>
                                                </Grid>
                                                <Grid container item xs={10} justifyContent = 'space-between'>
                                                    <Grid container item xs={12} sm={5} justifyContent = 'center'>
                                                        <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(5, props.rideId, props.statuses.id)} fullWidth>
                                                            {t("Yes")}
                                                        </GreenCaroButton>
                                                    </Grid>
                                                    <Grid container item xs={12} sm={5} justifyContent = 'center'>
                                                        <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(6, props.rideId, props.statuses.id)} fullWidth>
                                                            {t("No")}
                                                        </SecondaryButton>
                                                    </Grid>
                                                </Grid>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    case 10:
                                        return(
                                            <Grid container justifyContent = 'center' style={{marginBottom: '10px'}} spacing={1}>
                                                <Grid container item xs={10} justifyContent = 'center'>
                                                    <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    default:
                                        return 'default'
                                }
                        })}
                    </Fragment>
                )
            } 

        }  
    }

    return(
        <Box paddingBottom={1} height='200px' width='200px' border={2} borderColor='grey.400' borderRadius='15px' display='flex' justifyContent='center' boxShadow={3}>
            <Grid container justifyContent='center'>
                <Grid container item xs = {8} justifyContent='center'>
                    <Box fontSize={20} marginTop={5} className={'Secondary-color'} textAlign={'center'}>{name}</Box>
                </Grid>
                {getFrontCardBtns()}
            </Grid>
        </Box>
    )

}

const mapStateToProps = (state) =>({userData: state.userData})
export default connect(mapStateToProps, null)(RideRequestCard)