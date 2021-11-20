import React, { useEffect, useLayoutEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroDatePicker from "../../../components/datePicker/CarroDatePicker";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import { useTranslation } from 'react-i18next';
import { getCountries, getCities} from "../../../utils/Functions/countries-city-functions";
import { addressValidator } from "../../../utils/Functions/input-validators";

const StepOne = (props) =>{
    const { t } = useTranslation();

    useEffect(()=>{
        props.setHasErrors(addressValidator(props.pickUpAddress))
    }, [props.pickUpAddress])

    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            <Grid container spacing={3} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={props.departureCountry} options={getCountries()}  label={t('SearchRideDepartureCountry')} onChange={(e)=>props.setDepartureCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={props.departureCity} options={getCities(props.departureCountry)} label={t('SearchRideDepartureCity')} onChange={(e)=>props.setDepartureCity(e.target.textContent)}/>
                </Grid>
               
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroTextField error={addressValidator(props.pickUpAddress)} helperText={addressValidator(props.pickUpAddress) ? t('ValidAddress') : ''}
                                          value = {props.pickUpAddress} onChange={(e)=>props.setPickUpAddress(e.target.value)}
                                          variant ='outlined' label={t('PickupAddress')} fullWidth/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroDatePicker label={t('PickupDate')} format='dd/MM/yyyy'
                                        value={props.departureDate} onChange={(date)=>props.setDepartureDate(date)} disablePast/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepOne;