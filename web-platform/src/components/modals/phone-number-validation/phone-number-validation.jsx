import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Grid, Fade, Modal } from '@material-ui/core';
import Timer from '../../../components/timer/timer';
import CarroTextField from '../../../components/textField/CarroTextField';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
import { withStyles } from '@material-ui/styles';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import data from '../../../utils/constants';
import { connect } from "react-redux";
import useStyles from './phone-number-validation-style';

const MyGrid = withStyles({'spacing-xs-4':{margin: 0}})(Grid)

const PhoneNumberValidation = ({userData})=>{
    const { t } = useTranslation();
    const[sms, setSMS] = useState('');
    const[open, setOpen] = useState(false);
    const [millis, setMillis] = useState(300000);
    const[errorValidation, setErrorValidation] = useState([]);
    const time = new Date();
    const classes = useStyles()

    async function getValidationCode(){
        axios.post(data.baseUrl+"/phone-validation", {
            message: "Codul pentru verificarea numarului de telefon"
        },{
            headers: {
                'Authorization': `Bearer ${userData.token}`,
            }
        })
        .then(res => {
            console.log('validation: ', res);
        })
        .catch(err => {
            setMillis(err.response.data.errors[0].message)
            console.log('error from validation: ', err);
        }).finally(()=>setOpen(true))

    }

    const validateNumber = () => {
        if(sms.length>0)
        axios.get(data.baseUrl+"/phone-validation/"+sms, {
            headers: {
                'Authorization': `Bearer ${userData.token}`,
            }
        })
        .then((res) => {
            setOpen(false)
        })
        .catch((err)=> {
            setErrorValidation(err.response.data.errors)
        });
    }

    time.setMilliseconds(millis);

    useEffect(()=>{}, [millis])

    return(
        <Fragment>
            <Box color={"red"} fontWeight={400} display='inline-flex' fontSize={18} textAlign={"left"} width={"100%"} marginBottom={"5px"}> 
                {t('NumberNotValidated')+' '} 
                <Link onClick={()=> getValidationCode()} to='/profile' style={{color:"red", marginLeft: 5, fontWeight:500}}>
                    {t('VerifyNow')}
                </Link>
            </Box>
            <Modal open={open} onClose={()=>setOpen(false)} className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className = {classes.containerBackdrop}>
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
                               <Timer expiryTimestamp={time} token={userData.token}/>
                            </Grid>
                            <Grid container item xs={10} xl={10} justifyContent='space-between'>
                                <Grid container item xs={5} xl={5}>
                                        <SecondaryButton onClick={()=>setOpen(false)} className="ButtonTextSize" variant='outlined' fullWidth>{t("Close")}</SecondaryButton>
                                </Grid>
                                <Grid container item xs={5} xl={5}> 
                                        <PrimaryButton   className="ButtonTextSize"  variant='contained' onClick={() => validateNumber()} fullWidth>{t("Validate")}</PrimaryButton>
                                </Grid>
                            </Grid>
                            <Grid container item xs={ 10 } xl={10} justifyContent='center' style={{marginBottom:"15px"}}>
                                {errorValidation.map((el)=>{return(<Box style={{color: "#ff3333", fontSize:"16px", textAlign:"center", marginTop:"2%"}}>{el.message}</Box>)})}
                            </Grid>
                        </MyGrid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>
    );
};

const mapStateToProps = state => ({userData: state.userData})

export default connect(mapStateToProps, null)(PhoneNumberValidation);