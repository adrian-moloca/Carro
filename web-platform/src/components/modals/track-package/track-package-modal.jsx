import React, {Fragment, useState} from 'react';
import {Container, Grid, Box, Modal, Fade} from '@material-ui/core';
import {Close, TrackChanges} from '@material-ui/icons';
import useStyles from './track-package-modal-style';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { useTranslation } from "react-i18next";

const TrackPackageModal = (props) =>{
    const { t } = useTranslation();
    const classes = useStyles();

    const[open, setOpen] = useState(false);

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return(
        <Fragment>
            <IconButtonNoVerticalPadding onClick={handleOpen}>
                <TrackChanges className={'Primary-color'}  fontSize='small'/> 
            </IconButtonNoVerticalPadding >
            <Modal open={open} onClose={handleClose}  className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Box borderBottom='2px'>
                            <Grid container>
                                <Grid container item xs={10} justifyContent='flex-start'>
                                    <Box fontSize='18px' color='grey.500'>{t("TrackPackage")}</Box>
                                    </Grid>
                                <Grid container item xs={2} justifyContent='flex-end'>
                                    <IconButtonNoVerticalPadding onClick={handleClose}>
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
                                        <SecondaryButton variant='outlined' onClick={handleClose}>{t("CloseButton")}</SecondaryButton>     
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>

    );

}

export default TrackPackageModal;