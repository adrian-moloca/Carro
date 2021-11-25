import React, {useEffect, useState} from 'react';
import { Container, Box } from '@material-ui/core'; 
import Ride from './ride/ride';
import { useTranslation } from "react-i18next";
import { deleteRide, fetchMyRides } from '../../redux/actions/MyRidesActions';
import { connect } from 'react-redux';


const MyRides = ({fetchMyRides, deleteRide, myRidesData}) => {
  const { t } = useTranslation();

  const rides_a = [
    {
      departure: 'Timisoara, Romania',
      destination: 'Bucuresti, Romania',
      departureDate: '25/12/2021 02:00 AM',
      estimatedTime: '5 ore',
      departureAddress: 'Lorem impsium Street',
      destinationAddress: 'Lorem impsium Street',
      transportType: 1,
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
      transportType: 1,
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
      transportType: 1,
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
      transportType: 1,
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
      transportType: 1,
      phoneNumber: '0888888888',
      status: 5,
    },
  ];

  const[ridesState, setRidesState] = useState(rides_a);

  const cancRide = (index, id) =>{
    const temp = [...ridesState]
    temp.splice(index, 1);
    setRidesState(temp);
    deleteRide(id);
  }

  const closeRide=(event, index)=>{
    const temp=[...ridesState] 
    temp.map((ride, i)=>{
      if(index === i)
      {
        ride.status = 4;
      }
    })
    setRidesState(temp);
  }

  useEffect(()=>{
    fetchMyRides();
  }, [])

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
                 deleteRideClicked={()=>cancRide(index, rideinf.id)}
                 closeRideClicked={(e)=>closeRide(e, index)}
            />
          </Box>  
      )}
    </Container>
  );
};

const mapDispatchToProps = dispatch =>({
  fetchMyRides: ()=>dispatch(fetchMyRides()),
  deleteRide: (id)=>dispatch(deleteRide(id)),
});
const mapStateToProps = state =>({rides: state.myRidesData});

export default connect(mapStateToProps, mapDispatchToProps)(MyRides);