import React from 'react'
import { Container, Box, AccordionSummary, AccordionDetails, Accordion, Grid, Button } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import DriverCardNotifications from '../../components/cards/DriverCardNotifications/DriverCardNotifications';
import NotificationsAcordionFields from '../../components/cards/NotificationsAcordionFields/NotificationsAcordionFields';
import PaginationSBD from '../../components/pagination/pagination';
import DeleteModal from '../../components/modals/deleteModal/DeleteModal';
import useStyles from './notificationsStyle.jsx';
import RideCard from '../../components/cards/RideCard/RideCard'
import NotificationsFieldsTransport from './notificationsFieldsTransport/NotificationsFieldsTransport'


const status = [false, true, false]

const Notifications = () => { 

  const classes = useStyles();

  return (
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Notificari</Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary id="transport-header">
              <NotificationsFieldsTransport/>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Box borderRadius='10px' boxShadow={3} display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                <Grid  container  direction="column">
                  <Box display='flex' justifyContent='space-around' px='2%'>
                    <Grid  container item xs={6}>
                      <DriverCardNotifications 
                            image={profilePhotoMiddle} 
                            name='Marius popescu'
                            plecare='Timisoara'
                            destinatie='Bucuresti'
                            tipTransport='Masina'
                            dataPlecare='26/08/2021 02:00 AM'>
                      </DriverCardNotifications>
                    </Grid>
                    <NotificationsAcordionFields/>
                  </Box>
                </Grid>
                <Box my={2} display="flex" justifyContent="center" alignItems="center">
                   <SecondaryButton variant="contained">Arata mai putin</SecondaryButton>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
              <Grid  container  direction="column">
                <Grid 
                  container 
                  direction="row">
                  <Grid direction="row" container item xs={8} >
                    <Box fontWeight= {600} fontStyle='italic' >
                      Nume a anulat transportul pentru coletul tau!
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
                    <DeleteModal/>
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
                <Grid  container  direction="row" justifyContent="center">
                  <Box mt={3}>
                    <PrimaryButton variant="contained">
                      Detalii
                    </PrimaryButton>
                  </Box>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <RideCard/>
              <Box  display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                
                <Box my={2} display="flex" justifyContent="center" alignItems="center">
                   <SecondaryButton variant="contained">Arata mai putin</SecondaryButton>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>


          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary aria-controls="transport-content" id="transport-header">
              <Grid  container  direction="column">
                <Grid 
                  container 
                  direction="row">
                  <Grid direction="row" container item xs={8} >
                    <Box fontWeight= {600} fontStyle='italic' >
                      Nume a anulat transportul pentru coletul tau!
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
                    <DeleteModal/>
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
                <Grid  container  direction="row" justifyContent="center">
                  <Box mt={3}>
                    <PrimaryButton variant="contained">
                      Detalii
                    </PrimaryButton>
                  </Box>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <RideCard status="true"/>
              <Box  display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                
                <Box my={2} display="flex" justifyContent="center" alignItems="center">
                   <SecondaryButton variant="contained">Arata mai putin</SecondaryButton>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>


          
      </Box>
      <PaginationSBD/>
    </Container> 
  );
};

export default Notifications;