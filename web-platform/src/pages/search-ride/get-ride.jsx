import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import RideCard from '../../components/cards/ride-card/ride-card';
import { getRide } from '../../redux/actions/RidesActions';
import { connect } from 'react-redux';

const GetRide = (props) =>{
    const [image, setImage] = useState(props.image.length > 0 ? props.image : '');
    const [name, setName] = useState(props.name);
    const [id, setID] = useState(props.id);
    const [transportType, setTransportType] = useState(props.transportType);
    const [rate, setRate] = useState(props.rate ? props.ride : 0);
    const [departure, setDeparture] = useState(props.departure);
    const [destination, setDestination] = useState(props.destination);
    const [departureAddress, setDepartureAddress] = useState(props.departureAddress);
    const [destinationAddress, setDestinationAddress] = useState(props.destinationAddress);
    const [departureDate, setDepartureDate] = useState(props.departureDate);
    const [estimatedTime, setEstimatedTime] = useState(props.estimatedTime);
    const [state, setState] = useState(props.state);
    const [packageExists, setPackageExists] = useState(props.packageExists);


    useEffect(()=>{
        setImage(props.image.length > 0 ? props.image : '');
        setName(props.name);
        setID(props.id);
        setTransportType(props.transportType);
        setRate(props.rate ? props.rate : 0);
        setDeparture(props.departure);
        setDestination(props.destination);
        setDepartureAddress(props.departureAddress);
        setDestinationAddress(props.destinationAddress);
        setDepartureDate(props.departureDate);
        setEstimatedTime(props.estimatedTime);
        setState(props.state);
        setPackageExists(props.packageExists);
        setID(props.id)
    }, [props.id, props.image, props.name, props.rate, props.transportType, props.departure, props.destination, props.departureAddress, props.destinationAddress, props.departureDate,props.estimatedTime, props.state, props.packageExists]);

    return(
        <Grid key ={id} container item xs={12} sm={5}  md={4} lg={4}  xl={4} justifyContent='center'>
            <RideCard 
                id={id}
                image={image} 
                name={name}
                transportType={transportType}
                driverRate={rate}
                plecare={departure}
                destinatie={destination}
                departureDate={departureDate}
                departureAddress={departureAddress}
                destinationAddress={destinationAddress}
                estimatedTime={estimatedTime}
                status={state}
                packageExists= {packageExists}
            />
          </Grid>
    );
}

const mapDispatchToProps = dispatch =>({getRide: (ride, token) => dispatch(getRide(ride, token))})
const mapStateToProps = state => ({ridesData: state.ridesData})

export default connect(mapStateToProps, mapDispatchToProps)(GetRide);