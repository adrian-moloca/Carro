import React from 'react';
import {Container, Grid, Box, Backdrop } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import useStyles from './edi-package-backdrop-style';
import { Close } from '@material-ui/icons';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import FormPackage from './form-package/form-package';

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

    const classes = useStyles();

    return(

        <MyBackdrop id='backdrop' open={props.open} onClick={props.clicked}>
            <Container className={classes.containerBackdrop}>
                <Box borderBottom='2px' borderColor='black'>
                    <Grid container xs={12}>
                        <Grid container item xs={10} justifyContent='flex-start'>
                            <Box fontSize='18px' color='grey.500'>Editeaza pachetul</Box>
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
                                <SecondaryButton variant='outlined' onClick={props.clickedClose} fullWidth>INCHIDE</SecondaryButton>     
                    </Grid>
                    <Grid container item xs={3} justifyContent="center">
                                <GreenCaroButton variant='contained' fullWidth>SALVEAZA</GreenCaroButton>
                    </Grid>
               </Grid>
            </Container>
        </MyBackdrop>

    );

}

export default BackdropEditPackage;