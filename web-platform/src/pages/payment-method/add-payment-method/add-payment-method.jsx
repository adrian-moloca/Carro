import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import AddCard from '../../../components/add-card/add-card';
import { withStyles } from '@mui/styles';

const GridCarro = withStyles({
    
        'spacing-xs-5':{
            margin: 0,
        },


})(Grid);


const AddPaymentMethod = () =>{

    return(
        <Container className='Primary-container-style'>
            <GridCarro container xs={12} spacing={5} justifyContent='center' >
                <Grid container item xs={12} justifyContent='center'>
                    <Box mb={3} fontSize={22} justifyContent='center' mt='3%'>
                        Metoda de plata
                    </Box>
                </Grid>
                <AddCard showSaveButton='true'/>
            </GridCarro>
        </Container>

    );

}

export default AddPaymentMethod;