import React, { Fragment, useState } from "react";
import { Box, Grid, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import CarroRadio from "../../../components/radio/CarroRadio";
import AddCardInStep from "./add-card-in-step";
import CardSelected from "../../payment-method/card-selected/card-selected";

const RadioGroupPersonalized = withStyles({
    root:{
          width:'60%',
          justifyContent:'space-between',
          marginBottom:'3%',
      },
  
  })(RadioGroup);

const StepFour = () =>{

    const[payment, setPayment] = useState('cardOnline');

    const [cardSetted, setCardSetted] =  useState(localStorage.getItem("paymentMethodExist"));

    const handlePayment = (event)=>{
        setPayment(event.target.value);
      };

    return(
        <Box display='flex' justifyContent='center' mt='3%'>
              <Grid container xs={12} spacing={3} justifyContent='center'>
                <Grid container item xs={12} justifyContent="center">
                  <Box fontWeight={500} fontSize={22}>Modalitati de plata</Box>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                    <RadioGroupPersonalized row value = {payment} onChange={handlePayment} >                   
                        <FormControlLabel value = 'cardOnline' control={<CarroRadio/>} label='Card online'/>
                        <FormControlLabel value = 'ordinDePlata' control={<CarroRadio/>} label='Ordin de plata'/>
                        <FormControlLabel value = 'ramburs' control={<CarroRadio/>} label='Ramburs'/>
                    </RadioGroupPersonalized>
                </Grid>
                {payment === 'cardOnline' ? (
                  cardSetted ?
                    <CardSelected/>
                    : <AddCardInStep/> 
                    ) : null}
              </Grid>
          </Box>
    );
};

export default StepFour;