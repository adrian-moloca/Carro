import React, {useState, Fragment} from 'react';
import {Box, Grid, FormControlLabel} from '@material-ui/core';
import CarroDatePicker from '../datePicker/CarroDatePicker';
import CarroTextField from '../textField/CarroTextField';
import PrimaryButton from '../buttons/primaryButton/primaryButton';

const AddCard = (props) =>{

    return (
        <Fragment>
            <Grid Grid container item xs={12} justifyContent='center'>
                <Box mt={props.marginTop}fontWeight={500} fontSize={20}>Adaugati card</Box>
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                <CarroTextField value={props.cardNumber} onChange={props.cardNumberSet}
                variant ='outlined' label='Numar card' fullWidth/>
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                        <CarroDatePicker dateValue={props.expDate} handleDateSelect={props.expDateSet}
                            views={["month","year"]} format="MM/yy" openTo='month' label='Data expirare'/>  
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                <CarroTextField value ={props.completeName} onChange={props.completeNameSet}
                variant ='outlined' label='Nume complet' fullWidth/>
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                <CarroTextField value={props.cvv} onChange={props.cvvSet}
                variant ='outlined' label='CVV/CVC' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Box display={props.showSaveButton ? props.showSaveButton : 'none'} width={0.3} marginBottom={2}>
                    <PrimaryButton disabled = {props.cardNumber && props.expDate && props.completeName && props.cvv ? false : true} 
                                variant = 'contained' onClick={props.clickedSaveButton} fullWidth>Salveaza</PrimaryButton>
                </Box>
            </Grid>
        </Fragment>
    );

}

export default AddCard;