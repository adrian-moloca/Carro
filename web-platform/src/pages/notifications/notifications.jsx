import React from 'react'
import { Container, Box, AccordionSummary, AccordionDetails, Accordion, Grid, Button } from '@material-ui/core';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import PrimaryButton from '../../components/buttons/primaryButton/primaryButton';
import SecondaryButton from '../../components/buttons/secondaryButton/secondaryButton';
import DriverCardNotifications from '../../components/cards/DriverCardNotifications/DriverCardNotifications';
import NotificationsAcordionFields from '../../components/cards/NotificationsAcordionFields/NotificationsAcordionFields';
import PaginationSBD from '../../components/pagination/pagination';
import DeleteModal from '../../components/modals/deleteModal/DeleteModal';
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

          <Accordion square='true' className={classes.AccordionBorderRadius}>
            <AccordionSummary id="transport-header">
              <NotificationsFieldsTransport
                  name='Marius popescu'
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
                            dataPlecare='26/08/2021 02:00 AM'>
                      </DriverCardNotifications>
                    </Grid>
                    <NotificationsAcordionFields/>
                  </Box>
                </Grid>
                <Box my={2} display="flex" justifyContent="center" alignItems="center">
                   <SecondaryButton variant="contained">{t("ShowLess")}</SecondaryButton>
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
                     Nume {t("CancelTransport")}
                    </Box>
                  </Grid>
                  <Grid container item xs={3} justifyContent='center'>
                    <Box fontSize={7} className={'Green-carro'}>
                      <Button variant="default">
                        <Box fontSize={8} className={'Primary-color'}>
                        {t("MarkedAsRead")}
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
                    {t("Route")} Bucuresti - Timisoara
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      {t("PickupAddress")} Narnia
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      {t("Price")} 15 RON
                    </Box>
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  direction="row">
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      {t("PickupDate")} 30/08/2021 12:00
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                      {t("DriverCardDestinationAddress")} Narnia
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                     {t("PhoneNumber")} 0742871643
                    </Box>
                  </Grid>
                </Grid>
                <Grid  container  direction="row" justifyContent="center">
                  <Box mt={3}>
                    <PrimaryButton variant="contained">
                      {t("DriverCardDetailsButton")}
                    </PrimaryButton>
                  </Box>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Packages/>
              <Box  display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                
                <Box my={2} display="flex" justifyContent="center" alignItems="center">
                   <SecondaryButton variant="contained">{t("ShowLess")}</SecondaryButton>
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
                      Nume {t("CancelTransport")}
                    </Box>
                  </Grid>
                  <Grid container item xs={3} justifyContent='center'>
                    <Box fontSize={7} className={'Green-carro'}>
                      <Button variant="default">
                        <Box fontSize={8} className={'Primary-color'}>
                        {t("MarkedAsRead")}
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
                    {t("Route")} Bucuresti - Timisoara
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                    {t("PickupAddress")}: Narnia
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                    {t("Price")} 15 RON
                    </Box>
                  </Grid>
                </Grid>
                <Grid 
                  container 
                  direction="row">
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                    {t("PickupDate")} 30/08/2021 12:00
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                    {t("DriverCardDestinationAddress")} Narnia
                    </Box>
                  </Grid>
                  <Grid direction="row" container item xs={4} >
                    <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
                    {t("PhoneNumber")} 0742871643
                    </Box>
                  </Grid>
                </Grid>
                <Grid  container  direction="row" justifyContent="center">
                  <Box mt={3}>
                    <PrimaryButton variant="contained">
                    {t("DriverCardDetailsButton")}
                    </PrimaryButton>
                  </Box>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.AccordionDetailsFlex}>
              <Packages status="true"/>
              <Box  display ='flex' flexDirection='column' mt = '-1%' mx='3%'px='2%'>
                
                <Box my={2} display="flex" justifyContent="center" alignItems="center">
                   <SecondaryButton variant="contained"> {t("ShowLess")}n</SecondaryButton>
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