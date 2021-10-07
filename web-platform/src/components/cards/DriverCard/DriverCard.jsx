import React, { Fragment, useState } from 'react';
import {Box, Grid} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
import ReactCardFlip from 'react-card-flip';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import PrimaryButton from '../../buttons/primaryButton/primaryButton';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import BackdropSelectDriver from '../../backdrop/driver-select/backDrop';
import useStyles from './DriverCardStyle';

const DriverCard =(props)=>{

    const classes = useStyles();

    const[open, setOpen]=useState(false);

    const[isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        const temp = isFlipped;
        setIsFlipped(!temp);
    }

    const handleBtn =()=> setOpen(!open);

    const handleCloseBd=(event)=>{
        if(event.target.className.includes('backdrop'))
            setOpen(false)
    };

    const handleCloseBdByBtn=(event)=>{ setOpen(false)};

    function getFrontCardBtns(driverSelected, requestStatus){
        if(driverSelected)
        {
            switch(requestStatus){
                case 'sent':
                    return(
                        <Grid container item xs={8} justifyContent='center'>
                            <Box my='31%' className='Secondary-color' fontSize='18px' fontWeight='500'>
                                In asteptare...
                            </Box>
                        </Grid>
                    );
                case 'accepted':
                    return(
                        <Grid container item xs={8} justifyContent='center'>
                            <Box mt ='52%' mb='2%' width={1}>
                                <PrimaryButton variant='contained'  onClick={handleClick} fullWidth>
                                    DETALII
                                </PrimaryButton>
                            </Box>
                        </Grid>
                    );
            }
        }
        else
        {
            return (
                <Fragment>
                    <Grid container item xs={8} justifyContent='center'>
                        <Box mt='26%' mb='2%' width={1}>
                            <GreenCaroButton variant='contained'  onClick={handleBtn} fullWidth>
                                SELECTEAZA
                            </GreenCaroButton>
                        </Box>
                    </Grid>
                    <Grid container item xs={8} justifyContent='center'>
                        <Box mb='2%' width={1}>
                            <PrimaryButton variant='contained'  onClick={handleClick} fullWidth>
                                DETALII
                            </PrimaryButton>
                        </Box>
                    </Grid>
                </Fragment>
            )
        }
    }

    function getBackCardBtns(driverSelected, packageExists, packageTaked){
        if(driverSelected)
        {
            return(
                <Grid container item xs={8} justifyContent='center'>
                    <Box mt='59%' width={1}>
                        <SecondaryButton disabled={packageTaked} variant='contained' fullWidth>REFUZA CU MOTIV</SecondaryButton>
                    </Box>
                </Grid>
            );

        }
        else
        {
            if(packageExists)
            {
                return(
                    <Fragment>
                        <Grid container item xs={8} justifyContent='center'>
                            <Box my='4%'>
                                <PrimaryButton variant='outlined' fullWidth>
                                    CERE TRANSPORT - CEVA MEDIU
                                </PrimaryButton>
                            </Box>
                        </Grid>
                        <Grid container item xs={8} justifyContent='center'>
                            <Box my='2%'>
                                <PrimaryButton variant='outlined' fullWidth>
                                    CERE TRANSPORT - CEVA MEDIU
                                </PrimaryButton>
                            </Box>
                        </Grid>
                    </Fragment>
                );
            }
            else
            {
                return(
                    <Grid container item xs={8} justifyContent='center'>
                        <Box my='2%'>
                            <PrimaryButton variant='outlined' fullWidth>
                                ADAUGA PACHET
                            </PrimaryButton>
                        </Box>
                    </Grid>
                );
            }
        }
    }
   
    return(
        <Fragment>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal' containerClassName={'CardFlipContainer'}>
               
            <Box display='flex' width='1' height='400px' p={1} borderRadius='10px' boxShadow={3}>
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
                    {getFrontCardBtns(props.driverSelected, props.requestStatus)}
                </Grid>
            </Box>
                
                <Box  display='flex' width='1' height='400px' p={1} borderRadius='10px' boxShadow={3}>
                    <Grid container xs={12} justifyContent='center'>
                        <Grid container item xs={12} justifyContent='left'>
                            <Box fontSize='15px' fontWeight='500'>Plecare: {props.plecare}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='left'>
                            <Box fontSize='15px' fontWeight='500'>Adresa de plecare: {props.departureAddress}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='left'>
                            <Box fontSize='15px' fontWeight='500'>Plecare: {props.plecare}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='left'>
                            <Box fontSize='15px' fontWeight='500'>Adresa de destinatie: {props.destinationAddress}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='left'>
                            <Box fontSize='15px' fontWeight='500'>Tipul transportului: {props.transportType}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='left'>
                            <Box fontSize='15px' fontWeight='500'>Data plecarii: {props.departureDate}</Box>
                        </Grid>
                        <Grid container item xs={12} justifyContent='left'>
                            <Box fontSize='15px' fontWeight='500' paddingBottom='4%'>Numarul estimat de ore: {props.estimatedTime}</Box>
                        </Grid>
                        {getBackCardBtns(props.driverSelected, props.packageExists, props.packageTaked)}
                        <Grid container item xs={8} justifyContent='center'>
                            <Box mt='8%' mb='2%' width={1}>
                                <PrimaryButton variant='contained'  onClick={handleClick} fullWidth>
                                    INAPOI
                                </PrimaryButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ReactCardFlip>
            
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
        </Fragment>
    );
};

export default DriverCard;