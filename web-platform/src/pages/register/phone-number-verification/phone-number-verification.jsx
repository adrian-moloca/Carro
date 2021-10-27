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
    const[sms, setSMS] = useState(null);
    const time = new Date();
    // time.setMinute(time.getMinute() + 5);

    return(
        <Container className = 'Primary-container-style'>
            <MyGrid container justifyContent='center' spacing={4}>
                <Grid container item xs={12} justifyContent='center'>
                    <Box  mb={3} fontSize={22} justifyContent='center' mt='3%'>
                    {t("ConfirmPhoneNumber")}
                    </Box>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Box  mb={3} fontSize={18} justifyContent='center' mt='3%'>
                        {t("PhoneSMS")}
                    </Box>
                </Grid>
                <Grid container item xs={12} xl={6} justifyContent='center'>
                    <Box mt = '3%' width='80%' >
                        <CarroTextField value = {sms} onChange={(e)=>setSMS(e.target.value)} variant ='outlined' label= {t("PhoneSMS")} fullWidth/>
                    </Box>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Timer expiryTimestamp={time}/>
                </Grid>
                <Box width="80%">
                <Grid container item xs={12} xl={12} justifyContent='space-around'>
                    <Box>
                        <Link to='/register' style={{textDecoration:'none'}}>
                            <SecondaryButton className="ButtonTextSize" variant='outlined' fullWidth>{t("DriverCardBackButton")}</SecondaryButton>
                        </Link>
                    </Box>
                    <Box>
                        <Link to='/register/select-plan' style={{textDecoration:'none'}}>
                            <PrimaryButton   className="ButtonTextSize"  variant='contained' onClick={()=><Link to='/register/select-plan'/>} fullWidth>{t("ChoosePlan")}</PrimaryButton>
                        </Link>
                    </Box>
                </Grid>
                </Box>
            </MyGrid>
        </Container>
    );
};

export default PhoneNumberVerification;