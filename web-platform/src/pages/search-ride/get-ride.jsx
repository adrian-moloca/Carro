import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import RideCard from '../../components/cards/ride-card/ride-card';
import { getRide } from '../../redux/actions/RidesActions';
import { connect } from 'react-redux';

const GetRide = (props) =>{
    /* const[image, setImage] = useState(ridesData.ride ? ridesData.ride.image : '');
    const[name, setName] = useState(ridesData.ride.name ? ridesData.ride.name : ''); */
    const[id, setID] = useState(props.id);
    const[transportType, setTransportType] = useState(props.transportType);
    /* const[rate, setRate] = useState(props.rate); */
    const[departure, setDeparture] = useState(props.departure);
    const[destination, setDestination] = useState(props.destination);
    const[departureAddress, setDepartureAddress] = useState(props.departureAddress);
    const[destinationAddress, setDestinationAddress] = useState(props.destinationAddress);
    const[departureDate, setDepartureDate] = useState(props.departureDate);
    const[estimatedTime, setEstimatedTime] = useState(props.estimatedTime);
    const[state, setState] = useState(props.state);
    /* const[packageExists, setPackageExists] = useState(props.packageExists); */


    useEffect(()=>{
        /* setImage(ridesData.ride.image);
        setName(ridesData.ride.name); */
        setID(props.id);
        setTransportType(props.transportType);
        /* setRate(props.rate); */
        setDeparture(props.departure);
        setDestination(props.destination);
        setDepartureAddress(props.departureAddress);
        setDestinationAddress(props.destinationAddress);
        setDepartureDate(props.departureDate);
        setEstimatedTime(props.EstimatedTime);
        setState(props.state);
        /* setPackageExists(ridesData.ride.packageExists); */
        
    }, [props.id, props.transportType, props.departure, props.destination, props.departureAddress, props.destinationAddress, props.departureDate,props.estimatedTime, props.state]);

    return(
        <Grid key ={id} container item xs={12} sm={5}  md={4} lg={4}  xl={4} justifyContent='center'>
            <RideCard 
                /* image={image} 
                name={name} */
                transportType={transportType}
                /* driverRate={rate} */
                plecare={departure}
                destinatie={destination}
                destinatie={departureDate}
                departureAddress={departureAddress}
                destinationAddress={destinationAddress}
                estimatedTime={estimatedTime}
                status={state}
                /* packageExists= {packageExists} */
            />
          </Grid>
    );
}

const mapDispatchToProps = dispatch =>({GetRide: (ride, token) => dispatch(getRide(ride, token))})
const mapStateToProps = state => ({ridesData: state.ridesData})

export default connect(mapStateToProps, mapDispatchToProps)(GetRide);