import React from 'react';
import { Select, InputAdornment, MenuItem } from '@material-ui/core';
import CarroTextField from '../textField/CarroTextField';
import {Country} from 'country-state-city';
import { useTranslation } from 'react-i18next';
const PhoneTextField = (props) =>{
    const { t } = useTranslation();
    return(
        <CarroTextField 
            label={t('PhoneNumber')} 
            variant='outlined'  
            value={props.inputValue}
            handleinputivalue={props.handleInputValue}
            InputProps={{startAdornment: 
                    <InputAdornment position='start'>
                        <Select value={props.countryphonecode} onChange={(event)=>console.log(event)}>
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