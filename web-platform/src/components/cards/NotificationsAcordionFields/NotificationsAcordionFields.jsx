import React from 'react'
import {  Box, Grid } from '@material-ui/core';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import SendMessageBtn from '../../buttons/textOnlyButtons/sendMessageBtn/sendMessageBtn'
import HalfRating from '../../rating/rating';
import { useTranslation } from "react-i18next";
const NotificationsAcordionFields = () => {
  const { t } = useTranslation();
  return (
    <Grid container xs={6} >

                                  {/* before delivery */}

      <Grid item xs={12}>
        <Box lineHeight="143%" fontSize={12} className={'Primary-color'}>
          <p>
          {t("TransportReceive")}
          </p>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2} lineHeight="143%" fontSize={11} className={'Secondary-color'}>
          <p>
            Marius Popescu {t("Ride")} Bucuresti - Timisoara {t("RideDeliver")}
          </p>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent='center' alignItems="center">
          <SendMessageBtn/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent='space-around' alignItems="center">
          <GreenCaroButton size="medium" >
            <Box>
              {t("Accept")}
            </Box>
          </GreenCaroButton>
          <SecondaryButton  variant="outlined" size="medium">
            <Box>
            {t("Cancel")}
            </Box>
          </SecondaryButton>
        </Box>
      </Grid>

                                  {/* after delivery */}

      {/* <Grid item xs={12}>
        <Box lineHeight="143%" fontSize={12} className={'Primary-color'}>
          <p>
            Coletul tau a ajuns cu bine!
          </p>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mt={2} lineHeight="143%" fontSize={11} className={'Secondary-color'}>
          <p>
            Marius Popescu a efectuat livrarea coletului tau pe ruta Bucuresti - Timisoara. Lasa un review!
          </p>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent='center' alignItems="center">
          <SendMessageBtn/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent='center' alignItems="center" mb={2}>
          <HalfRating/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent='center' alignItems="center">
          <GreenCaroButton size="large">
            <Box>
              Trimite
            </Box>
          </GreenCaroButton>
        </Box>
      </Grid> */}

    </Grid>
  );
};

export default NotificationsAcordionFields