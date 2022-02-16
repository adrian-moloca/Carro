import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import RideCard from '../../components/cards/ride-card/ride-card';

const GetRide = (props) =>{
    const [image, setImage] = useState(props.image.length > 0 ? props.image : '');
    const [name, setName] = useState(props.name);
    const [id, setID] = useState(props.id);
    const [rideId, setRideId] = useState(props.rideId);
    const [transportType, setTransportType] = useState(props.transportType);
    const [rate, setRate] = useState(props.rate ? props.ride : 0);
    const [departure, setDeparture] = useState(props.departure);
    const [destination, setDestination] = useState(props.destination);
    const [departureAddress, setDepartureAddress] = useState(props.departureAddress);
    const [destinationAddress, setDestinationAddress] = useState(props.destinationAddress);
    const [departureDate, setDepartureDate] = useState(props.departureDate);
    const [estimatedTime, setEstimatedTime] = useState(props.estimatedTime);
    const [statuses, setStatuses] = useState(props.statuses);
    const [interactions, setInteractions] = useState(props.interactions);


    useEffect(()=>{
        setImage(props.image.length > 0 ? props.image : '');
        setName(props.name);
        setID(props.id);
        setRideId(props.rideId)
        setTransportType(props.transportType);
        setRate(props.rate ? props.rate : 0);
        setDeparture(props.departure);
        setDestination(props.destination);
        setDepartureAddress(props.departureAddress);
        setDestinationAddress(props.destinationAddress);
        setDepartureDate(props.departureDate);
        setEstimatedTime(props.estimatedTime);
        setStatuses(props.statuses);
        setInteractions(props.interactions);
        setID(props.id)
    }, [props.id, props.rideId, props.image, props.name, props.rate, props.transportType, props.departure, props.destination, props.departureAddress, props.destinationAddress, props.departureDate,props.estimatedTime, props.statuses, props.interactions]);

    return(
        <Grid key ={id} container item xs={12} sm={5}  md={4} lg={4}  xl={4} justifyContent='center'>
            <RideCard 
                id={id}
                rideId={rideId}
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
                statuses={statuses}
                interactions= {interactions}
                statusUpdated={props.statusUpdated}
            />
          </Grid>
    );
}

export default GetRide;