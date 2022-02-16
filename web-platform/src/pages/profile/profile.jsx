import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, Box, Grid, Avatar, ButtonBase, Modal, Fade} from "@material-ui/core";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import AvatarImage from "../../assets/images/avatarImg.png";
import { useTranslation } from "react-i18next";
import useStyles from "./profileStyle";
import "../../App.css";
import IconButtonNoVerticalPadding from "../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding";
import { connect } from "react-redux";
import { fetchCourierProfile } from "../../redux/actions/CourierActions";
import axios from "axios";
import {Close, ErrorOutline} from '@material-ui/icons';
import { getBase64Image } from "../../utils/Functions/base64Image";
import utilData from '../../utils/constants';
import { getUserCompany, getUserOptionalInfo, getUserProfileImage } from "../../redux/actions/UserActions";
import PersonalInformation from "./personal-information/personal-information";
import OptionalInformation from "./optional-information/optional-information";
import Company from "./company/company";
import Settings from "./settings/settings";
import MandatoryDocuments from "./mandatory-documents/mandatory-documents";

const Profile = ({userData, courierProfile, fetchCourierProfile, getUserProfileImage, getUserOptionalInfo, getUserCompany}) => {

    const history = useHistory();
    const classes = useStyles();
    const { t } = useTranslation();
  
    const [profileStatus, setProfileStatus] = useState({})
    const [personalInfo, setPersonalInfo] = useState({})
    const [optionalInfo, setOptionalInfo] = useState({})
    const [profilePhoto, setProfilePhoto] = useState('');
    const [profilePhotoChanged, setProfilePhotoChanged] = useState(false);  
    const [currentSection, setCurrentSection] = useState(window.innerWidth <=850 ? -1 : 0);
    const [open, setOpen] = useState(false);

    const sections = [t('PersonalInfo'), t('OptionalInfo'), t('Company'), t('MandatoryDocuments'), t('Settings')];
    
    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
        setCurrentSection(-1)
    }
    

    async function setPhoto(file){
      const base64 = await getBase64Image(file)
      setProfilePhoto(base64)
    }

    async function updateChangedData(){
      if(profilePhotoChanged){
            axios.put(utilData.baseUrl + '/users/profile-images', {
                profileImage: profilePhoto.replace("data:image/jpeg;base64," || "data:image/png;base64," || "data:image/jpg;base64,", ""),
            }, {
          headers:{
          'Authorization': `Bearer ${userData.token}`,
          }
        }).catch((error)=>{console.log(error); alert('profile photo changes failed')})
        setProfilePhotoChanged(false) 
      }
      
    }

    useEffect(()=>{
        getUserOptionalInfo(userData.token)
        getUserCompany(userData.token)
    }, [])

    useEffect(()=>{
        updateChangedData()
        getUserProfileImage(userData.token)
    }, [profilePhoto])

    useEffect(()=>{
        setPersonalInfo(userData.personalInfo)
    }, [userData.personalInfo])

    useEffect(()=>{
        setOptionalInfo(userData.optionalInfo)
    }, [userData.optionalInfo])

    useEffect(()=>{
        setProfileStatus(userData.profileStatus)
    }, [userData.profileStatus])

    useEffect(()=>{
	    userData.profileImage && userData.profileImage.length > 0 ? setProfilePhoto(userData.profileImage) : setProfilePhoto('')
    }, [userData.profileImage])

    useEffect(()=>{ 
        if(currentSection!=-1)
          handleOpen() 
    
    
    }, [currentSection])

  const redirectAfterFetchCourierProfile = () => {
        if(courierProfile.hasErrors === true){
            alert("Profilul curierului nu este disponibil")
        }else{
            history.push("/courier-profile")
        }
  }

  function getCurrentSection(){
      switch(currentSection){
          case 0: 
            return(
                <PersonalInformation/>
            );
          case 1:
            return(
                <OptionalInformation/>
            );
          case 2:
            return(
                <Company/>
            );
          case 3:
            return(
                <MandatoryDocuments/>
            );
          case 4: 
            return(
                <Settings/>
            );
          default:
            return(
                'error'
            );
      }
  }

  return(
        <Container className={"Primary-container-style"}>
            <Grid container justifyContent="center" alignItems="center" > 
                <Grid container item xs={12} sm={3} justifyContent="center">
                    <Box fontWeight={400} fontSize={21} alignItems={"center"} textAlign={"center"} style={{marginBottom: window.innerWidth <= 650 ? "20px" : 0}}>{userData.personalInfo.firstName.toLocaleUpperCase()+" "+userData.personalInfo.lastName.toLocaleUpperCase()}</Box>
                </Grid>
                <Grid container item xs={12} sm={3} justifyContent="center">
                    <label style={{cursor: 'pointer', height:'60px', width: '60px'}}>
                        <input type="file" accept=".jpg, .jpeg, .png" style={{display: 'none'}} onChange={(e)=>{setPhoto(e.target.files[0]); setProfilePhotoChanged(true)}}/>
                            <Avatar className={classes.profilePhotoEdit} src={profilePhoto && profilePhoto.length > 0 ? profilePhoto : AvatarImage} style={{marginBottom: window.innerWidth <= 850 ? "20px" : 0 }}/>
                    </label>
                </Grid>
                <Grid container item xs={12} sm={3} justifyContent="center">
                    <SeeProfileBtn onClick={()=>{
                            fetchCourierProfile(userData.id, userData.token)
                            setTimeout(()=>redirectAfterFetchCourierProfile(), 500)
                    }} style={{marginTop: window.innerWidth <= 650 ? "40px" : 0}}>
                            {t("ViewProfile")}
                    </SeeProfileBtn>
                </Grid>
            </Grid>
            <Box className={classes.MyProfileStyle}>
                <Grid container>
                    <Grid container item xs={12} sm={window.innerWidth <= 850 ? 12 : 2} justifyContent="center">
                        {sections.map((section, index)=>{
                                return(
                                    <ButtonBase key={index+userData.id} style={{width:"100%", borderTopLeftRadius: index === 0 ? "15px" : 0,  borderBottomLeftRadius: index === sections.length-1 ? "15px" : 0, borderTopRightRadius: index === 0 && window.innerWidth <= 850 ? "15px" : 0, borderBottomRightRadius: index === sections.length-1 && window.innerWidth <= 850 ? "15px" : 0, zIndex: sections.length-index+1}} onClick={()=>setCurrentSection(index)}>
                                        <Box height={window.innerHeight*0.50/sections.length} style={{display:"flex", boxShadow: index === sections.length-1 ? '0' : '0px 4px 2px 0px rgba(0, 0, 0, 0.16)', backgroundColor: currentSection === index ? "#00b4d8" : "#ffffff", width: "100%", borderTopLeftRadius: index === 0 ? "15px" : 0, borderBottomLeftRadius: index === sections.length-1 ? "15px" : 0, borderTopRightRadius: index === 0 && window.innerWidth <= 850 ? "15px" : 0, borderBottomRightRadius: index === sections.length-1 && window.innerWidth <= 850 ? "15px" : 0}}>
                                            <Box style={{color: currentSection === index ? "#ffffff" : "#00b4d8", fontSize:"20px", paddingLeft:"5%", paddingRight: "5%", width:"100%", textAlign:"center", paddingTop:"18px"}}>{section}</Box>
                                            {index === 0 && !Boolean(profileStatus.isPersonalInfoCompleted) ? <ErrorOutline color="error" fontSize='large' style={{paddingRight: '10px', paddingTop:'22px'}} /> : null}
                                            {index === 3 && !Boolean(profileStatus.isIdentityCardUploaded) ? <ErrorOutline color="error"  fontSize='large' style={{paddingRight: '10px', paddingTop:'22px'}} /> : null}
                                        </Box>
                                    </ButtonBase>
                                );
                        })}
                    </Grid>
                    {window.innerWidth>850 ? (
                         <Grid container item sm={10} justifyContent="space-evenly">
                            <Box width={"100%"} display={"flex"} marginTop={"45px"} marginBottom={"45px"}>
                                <Grid container justifyContent="space-around">
                                  {getCurrentSection()}
                                </Grid>
                            </Box>
                         </Grid>
                    ) : (
                      <Modal open={open} onClose={handleClose} className='modal'>
                        <Fade in={open} timeout={600}>
                          <Container className={classes.containerBackdrop}>
                             <Grid container item sm={12} justifyContent="center">
                                 <Box width={"100%"} minHeight={500} display={"flex"} marginBottom={"45px"}>
                                     <Grid container justifyContent="center">
                                         <Grid container item xs={10} justifyContent='flex-start'>
                                             <Box fontSize='18px' color='grey.500' marginBottom={"35px"}>{sections[currentSection]}</Box>
                                         </Grid>
                                        <Grid container item xs={2} justifyContent='flex-end'>
                                             <IconButtonNoVerticalPadding onClick={handleClose} style={{marginBottom: "35px", height: "30px"}}>
                                                 <Close />
                                             </IconButtonNoVerticalPadding>
                                        </Grid>                                       
                                         {getCurrentSection()}
                                     </Grid>
                                 </Box>
                             </Grid>
                         </Container>
                        </Fade>
                      </Modal>
                    )}
                </Grid>
            </Box>
        </Container>
  );
  
}

const mapStateToProps = state =>({userData: state.userData, courierProfile: state.courierData})
const mapDispatchToProps = dispatch =>({fetchCourierProfile: (userId, token) => dispatch(fetchCourierProfile(userId, token)), getUserProfileImage: (token) => dispatch(getUserProfileImage(token)), getUserOptionalInfo: (token)=> dispatch(getUserOptionalInfo(token)), getUserCompany: (token) => dispatch(getUserCompany(token))})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);