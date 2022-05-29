import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, Grid, Avatar, Modal, Fade} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import ReactCardFlip from 'react-card-flip';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import SelectRide from '../../modals/select-ride/select-ride';
import SelectDriver from '../../modals/driver-select/driver-select';
import useStyles from './ride-card-style';
import { useTranslation } from 'react-i18next';
import RejectModal from '../../modals/reject-modal/reject-modal';
import SeeProfileBtn from '../../buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn';
import { fetchCourierProfile} from '../../../redux/actions/CourierActions';
import { connect } from 'react-redux';
import axios from 'axios';
import data from '../../../utils/constants';
import AddPackage from '../../../pages/add-package/add-package';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { Close } from '@material-ui/icons';

const RideCard =({userData, packages, fetchCourierProfile, ...props})=>{
    const { t } = useTranslation();
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [statuses, setStatuses] = useState(props.statuses)
    const [isFlipped, setIsFlipped] = useState(false);
    const [addingPackage, setAddingPackage] = useState(false);

    useEffect(()=>{}, [isFlipped])
    useEffect(()=>{}, [addingPackage])
    
    const requestRide = (packageId, rideId, rideUserId) =>{
        axios.post(data.baseUrl + '/rides/' + rideId + '/statuses', {
            packageId: packageId,
            rideUserId: rideUserId
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        } ).then((response)=>{
            typeof props.statuses === 'object' ? setStatuses(response.data.data) : setStatuses(statuses.concat(response.data.data))
            if(addingPackage){
                /* props.statusUpdated() */
                setAddingPackage(false)
            } 
        }).catch((error)=>console.log(error))
    }

    const updateStatus = (newStatus, rideId, statusId, rejectReason) => {
        axios.put(data.baseUrl + '/rides/' + rideId + '/statuses/' + statusId, {
            status: newStatus,
            rejectReason: rejectReason
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        }).then(()=>{props.statusUpdated()}).catch((error)=>props.statusUpdated())
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    useEffect(()=>{
        setStatuses(props.statuses)
    }, [props.statuses])

    useEffect(()=>{}, [statuses])

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

    function getFrontCardBtns(){

        if((props.interactions && props.interactions.length >= 1) || (Array.isArray(statuses) && statuses.length >= 1) ){
            if(!props.fromSelectModal)
                return (
                    <SelectRide name={props.name} image={props.image} rate={props.rate ? props.rate : 0} id={props.id} rideId={props.rideId} departure={props.plecare} destination={props.destinatie} departureAddress={props.departureAddress} destinationaAddress={props.destinationaAddress} departureDate={props.departureDate} estimatedTime={props.estimatedTime} transportType={props.transportType} statuses={statuses} interactions={props.interactions} statusUpdated={props.statusUpdated}/>
                )
        }

        if(props.interactions && props.interactions.length === 0 && Array.isArray(statuses) && statuses.length === 0){
            return(
                    <Grid container item xs={8} justifyContent='center'>
                        <Box mb='2%' width={1}>
                            <Link to={'/add-package'} style={{color: 'inherit', textDecoration: 'none'}}>
                                <PrimaryButton variant='contained' /* onClick={()=>setAddingPackage(true)} */ fullWidth>
                                    {t('AddPackage')}
                                </PrimaryButton>
                            </Link>
                        </Box>
                    </Grid>
            )
        } else {
            if(Array.isArray(statuses) && statuses.length === 0 && props.interactions && props.interactions.length === 1){
                return(
                    props.interactions.map(pack => {
                            return(
                                <Grid container justifyContent='center'>
                                    <Grid container item xs = {8} justifyContent='center'>
                                        <Box fontSize={20} marginY={1} className={'Secondary-color'} textAlign={'center'}>{pack.name}</Box>
                                    </Grid>
                                    <Grid container item xs={8} justifyContent = 'center'>
                                        <GreenCaroButton variant='contained' size='small' fullWidth 
                                                        onClick={()=>requestRide(pack.packageId, props.rideId, props.id)}>
                                            Cere transport                  
                                        </GreenCaroButton>
                                    </Grid>
                                </Grid>
                            )}
                    )
                )
            } else {
                if(Array.isArray(statuses) && statuses.length > 0){
                    return(
                        <Fragment>
                            {statuses.map((pack)=>{
                                console.log(pack.id)
                                switch(pack.status){
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
                                                    <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
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
                                                    <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
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
                                    case 7:
                                        return(
                                            <Grid container item xs={8} justifyContent='center'>
                                                <Box my='10%' className='Secondary-color' fontSize='18px' fontWeight='500'>
                                                    {t('WaitingPickUp')}
                                                </Box>
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
                                                        <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(5, props.rideId, pack.id)} fullWidth>
                                                            {t("Yes")}
                                                        </GreenCaroButton>
                                                    </Grid>
                                                    <Grid container item xs={12} sm={5} justifyContent = 'center'>
                                                        <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(6, props.rideId, pack.id)} fullWidth>
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
                                    case 11:
                                        return(
                                            <Grid container item xs={10} justifyContent = 'center'>
                                                <Box my='10%' color='#00b4d8' fontSize='18px' fontWeight='500'>{t("Delivered")}</Box>
                                            </Grid>
                                        )
                                    default:
                                        return 'default'
                                }
                            })}
                            {props.interactions.map(pack => {
                                    if(statuses.some(status => status.packageId === pack.packageId))
                                        return null
                                    else
                                        return(
                                            <Fragment>
                                                <Grid container item xs={8} justifyContent = 'center'>
                                                    <GreenCaroButton variant='contained' size='small' fullWidth 
                                                                    onClick={()=>requestRide(pack.packageId, props.rideId, props.id)}>
                                                        Cere transport                   
                                                    </GreenCaroButton>
                                                </Grid>   
                                            </Fragment>         
                                    )
                            })}
                        </Fragment>
                    )
                } else if(typeof statuses === 'object') {
                            switch(statuses.status){
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
                                                <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(1, props.rideId, statuses.id)} fullWidth>
                                                    {t("Approve")}
                                                </GreenCaroButton>
                                            </Grid>
                                            <Grid container item xs={10} sm={4} justifyContent = 'center'>
                                                <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(2, props.rideId, statuses.id)} fullWidth>
                                                    {t("Refuse")}
                                                </SecondaryButton>
                                            </Grid>
                                        </Grid>
                                    )
                                case 3:
                                    return(
                                        <Grid container justifyContent = 'center' style={{marginBottom: '10px'}} spacing={1}>
                                            <Grid container item xs={10} justifyContent = 'center'>
                                                <GreenCaroButton variant='contained' size='medium' onClick={()=>updateStatus(4, props.rideId, statuses.id)} fullWidth>{t('Delivery')}</GreenCaroButton>
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
                                                <GreenCaroButton variant='contained' size='medium' onClick={()=>updateStatus(4, props.rideId, statuses.id)} fullWidth>{t('Delivery')}</GreenCaroButton>
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
                                                <Box my='5%' className='Secondary-color' fontSize='18px' fontWeight='500'>{statuses.rejectReason}</Box>
                                            </Grid>
                                        </Grid>
                                    )
                                case 7:
                                        return(
                                            <Grid container item xs={8} justifyContent='center'>
                                                <Box my='10%' className='Secondary-color' fontSize='18px' fontWeight='500'>
                                                    {t('WaitingPickUp')}
                                                </Box>
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
                                                    <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(5, props.rideId, statuses.id)} fullWidth>
                                                        {t("Yes")}
                                                    </GreenCaroButton>
                                                </Grid>
                                                <Grid container item xs={12} sm={5} justifyContent = 'center'>
                                                    <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(6, props.rideId, statuses.id)} fullWidth>
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
                                case 11:
                                    return(
                                        <Grid container item xs={10} justifyContent = 'center'>
                                            <Box my='10%' color='#00b4d8' fontSize='18px' fontWeight='500'>{t("Delivered")}</Box>
                                        </Grid>
                                    )
                                default:
                                    return 'default'
                            }
                }

            }  
        }
    }

    function getBackButtons(){
        if (Array.isArray(statuses) && statuses.length >= 0 && statuses[0].status >= 3)
            return(
                <Grid container item xs={8} justifyContent = 'center' >
                    <RejectModal rejectWithReason={(reason) => updateStatus(3, props.rideId, statuses[0].id, reason)} flipCard={() => setIsFlipped(false)}/>
                </Grid>
            )
        else if (typeof (statuses) === 'object' && statuses.status >= 3)
            return (
                <Grid container item xs={8} justifyContent = 'center' >
                    <RejectModal rejectWithReason={(reason) => updateStatus(3, props.rideId, statuses.id, reason)} flipCard={() => setIsFlipped(false)}/>
                </Grid>
            )
    }
    //interactions - array length is greater than 0
    //statuses - empty array - toate pachetele din interactions nu au fost cerute sau nu au cerute ele nimic

    // Waiting = 1, - apara soferului
    // AcceptReject = 2, - butonul Accepta/respinge
    // Details = 3, - butonul apare soferului ca a fost acceptat
    // AcceptedDetails = 4, - butonul pentru cel care are pachetul
    // Rejected = 5, - respins  -apare la ambii
    // RejectedWithReason = 6, - respins cu un motiv
    // PickUp = 7, - nu ma intereseaza aici
    // WaitingPickUp = 8, - nu ma intereseaza aici
    // YesNo = 9, - nu ma intereseaza aici
    // Delivery = 10, - nu ma intereseaza aici
    // Delivered = 11 - nu ma intereseaza aici


    // In momentul in care cer transport sau pachet fac post 
    // Post Method

    // Route: domainName + "api/v1/packages/{packageId}/statuses"



    // Request Object :{
    // "rideId": "string",
    // "packageUserId": "string"
    // }

    // Dupa ce am dat cere transport sau pachet fac doar update pt status 
    // 
    // Butoanele apar dupa ce se face update - statusul 
    // PackageStatusRequest : {
    //     enum PackRideRequestEnum
    //         {
    //             Accept = 1,
    //             Reject = 2,
    //             RejectWithReason = 3,
    //             PickUp = 4,
    //             Yes = 5,
    //             No = 6
    //         }
    //     }
        
        
    //     Put Method 
        
    //     Route: domainName + "api/v1/packages/{packageId}/statuses/{statusId}"
        
    //     Request Object:{
    //       "status": 0,
    //       "rejectReason": "string"
    //     }

    return(
        <Fragment>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' cardStyles={{back: {transformStyle: 'unset'}}} containerClassName={'CardFlipContainer'}>

            <Box display='flex' width='1' height='400px' p={1} borderRadius='10px' boxShadow={3}>
                <Grid container justifyContent='center'>
                    <Grid container item xs={12} justifyContent="flex-end">
                        <Link to={'/courier-profile'} style={{textDecoration: 'none', color: 'inherit'}}>
                            <SeeProfileBtn onClick={()=>{
                                    fetchCourierProfile(props.id, userData.token)
                            }} style={{fontSize:"12px", height: "30px"}}>
                                    {t("ViewProfile")}
                            </SeeProfileBtn>
                        </Link>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                        <Avatar className={classes.profileImg} src={"data:image/png;base64,"+props.image} style={{marginBottom: window.innerWidth <= 850 ? "20px" : 0 }}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent='center'>
                        <Box fontSize='20px' fontWeight='500'>{props.name}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box marginTop='5%' fontSize='15px' fontWeight='500'>{t('DriverCardDeparture')} {props.plecare}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardDestination')} {props.destinatie}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box marginBottom='5%' fontSize='15px' fontWeight='500'>{t('DriverCardType')} {getTransportType(parseInt(props.transportType))}</Box>
                    </Grid>
                    <Grid container item xs={8} justifyContent='space-around'>
                        <Rating value={props.driverRate} readOnly precision={0.5}/>
                    </Grid>
                    {getFrontCardBtns()}
                </Grid>
            </Box>
                
            <Box  display='flex' width='1' height='400px' p={1} borderRadius='10px' boxShadow={3}>
                <Grid container justifyContent='center'>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardDeparture')} {props.plecare}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardDepartureAddress')} {props.departureAddress}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardDestination')} {props.destinatie}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardDestinationAddress')}  {props.destinationAddress}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardType')} {props.transportType}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardDepartureDate')}  {props.departureDate}</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize='15px' fontWeight='500'>{t('DriverCardEstimatedHours')} {props.estimatedTime}</Box>
                    </Grid>
                    {getBackButtons()}    
                    <Grid container item xs={8} justifyContent='center'>    
                        <PrimaryButton variant='contained' size='small' onClick={handleClick} fullWidth>
                        {t('DriverCardBackButton')}
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Box>
            
            </ReactCardFlip>
            <Modal open={addingPackage} onClose={()=>setAddingPackage(false)} className={'modal'}>
                <Fade in={addingPackage} timeout={1000}>
                    <AddPackage /* modal={true} close={()=>setAddingPackage(false)} departureDate={props.departureDate} 
                                departureCity={props.plecare.slice(0, props.plecare.indexOf(','))} departureCountry={props.plecare.slice(props.plecare.indexOf(',')+2)}
                                destinationCity={props.destinatie.slice(0, props.destinatie.indexOf(','))} destinationCountry={props.destinatie.slice(props.destinatie.indexOf(',')+2)}
                                packageCreated={()=> requestRide( packages.data.pop().id , props.rideId, props.rideUserId)} *//>
                </Fade>
            </Modal>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({userData: state.userData, packages: state.myPackagesData.packages})
const mapDispatchToProps = (dispatch) =>({fetchCourierProfile: (userId, token) => dispatch(fetchCourierProfile(userId, token))})

export default connect(mapStateToProps, mapDispatchToProps)(RideCard);