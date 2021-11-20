import React, { Fragment, useState } from 'react';
import {Grid, Box, Container, Modal, Fade} from '@material-ui/core';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import CarroTextField from '../../textField/CarroTextField';
import { Close } from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import useStyles from './reject-modal-style';
import { useTranslation } from "react-i18next";

const RejectModal=(props)=>{
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }
    

    const classes = useStyles();

    return(
        <Fragment>
           <Grid container item justifyContent = 'center'>
                <SecondaryButton disabled={props.disabled} variant='contained' size='medium' onClick={handleOpen} fullWidth>
                    {t("Refuse")}
                </SecondaryButton>
            </Grid>
            <Modal open={open} onClose={handleClose} className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Box borderBottom='2px' borderColor='black' marginBottom={5} width='100%'>
                            <Grid container justifyContent='space-between'>
                                <Grid container item xs={10} justifyContent='flex-start'>
                                    <Box fontSize='18px' color='grey.500'>{t("Refuse")}</Box>
                                    </Grid>
                                <Grid container item xs={2} justifyContent='flex-end'>
                                    <IconButtonNoVerticalPadding onClick={handleClose}>
                                        <Close />
                                    </IconButtonNoVerticalPadding>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container justifyContent='center' spacing={5}>
                            <Grid container item xs={8} justifyContent='center'>
                                <CarroTextField  value = {props.rejectReason} onChange={(e)=>props.setRejectReason(e.target.value)} variant ='outlined' label={t("WriteHereYourReason")} fullWidth/>
                            </Grid>
                            <Grid container item xs={5} justifyContent='center'>
                                <SecondaryButton variant='outlined' onClick={handleClose} fullWidth>{t("Refuse")}</SecondaryButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>
    );
};

export default RejectModal;