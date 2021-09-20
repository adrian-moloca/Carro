import React, { Fragment, useState } from "react";
import { Box, Grid, FormControlLabel, RadioGroup } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
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

    const [cardNumber, setCardNumber] = useState(null);

    const[expDate, setExpDate] = useState(null);

    const[completeName, setCompleteName] = useState(null);

    const[CVV, setCVV] = useState(null);

    const[payment, setPayment] = useState('cardOnline');

    const [cardSetted, setCardSetted] =  useState(localStorage.getItem('paymentMethodExist'));

    const[savingData, setSavingData] = useState(false);

    const handlePayment = (event)=>{
        setPayment(event.target.value);
      };

    const handleSaveData = (event) =>{
        !event.target.checked ? setSavingData(false) : setSavingData(true);
    }

    const handleSetCompleteName = (event) =>{
      if(savingData)
        setCompleteName(event.target.value)
    }
  
    const handleSetCardNumber = (event) =>{
      if(savingData)
        setCardNumber(event.target.value)
    }
  
    const handleSetExpDate=(date)=>{
      if(savingData)
        setExpDate(date);
    }
  
    const handleSetCVV = (event) =>{
      if(savingData)
        setCVV(event.target.value);
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
                        <AddCard cardNumber = {cardNumber} cardNumberSet = {(e)=>handleSetCardNumber(e)} 
                                  expDate={expDate} expDateSet={handleSetExpDate} completeName = {completeName} 
                                  completeNameSet={(e)=>handleSetCompleteName(e)} cvv={CVV} cvvSet={(e)=>handleSetCVV(e)}/>
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