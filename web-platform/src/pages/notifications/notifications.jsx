import React from 'react'
import { Container, Box, Typography, AccordionSummary, AccordionDetails, Accordion, Grid, List, Button} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import MyCardTD from '../../components/cards/MyCardTD';
import fragile from '../../assets/images/fragile.png';
import environmentdang from '../../assets/images/environmentdang.png';
import firedang from '../../assets/images/firedang.png';
import boxHands from '../../assets/images/boxHands.png';
import animalPrints from '../../assets/images/animalPrints.png';
import profilePhotoLeft from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../assets/images/photoprofile3.png';
import ListItemPersonalized from '../../components/list/listItemad/listItemPersonalized';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton'
import Pagination from '@material-ui/lab/Pagination';
import useStyles from './notificationsStyle.jsx';

const Notifications = () => { 

  const classes = useStyles();

  {/* <Grid container item xs={2} justifyContent='center'>
    <Box fontWeight= {600} fontStyle='italic'>Bucuresti, Romania</Box>
  </Grid> */}
  {/* <Grid container item xs={3} justifyContent='center'>
    <Box >26/08/2021 02:00 AM</Box>
  </Grid> */}

  return (
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Notificari</Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
              <Grid 
                  container 
                  direction="column">
                <Grid 
                  container 
                  direction="row">
                  <Grid direction="row" container item xs={8} >
                    <Box fontWeight= {600} fontStyle='italic' >
                      Nume doreste sa iti transporte coletul!
                    </Box>
                  </Grid>
                  <Grid container item xs={3} justifyContent='center'>
                    <Box fontSize={7} className={'Green-carro'}>
                      <Button variant="default">
                        <Box fontSize={8} className={'Primary-color'}>
                          Marcheaza ca citit
                        </Box>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid container item xs={1} justifyContent='flex-end'>
                    <Delete className={'Pink-carro'}/>
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  direction="row">
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      Ruta: Bucuresti - Timisoara
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      Adresa de ridicare: Narnia
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      Pret: 15 RON
                    </Box>
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  direction="row">
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      Data: 30/08/2021 12:00
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      Adresa de livrare: Narnia
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      Telefon: 0742871643
                    </Box>
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  direction="row"
                  justifyContent="center">
                    <Box mt={3}>
                      <PrimaryButton>
                        Detalii
                      </PrimaryButton>
                    </Box>
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
                    <MyCardTD 
                      image={profilePhotoLeft} 
                      name='Marius popescu'
                      plecare='Timisoara'
                      destinatie='Bucuresti'
                      telefon='0888888888'
                      dataPlecare='26/08/2021 02:00 AM'/>
                     <MyCardTD 
                      image={profilePhotoMiddle} 
                      name='Marius popescu'
                      plecare='Timisoara'
                      destinatie='Bucuresti'
                      telefon='0888888888'
                      dataPlecare='26/08/2021 02:00 AM'/>
                     <MyCardTD 
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
      <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            // className={classes.paginationPosition}
            >
        <Box>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
      </Grid>
    </Container> 
  );
};

export default Notifications;
