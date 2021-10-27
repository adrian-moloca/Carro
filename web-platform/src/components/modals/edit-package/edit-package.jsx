import React, { Fragment, useState } from 'react';
import {Container, Grid, Box, Modal, Fade} from '@material-ui/core';
import useStyles from './edit-package-style';
import { Close, Create } from '@material-ui/icons';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import FormPackage from './form-package/form-package';
import { useTranslation } from "react-i18next";

const EditPackage = (props) =>{
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
                <Create className={'Primary-color'} fontSize='small'/> 
            </IconButtonNoVerticalPadding >
            <Modal open={open} onClose={handleClose}  className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Box borderBottom='2px' borderColor='black'>
                            <Grid container>
                                <Grid container item xs={10} justifyContent='flex-start'>
                                    <Box fontSize='18px' color='grey.500'>{t("EditButton")}</Box>
                                </Grid>
                                <Grid container item xs={2} justifyContent='flex-end'>
                                    <IconButtonNoVerticalPadding onClick={handleClose}>
                                        <Close />
                                    </IconButtonNoVerticalPadding>
                                </Grid>
                            </Grid>
                        </Box>
                        <FormPackage/>
                    <Grid container justifyContent='space-around'>
                            <Grid container item xs={3} justifyContent="center">
                                        <SecondaryButton variant='outlined' onClick={handleClose} fullWidth>{t("CloseButton")}</SecondaryButton>     
                            </Grid>
                            <Grid container item xs={3} justifyContent="center">
                                        <GreenCaroButton variant='contained' fullWidth>{t("SaveButton")}</GreenCaroButton>
                            </Grid>
                    </Grid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>

    );

}

export default EditPackage;