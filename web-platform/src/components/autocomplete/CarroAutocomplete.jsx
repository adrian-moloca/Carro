import React from 'react';
import CarroTextField from '../textField/CarroTextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const CarroAutocomplete =(props)=>{

    return(
        <Autocomplete
                        options={props.options}
                        autoHighlight
                        autoSelect
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
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                                fullWidth
                            />
                        )}
                        onChange={props.onChange}
                        fullWidth
                    />
    );

}

export default CarroAutocomplete;