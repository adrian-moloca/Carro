import React, {useState} from 'react';
import {Container, Grid, Box, Backdrop } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import useStyles from '../edit-package-backdrop-style';
import { Close } from '@material-ui/icons';
import CarroAutocomplete from '../../../autocomplete/CarroAutocomplete';
import SecondaryButton from '../../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../../buttons/GreenCaroButton/GreenCaroButton';
import IconButtonNoVerticalPadding from '../../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { Country, City }  from 'country-state-city';
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


const BackdropEditDestinatary = (props) =>{
    const { t } = useTranslation();
    const [destinationCountry, setDestinationCountry] = useState('');
    const [destinationCity, setDestinationCity] = useState('');

    const getCountries = ()=> {
        const countries = [];
        Country.getAllCountries().map((country)=>(countries.push(country.isoCode)));
        return countries;
    }

    const getCities = (country) =>{
        const cities = [];
        City.getCitiesOfCountry(country).map((city)=>(cities.push(city.name)));
        return cities;
    }

    const classes = useStyles();

    return(
        <MyBackdrop id='backdrop' open={props.open} onClick={props.clicked}>
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
                <Box paddingY='10%'>
                    <Grid container xs={12} justifyContent='center' spacing={3}>
                        <Grid container item xs={6} justifyContent='center'>
                                    <CarroAutocomplete value={destinationCountry} options={getCountries()} label={t("SearchRideDestinationCountry")} onChange={(e)=>setDestinationCountry(e.target.textContent)}/>
                        </Grid>
                        <Grid container item xs={6} justifyContent='center'>
                                    <CarroAutocomplete value = {destinationCity} options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={(e)=>setDestinationCity(e.target.textContent)}/>
                        </Grid>
                    </Grid>
                </Box>
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

export default BackdropEditDestinatary;