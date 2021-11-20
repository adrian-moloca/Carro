import React, { useLayoutEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import CarroDatePicker from "../../../components/datePicker/CarroDatePicker";
import CarroAutocomplete from "../../../components/autocomplete/CarroAutocomplete";
import { useTranslation } from 'react-i18next';
import { getCountries, getCities} from "../../../utils/Functions/countries-city-functions";
import { addressValidator } from "../../../utils/Functions/input-validators";

const StepOne = (props) =>{
    const { t } = useTranslation();
    const [departureDate, setDepartureDate] = useState(new Date());
    const [departureCountry, setDepartureCountry] = useState('');
    const [departureCity, setDepartureCity] = useState('');
    const [pickUpAddress, setPickUpAddress] = useState('');

    return(
        <Box display='flex' justifyContent='center' mt='5%'>
            <Grid container spacing={3} >
                <Grid container item xs={12} md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={departureCountry} options={getCountries()}  label={t('SearchRideDepartureCountry')} onChange={(e)=>setDepartureCountry(e.target.textContent)}/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent="center">
                            <CarroAutocomplete value={departureCity} options={getCities(departureCountry)} label={t('SearchRideDepartureCity')} onChange={(e)=>setDepartureCity(e.target.textContent)}/>
                </Grid>
               
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroTextField error={addressValidator(pickUpAddress)} helperText={addressValidator(pickUpAddress) ? t('ValidAddress') : ''} value = {pickUpAddress} onChange={(e)=>setPickUpAddress(e.target.value)} variant ='outlined' label={t('PickupAddress')} fullWidth/>
                </Grid>
                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                            <CarroDatePicker label={t('PickupDate')} format='dd/MM/yyyy'
                                        value={departureDate} onChange={(date)=>setDepartureDate(date)} disablePast/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepOne;