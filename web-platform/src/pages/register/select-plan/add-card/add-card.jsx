import React,{useState} from "react";
import { Container, Grid, FormControlLabel } from "@material-ui/core";
import AddCard from '../../../../components/add-card/add-card';
import CarroCheckbox from "../../../../components/checkbox/CarroCheckbox";
import PrimaryButton from "../../../../components/buttons/primaryButton/primaryButton"
import SecondaryButton from "../../../../components/buttons/secondaryButton/secondaryButton"
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const MyGrid = withStyles({'spacing-xs-3':{margin: 0}})(Grid);

const PremiumPlanPayment = () => {

  const [savingCard, setSavingCard] = useState(false);

  const [cardNumber, setCardNumber] = useState(null);

  const[expDate, setExpDate] = useState(null);

  const[completeName, setCompleteName] = useState(null);

  const[CVV, setCVV] = useState(null);
  
  const handleSaveData = (event) => {
     !event.target.checked ? setSavingCard(false) : setSavingCard(true);
  };

  const handleSetCompleteName = (event) =>{
    if(savingCard)
      setCompleteName(event.target.value)
  }

  const handleSetCardNumber = (event) =>{
    if(savingCard)
      setCardNumber(event.target.value)
  }

  const handleSetExpDate=(date)=>{
    if(savingCard)
      setExpDate(date);
  }

  const handleSetCVV = (event) =>{
    if(savingCard)
      setCVV(event.target.value);
  }
  
  return (
    <Container className={"Primary-container-style"}>
      <MyGrid container xs = {12} spacing={3} justifyContent='center'>
        <AddCard 
          cardNumber = {cardNumber} 
          cardNumberSet = {(e)=>handleSetCardNumber(e)} 
          expDate={expDate} expDateSet={handleSetExpDate} 
          completeName = {completeName} 
          completeNameSet={(e)=>handleSetCompleteName(e)}
          cvv={CVV} cvvSet={(e)=>handleSetCVV(e)}
        />
        <Grid container item xs={10} justifyContent='flex-end'>
          <FormControlLabel onChange = {(e)=>handleSaveData(e)} control={<CarroCheckbox/>} label='Salveaza Datele'/>
        </Grid>
        <Grid container item xs={4} justifyContent='center'>
          <Link to='/register/select-plan' style={{textDecoration: 'none', width:'100%'}}> 
            <SecondaryButton variant="contained" fullWidth> ANULEAZA </SecondaryButton> 
          </Link>
        </Grid>
        <Grid container item xs={4} justifyContent='center'>
          <Link to='/payment-method' style={{textDecoration: 'none', width:'100%'}}>
            <PrimaryButton variant="contained" fullWidth> PLATESTE</PrimaryButton>
          </Link>
        </Grid>
      </MyGrid>
    </Container>
  );
};

export default PremiumPlanPayment;
