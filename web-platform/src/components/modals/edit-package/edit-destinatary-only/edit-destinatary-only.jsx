import React, {Fragment, useState} from 'react';
import {Container, Grid, Box, Modal, Fade} from '@material-ui/core';
import useStyles from '../edit-package-style';
import { Close, EditOutlined } from '@material-ui/icons';
import CarroAutocomplete from '../../../autocomplete/CarroAutocomplete';
import SecondaryButton from '../../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../../buttons/GreenCaroButton/GreenCaroButton';
import IconButtonNoVerticalPadding from '../../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { Country, City }  from 'country-state-city';
import { useTranslation } from "react-i18next";
import CarroTextField from '../../../textField/CarroTextField';


const EditDestinatary = (props) =>{
    const { t } = useTranslation();
    const [destinationCountry, setDestinationCountry] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [open, setOpen] = useState(false);

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

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const classes = useStyles();

    return(
        <Fragment>
            <IconButtonNoVerticalPadding onClick={handleOpen}>
                <EditOutlined className={'Primary-color'}  fontSize='small'/> 
            </IconButtonNoVerticalPadding>
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
                        <Box paddingY='10%'>
                            <Grid container justifyContent='center' spacing={3}>
                                <Grid container item xs={6} justifyContent='center'>
                                            <CarroAutocomplete value={destinationCountry} options={getCountries()} label={t("SearchRideDestinationCountry")} onChange={(e)=>setDestinationCountry(e.target.textContent)}/>
                                </Grid>
                                <Grid container item xs={6} justifyContent='center'>
                                            <CarroAutocomplete value = {destinationCity} options={getCities(destinationCountry)} label={t("SearchRideDestinationCity")} onChange={(e)=>setDestinationCity(e.target.textContent)}/>
                                </Grid>
                                <Grid container item xs={12} justifyContent='center'>
                                            <CarroTextField variant='outlined' value = {destinationAddress} label={t("DriverCardDestinationAddress")} onChange={(e)=>setDestinationAddress(e.target.textContent)} fullWidth/>
                                </Grid>
                            </Grid>
                        </Box>
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

export default EditDestinatary;