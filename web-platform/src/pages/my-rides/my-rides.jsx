import React from 'react';
import { Container, Box } from '@material-ui/core'; 
import Ride from './ride/ride';
import { useTranslation } from "react-i18next";


const MyRides = () => {
  const { t } = useTranslation();

  const rides_a = [
    {
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureDate: '26/08/2021 02:00 AM',
      estimatedTime: '5 ore',
      departureAddress: 'Lorem impsium Street',
      destinationAddress: 'Lorem impsium Street',
      transportType: 'Masina',
      phoneNumber: '0888888888',
      status: t('Open'),
    },
    {
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureDate: '26/08/2021 02:00 AM',
      estimatedTime: '5 ore',
      departureAddress: 'Lorem impsium Street',
      destinationAddress: 'Lorem impsium Street',
      transportType: 'Masina',
      phoneNumber: '0888888888',
      status:  t('ClosedForReceiving'),
    },
    {
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureDate: '26/08/2021 02:00 AM',
      estimatedTime: '5 ore',
      departureAddress: 'Lorem impsium Street',
      destinationAddress: 'Lorem impsium Street',
      transportType: 'Masina',
      phoneNumber: '0888888888',
      status:  t('InTransit'),
    },
    {
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureDate: '26/08/2021 02:00 AM',
      estimatedTime: '5 ore',
      departureAddress: 'Lorem impsium Street',
      destinationAddress: 'Lorem impsium Street',
      transportType: 'Masina',
      phoneNumber: '0888888888',
      status:  t('Delivered'),
    },
    {
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureDate: '26/08/2021 02:00 AM',
      estimatedTime: '5 ore',
      departureAddress: 'Lorem impsium Street',
      destinationAddress: 'Lorem impsium Street',
      transportType: 'Masina',
      phoneNumber: '0888888888',
      status:  t('Closed')
    },
  ];
  

  return (
    <Container className={'Primary-container-style'} >
      <Box mb={4} mt={2} fontWeight={400} fontSize={21} textAlign={'center'}>
       {t('MyRides')}
      </Box>
      {rides_a.map((rideinf, index)=>
          <Box mb={1.5} borderRadius='10px' boxShadow={3} >
            <Ride departure={rideinf.departure} destination={rideinf.destination} departureDate={rideinf.departureDate}
                 departureAddress={rideinf.departureAddress} destinationAddress={rideinf.destinationAddress} estimatedTime={rideinf.estimatedTime}
                 transportType={rideinf.transportType} phoneNumber={rideinf.phoneNumber} rideStatus={rideinf.status} rideIndex={index + 1}/>
          </Box>  
      )}
    </Container>
  );
};

export default MyRides;
