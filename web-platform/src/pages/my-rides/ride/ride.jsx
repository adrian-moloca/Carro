import React from 'react';
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails, ListItem, List, SvgIcon, Button, Typography} from '@mui/material'; 
import {ExpandMore, ArrowForward} from '@mui/icons-material';
import useStyles from './rideStyle';
import RideCard from '../../../components/cards/RideCard/RideCard';

const Ride = () =>{

    const classes = useStyles();


    return(
        <Accordion square='true' className={classes.AccordionBorderRadius}>
          <AccordionSummary aria-controls="transport-content" id="transport-header">
          <Grid container xs={12} justifyContent='space-between'>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center' className='hide-on-mobile'>
                    <ArrowForward className={['Primary-color']}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center' className='hide-on-mobile'>
                  <Box>26/08/2021 02:00 AM</Box>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontSize={16} className={'Primary-color'}>Finalizata</Box>
                </Grid>
                <Grid container item xs={1} justifyContent='flex-end'>
                  <ExpandMore className={'Primary-color'}/>
                </Grid>
              </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Box borderRadius='10px'  boxShadow={3} display ='flex' px='4%' pt='2%' mt = '2%'>
                <Grid container xs={12} spacing={0} justifyContent='center'>
                    <Grid container item xs={6}>
                      <Box >Plecare: Timisoara, Romania</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >Destinatie: Bucuresti</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >Data Plecarii: 26/08/2021 02:00 AM</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box >Numarul estimat de ore: 5 ore</Box>                        
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Adresa de preluare: Lorem impsium Street</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Adresa destinatie: Lorem Ipsium Street</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Tipul de transport: Masina</Box>  
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Telefon: 0888888888</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize={13} mb = '2%' className={'Secondary-color'}>
                            *Pentru a putea sterge, inchide sau edita un transport nu trebuie avute pachete in desfasurare. 
                            Pachetele trebuie sa nu fie acceptate (modificarile pot fii comunicate clientilor direct prin numarul de telefon).
                        </Box>
                    </Grid>
                </Grid>
              </Box>
              <Box mx={-2} mt={1} p='2%' borderTop={1} borderColor= 'grey.400' >
                <RideCard/> 
              </Box>
          </AccordionDetails>
        </Accordion>
    );
}

export default Ride;