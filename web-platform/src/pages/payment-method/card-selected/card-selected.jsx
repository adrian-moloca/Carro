import React, { useState } from 'react';
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
        <Container className={'Primary-container-style'}>
            <Grid container xs={12} justifyContent='center' spacing={1}>
                <Grid container item xs={12} justifyContent='center'> 
                    <Box fontSize={22} justifyContent='center' mt='3%'>Metoda de plata</Box>
                </Grid>
                <Grid container item xs={8} justifyContent='center'>
                    <Box borderRadius='10px'  boxShadow={3} display ='flex' flexDirection='column' mt ={8} p={2}>
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
                    <Box display='flex' justifyContent='center' mt={8}>
                        <Link to='/payment-method/add-method' style={{textDecoration: 'none'}}>
                        <PrimaryButton size='large' endIcon={<CreditCard/>} fullWidth>Adauga metoda de plata</PrimaryButton>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Editeaza</MenuItem>
                <MenuItem onClick={handleClose}>Sterge</MenuItem>       
            </Menu>

        </Container>

    );
};

export default CardSelected;