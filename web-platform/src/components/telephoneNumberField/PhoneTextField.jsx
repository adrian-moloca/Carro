import React from 'react';
import { Select, InputAdornment, MenuItem } from '@material-ui/core';
import CarroTextField from '../textField/CarroTextField';
import {Country} from 'country-state-city';
import { useTranslation } from 'react-i18next';
const PhoneTextField = (props) =>{
    const { t } = useTranslation();
    return(
        <CarroTextField 
            type='number'
            label={t('PhoneNumber')} 
            variant='outlined'  
            InputProps={{startAdornment: 
                    <InputAdornment position='start'>
                        <Select value={props.countryPhoneCode} onChange={(event)=>props.handleSelectCountry(event)}>
                            {Country.getAllCountries().map((country, index)=>(
                                <MenuItem key={index} value={country.phonecode}>
                                    {country.name} {country.phonecode.includes('+') ? '': '+'}{country.phonecode}
                                </MenuItem> 
                            ))}
                        </Select>
                    </InputAdornment>}} 
            size={props.size}
            fullWidth
            {...props}/>
    );

}

export default PhoneTextField;