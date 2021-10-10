import React, {Fragment} from 'react';
import { Box, Grid, Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core'; 
import {ExpandMore, ArrowForward, Delete} from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import RideDetails from './ride-details/ride-details';
import useStyles from './rideStyle';

const Ride = (props) =>{

    const classes = useStyles();

    function getStatusColor(status){ 
      switch (status) {
        case 'Deschis':
          return (
            'Green-carro'
          );
        case 'Inchis pentru primire':
          return (
            'Green-carro'
          );
        case 'In livrare':
          return (
            'Primary-color'
          );  
        case 'Inchis':
          return (
            'Pink-carro'
          );
        case 'Livrat':
          return (
            'Pink-carro'
          );
  
        default:
          return 'black';
      }
    }
  
    function ActionsByStatus(status){
  
      switch(status){
          case 'Deschis':
              return(
                <Fragment>
                  <IconButtonNoVerticalPadding onClick={props.deletePackageClicked}>
                        <Delete className={'Pink-carro'}/>
                  </IconButtonNoVerticalPadding>
                </Fragment>
              );
            case 'Inchis pentru primire':
                return(
                  <Fragment>
                  </Fragment>
                );
            case 'In livrare':
                return(
                  <Fragment> 
                  </Fragment>
                );
            case 'Inchis':
              return('');
            case 'Livrat':
              return('');
            default:
                return('Unkown status');
      }
  }


    return(
        <Accordion square='true' className={classes.AccordionBorderRadius}>
          <AccordionSummary aria-controls="transport-content" id="transport-header">
          <Grid container xs={12} justifyContent='space-between'>
                <Grid container item xs = {1} justifyContent='flex-starts'>
                  <Typography >{props.rideIndex}.</Typography>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>{props.departure}</Box>
                </Grid>
                <Grid container  item xs={1} justifyContent='center' className='hide-on-mobile'>
                    <ArrowForward className={['Primary-color']}/>
                </Grid>
                <Grid container item xs={2} justifyContent='center' className='hide-on-mobile'>
                  <Box fontWeight= {600} fontStyle='italic'>{props.destination}</Box>
                </Grid>
                <Grid container item xs={3} justifyContent='center' className='hide-on-mobile'>
                  <Box>{props.departureDate}</Box>
                </Grid>
                <Grid container item xs={2} justifyContent='center'>
                  <Box fontSize={16} className={getStatusColor(props.rideStatus)}>{props.rideStatus}</Box>
                </Grid>
                <Grid container item xs={1} justifyContent='flex-end'>
                  <ExpandMore className={'Primary-color'}/>
                </Grid>
              </Grid>
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionDetailsFlex}>
              <RideDetails departure={props.departure} destination={props.destination} departureDate={props.departureDate} 
                          estimatedTime={props.estimatedTime} departureAddress={props.departureAddress} destinationAddress={props.destinationAddress} 
                          transportType={props.transportType} phoneNumber={props.phoneNumber}/>
              {/* <Box borderRadius='10px'  boxShadow={3} display ='flex' px='4%' pt='2%' mt = '2%'>
                <Grid container xs={12} spacing={0} justifyContent='center'>
                    <Grid container item xs={6}>
                      <Box >Plecare: Timisoara, Romania</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >Destinatie: Bucuresti</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >Data Plecarii: 26/08/2021 02:00 AM</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box >Numarul estimat de ore: 5 ore</Box>                        
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Adresa de preluare: Lorem impsium Street</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Adresa destinatie: Lorem Ipsium Street</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Tipul de transport: Masina</Box>  
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Telefon: 0888888888</Box>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box fontSize={13} mb = '2%' className={'Secondary-color'}>
                            *Pentru a putea sterge, inchide sau edita un transport nu trebuie avute pachete in desfasurare. 
                            Pachetele trebuie sa nu fie acceptate (modificarile pot fii comunicate clientilor direct prin numarul de telefon).
                        </Box>
                    </Grid>
                </Grid>
              </Box>
              <Box mx={-2} mt={1} p='2%' borderTop={1} borderColor= 'grey.400' >
                <RideCard/> 
              </Box> */}
          </AccordionDetails>
        </Accordion>
    );
}

export default Ride;