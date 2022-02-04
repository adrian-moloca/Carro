import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, Grid, Avatar} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import ReactCardFlip from 'react-card-flip';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SelectDriver from '../../modals/driver-select/driver-select';
import useStyles from './ride-card-style';
import { useTranslation } from 'react-i18next';
import RejectModal from '../../modals/reject-modal/reject-modal';
import SeeProfileBtn from '../../buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn';
import { fetchCourierProfile} from '../../../redux/actions/CourierActions';
import { connect } from 'react-redux';

const RideCard =({userData, fetchCourierProfile, ...props})=>{
    const { t } = useTranslation();
    const classes = useStyles();

    const[isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        const temp = isFlipped;
        setIsFlipped(!temp);
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

    function getFrontCardBtns(){

        if(props.statuses.length === 0 && props.interactions.length === 0){
            return(
                <Fragment>
                    <Grid container item xs={8} justifyContent='center'>
                        <Box mb='2%' width={1}>
                            <Link to={'/add-package'} style={{color: 'inherit', textDecoration: 'none'}}>
                                <PrimaryButton variant='contained' fullWidth>
                                    Adauga Pachet
                                </PrimaryButton>
                            </Link>
                        </Box>
                    </Grid>
                </Fragment>
            )
        } else {
            if(props.statuses.length === 0 && props.interactions.length > 0){
                props.interactions.map(pack => {
                        return(
                            <Fragment>
                                {/* <Grid container item xs={8} justifyContent = 'center'>
                                    <GreenCaroButton variant='contained' size='medium' fullWidth> */}
                                    <Box> Cere transport {pack.name}</Box>                  
                                    {/* </GreenCaroButton>
                                </Grid>    */}
                            </Fragment>         
                        )}
                )
            }  
        }
        /* switch(statuses){
            case 0:
                return (
                    <Fragment>
                        <SelectDriver 
                            image = {props.image}
                            name = {props.name}
                            driverRate = {props.driverRate}
                            plecare = {props.plecare}
                            destinatie = {props.destinatie}
                            tipTransport = {props.transportType}
                            dataPlecare = {props.departureDate}
                        />
                        <Grid container item xs={8} justifyContent='center'>
                            <Box mb='2%' width={1}>
                                <PrimaryButton variant='contained'  onClick = {handleClick} fullWidth>
                                    {t('DriverCardDetailsButton')}
                                </PrimaryButton>
                            </Box>
                        </Grid>
                    </Fragment>
                )
            case 9:
                return(
                    <Grid container item xs={8} justifyContent='center'>
                        <Box my='31%' className='Secondary-color' fontSize='18px' fontWeight='500'>
                            {t('DriverCardWaitingStatus')}
                        </Box>
                    </Grid>
                );
            case 2:{
                return(
                    <Grid container justifyContent = 'center'  spacing={2}>
                        <Grid container item xs={8} justifyContent = 'center'>
                            <GreenCaroButton variant='contained' size='medium' fullWidth>
                                {t("Approve")}
                            </GreenCaroButton>
                        </Grid>
                        <Grid container item xs={8} justifyContent = 'center'>
                            <RejectModal /* rejectReason={status.rejectReason} setRejectReason={props.setRejectReason}/>
                        </Grid>
                    </Grid>
                )
            }
            case 6:{
                return(
                    <Grid container item xs={8} justifyContent = 'center'  spacing={2}>
                        <Grid container item xs={12} justifyContent = 'center'>
                            <Box my='10' className='Secondary-color' fontSize='18px' fontWeight='500' textAlign='center'>{t('DeclinedWithReason')}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent = 'center'>
                            <Box my='10%' className='Secondary-color' fontSize='18px' fontWeight='500'>Nu mai plec</Box>
                        </Grid>
                    </Grid>
                );
            }
            case 8:{
                    return(
                        <Grid container item xs={8} justifyContent='center'>
                            <Box mt ='52%' mb='2%' width={1}>
                                <PrimaryButton variant='contained'  onClick={handleClick} fullWidth>
                                {t('DriverCardDetailsButton')}
                                </PrimaryButton>
                            </Box>
                        </Grid>
                    )   
                }
            case 10:{
                return(
                    <Grid container item xs={8} justifyContent='center'>
                        <Box mt ='52%' mb='2%' width={1}>
                            <PrimaryButton variant='contained'  onClick={handleClick} fullWidth>
                            {t('DriverCardDetailsButton')}
                            </PrimaryButton>
                        </Box>
                    </Grid>
                )   
            }
            default:{
                return('Unknown');
            }

        } */
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
        

    function getBackCardBtns(packageExists){
        
        switch(props.statuses){
            case 1:{
                if(packageExists)
                    return(
                        <Fragment>
                            <Grid container item xs={11} justifyContent='center'>
                                <Box my='4%'>
                                    <PrimaryButton variant='outlined' fullWidth>
                                        <Box fontSize='14px'>CERE TRANSPORT - CEVA MIC</Box>
                                    </PrimaryButton>
                                </Box>
                            </Grid>
                            <Grid container item xs={11} justifyContent='center'>
                                <Box my='2%'>
                                    <PrimaryButton variant='outlined' fullWidth>
                                        <Box fontSize='14px'>CERE TRANSPORT - CEVA MEDIU</Box>
                                    </PrimaryButton>
                                </Box>
                            </Grid>
                        </Fragment>
                    );
                else
                    return(
                        <Grid container item xs={8} justifyContent='center'>
                            <Box mt='59%' width={1}>
                                <Link to='/add-package' style={{textDecoration: 'none'}}>
                                    <PrimaryButton variant='outlined' fullWidth>ADAUGA PACHET</PrimaryButton>
                                </Link>
                            </Box>
                        </Grid>
                    );
            }
            case 8:{
                return(
                    <Grid container item xs={8} justifyContent='center'>
                        <RejectModal /* rejectReason={status.rejectReason} */ setRejectReason={props.setRejectReason}/>
                    </Grid>
                );
            
            }
            case 10:{
                return(
                    <Grid container item xs={8} justifyContent='center'>
                        <RejectModal diabled={true} /* rejectReason={status.rejectReason} */ setRejectReason={props.setRejectReason}/>
                    </Grid>
                );
            }
            default:{
                return('Unknown');
            }
        }
    }
   
    return(
        <Fragment>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' containerClassName={'CardFlipContainer'}>

            <Box display='flex' width='1' height='400px' p={1} borderRadius='10px' boxShadow={3}>
                <Grid container justifyContent='center'>
                    <Grid container item xs={12} justifyContent="flex-end">
                        <SeeProfileBtn onClick={()=>{
                                fetchCourierProfile(props.id, userData.token)
                        }} style={{fontSize:"12px", height: "30px"}}>
                                {t("ViewProfile")}
                        </SeeProfileBtn>
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
                    {getFrontCardBtns(props.statuses)}
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
                        <Box fontSize='15px' fontWeight='500' paddingBottom='4%'>{t('DriverCardEstimatedHours')} {props.estimatedTime}</Box>
                    </Grid>
                    {getBackCardBtns(props.packageExists)}
                    <Grid container item xs={8} justifyContent='center'>
                        <Box mt='8%' mb='2%' width={1}>
                            <PrimaryButton variant='contained'  onClick={handleClick} fullWidth>
                            {t('DriverCardBackButton')}
                            </PrimaryButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            
            </ReactCardFlip>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({userData: state.userData})
const mapDispatchToProps = (dispatch) =>({fetchCourierProfile: (userId, token) => dispatch(fetchCourierProfile(userId, token))})

export default connect(mapStateToProps, mapDispatchToProps)(RideCard);