import React, {Fragment} from 'react';
import { Box, Grid } from '@material-ui/core';
import CarroDatePicker from '../datePicker/CarroDatePicker';
import CarroTextField from '../textField/CarroTextField';
import PrimaryButton from '../buttons/primaryButton/primaryButton';
import { useTranslation } from "react-i18next";
const AddCard = (props) =>{
    const { t } = useTranslation();
    return (
        <Fragment>
            <Grid Grid container item xs={12} justifyContent='center'>
                <Box mt={props.marginTop}fontWeight={500} fontSize={20}>{t("AddCard")}</Box>
            </Grid>
            <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                <CarroTextField value={props.cardNumber} onChange={props.cardNumberSet} variant ='outlined' label={t("AddCard")} fullWidth/>
            </Grid>
            <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                <CarroDatePicker dateValue={props.expDate} handleDateSelect={props.expDateSet} views={["month","year"]} format="MM/yy" openTo='month' label={t("LastDate")}/>  
            </Grid>
            <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                <CarroTextField value ={props.completeName} onChange={props.completeNameSet} variant ='outlined' label={t("CardName")} fullWidth/>
            </Grid>
            <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                <CarroTextField value={props.cvv} onChange={props.cvvSet} variant ='outlined' label='CVV/CVC' fullWidth/>
            </Grid>
            <Grid container item xs={12} justifyContent='center'>
                <Box display={props.showSaveButton ? props.showSaveButton : 'none'} width={0.7} marginBottom={2}>
                    <PrimaryButton disabled = {props.cardNumber && props.expDate && props.completeName && props.cvv ? false : true} variant = 'contained' onClick={props.clickedSaveButton} fullWidth>{t("SaveButton")}</PrimaryButton>
                </Box>
            </Grid>
        </Fragment>
    );

}

export default AddCard;