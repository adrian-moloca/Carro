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
    const [statusRequested, setStatusRequested] = useState(0)

    const {t} = useTranslation()

    useEffect(()=>{
        setName(props.name)
        setRideId(props.rideId)
        setRideUserId(props.rideUserId)
        setStatuses(props.statuses)
        setInteractions(props.interactions)
    }, [props.name, props.rideId, props.rideUserId, props.statuses, props.interactions])

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
                        {interactions.map(pack => {
                            if(statuses.some(status => status.packageId === pack.packageId))
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
                                                    <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(1, rideId, pack.id)} fullWidth>
                                                        {t("Approve")}
                                                    </GreenCaroButton>
                                                </Grid>
                                                <Grid container item xs={10} sm={4} justifyContent = 'center'>
                                                    <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(2, rideId, pack.id)} fullWidth>
                                                        {t("Refuse")}
                                                    </SecondaryButton>
                                                </Grid>
                                            </Grid>
                                        )
                                    case 3:
                                        return(
                                            <Grid container item xs={10} justifyContent = 'center'>
                                                <Box my='10%' color='#00B4D8' fontSize='18px' fontWeight='500'>{t("Accepted")}</Box>
                                            </Grid>
                                        )
                                    case 4:
                                        return(
                                            <Grid container item xs={10} justifyContent = 'center'>
                                                <Box my='10%' color='#00B4D8' fontSize='18px' fontWeight='500'>{t("Accepted")}</Box>
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
                                    default:
                                        return 'default'
                                }
                                else
                                    return(
                                        <Fragment>
                                            <Grid container item xs={8} style={{height: '50px'}} justifyContent = 'center'>
                                                <GreenCaroButton variant='contained' size='small' fullWidth 
                                                                onClick={()=>requestRide(pack.packageId, rideId, rideUserId)}>
                                                    Cere transport                
                                                </GreenCaroButton>
                                            </Grid>   
                                        </Fragment>         
                                )
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