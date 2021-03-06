import React, {useState} from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import AddCard from '../../../components/add-card/add-card';
import { withStyles } from '@material-ui/styles';
import { useTranslation } from "react-i18next";
const GridCarro = withStyles({'spacing-xs-5':{margin: 0}})(Grid);

const AddPaymentMethod = () =>{
    const { t } = useTranslation();
    // state
    const [cardNumber, setCardNumber] = useState(null);
    const [expDate, setExpDate] = useState(null);
    const [completeName, setCompleteName] = useState(null);
    const [CVV, setCVV] = useState(null);
    // handlers
    const handleSetCompleteName = (event) => setCompleteName(event.target.value);
    const handleSetCardNumber = (event) => setCardNumber(event.target.value);
    const handleSetExpDate = (date) => setExpDate(date);
    const handleSetCVV = (event) => setCVV(event.target.value);

    return(
        <Container className='Primary-container-style'>
            <GridCarro container spacing={5} justifyContent='center' >
                <Grid container item xs={12} justifyContent='center'>
                    <Box mb={3} fontSize={22} justifyContent='center' mt='3%'>
                    {t("PaymentMethod")}
                    </Box>
                </Grid>
                <AddCard 
                    showSaveButton='true'
                    cardNumber = {cardNumber} 
                    cardNumberSet = {(e)=>handleSetCardNumber(e)} 
                    expDate={expDate} 
                    expDateSet={handleSetExpDate} 
                    completeName = {completeName} 
                    completeNameSet={(e)=>handleSetCompleteName(e)}
                    cvv={CVV}
                    cvvSet={(e)=>handleSetCVV(e)}
                />
            </GridCarro>
        </Container>
    );
};

export default AddPaymentMethod;