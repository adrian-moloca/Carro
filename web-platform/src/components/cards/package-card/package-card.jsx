import React, {Fragment, useEffect, useState} from 'react';
import {Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import packageImg from '../../../assets/images/box-small.png';
import fragil from '../../../assets/images/fragil.png';
import foodGrade from '../../../assets/images/foodGrade.png';
import flammable from '../../../assets/images/flammable.png';
import handleWithCare from '../../../assets/images/handleWithCare.png';
import animal from '../../../assets/images/animal.png';
import greyLine from '../../../assets/images/greyLine.png';
import useStyles from './package-card-style';
import { useTranslation } from 'react-i18next';
import DeliverPackage from '../../modals/deliver-package/deliver-package';
import axios from 'axios';
import data from '../../../utils/constants';
import { connect } from 'react-redux';
import RejectModal from '../../modals/reject-modal/reject-modal';

const PackageCard = ({userData, ...props}) =>{

    const classes = useStyles();
    const { t } = useTranslation();
    const [status, setStatus] = useState(props.status);
    const [isFlipped, setIsFlipped] = useState(false);
    const [millis, setMillis] = useState(300000);
    const [errorInVerifyCode, setErrorInVerifyCode] = useState(false);


    useEffect(()=>{}, [status])

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const requestPackage = (rideId, packageId, packageUserId) =>{
        axios.post(data.baseUrl + '/packages/' + packageId + '/statuses', {
            rideId: rideId,
            packageUserId: packageUserId
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        } ).then((response)=>setStatus(response.data.data)).catch((error)=>console.log(error))
    }

    const updateStatus = (newStatus, packageId, statusId, reasonForReject) => {
        axios.put(data.baseUrl + '/packages/' + packageId + '/statuses/' + statusId, {
            status: newStatus,
            rejectReason: reasonForReject ? reasonForReject : ''
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        }).then((response)=> props.statusUpdated()).catch((error)=>props.statusUpdated())
    } 

    /* const deliverPackage = (newStatus, rideId, statusId) => {
        axios.put(data.baseUrl + '/rides/' + rideId + '/statuses/' + statusId, {
            status: newStatus,
            rejectReason: rejectReason
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        }).catch((error)=>console.log(error))
    } */

    const verifyCode = (code) => {
        axios.get(data.baseUrl + '/packages/' + props.packageId + '/deliver-validation/' + code, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        }).then(()=>props.statusUpdated()).catch((error)=>setErrorInVerifyCode(true))
    }

    const createDeliveryCode = (packageId) =>{
        axios.post(data.baseUrl + '/packages/' + packageId + '/deliver-validation', {
            message: 'Code for delivery is '
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        }).catch((error)=>{
            setMillis(error.response.data.errors[0].message)
            console.log('error from creating code for delivery: ', error);
        }).finally(()=>console.log(millis))
    }

    const handleClick = () => {
        const temp = isFlipped;
        setIsFlipped(!temp);
    }

    // filter - departureDate [interactions] - cel mai apropiat de departureDate [package]

    // status - null - daca interactions length greater than 0 - cere
    // status - null - interactions empty array - adauga transport
    // prima interactiune avem post
    // iar dupa update

    // IMPLEMENTARE MODAL - ADAUGA PACHET SI ADAUGA TRANSPORT - DATE PREPOPULATE DIN SEARCH VALUES

    useEffect(()=>{}, [props])
    

    function getFrontButtons(){

        if(status === null && props.interactions && props.interactions.length === 0){
            return(
                <Grid container item xs={10} justifyContent = 'center'>
                    <Link to={'/add-transport'} style={{color: 'inherit', textDecoration: 'none'}}>
                        <PrimaryButton variant='contained' size='medium' fullWidth>{t("AddRide")}</PrimaryButton>
                    </Link>
                </Grid>
            )
        } else {
            if(status === null && props.interactions && props.interactions.length > 0){
                return(
                    <Grid container item xs={10} justifyContent = 'center'>
                        <PrimaryButton variant='contained' size='medium' fullWidth onClick={()=>requestPackage(props.interactions[0].rideId, props.packageId, props.userId)}>{t("RequestPackage")}</PrimaryButton>
                    </Grid>
                )
            } else {
                if(status){
                    switch(status.status){
                        case 1:
                            return(
                                <Grid container item xs={10} justifyContent = 'center'>
                                    <Box my='10%' className='Secondary-color' fontSize='18px' fontWeight='500'>{t("DriverCardWaitingStatus")}</Box>
                                </Grid>
                            )
                        case 2:
                            return(
                                <Grid container justifyContent = 'center'  spacing={2} style={{marginBottom: '10px'}}>
                                    <Grid container item xs={10} sm={4} justifyContent = 'center'>
                                        <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(1, props.packageId, status.id)} fullWidth>
                                            {t("Approve")}
                                        </GreenCaroButton>
                                    </Grid>
                                    <Grid container item xs={10} sm={4} justifyContent = 'center'>
                                        <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(2, props.packageId, status.id)} fullWidth>
                                            {t("Refuse")}
                                        </SecondaryButton>
                                    </Grid>
                                </Grid>
                            )
                        case 3:
                            return(
                                <Grid container justifyContent = 'center'  spacing={2} style={{marginBottom: '10px'}}>
                                    <Grid container item xs={10} justifyContent = 'center'>
                                        <GreenCaroButton variant='contained' size='medium' onClick={()=>updateStatus(4, props.packageId, status.id)} fullWidth>{t('PickUp')}</GreenCaroButton>
                                    </Grid>
                                    <Grid container item xs={10} justifyContent = 'center'>
                                        <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                                    </Grid>
                                </Grid>
                            )
                        case 4:
                            return(
                                <Grid container justifyContent = 'center'  spacing={2} style={{marginBottom: '10px'}}>
                                    <Grid container item xs={10} justifyContent = 'center'>
                                        <GreenCaroButton variant='contained' size='medium' onClick={()=>updateStatus(4, props.packageId, status.id)} fullWidth>{t('PickUp')}</GreenCaroButton>
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
                                        <Box my='5%' className='Secondary-color' fontSize='18px' fontWeight='500'>{status.rejectReason}</Box>
                                    </Grid>
                                </Grid>
                            )
                        case 7:
                            return(
                                <Grid container item xs={8} justifyContent='center'>
                                    <Box my='10%' className='Secondary-color' fontSize='18px' fontWeight='500'>
                                        {t('WaitingDelivery')}
                                    </Box>
                                </Grid>
                            )
                        case 8:
                            return(
                                <Grid container item xs={10} justifyContent = 'center'>
                                    <Grid container item xs={10} justifyContent='center'>
                                        <Box mb='5%' className='Secondary-color' fontSize='18px' fontWeight='500'>
                                            {t('WaitingPickUpAccept')}
                                        </Box>
                                    </Grid>
                                    <Grid container item xs={10} justifyContent = 'center'>
                                        <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
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
                                            <GreenCaroButton variant='contained' size='small' onClick={()=>updateStatus(5, props.packageId, status.id)} fullWidth>
                                                {t("Yes")}
                                            </GreenCaroButton>
                                        </Grid>
                                        <Grid container item xs={12} sm={5} justifyContent = 'center'>
                                            <SecondaryButton variant='contained' size='small' onClick={()=>updateStatus(6, props.packageId, status.id)} fullWidth>
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
                                <Grid container justifyContent = 'center'  spacing={2} style={{marginBottom: '10px'}}>
                                    <DeliverPackage codeExpiryTime={millis} sendMessage={()=>{createDeliveryCode(props.packageId)}} deliver={(code)=> verifyCode(code)} deliveryHadErrors={errorInVerifyCode}/>
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
                            return 'default';
                    }
                }
            }
        }

    }

    function getBackButtons(){
        if(status && status.status >= 3)
        return(
            <Grid container item xs={8} justifyContent = 'center' >
                <RejectModal rejectWithReason={(reason)=>updateStatus(3, props.packageId, status.id, reason)}/>
            </Grid>
        )  
    }

    return (
        <Fragment>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' cardStyles={{back: {transformStyle: 'unset'}}} containerClassName={'CardFlipContainer'}>
            
            <Box paddingBottom={1} height='520px' border={2} borderColor='grey.400' borderRadius='10px' display='flex' justifyContent='center' boxShadow={3}>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={packageImg} className={classes.boxesImageStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <Box marginTop={1} fontSize={18}>{props.name}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} spacing={1} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('Quantity')} {props.packageQuantity}</Box>
                        <Box px={1} fontSize={14}>{t('Sizing')} {props.dimensions}</Box>
                        <Box px={1} fontSize={14}>{t('Weight')} {props.weight}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} spacing={1}justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('PickupDate')}: {props.departureDate}</Box>   
                        <Box px={1} fontSize={14}>{t('PickupAddress')}: {props.departureAddress}</Box>
                        <Box px={1} fontSize={14}>{t('DriverCardDestinationAddress')} {props.destinationAddress}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <Box width='100%' textAlign='center' fontSize={16}>{t('Price')}</Box>  
                        <Box width='100%' textAlign='center' fontSize={22}>{props.price}</Box>
                    </Grid>
                    <Grid container item xs={12} xl={10} justifyContent = 'space-around' >
                    <img src={fragil} className={props.packageSpecialMention.isFragil ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={foodGrade} className={props.packageSpecialMention.isFoodGrade ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={flammable} className={props.packageSpecialMention.isFlammable ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={handleWithCare} className={props.packageSpecialMention.isHandleWithCare ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={animal} className={props.packageSpecialMention.isAnimal ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    </Grid>
                    {getFrontButtons()}
                </Grid>
            </Box>

            <Box paddingBottom={1} height='520px' border={2} borderColor='grey.400' borderRadius='10px' display='flex' justifyContent='center' boxShadow={3}>
                <Grid container justifyContent='center'>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14} marginTop='20px'>{t('Quantity')} {props.packageQuantity}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('Sizing')} {props.dimensions}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('Weight')} {props.weight}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t("User")}: {props.sender}</Box>   
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>Telefon: {props.senderPhone}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('PickupAddress')} {props.departureAddress}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('PickupDate')} {props.departureDate}</Box>   
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start' >
                        <Box px={1} fontSize={14}>{t('DriverCardDestinationAddress')} {props.destinationAddress}</Box>   
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start' >
                        <Box px={1} fontSize={14}>{t("ContactPerson")}: {props.destinatary}</Box>   
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start' >
                        <Box px={1} fontSize={14}>{t("PhoneNumber")}: {props.destinataryPhone}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'flex-start' >
                        <Box width='1' px={1} fontSize={14} paddingRight='25px'>
                           {t("DriverCardDetailsButton")}
                            <Box width='1' borderRadius='15px' height='90px' marginY='10px' padding='8px' className={classes.detailsBox}> {props.details}</Box>
                        </Box>
                    </Grid>
                    {getBackButtons()}
                    <Grid container item xs={8} style={{marginTop:'5px'}} justifyContent='center'>
                        <PrimaryButton variant='contained' size='small' onClick={handleClick} fullWidth>
                            {t('DriverCardBackButton')}
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Box>
            </ReactCardFlip>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({userData: state.userData})

export default connect(mapStateToProps, null)(PackageCard)