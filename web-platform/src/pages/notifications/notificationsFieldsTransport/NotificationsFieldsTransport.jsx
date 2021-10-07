import React from 'react'
import { Box, Grid, Button } from '@material-ui/core';
import PrimaryButton from '../../../components/buttons/primaryButton/primaryButton';
import DeleteModal from '../../../components/modals/deleteModal/DeleteModal';
import BackdropSelectDriver from '../../../components/backdrop/driver-select/backDrop';

const NotificationsFieldsTransport = (props) => {

  return (
    <Grid container direction="column">
      <Grid 
        container 
        direction="row">
        <Grid direction="row" container item xs={8} >
          <Box fontWeight= {600} fontStyle='italic' >
          {props.name} doreste sa iti transporte coletul!
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
            Ruta: {props.plecare} - {props.destinatie}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            Adresa de ridicare: {props.pickUpAdress}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            Pret: {props.price}
          </Box>
        </Grid>
      </Grid>
      <Grid 
        container 
        direction="row">
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            Data: {props.dataPlecare}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            Adresa de livrare: {props.dropOffAdress}
          </Box>
        </Grid>
        <Grid direction="row" container item xs={4} >
          <Box fontWeight= {400} fontStyle='italic' className={'Secondary-color'}>
            Tip transport: {props.tipTransport}
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
      <BackdropSelectDriver 
        image={props.image}
        name={props.name}
        plecare={props.plecare}
        destinatie= {props.destinatie}
        tipTransport = {props.tipTransport}
        dataPlecare = {props.dataPlecare}
        pickUpAdress ={props.pickUpAdress}
        dropOffAdress ={props.dropOffAdress}
        price ={props.price}
      />
    </Grid>
  );
};

export default NotificationsFieldsTransport;
