import React,{useState} from "react";
import useStyles from "./AddCardStyles";
import {
  Container,
  Box,
  TextField,
  Grid,
  Checkbox,
 
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CarroTextField from "../../../../components/textField/CarroTextField"
import CarroDatePicker from '../../../../components/datePicker/CarroDatePicker'
import CarroCheckbox from "../../../../components/checkbox/CarroCheckbox";
import PrimaryButton from "../../../../components/buttons/primaryButton/primaryButton"
import SecondaryButton from "../../../../components/buttons/secondaryButton/secondaryButton"
import { Link } from "react-router-dom";
const AddCard = () => {

  const [savingCard, setSavingCard] = useState();

  const[expDate, setExpDate] = useState(new Date());
  
  const handleSavingCard = (event) => {
     event.target.checked ? setSavingCard(false) : setSavingCard(true);
  };

  const handleExpDate =(date)=>{
    setExpDate(date);
  };
  
  const classes = useStyles();
  return (
    <Container className={"Primary-container-style"}>
      <Grid container xs = {12} spacing={3} justifyContent='center'>
        <Grid container item xs={12} justifyContent='center'>
          <Box mt={2} mb={2} fontWeight={400} fontSize={25}>
              Adauga card
          </Box>
        </Grid>
        <Grid container item xs={5} justifyContent='flex-end'>
           <CarroTextField variant= "outlined" label= "Numar card" fullWidth/>
        </Grid>
        <Grid container item xs={5} justifyContent='flex-start'>
            <CarroDatePicker dateValue={expDate} handleDateSelect={handleExpDate}
                    views={["month","year"]} defaultShow={expDate} format="MM/yyyy" openTo='month' label='Data expirare'/>
        </Grid>
        <Grid container item xs={5} justifyContent='flex-end'>
          <CarroTextField variant= "outlined" label= "Nume Complet" fullWidth/>
        </Grid>
        <Grid container item xs={5} justifyContent='flex-start'>
          <CarroTextField variant= "outlined" label= "CVV" fullWidth/>
        </Grid>
        <Grid container item xs={10} justifyContent='flex-start'>
            <FormControlLabel onChange = {handleSavingCard} control={<CarroCheckbox/>} 
                                    label='Salveaza card'/>
        </Grid>
        <Grid container item xs={4} justifyContent='center'>
         <Link to='/payment-method' style={{textDecoration: 'none', width:'100%'}}> 
          <SecondaryButton variant="contained" fullWidth> ANULEAZA </SecondaryButton> 
         </Link>
        </Grid>
        <Grid container item xs={4} justifyContent='center'>
          <Link to='/payment-method/card-selected' style={{textDecoration: 'none', width:'100%'}}>
            <PrimaryButton variant="contained" fullWidth> PLATESTE</PrimaryButton>
          </Link> 
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddCard;
