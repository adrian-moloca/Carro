import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box, FormControlLabel } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
import CarroTextField from '../../../components/textField/CarroTextField';
import CarroCheckbox from '../../../components/checkbox/CarroCheckbox';
import CarroAutocomplete from '../../../components/autocomplete/CarroAutocomplete';
import PhoneTextField from '../../../components/telephoneNumberField/PhoneTextField';
import { SaveAlt, Create } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getUserCompany } from '../../../redux/actions/UserActions';
import { useTranslation } from 'react-i18next';
import { getCountries, getCities } from '../../../utils/Functions/countries-city-functions';
import { phoneValidator } from '../../../utils/Functions/input-validators';
import axios from 'axios';
import utilData from '../../../utils/constants';

const Settings = ({userData, getUserCompany})=>{
    
    const {t} = useTranslation();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState(''); 

    const [changePassword, setChangePassword] = useState(false);
    const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);
    const [fieldsComplete, setFieldsComplete] = useState(false);

    async function updateChangedData(){
        if(fieldsComplete){
            axios.put(utilData.baseUrl + '/users/companies', {
                
            }, {
                headers:{
                    'Authorization': `Bearer ${userData.token}`,
                }
            }).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)})
        }
        if(!inUpdateDataHasErrors){ 
                setChangePassword(false);
        } else {
                alert('Update has errors, try later please.');
                setInUpdateDataHasErrors(false); 
        }
    }


    return(
        <Fragment>
            {changePassword ? (
                    <Fragment>
                        <Grid container item sm={11}>
                            <CarroTextField value={oldPassword} variant="outlined" label={t("OldPassword")} onChange={(e)=>{setOldPassword(e.target.value);}} size="small" fullWidth/>
                        </Grid> 
                        <Grid container item sm={11}>
                            <CarroTextField value={newPassword} variant="outlined" label={t("NewProfile")} onChange={(e)=>{setNewPassword(e.target.value);}} size="small" fullWidth/>
                        </Grid> 
                        <Grid container item sm={11}>
                            <CarroTextField value={confirmNewPassword} variant="outlined" label={t("ConfirmNewPassword")} onChange={(e)=>{setConfirmNewPassword(e.target.value);}} size="small" fullWidth/>
                        </Grid> 
                        <Grid container item sm={11}  justifyContent="center">
                            <PrimaryButton variant='contained' onClick={()=>updateChangedData()} style={{height:35, width:250, marginTop:"10px"}} fullWidth>
                                <Box px='10px'>{t('ChangePassword')}</Box>
                                <SaveAlt fontSize='small'/>
                            </PrimaryButton>
                        </Grid>
                        <Grid container item sm={11}  justifyContent="center">
                            <SecondaryButton variant='contained' onClick={()=>setChangePassword(false)} style={{height:35, width:250, marginTop:"4px"}} fullWidth>
                                <Box px='10px'>{t('Cancel')}</Box>
                                <SaveAlt fontSize='small'/>
                            </SecondaryButton>
                        </Grid>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Box alignItems={"center"} width={"100%"}>
                            <Grid container item sm={11}  justifyContent="center">
                                <PrimaryButton variant='contained' onClick={()=>setChangePassword(true)} style={{height:35, width:250}} fullWidth>
                                    <Box px='10px'>{t('ChangePasswordOption')}</Box>
                                    <SaveAlt fontSize='small'/>
                                </PrimaryButton>
                            </Grid>
                            <Grid container item sm={11}  justifyContent="center">
                                <SecondaryButton variant='contained' onClick={()=>updateChangedData()} style={{height:35, width:250, marginTop:"10px"}} fullWidth>
                                    <Box px='10px'>{t('Logout')}</Box>
                                    <SaveAlt fontSize='small'/>
                                </SecondaryButton>
                            </Grid>
                        </Box>
                    </Fragment>
            )}  
        </Fragment>
    );
}

const mapStateToProps = (state) =>({userData: state.userData})
const mapDispatchToProps = (dispatch) =>({getUserCompany: (token) => dispatch(getUserCompany(token))})
export default connect(mapStateToProps, mapDispatchToProps)(Settings)