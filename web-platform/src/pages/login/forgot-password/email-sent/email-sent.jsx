import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Box, Grid} from '@material-ui/core';
import PrimaryButton from '../../../../components/buttons/primaryButton/primaryButton';
import { useTranslation } from "react-i18next";
const EmailSent = () => { 
    const { t } = useTranslation();
    return (
        <Container className={'Primary-container-style'}>
            <Grid container >
                <Grid container item xs={12} justifyContent='center'>
                    <Box mt ={3 } mb={2} fontWeight={400} fontSize={25} textAlign={'center'}>{t("ResetPassword")}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Box mt ={10} mb={2} fontWeight={400} fontSize={18} textAlign={'center'}>{t("ResetPwSend")}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Box mt = {10} display='flex' justifyContent='center'>
                        <Link to='/login/' style={{ textDecoration: 'none' }}>
                            <PrimaryButton variant='contained'>
                                {t("BackToLogin")}
                            </PrimaryButton>
                        </Link>
                    </Box>
                </Grid>
             </Grid>
        </Container>
    );
};

export default EmailSent;