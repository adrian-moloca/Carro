import React, {Fragment, useEffect, useState} from 'react';
import {Container, Grid, Box, Modal, Fade, IconButton} from '@material-ui/core';
import useStyles from './edit-credit-card-style';
import { Close, Edit} from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { useTranslation } from "react-i18next";
import CarroTextField from '../../textField/CarroTextField';
import CarroDatePicker from '../../datePicker/CarroDatePicker';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';


const EditCreditCard = ({creditCard, ...props}) =>{
    const { t } = useTranslation();
    const [card, setCard] = useState(creditCard)
    const [cardHolder, setCardHolder] = useState(card.cardHolder);
    const [cardNumber, setCardNumber] = useState(card.cardNumber);
    const [cardCVV, setCardCVV] = useState(card.cvv);
    const [expDate, setExpdate] = useState(card.expDate)
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        setCard(creditCard);
    }, [creditCard])

    useEffect(()=>{
        setOpen(creditCard.onEdit)
    },[creditCard])

    const handleOpen = ()=>{
        setOpen(true);
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const classes = useStyles();

    return(
        <Fragment>
            <Grid container item xs={1} justifyContent='flex-end'>
                <IconButton onClick={handleOpen} className={'Primary-color'}>
                    <Edit fontSize='small'/>
                </IconButton>
            </Grid>
            <Modal open={open} onClose={handleClose}  className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop}>
                        <Grid container >
                            <Grid container item xs={10} justifyContent='flex-start'>
                                <Box fontSize='18px' color='grey.500'>{t("EditRide")}</Box>
                                </Grid>
                            <Grid container item xs={2} justifyContent='flex-end'>
                                <IconButtonNoVerticalPadding onClick={handleClose}>
                                    <Close />
                                </IconButtonNoVerticalPadding>
                            </Grid>
                        </Grid>
                        <Box py={2}>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} md ={6} xl={6}  justifyContent='center'>
                                    <CarroTextField size='small' value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)} variant ='outlined' label={t("AddCard")} fullWidth/>
                                </Grid>
                                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                                    <CarroDatePicker size='small' value={expDate} onChange={(date)=>setExpdate(date)} views={["year", "month"]} format="MM/yyyy" openTo='year' label={t("LastDate")}/>  
                                </Grid>
                                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                                    <CarroTextField size='small' value ={cardHolder} onChange={(e)=>setCardHolder(e.target.value)} variant ='outlined' label={t("CardName")} fullWidth/>
                                </Grid>
                                <Grid container item xs={12}  md ={6} xl={6} justifyContent='center'>
                                    <CarroTextField size='small' value={cardCVV} onChange={(e)=>setCardCVV(e.target.value)} variant ='outlined' label='CVV/CVC' fullWidth/>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container>
                            <PrimaryButton disabled = {cardNumber && expDate && cardHolder && cardCVV ? false : true} variant = 'contained' onClick={()=>{console.log('send new card data'); handleClose()}} fullWidth>{t("SaveButton")}</PrimaryButton>
                        </Grid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>

    );

}

export default EditCreditCard;