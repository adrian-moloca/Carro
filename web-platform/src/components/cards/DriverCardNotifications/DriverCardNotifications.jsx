import React, { useState } from 'react';
import {Box, Grid, Link} from '@material-ui/core';
import {Star, StarBorder, StarHalf} from '@material-ui/icons';
import BackdropSelectDriver from '../../backdrop/driver-select/backDrop';
import SeeProfileBtn from '../../buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn'
import useStyles from './DriverCardNotificationsStyle';

const DriverCardNotifications =(props)=>{

    const classes = useStyles();

    const[open, setOpen]=useState(false);
    
    const handleBtn =()=> setOpen(!open);
    const handleCloseBd=()=>setOpen(false);

    return(
        <Box mr={2} mt={1} width='1' p={1} borderRadius='10px' boxShadow={3}>
            <Grid container>
                <Grid item xs={7} justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="flex-end" alignItems="center" >
                        <img src={props.image} className={classes.profileImg} alt={""}/>
                    </Box>
                </Grid>
                <Grid item xs={5}  justifyContent="center" alignItems="center">
                    <Box display="flex" justifyContent="flex-end" alignItems="center" >
                        <Link href="/courier-profile" underline='none' color='inherit'>
                            <SeeProfileBtn>
                                    Vezi Profilul
                            </SeeProfileBtn>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Box fontSize='20px' fontWeight='500'>{props.name}</Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Box marginTop='5%'>Plecare: {props.plecare}</Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Box>Destinatie: {props.destinatie}</Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Box marginBottom='5%'>Tip transport: {props.tipTransport}</Box>
            </Grid>
            <Grid container justifyContent='space-evenly'>
                <Star className={classes.starsStyle}/>
                <Star className={classes.starsStyle}/>
                <Star className={classes.starsStyle}/>
                <StarHalf className={classes.starsStyle}/>
                <StarBorder className={classes.starsStyle}/>
            </Grid>
            <BackdropSelectDriver 
                open={open} 
                clicked={handleCloseBd}
                image={props.image}
                name={props.name}
                plecare={props.plecare}
                destinatie= {props.destinatie}
                tipTransport = {props.tipTransport}
                dataPlecare = {props.dataPlecare}
                pickUpAdress ={props.pickUpAdress}
                dropOffAdress ={props.dropOffAdress}
            />
        </Box>
    );
};

export default DriverCardNotifications;