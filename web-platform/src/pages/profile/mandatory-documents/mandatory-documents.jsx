import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import axios from 'axios';
import utilData from '../../../utils/constants';
import { getProfileStatus } from '../../../redux/actions/UserActions';
import { getBase64Image } from '../../../utils/Functions/base64Image';

const MandatoryDocuments = ({userData, getProfileStatus})=>{
    
    const {t} = useTranslation();

    const [mandatoryDocuments, setMandatoryDocuments] = useState(''); 

    const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);

    async function setMandatory(file){
        const base64 = await getBase64Image(file)
        setMandatoryDocuments(base64)
    }


    async function uploadMandatoryDoc(){
        if(mandatoryDocuments.length>0){
            axios.post(utilData.baseUrl + '/users/documents/identity-card', {
                    attachment: mandatoryDocuments.replace("data:image/jpeg;base64," || "data:image/png;base64," || "data:image/jpg;base64,", "")
            }, {
                headers:{
                    'Authorization': `Bearer ${userData.token}`,
                }
            }).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)}).then(()=>{getProfileStatus(userData.token)}).finally(()=>{})
        }
        if(inUpdateDataHasErrors){ 
                alert('Upload has errors, try later please.');
                setInUpdateDataHasErrors(false); 
        }
    }

    useEffect(()=>{
        uploadMandatoryDoc()
    }, [mandatoryDocuments])

    useEffect(()=> {
        getProfileStatus(userData.token)
    }, [])

    useEffect(()=>{}, [userData.profileStatus])

    return(
        <Fragment>
            {userData.profileStatus.isIdentityCardUploaded ? (
                    <Fragment>
                        <Grid container item sm={12}  justifyContent='center' style={{height: "50px", marginTop:"14%"}}>
                            <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}> {t('IdChargedWithSuccess')}</Box>
                            <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('ItWillBeVerified')}</Box>
                        </Grid>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Grid container item sm={12} justifyContent='center' style={{height: "50px", marginTop:"3%"}}>
                            <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('NoDocumentsUploaded')}</Box>
                            <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('UploadRequestedDocuments')}</Box>
                        </Grid>
                        <Grid container item sm={12} justifyContent='center'>
                            <label style={{cursor: 'pointer', height:'35px', width: '250px'}}>
                                <input id='myFileInput' type="file" accept=".jpg, .jpeg, .png" style={{display: 'none'}} onChange={(e)=> setMandatory(e.target.files[0])}/>
                                <PrimaryButton variant='contained' onClick={()=>{document.getElementById('myFileInput').click()}} style={{height:35, width:250, marginTop: "5%"}}>
                                    <Box px='10px'>{t('UploadId')}</Box>
                                    <AttachFile fontSize='small'/>
                                </PrimaryButton>
                            </label>
                        </Grid>
                        <Grid container item sm={12} justifyContent='center' style={{height: "50px", marginTop:"3%"}}>
                            <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('AcceptedDocuments')}</Box>
                            <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('IdDriveLicenseBirthCert')}</Box>
                        </Grid>
                    </Fragment>
            )}  
        </Fragment>
    );
}

const mapStateToProps = (state) =>({userData: state.userData})
const mapDispatchToProps = (dispatch) =>({getProfileStatus: (token) => dispatch(getProfileStatus(token))})
export default connect(mapStateToProps, mapDispatchToProps)(MandatoryDocuments)