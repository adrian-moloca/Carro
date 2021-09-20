import React from 'react'
import {  Box, Grid } from '@mui/material';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import SendMessageBtn from '../../buttons/textOnlyButtons/sendMessageBtn/sendMessageBtn'
import HalfRating from '../../rating/rating';
import useStyles from './NotificationsAcordionFieldsStyle.jsx';

const NotificationsAcordionFields = () => {

  const classes = useStyles();

  return (
    <Grid 
      container
      item xs={6} 
      >
                                  {/* before delivery */}

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
        <SendMessageBtn/>
      </Grid>
      <Grid container display='flex' justifyContent='space-around' direction="row" alignItems="center">                      
        <Grid container item xs={6} justifyContent='center'>
          <GreenCaroButton>
            <Box>
              Accepta
            </Box>
          </GreenCaroButton>
        </Grid>
        <Grid container item xs={6} justifyContent='center'>
          <SecondaryButton>
            <Box>
              Anuleaza
            </Box>
          </SecondaryButton>
        </Grid>
      </Grid>

                                  {/* after delivery */}

      {/* <Grid container item xs={12} justifyContent='center' direction="row" alignItems="center">
        <Box lineHeight="143%" fontSize={12} className={'Primary-color'}>
          <p>
            Coletul tau a ajuns cu bine!
          </p>
        </Box>
      </Grid>
      <Grid container item xs={12} justifyContent='center' direction="row" alignItems="center">
        <Box mt={2} lineHeight="143%" fontSize={11} className={'Secondary-color'}>
          <p>
            Marius Popescu a efectuat livrarea coletului tau pe ruta Bucuresti - Timisoara. Lasa un review!
          </p>
        </Box>
      </Grid>
      <Grid container item xs={12} justifyContent='center' direction="row" alignItems="center">
         <SendMessageBtn/>
      </Grid>
      <Grid container direction="column" alignItems="center" justifyContent='center'>  
        <Grid item xs={3} justifyContent='center' >
          <Box  mb={3}>
            <HalfRating/>
          </Box>
        </Grid>                    
        <Grid item xs={3} justifyContent='center' >
          <GreenCaroButton>
            <Box>
              Trimite
            </Box>
          </GreenCaroButton>
        </Grid>
      </Grid> */}



    </Grid>
  );
}

export default NotificationsAcordionFields