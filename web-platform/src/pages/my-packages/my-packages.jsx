import React from 'react';
import { Container, Box, Typography, AccordionSummary, AccordionDetails, Accordion, Grid } from '@material-ui/core';
import {ExpandMore, ArrowForward, Delete, Create} from '@material-ui/icons';
import DriverCard from '../../components/cards/DriverCard/DriverCard';
import fragile from '../../assets/images/fragile.png';
import environmentdang from '../../assets/images/environmentdang.png';
import firedang from '../../assets/images/firedang.png';
import boxHands from '../../assets/images/boxHands.png';
import animalPrints from '../../assets/images/animalPrints.png';
import profilePhotoLeft from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../assets/images/photoprofile3.png';
import useStyles from './my-packagesStyle';

const MyPackages = () => {
  
  const classes = useStyles();

  return (
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Pachetele mele</Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={3} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary id="transport-header">
              <Grid container justifyContent='space-between'>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center' className='hide-on-mobile'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center' className='hide-on-mobile'>
                  <Box >26/08/2021 02:00 AM</Box>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontSize={16} className={'Green-carro'}>Active</Box>
                </Grid>
                <Grid container item xs={1} justifyContent='flex-end'>
                  <Create className={'Primary-color'}/>
                  <Delete className={'Pink-carro'}/>
                  <ExpandMore className={'Primary-color'}/>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Box borderRadius='10px' alignItems='center'  boxShadow={3} display ='flex' flexDirection='column' mx='3%'px='2%'>
                <Box my='2%' fontSize={20}>Detalii pachet</Box>
                <Grid container  xs={12} spacing={0} justifyContent='center'>
                  <Grid container item xs={6}>
                    <Box>Plecare: Timisoara, Romania</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Destinatie: Bucuresti</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Adresa de preluare: Lorem impsium Street</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Adresa destinatie: Lorem Ipsium Street</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Tip Colet: mic</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Dimensiuni: 0x0x0</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Greutate: 1Kg</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Descriere:</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Pret: 150 LEI</Box>
                  </Grid>
                  <Grid container item xs={6}>
                    <Box>Nume: Pachetul meu</Box>
                  </Grid>
                  <Grid container item xs={6} justifyContent='space-around'>
                      <img src={fragile} className={classes.advStyle} alt={""}/>
                      <img src={environmentdang} className={classes.advStyle} alt={""}/>
                      <img src={firedang} className={classes.advStyle} alt={""}/>
                      <img src={boxHands} className={classes.advStyle} alt={""}/>
                      <img src={animalPrints} className={classes.advStyle} alt={""}/>
                  </Grid>
                  <Grid container item xs={12} justifyContent='space-around'>
                      <DriverCard 
                        image={profilePhotoLeft} 
                        name='Marius popescu'
                        plecare='Timisoara'
                        destinatie='Bucuresti'
                        telefon='0888888888'
                        dataPlecare='26/08/2021 02:00 AM'/>
                      <DriverCard 
                        image={profilePhotoMiddle} 
                        name='Marius popescu'
                        plecare='Timisoara'
                        destinatie='Bucuresti'
                        telefon='0888888888'
                        dataPlecare='26/08/2021 02:00 AM'/>
                      <DriverCard 
                        image={profilePhotoRight} 
                        name='Marius popescu'
                        plecare='Timisoara'
                        destinatie='Bucuresti'
                        telefon='0888888888'
                        dataPlecare='26/08/2021 02:00 AM'/>
                    </Grid>
                  </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={3} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
              <Grid container justifyContent='space-between'>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center' className='hide-on-mobile'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center' className='hide-on-mobile'>
                  <Box >26/08/2021 02:00 AM</Box>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontSize={16} className={'Green-carro'}>In Tranzit</Box>
                </Grid>
                <Grid container item xs={1} justifyContent='flex-end'>
                  <Delete className={'Pink-carro'}/>
                  <ExpandMore className={'Primary-color'}/>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
            </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={3} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
            <Grid container justifyContent='space-between'>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center' className='hide-on-mobile'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center' className='hide-on-mobile'>
                  <Box >26/08/2021 02:00 AM</Box>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontSize={16} className={'Primary-color'}>Finalizata</Box>
                </Grid>
                <Grid container item xs={1} justifyContent='flex-end'>
                  <Delete className={'Pink-carro'}/>
                  <ExpandMore className={'Primary-color'}/>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
            </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={3} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
            <Grid container justifyContent='space-between'>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center' className='hide-on-mobile'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center' className='hide-on-mobile'>
                  <Box >26/08/2021 02:00 AM</Box>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontSize={16} className={'Pink-carro'}>Anulata</Box>
                </Grid>
                <Grid container item xs={1} justifyContent='flex-end'>
                  <Delete className={'Pink-carro'}/>
                  <ExpandMore className={'Primary-color'}/>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
            </AccordionDetails>
          </Accordion>
      </Box>
    </Container>
  );
  };

export default MyPackages;
