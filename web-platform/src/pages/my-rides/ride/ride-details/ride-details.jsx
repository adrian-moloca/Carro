import React, {Fragment} from 'react';
import { Grid, Box } from '@material-ui/core';
import Packages from '../../../../components/packages/packages';

const RideDetails = (props) =>{

    return(
        <Fragment>
            <Box borderRadius='10px'  boxShadow={3} display ='flex' px='4%' pt='2%' mt = '2%'>
                <Grid container xs={12} spacing={0} justifyContent='center'>
                    <Grid container item xs={6}>
                      <Box >Plecare: {props.departure}</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >Destinatie: {props.destination}</Box>
                    </Grid>
                    <Grid container item xs={6}>  
                      <Box >Data Plecarii: {props.departureDate}</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box >Numarul estimat de ore: {props.estimatedTime}</Box>                        
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Adresa de preluare: {props.departureAddress}</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Adresa destinatie: {props.destinationAddress}</Box>
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Tipul de transport: {props.transportType}</Box>  
                    </Grid>
                    <Grid container item xs={6}>
                      <Box>Telefon: {props.phoneNumber}</Box>
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
                <Packages/> 
              </Box>
        </Fragment>
    );

}

export default RideDetails;
