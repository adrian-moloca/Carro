import React, { useState } from 'react';
import {Box, Grid} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import BackdropSelectDriver from '../../backdrop/driver-select/backDrop';
import useStyles from './DriverCardStyle';

const DriverCard =(props)=>{

    const classes = useStyles();

    const[open, setOpen]=useState(false);

    const handleBtn =()=> setOpen(!open);
    const handleCloseBd=(event)=>{
        if(event.target === document.getElementById('backdrop'))
            setOpen(false)
    };
    const handleCloseBdByBtn=(event)=>{ setOpen(false)};
   
    return(
        <Box m='2%' display='flex' width='0.26' p={1} borderRadius='10px' boxShadow={3}>
            <Grid container xs={12} justifyContent='center'>
                <Grid container item xs={12} justifyContent='center'>
                    <img src={props.image} className={classes.profileImg} alt={""}/>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                    <Box fontSize='20px' fontWeight='500'>{props.name}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent='left'>
                    <Box marginTop='5%' fontSize='15px' fontWeight='500'>Plecare: {props.plecare}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent='left'>
                    <Box fontSize='15px' fontWeight='500'>Destinatie: {props.destinatie}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent='left'>
                    <Box marginBottom='5%' fontSize='15px' fontWeight='500'>Tipul transportului: {props.transportType}</Box>
                </Grid>
                <Grid container item xs={8} justifyContent='space-around'>
                    <Rating value={props.driverRate} readOnly precision={0.5}/>
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
                driverRate={props.driverRate}
                plecare={props.plecare}
                destinatie= {props.destinatie}
                tipTransport = {props.transportType}
                dataPlecare = {props.dataPlecare}/>
        </Box>
    );
};

export default DriverCard;