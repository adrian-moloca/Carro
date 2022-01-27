import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Container, Box, Grid } from '@material-ui/core';
import Timer from '../../../components/timer/timer';
import CarroTextField from '../../../components/textField/CarroTextField';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
import { withStyles } from '@material-ui/styles';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import data from '../../../utils/constants';
import { connect } from "react-redux";

const MyGrid = withStyles({'spacing-xs-4':{margin: 0}})(Grid)

const PhoneNumberVerification = ({token})=>{
    const { t } = useTranslation();
    const[sms, setSMS] = useState('');
    const time = new Date();
    const history = useHistory();

    const selectPlanAction = () => {
        axios.get(data.baseUrl+"/phone-validation/"+sms, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((res) => {
            console.log('response from phone validation :', res);
            history.push("/profile")
        })
        .catch((err)=> {
            console.log('Error from phone vaidation: ', err);
            alert("Something went wrong!")
        });
    }

    time.setSeconds(time.getSeconds() + 300);

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
                    <Timer expiryTimestamp={time} token={token}/>
                </Grid>
                <Grid container item xs={10} xl={10} justifyContent='space-between'>
                    <Grid container item xs={5} xl={5}>
                        <Link to='/home' style={{textDecoration:'none', width:'100%'}}>
                            <SecondaryButton /* onClick={()=> localStorage.removeItem('state')} */ className="ButtonTextSize" variant='outlined' fullWidth>{t("VerifyLater")}</SecondaryButton>
                        </Link>
                    </Grid>
                    <Grid container item xs={5} xl={5}> 
                            <PrimaryButton   className="ButtonTextSize"  variant='contained' onClick={() => selectPlanAction()} fullWidth>{t("Validate")}</PrimaryButton>
                    </Grid>
                </Grid>
            </MyGrid>
        </Container>
    );
};

const mapStateToProps = state => ({token: state.userData.token})

export default connect(mapStateToProps, null)(PhoneNumberVerification);