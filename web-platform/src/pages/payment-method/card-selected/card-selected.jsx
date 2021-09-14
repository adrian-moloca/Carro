import React, { Fragment, useState } from 'react';
import { Container, Box, Button, Menu, MenuItem, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import masterCard from '../../../assets/images/mastercard.png';
import useStyles from './card-selectedStyle';
import {Edit, CreditCard} from '@material-ui/icons';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';

const CardSelected = () =>{

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

    return(
        <Fragment>
                <Grid container item xs={8} justifyContent='center'>
                    <Box borderRadius='10px'  boxShadow={3} display ='flex' flexDirection='column' mt ='5%' p={2}>
                        <Grid container xs={12} justifyContent='center'>
                            <Grid item xs={6} justifyContent='flex-start'>
                                <img src={masterCard} className={classes.masterCardIco}/>    
                            </Grid>
                            <Grid container item xs={6} justifyContent='flex-end'>
                                <Button onClick={handleEdit} display='flex' variant='default' endIcon={<Edit className={'Primary-color'}/>}/>
                            </Grid>
                            <Grid container item xs={11} justifyContent='flex-start'>
                                <Box mt={3} fontSize={25} fontWeight='500'>**** **** **** 1234</Box>
                            </Grid>
                            <Grid container item xs={6} justifyContent='flex-start'>
                                <Box mx={2} mt={6} className={'Secondary-color'}>Adaugat la 25/08/2021</Box>
                            </Grid>
                            <Grid container item xs={6} justifyContent='flex-end'>
                                <Box mx={2} mt={6} className={'Secondary-color'}>Expira la 08/2024</Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Box width='35%'display='flex' justifyContent='center' mt={7}>
                        <Link to='/payment-method/add-card' style={{textDecoration: 'none', width:'100%'}}>
                            <PrimaryButton size='large' endIcon={<CreditCard/>} fullWidth>Adauga card nou</PrimaryButton>
                        </Link>
                    </Box>
                </Grid>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Editeaza</MenuItem>
                <Link to='/payment-method' style={{textDecoration: 'none', color: 'black'}}>
                    <MenuItem onClick={() => localStorage.setItem("paymentMethodExist", false)}>Sterge</MenuItem>       
                </Link>
            </Menu>
        </Fragment>
    );
};

export default CardSelected;