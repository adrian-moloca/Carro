import React from 'react';
import useStyles from './my-packagesStyle';
import { Container, Box, Typography, AccordionSummary, AccordionDetails, Accordion, Grid, } from '@material-ui/core';
import {ExpandMore, ArrowForward, Delete, Create} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
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
