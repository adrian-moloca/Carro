import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import CarroTextField from '../../../components/textField/CarroTextField';
import { SaveAlt, Create } from '@material-ui/icons';
import { connect } from 'react-redux';
import { getUserOptionalInfo } from '../../../redux/actions/UserActions';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import utilData from '../../../utils/constants';

const OptionalInformation = ({userData, getUserOptionalInfo})=>{
    
    const {t} = useTranslation();

    const [languages, setLanguages] = useState('')
    const [description, setDescription] = useState('')
    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [carRegistrationNumber, setCarRegistrationNumber] = useState('');
    const [carColor, setCarColor] = useState('') 

    const [onEditMode, setOnEditMode] = useState(false);
    const [inUpdateDataHasErrors, setInUpdateDataHasErrors] = useState(false);
    const [optionalInfoChanged, setOptionalInfoChanged] = useState(false);
    const [errorsOnUpdate, setErrorsOnUpdate] = useState([])

    useEffect(()=>{
        userData.optionalInfo.languages && userData.optionalInfo.languages.length > 0 ? setLanguages(userData.optionalInfo.languages) : setLanguages('')
        userData.optionalInfo.description && userData.optionalInfo.description.length > 0 ? setDescription(userData.optionalInfo.description) : setDescription('')
        userData.optionalInfo.car.brand && userData.optionalInfo.car.brand.length > 0 ? setCarBrand(userData.optionalInfo.car.brand) : setCarBrand('')
        userData.optionalInfo.car.model && userData.optionalInfo.car.model.length > 0 ? setCarModel(userData.optionalInfo.car.model) : setCarModel('')
        userData.optionalInfo.car.registrationNumber && userData.optionalInfo.car.registrationNumber.length > 0 ? setCarRegistrationNumber(userData.optionalInfo.car.registrationNumber) : setCarRegistrationNumber('')
        userData.optionalInfo.car.color && userData.optionalInfo.car.color.length > 0 ? setCarColor(userData.optionalInfo.car.color) : setCarColor('')
      }, [userData.optionalInfo])

    async function updateChangedData(){
        if(optionalInfoChanged){
            axios.put(utilData.baseUrl + '/users/optional-infos', {
                languages: languages,
                description: description,
                car:{
                  brand: carBrand,
                  model: carModel,
                  registrationNumber: carRegistrationNumber,
                  color: carColor
                }
            }, {
                headers:{
                    'Authorization': `Bearer ${userData.token}`,
                }
            }).then(()=>{getUserOptionalInfo(userData.token); setOnEditMode(false);}).catch((error)=>{setErrorsOnUpdate(error.response.data.errors)})
        }
    }


    return(
        <Fragment>
          <Grid container item sm={11}>
            <CarroTextField value={languages} variant="outlined" label={t("Languages")} onChange={(e)=>{setLanguages(e.target.value); setOptionalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={11}>
            <CarroTextField value={description} variant="outlined" label={t("DescriptionUser")} onChange={(e)=>{setDescription(e.target.value); setOptionalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={11}>
            <Box color={"#A0A0A0"} fontWeight={500} fontSize={18} textAlign={"center"}>
              {t("CarInfo")}
            </Box>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 11 : 5}>
            <CarroTextField value={carBrand} variant="outlined" label={t("CarBrand")} onChange={(e)=>{setCarBrand(e.target.value); setOptionalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 11 : 5}>
            <CarroTextField value={carModel} variant="outlined" label={t("CarModel")} onChange={(e)=>{setCarModel(e.target.value); setOptionalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 11 : 5}>
            <CarroTextField value={carRegistrationNumber} variant="outlined" label={t("CarNR")} onChange={(e)=>{setCarRegistrationNumber(e.target.value); setOptionalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 11 : 5}>
            <CarroTextField value={carColor} variant="outlined" label={t("Color")} onChange={(e)=>{setCarColor(e.target.value); setOptionalInfoChanged(true)}} size="small" fullWidth disabled = {!onEditMode}/>
          </Grid>
          <Grid container item sm={window.innerWidth <= 850 ? 11 : 5}  justifyContent="center"> 
            {onEditMode ? (
                    <PrimaryButton variant='contained' onClick={()=>updateChangedData()} style={{height:35, width:250, marginTop:"10px"}} fullWidth>
                        <Box px='10px'>{t('SaveButton')}</Box>
                        <SaveAlt fontSize='small'/>
                    </PrimaryButton>
                ) : (
                    <PrimaryButton variant='contained' onClick={()=>setOnEditMode(true)} style={{height:35, width:250,  marginTop:"10px"}} fullWidth>
                        <Box px='10px'>{t('EditButton')}</Box>
                        <Create fontSize='small'/>
                    </PrimaryButton>
            )}
          </Grid>
          <Grid container item xs={ 10 } xl={10} justifyContent='center' style={{marginBottom:"15px"}}>
              {onEditMode ? errorsOnUpdate.map((el)=>{return(<Box style={{color: "#ff3333", fontSize:"16px", textAlign:"center", marginTop:"2%"}}>{el.message}</Box>)}) : null}
          </Grid>    
        </Fragment>
    );
}

const mapStateToProps = (state) =>({userData: state.userData})
const mapDispatchToProps = (dispatch) =>({getUserOptionalInfo: (token) => dispatch(getUserOptionalInfo(token))})
export default connect(mapStateToProps, mapDispatchToProps)(OptionalInformation)