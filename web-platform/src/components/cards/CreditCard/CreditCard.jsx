import React, {useState} from 'react';
import {Box, Grid, IconButton, Menu, MenuItem} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Edit } from '@material-ui/icons';
import useStyles from './CreditCardStyle';
import EditCreditCard from '../../modals/edit-credit-card/edit-credit-card';
const CarroCreditCard = (props)=>{

    const classes = useStyles();

    const[anchorEl,setAnchorEl] =useState(null)
  
    const [open, setOpen] = useState(false);

    const handleEdit = (event)=>{
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };

    const handleClose = ()=>{
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <Box 
            minWidth='300px' 
            maxWidth='450px' 
            borderRadius='10px' 
            boxShadow={3} 
            display ='flex'
            justifyContent="space-between"
            alignItems="center"
            flexDirection='column' 
            className={classes.paymentCard}
        >
            <Grid container justifyContent='center'>
                <Grid container item xs={6} justifyContent='flex-start'>
                    <img src={props.cardProvider} className={classes.cardProviderIco} alt={""}/>    
                </Grid>
                <Grid container item xs={5} justifyContent='flex-end'>
                    <Box mx={2} mt={2} className={'Secondary-color'}>{props.cardHolder}</Box>
                </Grid>
                <EditCreditCard creditCard={props.creditCard}/>
                <Grid container item xs={11} justifyContent='flex-start'>
                    <Box mt={2} fontSize={25} fontWeight='500'>{props.cardNumber}</Box>
                </Grid>
                <Grid container item xs={6} justifyContent='flex-start'>
                    <Box mx={2} mt={2} className={'Secondary-color'}>{'Adaugat la ' + props.dateEmission}</Box>
                </Grid>
                <Grid container item xs={6} justifyContent='flex-end'>
                    <Box mx={2} mt={2} className={'Secondary-color'}>{'Expira la ' + props.dateExp}</Box>
                </Grid>
            </Grid>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={props.clickedEdit}>Editeaza</MenuItem>
                <Link to='/payment-method' style={{textDecoration: 'none', color: 'black'}}>
                    <MenuItem onClick={props.clickedDelete}>Sterge</MenuItem>       
                </Link>
            </Menu>
        </Box>
    );
};

export default CarroCreditCard;