import React, {useState, Fragment} from 'react';
import {Box, Grid} from '@material-ui/core';
import CarroDatePicker from '../../../components/datePicker/CarroDatePicker';
import CarroTextField from '../../../components/textField/CarroTextField';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';

const AddCardInStep = () =>{

    const[expDate, setExpDate] = useState(new Date());

    const handleExpDate =(date)=>{
        setExpDate(date);
    };

    return (
        <Fragment>
            <Grid Grid container item xs={12} justifyContent='center'>
                <Box mt='-4%' fontWeight={500} fontSize={20}>Adaugati card</Box>
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                <CarroTextField variant ='outlined' label='Numar card' fullWidth/>
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                        <CarroDatePicker dateValue={expDate} handleDateSelect={handleExpDate}
                            views={["month","year"]} defaultShow={expDate} format="MM/yyyy" openTo='month' label='Data expirare'/>  
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                <CarroTextField variant ='outlined' label='Nume complet' fullWidth/>
            </Grid>
            <Grid container item xs={5} justifyContent='center'>
                <CarroTextField variant ='outlined' label='CVV/CVC' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Box width='35%'>
                    <PrimaryButton variant ='contained' fullWidth>SALVEAZA</PrimaryButton>
                </Box>
            </Grid>
        </Fragment>
    );

}

export default AddCardInStep;