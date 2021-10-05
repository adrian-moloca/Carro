import React from 'react'
import { Box, Grid, Button } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../components/modals/deleteModal/DeleteModal';


const NotificationsFieldsTransport = () => {

  return (
    <Grid container direction="column">
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
  );
};

export default NotificationsFieldsTransport;
