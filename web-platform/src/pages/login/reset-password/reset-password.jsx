import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Box} from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import CarroTextField from '../../../components/textField/CarroTextField';
const ResetPassword = () =>{
    return(
        <Container className={'Primary-container-style'}>
            <Box mt ={3 } mb={2} fontWeight={400} fontSize={25} textAlign={'center'}>Resetare parola</Box>
            <Box mt={5} display='flex' justifyContent='center'><CarroTextField label='Parola noua' variant='outlined'/></Box>
            <Box mt={3}display='flex' justifyContent='center'><CarroTextField label='Confirmare parola' variant='outlined'/></Box>
            <Box mt = {10} display='flex' justifyContent='center'>
                <Link to='/login/' style={{ textDecoration: 'none' }}>
                    <PrimaryButton variant='contained'>
                            SALVEAZA
                    </PrimaryButton>
                </Link>
             </Box>
        </Container>
    );
};

export default ResetPassword;