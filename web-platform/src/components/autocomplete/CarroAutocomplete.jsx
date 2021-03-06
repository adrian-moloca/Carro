import React, {Fragment} from 'react';
import CarroTextField from '../textField/CarroTextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CarroAutocomplete =(props)=>{

    return(
        <Autocomplete
            value={props.value}
            onChange={props.onChange}
            disabled={props.disabled}
            options={props.options}
            autoComplete
            autoSelect
            getOptionLabel={(option) => option}
            getOptionSelected={(option) => option}
            renderOption={(option, index) => (
                        <Fragment key={index}>
                            {option} 
                        </Fragment>
            )}
            renderInput={(params) => (
                <CarroTextField
                    {...params}
                    label={props.label}
                    variant="outlined"
                    error={props.error}
                    /* inputProps={{
                        ...params.inputProps, // disable autocomplete and autofill
                    }} */
                fullWidth/>
            )}
            size={props.size}
            fullWidth
        />
    );

};

export default CarroAutocomplete;