import React from 'react'
import { 
  Container, 
  Box, 
  AccordionSummary,
  AccordionDetails,
  Accordion, 
  Grid, 
  List, 
  Button
} from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import ListItemPersonalized from '../../components/list/listItemad/listItemPersonalized';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../components/buttons/GreenCaroButton/GreenCaroButton';
import Pagination from '@material-ui/lab/Pagination';
import DriverCardNotifications from '../../components/cards/DriverCardNotifications/DriverCardNotifications';
import MessageIcon from '@material-ui/icons/Message';
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
                <Box display='flex' justifyContent='space-around' px='2%'>
                  <List dense='true'  disablePadding='true'>
                    <DriverCardNotifications 
                          image={profilePhotoMiddle} 
                          name='Marius popescu'
                          plecare='Timisoara'
                          destinatie='Bucuresti'
                          telefon='0888888888'
                          dataPlecare='26/08/2021 02:00 AM'>
                      <Button className={'Primary-color'}>Vezi Profilul</Button>
                    </DriverCardNotifications>
                  </List>
                  <List dense ='true' disablePadding='true'>
                    <Grid 
                      container 
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
                      <Grid container item xs={12} justifyContent='center' direction="row" alignItems="center">
                        <Box lineHeight="143%" fontSize={12} className={'Primary-color'}>
                          <p>
                            Ai primit o noua cerere de transport pentru coletul tau!
                          </p>
                        </Box>
                      </Grid>
                      <Grid container item xs={12} justifyContent='center' direction="row" alignItems="center">
                        <Box mt={2} lineHeight="143%" fontSize={11} className={'Secondary-color'}>
                          <p>
                            Marius Popescu efectueaza o cursa Bucuresti - Timisoara si doreste sa livreze coletul tau
                          </p>
                        </Box>
                      </Grid>
                      <Grid container item xs={12} justifyContent='center' direction="row" alignItems="center">
                        <Button>
                          <Box mt={2} lineHeight="143%" fontSize={12} className={'Primary-color'}>
                              <MessageIcon/>
                              Trimite mesaj
                          </Box>
                        </Button>
                      </Grid>
                      <Grid container item xs={12} justifyContent='center' direction="row" alignItems="center">                      
                        <Box display="flex" justifyContent='center' mt={2} fontSize={12} fontWeight={500} mt={2}>
                          <GreenCaroButton>
                            <Box>
                              Accepta
                            </Box>
                          </GreenCaroButton>
                          <SecondaryButton>
                            Anuleaza
                          </SecondaryButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </List>
                </Box>
                <Box my={2} height='33px' ml='37.5%' width='25%' display='flex' justifyContent='space-between'>
                   <SecondaryButton>Arata mai putin</SecondaryButton>
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
