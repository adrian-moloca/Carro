import React, {useEffect, useState} from 'react';
import { Container, Box } from '@material-ui/core'; 
import Ride from './ride/ride';
import { useTranslation } from "react-i18next";
import { deleteRide, clean } from '../../redux/actions/MyRidesActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';


const MyRides = ({myRidesData, userData, deleteRide, clean}) => {
  const { t } = useTranslation();

  const history = useHistory();

  const[ridesState, setRidesState] = useState(myRidesData.rides.length > 0 ? myRidesData.rides : []);

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
    const unlisten = history.listen(()=>{clean()})
    return unlisten;
  }, [])

  useEffect(()=>{
    myRidesData.rides.length > 0 ? setRidesState(myRidesData.rides) : []
  }, [myRidesData])

  return (
    <Container className={'Primary-container-style'} >
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>
       {t('MyRides')}
      </Box>
      {ridesState.length > 0 ? (
        ridesState.map((rideinf, index)=>{
          return <Box key={index} mb={1.5} borderRadius='10px' boxShadow={3} >
                    <Ride ride={rideinf} departure={rideinf.departure} destination={rideinf.destination} departureDate={rideinf.departureDate.substr(0, 10)}
                          departureAddress={rideinf.departureAddress} destinationAddress={rideinf.destinationAddress} estimatedTime={rideinf.estimatedTime}
                          transportType={rideinf.transportType} phoneNumber={rideinf.phoneNumber} rideStatus={rideinf.status} rideIndex={index + 1}
                          deleteRideClicked={()=>deleteRide(rideinf.id, userData.token)}
                          closeRideClicked={(e)=>closeRide(e, index)}
                    />
                  </Box>  
      })) : <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("NoRidesAdded")}</Box>}
    </Container>
  );
};

const mapDispatchToProps = dispatch =>({
  deleteRide: (id, token)=>dispatch(deleteRide(id, token)),
  clean: () => dispatch(clean()),
});
const mapStateToProps = state =>({myRidesData: state.myRidesData, userData: state.userData});

export default connect(mapStateToProps, mapDispatchToProps)(MyRides);