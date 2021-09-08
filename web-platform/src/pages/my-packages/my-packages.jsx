import React from 'react';
import useStyles from './my-packagesStyle';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, AccordionSummary, AccordionDetails, Accordion, Grid, List, ListItem, Card, CardActionArea, CardMedia, CardContent,} from '@material-ui/core';
import {ExpandMore, ArrowForward, Delete, Create} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import MyCardTD from '../../components/cards/MyCardTD';
import fragile from '../../assets/images/fragile.png';
import environmentdang from '../../assets/images/environmentdang.png';
import firedang from '../../assets/images/firedang.png';
import boxHands from '../../assets/images/boxHands.png';
import animalPrints from '../../assets/images/animalPrints.png';
import profilePhotoLeft from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../assets/images/photoprofile3.png';

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
                      <ListItem>
                        <Box mt = {1} fontSize={18} fontWeight={400}>Plecare: Timisoara, Romania</Box>                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Adresa de preluare: Lorem impsium Street</Box>                    
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Tip Colet: mic</Box>                  
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Greutate: 1Kg</Box>                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Pret: 150 LEI</Box>                      
                      </ListItem>
                    </List>
                    <List dense ='true' disablePadding='true'>
                      <ListItem>
                        <Box mt = {1}fontSize={18} fontWeight={400}>Destinatie: Bucuresti</Box>                     
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Adresa destinatie: Lorem Ipsium Street</Box>
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Dimensiuni: 0x0x0</Box>                      
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Descriere: -</Box>                  
                      </ListItem>
                      <ListItem>
                        <Box mt={-2} fontSize={18} fontWeight={400}>Nume: Pachetul meu</Box>                  
                      </ListItem>
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
                    <MyCardTD 
                      image={profilePhotoLeft} 
                      name='Marius popescu'
                      plecare='Timisoara'
                      destinatie='Bucuresti'
                      telefon='0888888888'
                      rating='4.0'/>
                     <MyCardTD 
                      image={profilePhotoMiddle} 
                      name='Marius popescu'
                      plecare='Timisoara'
                      destinatie='Bucuresti'
                      telefon='0888888888'
                      rating='4.0'/>
                     <MyCardTD 
                      image={profilePhotoRight} 
                      name='Marius popescu'
                      plecare='Timisoara'
                      destinatie='Bucuresti'
                      telefon='0888888888'
                      rating='4.0'/>
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
