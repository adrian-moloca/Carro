import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, ListItem, List, Backdrop} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import profilePhotoLeft from '../../assets/images/photoprofile1.png'
import {Star, StarBorder, StarHalf} from '@material-ui/icons';
import useStyles from './cardsTransporturiDisbonibileStyles';
import ListItemPersonalized from '../list/listItemad/listItemPersonalized';
import PrimaryButton from '../buttons/primaryButton/primaryButton';
import BackdropSelectDriver from '../backdrop/backDrop';

const MyCardTD =(props)=>{


    const classes = useStyles();

    const[open, setOpen]=useState(false);

    const handleBtn =()=>{
        setOpen(!open);
    };

    const handleCloseBd=()=>{
        setOpen(false);
    };

    console.log(open);
   
            return(
                <Box display='flex' flexDirection='column' width='0.3' p={1} borderRadius='10px'  boxShadow={3}>
                    <Box display ='flex' flexDirection= 'column' alignItems='center'>
                        <img src={props.image} className={classes.profileImg}/>
                        <Box mt = {1} fontSize='20px' fontWeight='500'>{props.name}</Box>
                    </Box>
                    <Box mt ={2}>
                        <List>
                            <ListItemPersonalized >Plecare: {props.plecare}</ListItemPersonalized>
                            <ListItemPersonalized>Destinatie: {props.destinatie}</ListItemPersonalized>
                            <ListItemPersonalized>Telefon: {props.telefon}</ListItemPersonalized>
                        </List>
                    </Box>
                    <Box ml='25%' width='50%' display='flex' justifyItems='spacebetween'>
                        <Star className={classes.starsStyle}/>
                        <Star className={classes.starsStyle}/>
                        <Star className={classes.starsStyle}/>
                        <StarHalf className={classes.starsStyle}/>
                        <StarBorder className={classes.starsStyle}/>
                    </Box>
                    <Box ml='22%'mt={2} width={0.5 }>
                            <PrimaryButton variant='contained'  onClick={handleBtn}>
                                SELECTEAZA
                            </PrimaryButton>
                    </Box>
                    <BackdropSelectDriver 
                    open={open} 
                    clicked={handleCloseBd}
                    image={props.image}
                    name={props.name}
                    plecare={props.plecare}
                    destinatie= {props.destinatie}
                    telefon = {props.telefon}
                    dataPlecare = {props.dataPlecare}/>
                </Box>
        );
};




export default MyCardTD;