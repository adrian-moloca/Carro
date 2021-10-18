import React from 'react'
import { Container, Box, AccordionSummary, AccordionDetails, Accordion, Grid } from '@material-ui/core';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import DriverCardNotifications from '../../components/cards/DriverCardNotifications/DriverCardNotifications';
import NotificationsAcordionFields from '../../components/cards/NotificationsAcordionFields/NotificationsAcordionFields';
import PaginationSBD from '../../components/pagination/pagination';
import useStyles from './notificationsStyle.jsx';
import Packages from '../../components/packages/packages';
import NotificationsFieldsTransport from './notificationsFieldsTransport/NotificationsFieldsTransport'
import { useTranslation } from "react-i18next";

const status = [false, true, false]

const Notifications = () => { 
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t('Notifications')}</Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
{/* driver is deliverying on route card */}
        <Accordion square='true' className={classes.AccordionBorderRadius}>
          <AccordionSummary id="transport-header">
            <NotificationsFieldsTransport
              name='Marius Popescu'
              actionText='doreste sa livreze un pachet pe ruta ta!'
              plecare='Timisoara'
              destinatie='Bucuresti'
              tipTransport='Masina'
              dataPlecare='26/08/2021 02:00 AM'
              pickUpAdress="1 decembrie"
              dropOffAdress="2 mai"
              price="20 Ron"
            />
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
                      dataPlecare='26/08/2021 02:00 AM'
                    />
                  </Grid>
                  <NotificationsAcordionFields/>
                </Box>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
{/* driver is requesting to deliver your package card */}
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
        <Accordion square='true' className={classes.AccordionBorderRadius}>
          <AccordionSummary id="transport-header">
            <NotificationsFieldsTransport
              name='Marius Popescu'
              actionText='a facut o cerere pentru pachetul tau!'
              plecare='Timisoara'
              destinatie='Bucuresti'
              tipTransport='Masina'
              dataPlecare='26/08/2021 02:00 AM'
              pickUpAdress="1 decembrie"
              price="20 Ron"
            />
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionDetailsFlex}>
            <Packages/>
          </AccordionDetails>
        </Accordion>
      </Box>
{/* driver is requesting to deliver your package card */}
      <Box mb={1.5} borderRadius='10px' boxShadow={10} >
        <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary id="transport-header">
              <NotificationsFieldsTransport
                name='Marius Popescu'
                actionText='da anulat transportul pentru coletul tau!'
                plecare='Timisoara'
                destinatie='Bucuresti'
                tipTransport='Masina'
                dataPlecare='26/08/2021 02:00 AM'
                pickUpAdress="1 decembrie"
                price="20 Ron"
              />
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Packages/>
            </AccordionDetails>
          </Accordion>
      </Box>
      <PaginationSBD/>
    </Container> 
  );
};

export default Notifications;