import React, {Fragment, useState, useEffect} from 'react';
import { Box, Grid } from '@material-ui/core';
import CarroDatePicker from '../datePicker/CarroDatePicker';
import CarroTextField from '../textField/CarroTextField';
import PrimaryButton from '../buttons/primaryButton/primaryButton';
import { useTranslation } from "react-i18next";
import { cardNumberValidator, cvvValidator, nameValidator } from '../../utils/Functions/input-validators';
const AddCard = (rest) =>{
    const { t } = useTranslation();
    const {...props} = rest;
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(()=>{
        setHasErrors(nameValidator(props.completeName))
    }, [props.completeName])

    useEffect(()=>{
        setHasErrors(cardNumberValidator(props.cardNumber))
    }, [props.cardNumber])

    useEffect(()=>{
        setHasErrors(cvvValidator(props.cvv))
    }, [props.cvv])

    return (
        <Fragment>
            <Grid container item xs={12} justifyContent='center'>
                <Box mt={props.marginTop}fontWeight={500} fontSize={16}>{t("AddCard")}</Box>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                <CarroTextField type='phone' error={cardNumberValidator(props.cardNumber)} helperText={cardNumberValidator(props.cardNumber) ? t('CardNumberFormat') : ''} 
                                size='small' value={props.cardNumber} onChange={props.cardNumberSet} variant ='outlined' label={t("AddCard")} fullWidth/>
            </Grid>
            <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                <CarroDatePicker size='small' disablePast value={props.expDate} onChange={props.expDateSet} views={["month","year"]} format="MM/yy" label={t("LastDate")}/>  
            </Grid>
            <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                <CarroTextField error={nameValidator(props.completeName)} helperText={nameValidator(props.completeName) ? t('OnlyChars') : ''}
                                size='small' value ={props.completeName} onChange={props.completeNameSet} 
                                variant ='outlined' label={t("CardName")} fullWidth/>
            </Grid>
            <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                <CarroTextField type='phone' error={cvvValidator(props.cvv)} helperText={cvvValidator(props.cvv) ? t('OnlyNumbers')+' '+t('AndNotLessOrMore') : ''}
                                size='small' value={props.cvv} onChange={props.cvvSet} variant ='outlined' label='CVV/CVC' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Box display={props.showSaveButton ? props.showSaveButton : 'none'} width={0.7} marginBottom={2}>
                    <PrimaryButton disabled = {props.cardNumber && props.expDate && props.completeName && props.cvv && !hasErrors ? false : true} variant = 'contained' onClick={props.clickedSaveButton} fullWidth>{t("SaveButton")}</PrimaryButton>
                </Box>
            </Grid>
        </Fragment>
    );

}

export default AddCard;