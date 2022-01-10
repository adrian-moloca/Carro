import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, Grid} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import ReactCardFlip from 'react-card-flip';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import SelectDriver from '../../modals/driver-select/driver-select';
import useStyles from './ride-card-style';
import { useTranslation } from 'react-i18next';
import RejectModal from '../../modals/reject-modal/reject-modal';

const RideCard =(props)=>{
    const { t } = useTranslation();
    const classes = useStyles();

    const status = {...props.status}

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

    function getFrontCardBtns(status){
        
        switch(status){
            case 1:
                return (
                    <Fragment>
                        <SelectDriver 
                            image={props.image}
                            name={props.name}
                            driverRate={props.driverRate}
                            plecare={props.plecare}
                            destinatie= {props.destinatie}
                            tipTransport = {props.transportType}
                            dataPlecare = {props.departureDate}
                        />
                        <Grid container item xs={8} justifyContent='center'>
                            <Box mb='2%' width={1}>
                                <PrimaryButton variant='contained'  onClick={handleClick} fullWidth>
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
                            <RejectModal rejectReason={status.rejectReason} setRejectReason={props.setRejectReason}/>
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

        }
    }

    function getBackCardBtns(status, packageExists){
        
        switch(status){
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
                        <RejectModal rejectReason={status.rejectReason} setRejectReason={props.setRejectReason}/>
                    </Grid>
                );
            
            }
            case 10:{
                return(
                    <Grid container item xs={8} justifyContent='center'>
                        <RejectModal diabled={true} rejectReason={status.rejectReason} setRejectReason={props.setRejectReason}/>
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
                    <Grid container item xs={12} justifyContent='center'>
                        <img src={props.image} className={classes.profileImg} alt={""}/>
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
                    {getFrontCardBtns(status.status)}
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
                    {getBackCardBtns(status.status, props.packageExists)}
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

export default RideCard;