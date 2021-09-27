import React from 'react';
import { Container, Box } from '@material-ui/core'; 
import Ride from './ride/ride';

const MyRides = () => {

  return (
    <Container className={'Primary-container-style'} >
      <Box mb={4} mt={2} fontWeight={400} fontSize={21} textAlign={'center'}>
        Transporturile mele
      </Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={3} ><Ride/></Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={3} ><Ride/></Box>
      <Box mb={1.5} borderRadius='10px' boxShadow={3} ><Ride/></Box>
    </Container>
  );
};

export default MyRides;
