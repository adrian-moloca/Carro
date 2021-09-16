import React, { useState } from 'react';
import {Box, Grid, Link} from '@material-ui/core';
import {Star, StarBorder, StarHalf} from '@material-ui/icons';
import BackdropSelectDriver from '../../backdrop/backDrop';
import SeeProfileBtn from '../../buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn'
import useStyles from './DriverCardNotificationsStyle';

const DriverCardNotifications =(props)=>{

    const classes = useStyles();

    const[open, setOpen]=useState(false);

    const handleBtn =()=>{
        setOpen(!open);
    };

    const handleCloseBd=()=>{
        setOpen(false);
    };

    return(
        <Box m='2%' display='flex' width='0.8' p={1} borderRadius='10px' boxShadow={3}>
            <Grid container xs={12} justifyContent='center'>
                <Grid container item xs={12} justifyContent='flex-end'>
                    <img src={props.image} className={classes.profileImg}/>
                    <SeeProfileBtn>
                        <Link href="/courier-profile" undeline= 'none' color= 'inherit'>
                            Vezi Profilul
                        </Link>
                    </SeeProfileBtn>
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
            </Grid>
            <BackdropSelectDriver 
                open={open} 
                clicked={handleCloseBd}
                image={props.image}
                name={props.name}
                plecare={props.plecare}
                destinatie= {props.destinatie}
                telefon = {props.telefon}
                dataPlecare = {props.dataPlecare}
            />
        </Box>
    );
};

export default DriverCardNotifications;