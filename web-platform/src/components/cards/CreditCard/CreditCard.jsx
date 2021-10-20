import React, {useState} from 'react';
import useStyles from './CreditCardStyle';
import {Box, Button, Container, Grid, Menu, MenuItem} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CallMissedSharp, Edit } from '@material-ui/icons';

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
            minWidth='225px' 
            maxWidth='450px' 
            borderRadius='10px' 
            boxShadow={3} 
            display ='flex'
            justifyContent="space-between"
            alignItems="center"
            flexDirection='column' 
            // p={2} 
            className={classes.paymentCard}>
                <Grid container xs={12}  justifyContent='center'>
                    <Grid item xs={6} justifyContent='flex-start'>
                        <img src={props.cardProvider} className={classes.cardProviderIco} alt={""}/>    
                    </Grid>
                    <Grid container item xs={5} justifyContent='flex-end'>
                        <Box mx={2} mt={2} className={'Secondary-color'}>{props.cardHolder}</Box>
                    </Grid>
                    <Grid container item xs={1} justifyContent='flex-end'>
                        <Button onClick={handleEdit} display='flex' variant='default' endIcon={<Edit className={'Primary-color'}/>}/>
                    </Grid>
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
                <MenuItem onClick={handleClose}>Editeaza</MenuItem>
                <Link to='/payment-method' style={{textDecoration: 'none', color: 'black'}}>
                    <MenuItem onClick={props.clickedDelete}>Sterge</MenuItem>       
                </Link>
            </Menu>
            </Box>
       
    );

}

export default CarroCreditCard;