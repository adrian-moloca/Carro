import React from 'react';
import CarroTextField from '../textField/CarroTextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CarroAutocomplete =(props)=>{

    return(
        <Autocomplete
            value={props.value}
            onChange={props.onChange}
            disabled={props.disabled}
            options={props.options}
            getOptionSelected={(option, value) => option.id === value.id}
            autoHighlight
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
                fullWidth/>
            )}
            size={props.size}
            fullWidth
        />
    );

};

export default CarroAutocomplete;