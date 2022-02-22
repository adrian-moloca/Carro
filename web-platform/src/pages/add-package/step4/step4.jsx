import React, { Fragment, useState } from "react";
import { Box, Grid, FormControlLabel, RadioGroup } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import CarroRadio from "../../../components/radio/CarroRadio";
import CarroCheckbox from "../../../components/checkbox/CarroCheckbox";
import AddCard from "../../../components/add-card/add-card";
import CreditCardsManager from "../../../components/credit-cards-manager/credit-cards-manager";
import { useTranslation } from "react-i18next";
const RadioGroupPersonalized = withStyles({
    root:{
          width:'60%',
          justifyContent:'center',
      },
  
  })(RadioGroup);

const StepFour = (props) =>{
    const { t } = useTranslation();

    function getPaymentMethod(paymentSelected){
        switch(paymentSelected){
          /* case 1:{
            return(
                <CreditCardsManager cardSelected={true} showSaveButtonAddCard={true}/>
              );
          } */
          /* case 2:{
            return(
                <Box>Here the data for the payment order</Box>
            );
          } */
          case 3:{
            return(
                <Grid container item xs={12} justifyContent="center">
                    <Box fontWeight={400} fontSize={18} textAlign='center'>{t("CashOnDeliverySelected")}</Box>
                </Grid>
            );
          }
          default:{
            return '';
          }
        }
    }

    return(
        <Box display='flex' justifyContent='center' mt='3%'>
              <Grid container spacing={3} justifyContent='center'>
                <Grid container item xs={12} justifyContent="center">
                  <Box fontWeight={500} fontSize={22}>{t("PaymentMethod")}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <RadioGroupPersonalized row value = {props.paymentMethod} onChange={(e)=>props.setPaymentMethod(parseInt(e.target.value))} >                   
                        {/* <FormControlLabel value = {1} control={<CarroRadio/>} label={t("Card")}/> */}
                        {/* <FormControlLabel value = {2} control={<CarroRadio/>} label={t("PaymentOrder")}/> */}
                        <FormControlLabel value = {3} control={<CarroRadio/>} label={t("CashOnDelivery")}/>
                    </RadioGroupPersonalized>
                </Grid>
                {getPaymentMethod(props.paymentMethod)}
              </Grid>
          </Box>
    );
};

export default StepFour;