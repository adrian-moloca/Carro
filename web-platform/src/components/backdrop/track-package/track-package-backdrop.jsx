import React, {Fragment} from 'react';
import {Container, Grid, Box, Backdrop } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import {Close} from '@material-ui/icons';
import useStyles from './track-package-backdrop-style';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { useTranslation } from "react-i18next";
const MyBackdrop = withStyles({
    '& element.style':{
        visibility: 'visible',
    },
    /* '.MuiBackdrop-root' */
    root:{
        zIndex: '2',
        backgroundColor: 'black 0.7',
    },

})(Backdrop);


const BackdropTrackPackage = (props) =>{
    const { t } = useTranslation();
    const classes = useStyles();

    return(

        <MyBackdrop id='backdrop' open={props.open} onClick={props.clicked}>
            <Container className={classes.containerBackdrop}>
                <Box borderBottom='2px'>
                    <Grid container xs={12}>
                        <Grid container item xs={10} justifyContent='flex-start'>
                            <Box fontSize='18px' color='grey.500'>{t("TrackPackage")}</Box>
                            </Grid>
                        <Grid container item xs={2} justifyContent='flex-end'>
                            <IconButtonNoVerticalPadding onClick={props.clickedClose}>
                                <Close />
                            </IconButtonNoVerticalPadding>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container justifyContent='center'>
                    {props.packageLocation ? 
                        <Fragment>
                            <Grid container item xs={5} justifyContent='center'>
                                <Box textAlign='center' fontSize='22px' paddingY='5%'>
                                    {t("YourPackage")} '{props.departure}-{props.destination}' {t("PackageAddInDate")} {props.departureDate}{t("LocationPlace")}
                                </Box>    
                            </Grid>    
                            <Grid container item xs={10} justifyContent='center'>
                                <Box  paddingY='10%' textAlign='center'  fontSize='35px' fontWeight='500' className={'Primary-color'}>
                                    {props.packageLocation}
                                </Box>
                            </Grid>
                        </Fragment> :   <Fragment>
                                            <Grid container item xs={12} justifyContent='center'>
                                                <Box textAlign='center' fontSize='22px' paddingY='5%' width='50%'>
                                                    {t("NoPackageInfo")}
                                                </Box>    
                                            </Grid>
                                            <Grid container item xs={12} justifyContent='center' >
                                                <Box textAlign='center' fontSize='22px' paddingY='5%' width='50%'>
                                                    {t("ContactCourier")}
                                                </Box>    
                                            </Grid>
                                        </Fragment>}
                    <Grid container item xs={6} justifyContent="center">
                                <SecondaryButton variant='outlined' onClick={props.clickedClose}>{t("CloseButton")}</SecondaryButton>     
                    </Grid>
               </Grid>
            </Container>
        </MyBackdrop>

    );

}

export default BackdropTrackPackage;