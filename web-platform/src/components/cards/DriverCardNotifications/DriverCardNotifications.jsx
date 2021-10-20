import React, { useState } from 'react';
import {Box, Grid, Link} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import BackdropSelectDriver from '../../backdrop/driver-select/backDrop';
import SeeProfileBtn from '../../buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn'
import useStyles from './DriverCardNotificationsStyle';
import { useTranslation } from "react-i18next";
const DriverCardNotifications =(props)=>{
    const { t } = useTranslation();
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
                                   {t("ViewProfile")}
                            </SeeProfileBtn>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent='center'>
                <Box fontSize='20px' fontWeight='500'>{props.name}</Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Box marginTop='5%'>{t("DriverCardDeparture")} {props.plecare}</Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Box>{t("DriverCardDestination")} {props.destinatie}</Box>
            </Grid>
            <Grid container justifyContent='center'>
                <Box marginBottom='5%'>{t("DriverCardType")} {props.tipTransport}</Box>
            </Grid>
            <Grid container xs={12} justifyContent='center'>
                <Rating value={props.driverRate} readOnly precision={0.5}/>
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