import React, { useState } from 'react';
import {Grid, Backdrop, Box, Container,} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import Timer from '../../timer/timer';
import CarroTextField from '../../textField/CarroTextField';
import { Close } from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import useStyles from './deliver-package-style';


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

const BackdropDeliverPackage=(props)=>{

    const [sms, setSMS] = useState('');
    const time = new Date();
    time.setMinutes(time.getMinutes() + 5);
    

    const classes = useStyles();

    return(
        <MyBackdrop id='backdrop' open={props.open} onClick={props.clicked}>
            <Container className={classes.containerBackdrop}>
                <Box borderBottom='2px' borderColor='black' marginBottom={5} width='100%'>
                    <Grid container xs={12} justifyContent='space-between'>
                        <Grid container item xs={10} justifyContent='flex-start'>
                            <Box fontSize='18px' color='grey.500'>Predare pachet</Box>
                            </Grid>
                        <Grid container item xs={2} justifyContent='flex-end'>
                            <IconButtonNoVerticalPadding onClick={props.clickedClose}>
                                <Close />
                            </IconButtonNoVerticalPadding>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container xs={12} justifyContent='center' spacing={3}>
                    <Grid container item xs={8}>
                        <CarroTextField  value = {sms} onChange={(e)=>setSMS(e.target.value)} variant ='outlined' label='Cod primit' fullWidth/>
                    </Grid>
                    <Grid container item xs={8} justifyContent='center'>
                        <Timer expiryTimestamp={time}/>
                    </Grid>
                </Grid>
                <Box width='100%' display='flex' justifyContent='center'>
                    <Grid container xs={8} justifyContent='space-between'>
                        <Grid container item xs={5} justifyContent='flex-start'>
                            <SecondaryButton variant='outlined' onClick={props.clickedClose} fullWidth>INCHIDE</SecondaryButton>
                        </Grid>
                        <Grid container item xs={5} justifyContent='flex-end'>
                            <GreenCaroButton variant='contained' fullWidth>PREDARE</GreenCaroButton>
                        </Grid>
                    </Grid>
                </Box> 
            </Container>
        </MyBackdrop>
    );
};

export default BackdropDeliverPackage;