import React, {Fragment, useState} from 'react';
import {Box, Grid, SvgIcon } from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import BackdropDeliverPackage from '../../backdrop/deliver-package/deliver-package';
import packageImg from '../../../assets/images/box-small.png';
import fragileIco from '../../../assets/images/fragile.png';
import fishIco from '../../../assets/images/environmentdang.png';
import fireIco from '../../../assets/images/firedang.png';
import handboxIco from '../../../assets/images/boxHands.png';
import animalprintsIco from '../../../assets/images/animalPrints.png';
import greyLine from '../../../assets/images/greyLine.png';
import useStyles from './package-card-style';
import { useTranslation } from 'react-i18next';

const PackageCard = (props) =>{

    const classes = useStyles();
    const { t } = useTranslation();
    const[open, setOpen]=useState(false);
    const[isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        const temp = isFlipped;
        setIsFlipped(!temp);
    }
    const handleBtn =()=> setOpen(!open);
    const handleCloseBd=(event)=>{
        if(event.target === document.getElementById('backdrop'))
            setOpen(false)
    };
    const handleCloseBdByBtn=(event)=>{ setOpen(false)};

    function getFrontButtons(status, rideExists){
        switch(status){
            case 'free package':
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
            case 'package selected':
                    return(
                        <Grid container item xs={10} justifyContent = 'center'>
                            <Box my='31%' className='Secondary-color' fontSize='18px' fontWeight='500'>{t("DriverCardWaitingStatus")}</Box>
                        </Grid>
                    );
            case 'package added':
                    return(
                        <Grid container xs={10} justifyContent = 'center' spacing={2}>
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
            case 'package picked':
                    return(
                        <Grid container xs={10} justifyContent = 'center'  spacing={2}>
                            <Grid container item xs={10} justifyContent = 'center'>
                                <GreenCaroButton variant='contained' size='medium' onClick={handleBtn} fullWidth>
                                    {t("Delivery")}
                                </GreenCaroButton>
                            </Grid>
                            <Grid container item xs={10} justifyContent = 'center'>
                                <PrimaryButton variant='contained' size='medium' onClick={handleClick}fullWidth>{t('DriverCardDetailsButton')}</PrimaryButton>
                            </Grid>
                        </Grid>
                    );
            case 'package rejected':
                return(
                    <Grid container xs={10} justifyContent = 'center'  spacing={2}>
                        <Grid container item xs={10} justifyContent = 'center'>
                            <Box my='10' className='Secondary-color' fontSize='18px' fontWeight='500'>{t('DeclinedWithReason')}</Box>
                        </Grid>
                        <Grid container item xs={10} justifyContent = 'center'>
                            <Box my='10%' className='Secondary-color' fontSize='18px' fontWeight='500'>Nu mai plec</Box>
                        </Grid>
                    </Grid>
                );
        }

    }

    function getBackButtons(status){
        switch(status){
            case 'package added':
                return(
                    <Grid container xs={10} justifyContent = 'center'  spacing={2}>
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
            case 'package picked':
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
            
            <Box paddingBottom='10%' width='1' height='550px' border={2} borderColor='grey.400' borderRadius='10px' display='flex' justifyContent='center'>
                <Grid container xs ={12} spacing={2} justifyContent='center'>
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
                        <img src={fragileIco} className={classes.advSigns}/>
                        <img src={fishIco} className={classes.advSigns}/>
                        <img src={fireIco} className={classes.advSigns}/>
                        <img src={handboxIco} className={classes.advSigns}/>
                        <img src={animalprintsIco} className={classes.advSigns}/>
                    </Grid>
                    {getFrontButtons(props.status, props.rideExists)}
                </Grid>
            </Box>

            <Box paddingBottom='10%' width='1' height='550px' border={2} borderColor='grey.400' borderRadius='10px' display='flex' justifyContent='center'>
                <Grid container xs ={12} justifyContent='center'>
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
            <BackdropDeliverPackage open={open} clicked={handleCloseBd} clickedClose={handleCloseBdByBtn}/>
        </Fragment>
    );
};

export default PackageCard;