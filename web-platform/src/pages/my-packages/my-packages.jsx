import React from 'react';
import useStyles from './my-packagesStyle';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, AccordionSummary, AccordionDetails, Accordion, Grid, List} from '@material-ui/core';
import {ExpandMore, ArrowForward, Delete, Create} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import DriverCard from '../../components/cards/DriverCard/DriverCard';
import fragile from '../../assets/images/fragile.png';
import environmentdang from '../../assets/images/environmentdang.png';
import firedang from '../../assets/images/firedang.png';
import boxHands from '../../assets/images/boxHands.png';
import animalPrints from '../../assets/images/animalPrints.png';
import profilePhotoLeft from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../assets/images/photoprofile3.png';
import ListItemPersonalized from '../../components/list/listItemad/listItemPersonalized';

const MyPackages = () => {
  
  const classes = useStyles();

  return (
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Pachetele mele</Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
              <Grid container>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center'>
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
              <Box borderRadius='10px'  boxShadow={3} display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                <Box fontSize={20} m={1} >Detalii pachet</Box>
                <Box display='flex' justifyContent='space-between' px='2%'>
                    <List dense='true'  disablePadding='true'>
                      <ListItemPersonalized>Plecare: Timisoara, Romania</ListItemPersonalized>
                      <ListItemPersonalized>Adresa de preluare: Lorem impsium Street</ListItemPersonalized>
                      <ListItemPersonalized>Tip Colet: mic</ListItemPersonalized>
                      <ListItemPersonalized>Greutate: 1Kg</ListItemPersonalized>
                      <ListItemPersonalized>Pret: 150 LEI</ListItemPersonalized>
                    </List>
                    <List dense ='true' disablePadding='true'>
                      <ListItemPersonalized>Destinatie: Bucuresti</ListItemPersonalized>
                      <ListItemPersonalized>Adresa destinatie: Lorem Ipsium Street</ListItemPersonalized>
                      <ListItemPersonalized>Dimensiuni: 0x0x0</ListItemPersonalized>
                      <ListItemPersonalized>Descriere:</ListItemPersonalized>
                      <ListItemPersonalized>Nume: Pachetul meu</ListItemPersonalized>
                    </List>
                  </Box>
                  <Box my={2} height='33px' ml='37.5%' width='25%' display='flex' justifyContent='space-between'>
                    <img src={fragile}/>
                    <img src={environmentdang}/>
                    <img src={firedang}/>
                    <img src={boxHands}/>
                    <img src={animalPrints}/>
                  </Box>
                  <Box mt = {1} mb={2} display='flex'justifyContent='space-between'>
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
                  </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
      </Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
                <Grid container>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center'>
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
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
            <Grid container>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center'>
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
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
            <Grid container>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >1.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic' >Timisoara, Romania</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center'>
                    <ArrowForward className={'Primary-color'}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center'>
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
