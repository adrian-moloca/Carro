import React from 'react';
import {Container, Grid, Box, Backdrop } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import useStyles from './edit-package-backdrop-style';
import { Close } from '@material-ui/icons';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import FormPackage from './form-package/form-package';
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


const BackdropEditPackage = (props) =>{
    const { t } = useTranslation();
    const classes = useStyles();

    return(

        <MyBackdrop open={props.open} onClick={props.clicked}  className='backdrop'>
            <Container className={classes.containerBackdrop}>
                <Box borderBottom='2px' borderColor='black'>
                    <Grid container xs={12}>
                        <Grid container item xs={10} justifyContent='flex-start'>
                            <Box fontSize='18px' color='grey.500'>{t("EditButton")}</Box>
                        </Grid>
                        <Grid container item xs={2} justifyContent='flex-end'>
                            <IconButtonNoVerticalPadding onClick={props.clickedClose}>
                                <Close />
                            </IconButtonNoVerticalPadding>
                        </Grid>
                    </Grid>
                </Box>
                <FormPackage/>
               <Grid container xs={12} justifyContent='space-around'>
                    <Grid container item xs={3} justifyContent="center">
                                <SecondaryButton variant='outlined' onClick={props.clickedClose} fullWidth>{t("CloseButton")}</SecondaryButton>     
                    </Grid>
                    <Grid container item xs={3} justifyContent="center">
                                <GreenCaroButton variant='contained' fullWidth>{t("SaveButton")}</GreenCaroButton>
                    </Grid>
               </Grid>
            </Container>
        </MyBackdrop>

    );

}

export default BackdropEditPackage;