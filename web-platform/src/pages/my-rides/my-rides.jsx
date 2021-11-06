import React, {useState} from 'react';
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
      status: 1,
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
      status: 2,
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
      status:  3,
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
      status:  4,
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
      status: 5,
    },
  ];

  const[ridesState, setRidesState] = useState(rides_a);

  const deleteRide = (event, index) =>{
    event.stopPropagation();
    const temp = [...ridesState]
    temp.splice(index, 1);
    setRidesState(temp);
  }

  const closeRide=(event, index)=>{
    event.stopPropagation();
    const temp=[...ridesState] 
    temp.forEach((ride, i)=>{
      if(index === i)
      {
        ride.status = t('Closed');
      }
    })
    setRidesState(temp);
  }

  return (
    <Container className={'Primary-container-style'} >
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>
       {t('MyRides')}
      </Box>
      {ridesState.map((rideinf, index)=>
          <Box key={index} mb={1.5} borderRadius='10px' boxShadow={3} >
            <Ride ride={rideinf} departure={rideinf.departure} destination={rideinf.destination} departureDate={rideinf.departureDate}
                 departureAddress={rideinf.departureAddress} destinationAddress={rideinf.destinationAddress} estimatedTime={rideinf.estimatedTime}
                 transportType={rideinf.transportType} phoneNumber={rideinf.phoneNumber} rideStatus={rideinf.status} rideIndex={index + 1}
                 deleteRideClicked={(e)=>deleteRide(e, index)}
                 closeRideClicked={(e)=>closeRide(e, index)}
            />
          </Box>  
      )}
    </Container>
  );
};

export default MyRides;
