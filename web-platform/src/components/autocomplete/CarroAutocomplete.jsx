import React from 'react';
import CarroTextField from '../textField/CarroTextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CarroAutocomplete =(props)=>{

    return(
        <Autocomplete
            disabled={props.disabled}
            options={props.options}
            autoHighlight
            value={props.value}
            getOptionLabel={(option) => option}
            renderOption={(option) => (
                        <React.Fragment>
                            {option} 
                        </React.Fragment>
            )}
            renderInput={(params) => (
                <CarroTextField
                    {...params}
                    label={props.label}
                    variant="outlined"
                    inputProps={{
                        ...params.inputProps, // disable autocomplete and autofill
                    }}
                    fullWidth
                />
            )}
            onChange={props.onChange}
            {...props}
            fullWidth
        />
    );

};

export default CarroAutocomplete;