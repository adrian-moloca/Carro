import React, { Fragment, useState } from "react";
import { Box, Grid, FormControlLabel, RadioGroup } from "@mui/material";
import { withStyles } from "@mui/styles";
import CarroRadio from "../../../components/radio/CarroRadio";
import CarroCheckbox from "../../../components/checkbox/CarroCheckbox";
import AddCard from "../../../components/add-card/add-card";
import CardSelected from "../../../components/card-selected/card-selected";

const RadioGroupPersonalized = withStyles({
    root:{
          width:'60%',
          justifyContent:'space-between',
      },
  
  })(RadioGroup);

const StepFour = () =>{

    const[payment, setPayment] = useState('cardOnline');

    const [cardSetted, setCardSetted] =  useState(localStorage.getItem('paymentMethodExist'));

    const[saveData, setSaveData] = useState(false);

    const handlePayment = (event)=>{
        setPayment(event.target.value);
      };

    const handleSaveData = () =>{
        !saveData ? setSaveData(true) : setSaveData(false);
    }

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
                    <CardSelected cardSelected={localStorage.getItem("paymentMethodExist")}/>
                    : 
                    (<Fragment>
                        <AddCard/>
                        <Grid container item xs={12} justifyContent='flex-end'>
                            <FormControlLabel onChange = {handleSaveData} control={<CarroCheckbox/>} 
                                    label='Salveaza Datele'/>
                        </Grid>
                      </Fragment>)
                ) : null}
              </Grid>
          </Box>
    );
};

export default StepFour;