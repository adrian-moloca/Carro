import React from 'react';
import { Select, InputAdornment, MenuItem } from '@material-ui/core';
import CarroTextField from '../textField/CarroTextField';
import {Country} from 'country-state-city';

const PhoneTextField = (props) =>{

    return(
        <CarroTextField 
            label='Numar de telefon' 
            variant='outlined' 
            value={props.number} 
            onChange={props.handleChangeNumber} 
            InputProps={{startAdornment: 
                    <InputAdornment position='start'>
                        <Select value={props.countryPhoneCode} onChange={props.handleSelectCountry}>
                            {Country.getAllCountries().map((country)=>(
                                <MenuItem key={country.phonecode} value={country.phonecode}>
                                    {country.name} +{country.phonecode}
                                </MenuItem> 
                            ))}
                        </Select>
                    </InputAdornment>}} fullWidth/>
    );

}

export default PhoneTextField;