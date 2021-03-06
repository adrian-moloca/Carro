import React, { Fragment, useEffect, useState } from 'react';
import { Box, ButtonBase, Grid, FormControlLabel } from '@material-ui/core';
import masterCard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';
import americanExpress from '../../assets/images/americanExpress.png';
import discover from '../../assets/images/discover.png';
import CarroRadio from '../radio/CarroRadio';
import CarroCreditCard from '../cards/CreditCard/CreditCard';
import AddCard from '../add-card/add-card';
import {Add} from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import EditCreditCard from '../modals/edit-credit-card/edit-credit-card';

const CreditCardsManager = (props) =>{

    const{t}=useTranslation();

    const[cardSelected, setCardSelected] = useState('cardOnline1');
    const[cardHolder, setCardHolder] = useState('');
    const[cardNumber, setCardNumber] = useState('');
    const[cardCVV, setCardCVV] = useState('');
    const[expDate, setExpDate] = useState(new Date());
    const [savedCardsData, setSavedCardsData] = useState([
        {
            name:'cardOnline1',
            cardProvider: masterCard,
            cardHolder: 'Card Holder Name',
            cardNumber:'5333 1234 1234 1236',
            dateSaved: '25/08/21',
            expDate: '08/24',
            cvv: '111',
            onEdit: false,
        },
    ]);
    const [addCard, setAddCard] = useState(false);

    useEffect(()=>{
        
    },[savedCardsData])

    const handleExpDate = (date)=>{
        setExpDate(date);
    }

    const handleCardNumber =(event)=>{
        setCardNumber(event.target.value);
    }

    const handleCardHolder =(event)=>{
        setCardHolder(event.target.value);
    }

    const handleCardCVV =(event)=>{
        setCardCVV(event.target.value);
    }

    const handleAddCard = () =>{
        if(!addCard){
            setAddCard(true); 
            setCardSelected(false);
         } 
         else setAddCard(false);
    }

    const handleEditCard = (index) =>{
        const temp = savedCardsData.map((card, i)=>{
           if(i===index) 
                if(!card.onEdit){
                    card.onEdit=true;
                    setCardSelected(false);
                    return card;
                }
                else {
                    card.onEdit=false;
                    return card;    
                }
        })
        setSavedCardsData(temp);
    }

    const handleCardSelect=(event)=>{
        if(event.target.checked){
             setCardSelected(event.target.value)
             setAddCard(false);
            }
         else setCardSelected('');
    }
    
    const cardProviderSearch=(cardNumber)=>{
        const cardNetwork = parseInt(cardNumber.charAt(0));
        switch(cardNetwork){
            case 3:{
                return americanExpress;
            }
            case 4:{
                return visa;
            }
            case 5:{
                return masterCard;
            }
            case 6:{
                return discover;
            }
            default:
                return 'Unknown';
        }
        
    }

    const getCurrentDate =() =>{
        const newDate = new Date()
        const date = newDate.getDate().toString();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear().toString();
        const stringDate = date + '/' + month.toString() + '/' + year.substr(year.length-2);
        return stringDate;
    }

    const getExpDate = (date) =>{
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString();
        const stringExp = month.toString() + '/' + year.substr(year.length-2);
        return stringExp;
    }

    const handleSaveButtonAddCard=(cardNumber, cardHolder, expDate, cvv)=>{
        const temp = [...savedCardsData];
        const numberSavedCards = savedCardsData.length + 1;
        const string = numberSavedCards.toString();
        temp.push({
            name: 'cardOnline'+ string,
            cardProvider: cardProviderSearch(cardNumber),
            cardHolder: cardHolder,
            cardNumber: cardNumber,
            dateSaved: getCurrentDate(),
            expDate: getExpDate(expDate),
            cvv: cvv,
            onEdit: false,
            });
        setSavedCardsData(temp);
        setAddCard(false);
        setCardSelected('cardOnline'+string);
    }

    const handleSaveButtonEditCard=(cardNumber, cardHolder, expDate, cvv, index)=>{
        const temp = savedCardsData.map((card, i)=>{
            if(i===index)
            {
                card.cardNumber=cardNumber;
                card.cardHolder=cardHolder;
                card.cvv=cvv;
                card.expDate=expDate;
                card.onEdit=false;
                card.cardProvider=cardProviderSearch(cardNumber);
            }
            return card;
        })
        setSavedCardsData(temp);
        setCardSelected(temp[index].name);
    }

    const deleteCard=(index, card)=>{
        const temp=savedCardsData.map((card, i)=>{
            if(i>index){
               const n = parseInt(card.name.charAt(card.name.length-1))-1;
               card.name = 'cardOnline'+n.toString();
                return card;             
            } 
            else
                return card; 
        })

        if(cardSelected === card)
            setCardSelected(temp[0].name) 
        temp.splice(index, 1);
        setSavedCardsData(temp);
    }
    

    const fclabel = (value, index) =>{
        var label = 'Selecteaza';
        var checked = false;
        if(cardSelected === value.name){
             label='Selectat';
             checked=true;
            }
        return (
            <Grid key={index} container item xs={12}>
                <Grid container item xs={12} sm={8} md={8} lg={8} xl={8} justifyContent='flex-end'>
                    <CarroCreditCard cardProvider = {value.cardProvider} cardHolder = {value.cardHolder}
                        cardNumber = {'**** **** **** ' + value.cardNumber.substr(value.cardNumber.length - 4, value.cardNumber.length)} 
                        dateEmission = {value.dateSaved} dateExp = {value.expDate} clickedDelete={()=>deleteCard(index, value.name)} 
                        clickedEdit={()=>handleEditCard(index)} creditCard={value} clickedSaveButton={()=>handleSaveButtonEditCard(index)}
                    />
                </Grid>
                <Grid container item  xs={12} sm={3} md={3} lg={3} xl={3} justifyContent='center' alignItems='center'>
                    <Box>
                        <FormControlLabel onChange={handleCardSelect} value={value.name} control={<CarroRadio/>} label={label} checked={checked}/>
                    </Box>       
                </Grid>
            </Grid>);
    }


    return(
        <Fragment>
            {savedCardsData.map((card, index)=>(fclabel(card, index)))}
            {addCard ? 
                (
                    <Fragment>
                        <AddCard marginTop={props.marginTopAddCard} 
                                 showSaveButton={props.showSaveButtonAddCard} clickedSaveButton={()=>handleSaveButtonAddCard(cardNumber, cardHolder, expDate, cardCVV)}
                                 cardNumber={cardNumber} cardNumberSet={handleCardNumber} expDate={expDate} expDateSet={handleExpDate}
                                 completeName={cardHolder} completeNameSet={handleCardHolder} cvv={cardCVV} cvvSet={handleCardCVV}/>
                    </Fragment>
                ) 
                : 
                (
                    <Grid container item xs={8} justifyContent='flex-end'>
                        <Box>
                            <ButtonBase className='Primary-color' onClick={handleAddCard}><Add fontSize='small'/>Adauga card</ButtonBase>
                        </Box>
                    </Grid>
                )
            }
        </Fragment>
    );
};

export default CreditCardsManager;