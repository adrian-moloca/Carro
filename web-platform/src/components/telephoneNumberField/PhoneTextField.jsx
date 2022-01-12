import React from 'react';
import { MenuItem, Grid } from '@material-ui/core';
import CarroTextField from '../textField/CarroTextField';
import {Country} from 'country-state-city';
import { useTranslation } from 'react-i18next';

const PhoneTextField = (props) =>{
    const { t } = useTranslation();

    return(
        <Grid container item justifyContent='space-between'>
            <Grid container item xs={3}>
                <CarroTextField disabled={props.disabled} select value={props.countryPhoneCode} onChange={props.handleSelectCountry} label={t('CountryPhonecode')} size={props.size}  fullWidth>
                    {Country.getAllCountries().map((country, index)=>(
                        <MenuItem key={country.name} value={country.phonecode} style={{fontSize: 'smaller'}}>
                            {country.name} {country.phonecode.includes('+') ? '': '+'}{country.phonecode}
                        </MenuItem> 
                    ))}
                </CarroTextField>
            </Grid>
            <Grid container item xs={8}>
                <CarroTextField 
                    size={props.size}
                    type='number'
                    label={t('PhoneNumber')} 
                    variant='outlined'
                    disabled={props.disabled}  
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