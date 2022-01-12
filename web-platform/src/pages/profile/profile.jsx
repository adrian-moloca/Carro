import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Box, Grid, Avatar, ButtonBase} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import CarroTextField from "../../components/textField/CarroTextField";
import SeeProfileBtn from "../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn"
import CarroCheckbox from "../../components/checkbox/CarroCheckbox";
import AvatarImage from "../../assets/images/avatarImg.png";
import { useTranslation } from "react-i18next";
import useStyles from "./profileStyle";
import {SaveAlt, Create, Cancel} from '@material-ui/icons';
import "../../App.css";
import PrimaryButton from "../../components/buttons/primaryButton/primaryButton";
import { connect } from "react-redux";
import { fetchCourierProfile } from "../../redux/actions/CourierActions";
import axios from "axios";
import { getBase64Image } from "../../utils/Functions/base64Image";
import utilData from '../../utils/constants';
import { getUserProfileImage } from "../../redux/actions/UserActions";
import PersonalInformation from "./personal-information/personal-information";
import OptionalInformation from "./company/company";

const Profile = ({userData, courierProfile, fetchCourierProfile, getUserProfileImage}) => {

    const history = useHistory();
    const classes = useStyles();
    const { t } = useTranslation();
  
    const [profilePhoto, setProfilePhoto] = useState('');
    const [profilePhotoChanged, setProfilePhotoChanged] = useState(false);  

    const sections = [t('PersonalInfo'), t('OptionalInfo'), t('Company'), t('MandatoryDocuments'), t('Settings')];
    const [currentSection, setCurrentSection] = useState(0);

    async function updateChangedData(){
      if(profilePhotoChanged){
      const img = new Image();
      img.src = profilePhoto;
        const base64Image = getBase64Image(img); 
            axios.put(utilData.baseUrl + '/users/profile-images', {
                profileImage: base64Image,
            }, {
          headers:{
          'Authorization': `Bearer ${userData.token}`,
          }
        }).catch((error)=>{console.log(error); alert('profile photo changes failed')})
      }
      
    }

    useEffect(()=>{
        if(profilePhotoChanged)
          updateChangedData()
        getUserProfileImage(userData.token)
    }, [profilePhotoChanged])

    useEffect(()=>{
	    userData.profileImage && userData.profileImage.length > 0 ? setProfilePhoto(userData.profileImage) : setProfilePhoto('')
    }, [userData.profileImage])

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
          default:
            return(
                'error'
            );
      }
  }

  return(
        <Container className={"Primary-container-style"}>
            <Grid container justifyContent="center" alignItems="center" > 
                <Grid container item sm={3} justifyContent="center">
                    <Box fontWeight={400} fontSize={21} alignItems={"center"} textAlign={"center"} >{userData.name.replace(",", "").toLocaleUpperCase()}</Box>
                </Grid>
                <Grid container item sm={3} justifyContent="center">
                    <label style={{cursor: 'pointer', height:'60px', width: '60px'}}>
                        <input type="file" accept=".jpg, .jpeg, .png" style={{display: 'none'}} onChange={(e)=>{setProfilePhoto(URL.createObjectURL(e.target.files[0])); setProfilePhotoChanged(true)}}/>
                            <Avatar className={classes.profilePhotoEdit} src={profilePhoto && profilePhoto.length > 0 ? profilePhoto : AvatarImage}/>
                    </label>
                </Grid>
                <Grid container item sm={3} justifyContent="center">
                    <SeeProfileBtn onClick={()=>{
                            fetchCourierProfile(userData.id, userData.token)
                            setTimeout(()=>redirectAfterFetchCourierProfile(), 500)
                    }}>
                            {t("ViewProfile")}
                    </SeeProfileBtn>
                </Grid>
            </Grid>
            <Box className={classes.MyProfileStyle}>
                <Grid container>
                    <Grid container item sm={2} justifyContent="center">
                        {sections.map((section, index)=>{
                                return(
                                    <ButtonBase style={{width:"100%"}} onClick={()=>setCurrentSection(index)}>
                                        <Box height={window.innerHeight*0.50/sections.length} style={{display:"flex", backgroundColor: currentSection === index ? "#00b4d8" : "#ffffff", width: "100%", borderTopLeftRadius: index === 0 ? "15px" : 0, borderBottomLeftRadius: index === sections.length-1 ? "15px" : 0}}>
                                            <Box style={{color: currentSection === index ? "#ffffff" : "#00b4d8", fontSize:"20px", paddingLeft:"15px", paddingRight: "15px", width:"100%", textAlign:"center", paddingTop:"18px"}}>{section}</Box>
                                        </Box>
                                    </ButtonBase>
                                );
                        })}
                    </Grid>
                    <Grid container item sm={10} justifyContent="space-evenly">
                        <Box width={"100%"} display={"flex"} marginTop={"45px"} marginBottom={"45px"}>
                            <Grid container justifyContent="space-around">
                              {getCurrentSection()}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
  );
  
  {/* const [legalPersonChecked, setLegalPersonChecked] = useState(false);
  const [mandatoryDocuments, setMandatoryDocuments] = useState([]);
  const[onEditMode, setOnEditMode] = useState(false);
  const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);
  
  const handleLegalPersonCheckboxClick = (event) => {
    event.target.checked ? setLegalPersonChecked(true) : setLegalPersonChecked(false);
  };

  

  async function updateChangedData(){
      if(profilePhotoChanged){
			const img = new Image();
			img.src = profilePhoto;
		  	const base64Image = getBase64Image(img); 
          	axios.put(utilData.baseUrl + '/users/profile-images', {
              	profileImage: base64Image,
          	}, {
				  headers:{
					'Authorization': `Bearer ${userData.token}`,
				  }
			  }).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)})
      }
	  /* if(personalInfoChanged){
			axios.put(utilData.baseUrl + '/users/personal-info', {
				firstName: firstName,
				lastName: lastName,
				address: address,
				city: city,
				country: country,
				phoneNumber: countryPhoneCode+inputValuePhoneNumber,
				dateOfBirth: dateOfBirth
			}, {
				headers:{
					'Authorization': `Bearer ${userData.token}`,
				}
			}).catch((error)=>{console.log(error); setInUpdateDataHasErrors(true)})
	  } 
	  if(!inUpdateDataHasErrors){ 
		    setOnEditMode(false);
	  } else {
			alert('Update has errors, try later please.');
			setInUpdateDataHasErrors(false);
	  }
  }

  const handleUploadFile=(files)=>{
    const temp = [...mandatoryDocuments]
    for(const file of files)
      temp.push(file)
    setMandatoryDocuments(temp);
  }

  const handleDeleteFile=(index)=>{
    const temp = [...mandatoryDocuments];
    temp.splice(index, 1);
    setMandatoryDocuments(temp);
  }

  return (
    <Container className={"Primary-container-style"}>
      {/* head 
      <Grid container justifyContent="space-between" alignItems="center"> 
        <Grid container item xs={2} >
          <Box mb={4} fontWeight={400} fontSize={22}></Box>
        </Grid>
        <Grid container item xs={8} alignItems="center" justifyContent='center'>
          <Box display="flex" alignItems="center" justifyContent='center' mb={4} fontWeight={400} fontSize={22}>{t("Profile")}</Box>
        </Grid>
        <Grid container item xs={2} >
            <Box display="flex" alignItems="center" justifyContent='center' fontSize={10} className={'Secondary-color'}>
                <SeeProfileBtn onClick={()=>{
                    fetchCourierProfile(userData.id, userData.token)
                    setTimeout(()=>redirectAfterFetchCourierProfile(), 500)
                }}>{t("ViewProfile")}</SeeProfileBtn>
            </Box>
        </Grid>
      </Grid>
      {/* required infos 
      <Box display="flex" justifyContent="space-evenly" mt="1%">
        <Grid container spacing={3} display="flex" justifyContent="center">
          
          {onEditMode ? (
                  <Grid container item xs={12} justifyContent="center">
                    <Box style={{color: "#00b4d8",  fontSize: '12px'}}>
                      Apasati poza pentru a edita
                    </Box>
                  </Grid>
              ) : null}
         
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Languages")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12}>
            <CarroTextField variant="outlined" label={t("Particularities")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          {onEditMode ? (
					<Grid item xs={12}>
                        <Box mt={3} mb={3} color={"#00B4D8"} fontWeight={500} fontSize={22} textAlign={"center"}>
                            <label style={{cursor:'pointer'}}>
								{t('AddDocuments')}
								<input type='file' style={{display:'none'}} accept=".jpg, .jpeg, .png" multiple onChange={(e)=>handleUploadFile(e.target.files)}/>
                            </label> 
                        </Box>
					</Grid>
          ) : null}
          {mandatoryDocuments.map((file, index)=>{
            return    <Fragment key={index}>
                        <Grid item xs={11}>
                          <Box fontWeight='500' className='Secondary-color'>
                            {file.name}
                          </Box>
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton onClick={()=>handleDeleteFile(index)}  size='small'>
                            <Cancel  className='Secondary-color'/>
                          </IconButton>
                        </Grid>
                      </Fragment>
          })}
          {mandatoryDocuments.length ? (
                      <Grid item xs={5}>
                        <PrimaryButton variant='contained' /* onClick={}  fullWidth>
                          {t('Send')}
                        </PrimaryButton>
                      </Grid> 
          ) : null}
          <Grid item xs={12}>
            <FormControlLabel
              onChange={handleLegalPersonCheckboxClick}
              control={<CarroCheckbox disabled = {!onEditMode}/>}
              label={t("LegalPerson")}
            />
          </Grid>
          {legalPersonChecked ? (
              <Fragment>
                <Grid container item xs={12} sm={6}>
                  <CarroTextField variant="outlined" label={t("CompanyName")} fullWidth disabled = {!onEditMode}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("CUI")} fullWidth disabled = {!onEditMode}/>
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField variant="outlined" label={t("Adress")} fullWidth disabled = {!onEditMode}/>
                </Grid>
                
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField disabled = {!onEditMode} variant="outlined" label={t("CompanyEmail")} fullWidth />
                </Grid>
                <Grid container item xs={12} sm={6} justifyContent="center">
                  <CarroTextField disabled = {!onEditMode} variant="outlined" label={t("PhoneNumber")} fullWidth/>
                </Grid>  
              </Fragment>
          ) : ''}
          <Grid item xs={12}>
            <Box mt={3} mb={3} color={"#A0A0A0"} fontWeight={500} fontSize={22} textAlign={"center"}>
              {t("CarInfo")}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarBrand")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarModel")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("CarNR")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CarroTextField variant="outlined" label={t("Color")} fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid item xs={5}>
			{
				onEditMode ? (
					<PrimaryButton variant='contained' onClick={()=>updateChangedData()} fullWidth>
						<Box px='3px'>{t('SaveButton')}</Box>
						<SaveAlt fontSize='small'/>
					</PrimaryButton>
				) : (
					<PrimaryButton variant='contained' onClick={()=>setOnEditMode(true)} fullWidth>
						<Box px='3px'>{t('EditButton')}</Box>
						<Create fontSize='small'/>
					</PrimaryButton>
				)
			}
          </Grid>
        </Grid>
      </Box>
    </Container>
  ); */}
}

const mapStateToProps = state =>({userData: state.userData, courierProfile: state.courierData})
const mapDispatchToProps = dispatch =>({fetchCourierProfile: (userId, token) => dispatch(fetchCourierProfile(userId, token)), getUserProfileImage: (token) => dispatch(getUserProfileImage(token))})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);