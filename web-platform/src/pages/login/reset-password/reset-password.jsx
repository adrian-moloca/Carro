import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Box, Grid} from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import CarroTextField from '../../../components/textField/CarroTextField';

const ResetPassword = () =>{

    return(
        <Container className={'Primary-container-style'}>
            <Box>
                <Grid container xs={12} spacing={3} justifyContent='center'>
                    <Grid container item xs={12} justifyContent='center'><Box  mt='5%' mb='3%' fontSize={22}>Resetare parola</Box></Grid>
                    <Grid container item xs={8} justifyContent='center'><CarroTextField label='Parola noua' variant='outlined' fullWidth/></Grid>
                    <Grid container item xs={8} justifyContent='center'><CarroTextField label='Confirmare parola' variant='outlined' fullWidth/></Grid>
                    <Grid container item xs={8} justifyContent='center'>
                        <Link to='/login/' style={{ textDecoration: 'none', width:'80%' }}>
                            <PrimaryButton variant='contained'  fullWidth>
                                SALVEAZA
                            </PrimaryButton>
                        </Link>
                    </Grid>
                </Grid>
             </Box>
        </Container>
    );
};

export default ResetPassword;