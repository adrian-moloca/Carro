import React, { Fragment, useState } from 'react';
import {Grid, Box, Container, Modal, Fade, ButtonBase} from '@material-ui/core';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import CarroTextField from '../../textField/CarroTextField';
import { Close } from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import useStyles from './close-account-modal-style';
import { useTranslation } from "react-i18next";

const CloseAccountModal=(props)=>{
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
           <Grid container item sm={12}  justifyContent="center">
                <ButtonBase onClick={handleOpen} style={{height: 25, width: 250, fontSize: "16px", fontWeight: 400, color: "#00000075", marginTop: "12px", textDecoration:"underline"}} fullWidth>
                    <Box px='10px'>{t('CloseAccount')}</Box>
                </ButtonBase>
            </Grid>
            <Modal open={open} onClose={handleClose} className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Box borderBottom='2px' borderColor='black' marginBottom={5} width='100%'>
                            <Grid container justifyContent='space-between'>
                                <Grid container item xs={10} justifyContent='flex-start'>
                                    <Box fontSize='18px' color='grey.500'>{t("CloseAccount")}</Box>
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
                                <CarroTextField  value = {props.closeReason} onChange={(e)=>props.setCloseReason(e.target.value)} variant ='outlined' label={t("WriteHereYourReasonCloseAccount")} fullWidth/>
                            </Grid>
                            <Grid container item xs={5} justifyContent='center'>
                                <SecondaryButton variant='outlined' onClick={()=>{handleClose(); props.closeAccountClicked()}} fullWidth>{t("CloseYourAccount")}</SecondaryButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>
    );
};

export default CloseAccountModal;