import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Grid } from '@material-ui/core';
import Timer from '../../../components/timer/timer';
import CarroTextField from '../../../components/textField/CarroTextField';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
import { withStyles } from '@material-ui/styles';
import { useTranslation } from "react-i18next";
const MyGrid = withStyles({'spacing-xs-4':{margin: 0}})(Grid)

const PhoneNumberVerification = ()=>{
    const { t } = useTranslation();
    const[sms, setSMS] = useState('');
    const time = new Date();
    time.setMinutes(time.getMinutes() + 5);
    return(
        <Container className = 'Primary-container-style'>
            <MyGrid container justifyContent='center' spacing={4}>
                <Grid container item xs={10} justifyContent='center'>
                    <Box  mb={3} fontSize={22} justifyContent='center' mt='3%'>
                    {t("ConfirmPhoneNumber")}
                    </Box>
                </Grid>
                <Grid container item xs={10} justifyContent='center'>
                    <Box  mb={3} fontSize={18} justifyContent='center' mt='3%'>
                        {t("PhoneSMS")}
                    </Box>
                </Grid>
                <Grid container item xs={10} xl={6} justifyContent='center'>
                        <CarroTextField value = {sms} onChange={(e)=>setSMS(e.target.value)} variant ='outlined' label= {t("PhoneSMS")} fullWidth/>
                </Grid>
                <Grid container item xs={10} justifyContent='center'>
                    <Timer expiryTimestamp={time}/>
                </Grid>
                <Grid container item xs={10} xl={10} justifyContent='space-between'>
                    <Grid container item xs={5} xl={5}>
                        <Link to='/register' style={{textDecoration:'none', width:'100%'}}>
                            <SecondaryButton className="ButtonTextSize" variant='outlined' fullWidth>{t("DriverCardBackButton")}</SecondaryButton>
                        </Link>
                    </Grid>
                    <Grid container item xs={5} xl={5}> 
                        <Link to='/register/select-plan' style={{textDecoration:'none', width:'100%'}}>
                            <PrimaryButton   className="ButtonTextSize"  variant='contained' onClick={()=><Link to='/register/select-plan'/>} fullWidth>{t("ChoosePlan")}</PrimaryButton>
                        </Link>
                    </Grid>
                </Grid>
            </MyGrid>
        </Container>
    );
};

export default PhoneNumberVerification;