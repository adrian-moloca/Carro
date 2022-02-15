import React, { Fragment, useState } from 'react';
import {Grid, Box, Container, Modal, Fade} from '@material-ui/core';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import Timer from '../../timer/timer';
import CarroTextField from '../../textField/CarroTextField';
import { Close } from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import useStyles from './deliver-package-style';
import { useTranslation } from "react-i18next";

const DeliverPackage=(props)=>{
    const { t } = useTranslation();
    const [sms, setSMS] = useState('');
    const [open, setOpen] = useState(false);
    const time = new Date();
    time.setMinutes(time.getMinutes() + 5);

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }
    

    const classes = useStyles();

    return(
        <Fragment>
            <Grid container item xs={10} justifyContent = 'center'>
                <GreenCaroButton variant='contained' size='medium' onClick={()=>{handleOpen(); props.sendMessage()}} fullWidth>
                    {t("Deliver")}
                </GreenCaroButton>
            </Grid>
            <Modal open={open} onClose={handleClose} className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Box borderBottom='2px' borderColor='black' marginBottom={5} width='100%'>
                            <Grid container justifyContent='space-between'>
                                <Grid container item xs={10} justifyContent='flex-start'>
                                    <Box fontSize='18px' color='grey.500'>{t("PackageDelivery")}</Box>
                                    </Grid>
                                <Grid container item xs={2} justifyContent='flex-end'>
                                    <IconButtonNoVerticalPadding onClick={handleClose}>
                                        <Close />
                                    </IconButtonNoVerticalPadding>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container justifyContent='center' spacing={3}>
                            <Grid container item xs={8}>
                                <CarroTextField  value = {sms} onChange={(e)=>setSMS(e.target.value)} variant ='outlined' label={t("CodeReceived")} fullWidth/>
                            </Grid>
                            <Grid container item xs={8} justifyContent='center'>
                                <Timer expiryTimestamp={time}/>
                            </Grid>
                        </Grid>
                        <Box width='100%' display='flex' justifyContent='center'>
                            <Grid container justifyContent='space-between'>
                                <Grid container item xs={5} justifyContent='flex-start'>
                                    <SecondaryButton variant='outlined' onClick={handleClose} fullWidth>{t("CloseButton")}</SecondaryButton>
                                </Grid>
                                <Grid container item xs={5} justifyContent='flex-end'>
                                    <GreenCaroButton variant='contained' onClick={()=>props.deliver(sms)} fullWidth>{t("DeliverButton")}</GreenCaroButton>
                                </Grid>
                            </Grid>
                        </Box> 
                    </Container>
                </Fade>
            </Modal>
        </Fragment>
    );
};

export default DeliverPackage;