import React from 'react';
import { Select, InputAdornment, MenuItem, Grid } from '@material-ui/core';
import CarroTextField from '../textField/CarroTextField';
import {Country} from 'country-state-city';
import { useTranslation } from 'react-i18next';
import phoneValidator from '../../utils/Functions/phone-validator';
const PhoneTextField = (props) =>{
    const { t } = useTranslation();
    return(
        <Grid container item justifyContent='space-between'>
            <Grid container item xs={3}>
                <CarroTextField select value={props.countryPhoneCode} onChange={props.handleSelectCountry} label={t('CountryPhonecode')}  fullWidth>
                    {Country.getAllCountries().map((country, index)=>(
                        <MenuItem key={index} value={country.phonecode}>
                            {country.name} {country.phonecode.includes('+') ? '': '+'}{country.phonecode}
                        </MenuItem> 
                    ))}
                </CarroTextField>
            </Grid>
            <Grid container item xs={8}>
                <CarroTextField 
                    type='number'
                    label={t('PhoneNumber')} 
                    variant='outlined'  
                    fullWidth
                    value={props.value}
                    onChange={props.onChange}
                    error={props.error}
                    helperText={props.helperText}/>
            </Grid>
        </Grid>
    );

}

export default PhoneTextField;