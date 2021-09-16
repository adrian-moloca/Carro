import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Box, List, Grid} from '@material-ui/core';
import {Star, StarBorder, StarHalf} from '@material-ui/icons';
import useStyles from './DriverCardStyle';
import ListItemPersonalized from '../../list/listItemad/listItemPersonalized';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import BackdropSelectDriver from '../../backdrop/backDrop';

const DriverCard =(props)=>{


    const classes = useStyles();

    const[open, setOpen]=useState(false);

    const handleBtn =()=>{
        setOpen(!open);
    };

    const handleCloseBd=(event)=>{
        if(event.target === document.getElementById('backdrop'))
            setOpen(false)
    };

    const handleCloseBdByBtn=(event)=>{
            setOpen(false)
    };

    console.log(open);
   
            return(
                <Box m='2%' display='flex' width='0.26' p={1} borderRadius='10px' boxShadow={3}>
                    <Grid container xs={12} justifyContent='center'>
                        <Grid container item xs={12} justifyContent='center'>
                            <img src={props.image} className={classes.profileImg}/>
                        </Grid>
                        <Grid container item xs={12} justifyContent='center'>
                            <Box fontSize='20px' fontWeight='500'>{props.name}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='center'>
                            <Box marginTop='5%'>Plecare: {props.plecare}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='center'>
                            <Box>Destinatie: {props.destinatie}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='center'>
                            <Box marginBottom='5%'>Telefon: {props.telefon}</Box>
                        </Grid>
                        <Grid container item xs={8} justifyContent='space-around'>
                            <Star className={classes.starsStyle}/>
                            <Star className={classes.starsStyle}/>
                            <Star className={classes.starsStyle}/>
                            <StarHalf className={classes.starsStyle}/>
                            <StarBorder className={classes.starsStyle}/>
                        </Grid>
                        <Grid container item xs={8} justifyContent='center'>
                            <Box mt='15%' mb='2%' width={1}>
                                <PrimaryButton variant='contained'  onClick={handleBtn} fullWidth>
                                    SELECTEAZA
                                </PrimaryButton>
                            </Box>
                        </Grid>
                    </Grid>
                    <BackdropSelectDriver 
                        open={open} 
                        clicked={handleCloseBd}
                        clickedBackBtn={handleCloseBdByBtn}
                        image={props.image}
                        name={props.name}
                        plecare={props.plecare}
                        destinatie= {props.destinatie}
                        telefon = {props.telefon}
                        dataPlecare = {props.dataPlecare}/>
                </Box>
        );
};




export default DriverCard;