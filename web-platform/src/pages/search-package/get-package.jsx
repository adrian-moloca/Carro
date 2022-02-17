import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import PackageCard from '../../components/cards/package-card/package-card';

const GetPackage = (props) =>{
    const [departure, setDeparture] = useState(props.departure);
    const [destination, setDestination] = useState(props.destination);
    const [departureAddress, setDepartureAddress] = useState(props.departureAddress);
    const [destinationAddress, setDestinationAddress] = useState(props.destinationAddress);
    const [departureDate, setDepartureDate] = useState(props.departureDate);
    const [userId, setUserId] = useState(props.userId);
    const [packageId, setPackageId] = useState(props.packageId);
    const [packageType, setPackageType] = useState(props.packageType);
    const [price, setPrice] = useState(props.price);
    const [packageQuantity, setPackageQuantity] = useState(props.packageQuantity);
    const [packageSpecialMention, setPackageSpecialMention] = useState(props.packageSpecialMention);
    const [dimensions, setDimensions] = useState(props.dimensions);
    const [weight, setWeight] = useState(props.weight);
    const [status, setStatus] = useState(props.status);
    const [interactions, setInteractions] = useState(props.interactions);

    useEffect(()=>{}, [props])


    useEffect(()=>{
        setDeparture(props.departure);
        setDestination(props.destination);
        setDepartureAddress(props.departureAddress);
        setDestinationAddress(props.destinationAddress);
        setDepartureDate(props.departureDate);
        setUserId(props.userId);
        setPackageId(props.packageId);
        setPackageType(props.packageType);
        setPrice(props.price)
        setPackageType(props.packageType);
        setPackageQuantity(props.packageQuantity);
        setPackageSpecialMention(props.packageSpecialMention);
        setDimensions(props.dimensions)
        setWeight(props.weight)
        setStatus(props.status);
        setInteractions(props.interactions);
    }, [props.departure, props.destination, props.departureAddress, props.destinationAddress, props.departureDate, props.userId, props.packageId, props.packageType, props.price, props.packageQuantity, props.packageSpecialMention, props.dimensions, props.weight, props.status, props.interactions]);

    return(
        <Grid key ={packageId} container item xs={12} sm={5}  md={4} lg={4}  xl={4} justifyContent='center'>
            <PackageCard 
                userId={userId} 
                packageId={packageId} 
                packageQuantity={packageQuantity} 
                dimensions={dimensions}
                weight={weight} 
                departureDate={departureDate} 
                price={price}
                departure={departure}
                destination={destination}
                departureAddress={departureAddress} 
                destinationAddress={destinationAddress} 
                status= {status} 
                interactions={interactions} 
                packageSpecialMention={packageSpecialMention}
                packageType={packageType}
                statusUpdated={props.statusUpdated}
            />
          </Grid>
    );
}

export default GetPackage;