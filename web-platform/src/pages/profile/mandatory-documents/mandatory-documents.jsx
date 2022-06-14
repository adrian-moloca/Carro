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

    const [errorsOnUpdate, setErrorsOnUpdate] = useState([{message: ''}]);

    const [fileTooLarge, setFileTooLarge] = useState(false);

    async function setMandatory(file){
        const base64 = await getBase64Image(file)
        if(file.size > 1024000)
            setFileTooLarge(true)
        else{
            setFileTooLarge(false)
            setMandatoryDocuments(base64)
        }
    }


    async function uploadMandatoryDoc(){
        if(mandatoryDocuments.length>0){
            axios.post(utilData.baseUrl + '/users/documents/identity-card', {
                    attachment: mandatoryDocuments.replace("data:image/jpeg;base64," || "data:image/png;base64," || "data:image/jpg;base64,", "")
            }, {
                headers:{
                    'Authorization': `Bearer ${userData.token}`,
                }
            }).then(()=>{getProfileStatus(userData.token)}).catch((error)=>{setErrorsOnUpdate(error.response.data.errors)})
        }
    }

    useEffect(()=>{
        if(mandatoryDocuments.length > 0)
            uploadMandatoryDoc()
    }, [mandatoryDocuments])

    useEffect(()=>{}, [userData.profileStatus, fileTooLarge])

    return(
        <Fragment>
            {!userData.profileStatus.isIdentityCardValidated ? (
                    userData.profileStatus.isIdentityCardUploaded ? (
                            <Fragment>
                                <Grid container item sm={12}  justifyContent='center' style={{height: "50px", marginTop:"14%"}}>
                                    <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}> {t('IdChargedWithSuccess')}</Box>
                                    <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('ItWillBeVerified')}</Box>
                                </Grid>
                            </Fragment>
                        ) : (
                            <Fragment>
                                {userData.profileStatus.rejectReason ? (
                                    <Grid container item sm={12} justifyContent='center' style={{height: "50px"}}>
                                        <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('RejectedDocuments')}</Box>
                                        <Box color={"#FF3333"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{userData.profileStatus.rejectReason}</Box>
                                    </Grid>) : null}
                                <Grid container item sm={12} justifyContent='center' style={{height: "50px", marginTop:"3%"}}>
                                    <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('NoDocumentsUploaded')}</Box>
                                    <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('UploadRequestedDocuments')}</Box>
                                </Grid>
                                <Grid container item sm={12} justifyContent='center'>
                                    <label style={{cursor: 'pointer', height:'35px', width: '250px'}}>
                                        <input id='myFileInput' type="file" accept=".jpg, .jpeg, .png, .heic, .pdf" style={{display: 'none'}} onChange={(e)=> setMandatory(e.target.files[0])}/>
                                        <PrimaryButton variant='contained' onClick={()=>{document.getElementById('myFileInput').click()}} style={{height:35, width:250, marginTop: "5%"}}>
                                            <Box px='10px'>{t('UploadId')}</Box>
                                            <AttachFile fontSize='small'/>
                                        </PrimaryButton>
                                    </label>
                                </Grid>
                                <Grid container item xs={ 10 } xl={10} justifyContent='center' style={{marginBottom:"15px"}}>
                                    {errorsOnUpdate.map((el, index) => {return(<Box key={index.toString() + Date.now().toString()} style={{color: "#ff3333", fontSize:"16px", textAlign:"center", marginTop:"2%"}}>{el.message}</Box>)})}
                                </Grid> 
                                <Grid container item sm={12} justifyContent='center' style={{height: "50px", marginTop:"3%"}}>
                                    <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('AcceptedDocuments')}</Box>
                                    <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>{t('IdPassportDriveLicense')}</Box>
                                    <Box color={fileTooLarge ? "#FF3333" : "#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}>(Max size 1MB)</Box>
                                </Grid>
                            </Fragment>
                    )) : (
                        <Fragment>
                            <Grid container item sm={12}  justifyContent='center' style={{height: "50px", marginTop:"14%"}}>
                                <Box color={"#34D02D"} fontWeight={500} fontSize={18} textAlign={"center"} width={"100%"}> {t('DocumentsValidated')}</Box>
                            </Grid>
                        </Fragment>
                    )  }
        </Fragment>
    );
}

const mapStateToProps = (state) =>({userData: state.userData})
const mapDispatchToProps = (dispatch) =>({getProfileStatus: (token) => dispatch(getProfileStatus(token))})
export default connect(mapStateToProps, mapDispatchToProps)(MandatoryDocuments)