import React from 'react';
import {Container, Box,} from '@material-ui/core';
import PrimaryButton from '../../../../components/buttons/primaryButton/primaryButton';

const EmailSent = () => { 
    return (
        <Container className={'Primary-container-style'}>
             <Box mt ={3 } mb={2} fontWeight={400} fontSize={25} textAlign={'center'}>Resetare parola</Box>
             <Box mt ={10} mb={2} fontWeight={400} fontSize={18} textAlign={'center'}>Un link cu resetarea parolei a fost trimis la adresa de email!</Box>
             <Box mt = {10} display='flex' justifyContent='center'>
                 <PrimaryButton variant='contained'>
                        INAPOI LA AUTENTIFICARE
                 </PrimaryButton>
             </Box>
        </Container>
    );
};

export default EmailSent;