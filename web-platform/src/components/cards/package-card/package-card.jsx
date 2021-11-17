import React, {Fragment, useState} from 'react';
import {Box, Grid } from '@material-ui/core';
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
import RejectModal from '../../modals/reject-modal/reject-modal';

const PackageCard = (props) =>{

    const classes = useStyles();
    const { t } = useTranslation();
    const[isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        const temp = isFlipped;
        setIsFlipped(!temp);
    }

    

    function getFrontButtons(status, rideExists){
        switch(status){
            case 0:
                if(rideExists)
                    return(
                        <Grid container item xs={10} justifyContent = 'center'>
                            <PrimaryButton variant='contained' size='medium' fullWidth>{t("RequestPackage")}</PrimaryButton>
                        </Grid>
                    );
                else
                    return(
                        <Grid container item xs={10} justifyContent = 'center'>
                            <PrimaryButton variant='contained' size='medium' fullWidth>{t("AddRide")}</PrimaryButton>
                        </Grid>
                    );
            case 1:
                    return(
                        <Grid container item xs={10} justifyContent = 'center'>
                            <Box my='31%' className='Secondary-color' fontSize='18px' fontWeight='500'>{t("DriverCardWaitingStatus")}</Box>
                        </Grid>
                    );
            case 8:
                    return(
                        <Grid container justifyContent = 'center' spacing={2}>
                            <Grid container item xs={10} justifyContent = 'center'>
                                <GreenCaroButton variant='contained' size='medium' fullWidth>
                                    {t("TakeOver")}
                                </GreenCaroButton>
                            </Grid>
                            <Grid container item xs={10} justifyContent = 'center'>
                                <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                            </Grid>
                        </Grid>
                    );
            case 10:
                    return(
                        <Grid container justifyContent = 'center'  spacing={2}>
                            <DeliverPackage/>
                            <Grid container item xs={10} justifyContent = 'center'>
                                <PrimaryButton variant='contained' size='medium' onClick={handleClick}fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                            </Grid>
                        </Grid>
                    );
            case 6:
                return(
                    <Grid container justifyContent = 'center'>
                        <Grid container item xs={10} justifyContent = 'center'>
                            <Box mt='5%' className='Secondary-color' fontSize='18px' fontWeight='500' textAlign='center'>{t('DeclinedWithReason')}</Box>
                        </Grid>
                        <Grid container item xs={10} justifyContent = 'center'>
                            <Box my='3%' className='Secondary-color' fontSize='18px' fontWeight='500'>Nu mai plec</Box>
                        </Grid>
                    </Grid>
                );
            case 2:
                return(
                    <Grid container justifyContent = 'center'  spacing={2}>
                        <Grid container item xs={10} sm={4} justifyContent = 'center'>
                            <GreenCaroButton variant='contained' size='medium' fullWidth>
                                {t("Approve")}
                            </GreenCaroButton>
                        </Grid>
                        <Grid container item xs={10} sm={4} justifyContent = 'center'>
                            <RejectModal />
                        </Grid>
                    </Grid>
                );
        }

    }

    function getBackButtons(status){
        switch(status){
            case 8:
                return(
                    <Grid container justifyContent = 'center'  spacing={2}>
                        <Grid container item xs={10} justifyContent = 'center'>
                            <SecondaryButton variant='contained' size='medium' fullWidth>
                                {t("Reason")}
                            </SecondaryButton>
                        </Grid>
                        <Grid container item xs={10} justifyContent = 'center'>
                            <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t("DriverCardBackButton")}</PrimaryButton>
                        </Grid>
                    </Grid>
                );
            case 10:
                return(
                    <Grid container item xs={10} justifyContent = 'center'>
                        <Box width='1'marginTop='20%'>
                            <PrimaryButton variant='contained' size='medium' onClick={handleClick} fullWidth>{t("DriverCardBackButton")}</PrimaryButton>
                        </Box>
                    </Grid>
                );
        }
    }

    return (
        <Fragment>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' containerClassName={'CardFlipContainer'}>
            
            <Box paddingBottom='10%' height='550px' border={2} borderColor='grey.400' borderRadius='10px' display='flex' justifyContent='center'>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={packageImg} className={classes.boxesImageStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} spacing={1} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('Quantity')} {props.packageQuantity}</Box>
                        <Box px={1} fontSize={14}>{t('Sizing')} {props.packageDimensions}</Box>
                        <Box px={1} fontSize={14}>{t('Weight')} {props.packageWeight}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} spacing={1}justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t('PickupDate')} {props.departureDate}</Box>   
                        <Box px={1} fontSize={14}>{t('PickupAddress')} {props.departureAddress}</Box>
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
                    <img src={fragil} className={props.specialMention.isFragile ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={foodGrade} className={props.specialMention.isFoodGrade ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={flammable} className={props.specialMention.isFlammable ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={handleWithCare} className={props.specialMention.isHandleWithCare ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    <img src={animal} className={props.specialMention.isAnimal ? classes.advStyle : classes.advNoneStyle} alt={""}/>
                    </Grid>
                    {getFrontButtons(props.status, props.rideExists)}
                </Grid>
            </Box>

            <Box paddingBottom='10%' width='0.9' height='550px' border={2} borderColor='grey.400' borderRadius='10px' display='flex' justifyContent='center'>
                <Grid container justifyContent='center'>
                    <Grid container item xs={12} justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14} marginTop='20px'>{t('Quantity')} {props.packageQuantity}</Box>
                        <Box px={1} fontSize={14}>{t('Sizing')} {props.packageDimensions}</Box>
                        <Box px={1} fontSize={14}>{t('Weight')} {props.packageWeight}</Box>
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} spacing={1}justifyContent = 'flex-start'>
                        <Box px={1} fontSize={14}>{t("User")} {props.sender}</Box>   
                        <Box px={1} fontSize={14}>Telefon: {props.senderPhone}</Box>   
                        <Box px={1} fontSize={14}>{t('PickupAddress')} {props.departureAddress}</Box>
                        <Box px={1} fontSize={14}>{t('PickupDate')} {props.departureDate}</Box>   
                    </Grid>
                    <Grid container item xs={12} justifyContent = 'center'>
                        <img src={greyLine} className={classes.greyLinesStyle} alt={""}/>
                    </Grid>
                    <Grid container item xs={12} spacing={1} justifyContent = 'flex-start' >
                        <Box px={1} fontSize={14}>{t('DriverCardDestinationAddress')} {props.destinationAddress}</Box>   
                        <Box px={1} fontSize={14}>{t("ContactPerson")} {props.destinatary}</Box>   
                        <Box px={1} fontSize={14}>{t("PhoneNumber")} {props.destinataryPhone}</Box>
                        <Box width='1' px={1} fontSize={14} paddingRight='25px'>
                           {t("DriverCardDetailsButton")}
                            <Box width='1' borderRadius='15px' height='90px' marginY='10px' padding='8px' className={classes.detailsBox}> {props.details}</Box>
                        </Box>
                    </Grid>
                    {getBackButtons(props.status)}
                </Grid>
            </Box>
            </ReactCardFlip>
        </Fragment>
    );
};

export default PackageCard;