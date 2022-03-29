import React from 'react';
import { MenuItem, Grid } from '@material-ui/core';
import CarroTextField from '../textField/CarroTextField';
import {Country} from 'country-state-city';
import { useTranslation } from 'react-i18next';
import { phoneCodes } from './phone-codes';

const PhoneTextField = (props) =>{
    const { t } = useTranslation();

    return(
        <Grid container item justifyContent='space-between' style={{minHeight: "30px"}}>
            <Grid container item xs={4}>
                <CarroTextField disabled={props.disabled} select value={props.countryPhoneCode} onChange={props.handleSelectCountry} label={t('CountryPhonecode')} InputLabelProps={{style: {fontSize: "13px"}}}  style={{width: "85%"}} size={props.size}>
                    {Object.keys(phoneCodes).map((key, index)=>(
                        <MenuItem key={phoneCodes[key].name} value={phoneCodes[key].code} style={{fontSize: 'smaller'}}>
                            {phoneCodes[key].name} ({phoneCodes[key].code})
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