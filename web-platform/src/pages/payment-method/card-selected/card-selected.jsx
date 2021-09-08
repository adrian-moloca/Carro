import React, { useState } from 'react';
import { Container, Box, Button, Menu, MenuItem } from '@material-ui/core';
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
            <Box fontSize={22} display='flex' justifyContent='center'>Metoda de plata</Box>
            <Box borderRadius='10px'  boxShadow={3} display ='flex' flexDirection='column' mt ={3} mx={20} p={2}>
                <Box display=' flex ' justifyContent='space-between'>
                    <img src={masterCard} className={classes.masterCardIco}/>    
                    <Button onClick={handleEdit} display='flex' variant='default' endIcon={<Edit className={'Primary-color'}/>}/>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Editeaza</MenuItem>
                        <MenuItem onClick={handleClose}>Sterge</MenuItem>       
                    </Menu>
                </Box>
                <Box mx={2} mt={1} fontSize={20} fontWeight='500'>**** **** **** 1234</Box>
                <Box display='flex' justifyContent='space-between'>
                    <Box mx={2} mt={6} className={'Secondary-color'}>Adaugat la 25/08/2021</Box>
                    <Box mx={2} mt={6} className={'Secondary-color'}>Expira la 08/2024</Box>
                </Box>
            </Box>
            <Box mt={6} display='flex' justifyContent='center'>
                <Link to='/payment-method/add-method' style={{textDecoration: 'none'}}>
                    <PrimaryButton size='large' endIcon={<CreditCard/>}>Adauga metoda de plata</PrimaryButton>
                </Link>
            </Box>

        </Container>

    );
};

export default CardSelected;