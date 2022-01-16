import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { passwordValidator } from '../../../utils/Functions/input-validators';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
import CloseAccountModal from '../../../components/modals/close-account/close-account-modal';
import CarroTextField from '../../../components/textField/CarroTextField';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import utilData from '../../../utils/constants';
import { fetchLogout } from '../../../redux/types/UserTypes';

const Settings = ({userData, fetchLogout})=>{
    
    const {t} = useTranslation();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [closeReason, setCloseReason] = useState(''); 

    const [changePassword, setChangePassword] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);
    const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);
    const [fieldsComplete, setFieldsComplete] = useState(false);

    async function updatePassword(){
        if(fieldsComplete){
            axios.post(utilData.baseUrl + '/identity/change-password', {
                    oldPassword: oldPassword,
                    newPassword: newPassword
            }, {
                headers:{
                    'Authorization': `Bearer ${userData.token}`,
                }
            }).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)}).finally(()=>{})
        }
        if(!inUpdateDataHasErrors){ 
                setChangePassword(false);
        } else {
                alert('Update has errors, try later please.');
                setInUpdateDataHasErrors(false); 
        }
    }

    async function closeAccount(){
        axios.post(utilData.baseUrl + '/identity/close-account', {
                closeReason: closeReason
        }, {
            headers:{
                'Authorization': `Bearer ${userData.token}`,
            }
        }).then(()=>{window.localStorage.clear();}).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)}).finally(()=>{})
        if(!inUpdateDataHasErrors){ 
                setChangePassword(false);
        } else {
                alert('Close has errors, try later please.');
                setInUpdateDataHasErrors(false); 
        }
    }

    useEffect(() => {
        if(oldPassword && newPassword && (newPassword === confirmNewPassword) && !hasErrors ){
            setFieldsComplete(true)
        } else {
            setFieldsComplete(false)
        }
    }, [oldPassword, newPassword, confirmNewPassword, hasErrors])

    useEffect(()=>{
        setHasErrors(passwordValidator(oldPassword))
    }, [oldPassword])

    useEffect(()=>{
        setHasErrors(passwordValidator(newPassword))
    }, [newPassword])

    useEffect(()=>{
        setHasErrors(passwordValidator(confirmNewPassword))
    }, [confirmNewPassword])


    return(
        <Fragment>
            {changePassword ? (
                    <Fragment>
                        <Grid container item sm={11}>
                            <CarroTextField required type='password' value={oldPassword} variant="outlined" label={t("OldPassword")} error={passwordValidator(oldPassword)} onChange={(e)=>{setOldPassword(e.target.value);}} size="small" fullWidth/>
                        </Grid> 
                        <Grid container item sm={11}>
                            <CarroTextField required type='password' value={newPassword} variant="outlined" label={t("NewPassword")} error={passwordValidator(newPassword)} onChange={(e)=>{setNewPassword(e.target.value);}} size="small" fullWidth/>
                        </Grid> 
                        <Grid container item sm={11}>
                            <CarroTextField required type='password' value={confirmNewPassword} variant="outlined" label={t("ConfirmNewPassword")} error={passwordValidator(confirmNewPassword)} onChange={(e)=>{setConfirmNewPassword(e.target.value); }} size="small" fullWidth/>
                        </Grid> 
                        <Grid container item sm={12}  justifyContent="center">
                            <PrimaryButton variant='contained' onClick={async ()=>updatePassword()} style={{height:35, width:250, marginTop:"10px"}} disabled={!fieldsComplete} fullWidth>
                                <Box px='10px'>{t('ChangePassword')}</Box>
                            </PrimaryButton>
                        </Grid>
                        <Grid container item sm={12}  justifyContent="center">
                            <SecondaryButton variant='contained' onClick={()=>setChangePassword(false)} style={{height:35, width:250, marginTop:"4px"}} fullWidth>
                                <Box px='10px'>{t('Cancel')}</Box>
                            </SecondaryButton>
                        </Grid>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Box alignItems={"center"} width={"100%"}>
                            <Grid container item sm={12}  justifyContent="center">
                                <PrimaryButton variant='contained' onClick={()=>setChangePassword(true)} style={{height:35, width:250, marginTop: "11%"}} fullWidth>
                                    <Box px='10px'>{t('ChangePasswordOption')}</Box>
                                </PrimaryButton>
                            </Grid>
                            <Grid container item sm={12}  justifyContent="center">
                                <Link to="/" style={{textDecoration:'none' ,color:'inherit'}}>
                                    <SecondaryButton variant='contained' onClick={()=>{window.localStorage.clear(); fetchLogout();}} style={{height:35, width:250, marginTop:"15px"}} fullWidth>
                                        <Box px='10px'>{t('Logout')}</Box>
                                    </SecondaryButton>
                                </Link>
                            </Grid>
                            <CloseAccountModal closeReason={closeReason} setCloseReason={setCloseReason} closeAccountClicked={closeAccount}/>
                        </Box>
                    </Fragment>
            )}  
        </Fragment>
    );
}

const mapStateToProps = (state) =>({userData: state.userData})
const mapDispatchToProps = (dispatch) =>({fetchLogout: () => dispatch(fetchLogout())})
export default connect(mapStateToProps, mapDispatchToProps)(Settings)