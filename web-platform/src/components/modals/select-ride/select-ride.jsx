import React, { useState, Fragment, useEffect } from 'react';
import {Grid, Box, Container, FormControlLabel, RadioGroup, Modal, Fade} from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import RideCard from '../../cards/ride-card/ride-card';
import RideRequestCard from '../../cards/ride-request-card/ride-request-card';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import useStyles from './select-ride-style';
import { useTranslation } from "react-i18next";

const MyGrid = withStyles({
    'spacing-xs-3':{
        margin: 0,
    },
    'spacing-xs-2':{
        margin: 0,
    },
    'spacing-xs-1':{
        margin: 0,
    },
    'spacing-xs-5':{
        margin: 0,
    },
})(Grid);

const SelectRide=(props)=>{
    const { t } = useTranslation();
    const classes = useStyles();

    const[open, setOpen] = useState(false);
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

    useEffect(()=>{}, [statuses, interactions])
    
    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    return(
        <Fragment>
            <Grid container item xs={8} justifyContent='center'>
                <Box mt='26%' mb='2%' width={1}>
                    <GreenCaroButton variant='contained'  onClick={handleOpen} fullWidth>
                            {t('DriverCardSelectButton')}
                    </GreenCaroButton>
                </Box>
            </Grid>
            <Modal open={open} onClose={handleClose} className='modal'>
                <Fade in={open} timeout={600}>
                    <Container className={classes.containerBackdrop + ' textSizeMobile'}>
                        <MyGrid container justifyContent='center' spacing={1}>
                            {interactions.map(pack => {
                                if(statuses.some(status => status.packageId === pack.packageId))
                                    return null
                                else
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
                                                statuses={[]}
                                                interactions= {[pack]}
                                                statusUpdated={props.statusUpdated}
                                            />
                                        </Grid>                           
                                    )
                            })}
                            {statuses.map(pack => {
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
                                            statuses={[pack]}
                                            interactions= {[]}
                                            statusUpdated={props.statusUpdated}
                                        />
                                    </Grid>                           
                                )
                            })}
                        </MyGrid>
                    </Container>
                </Fade>
            </Modal>
        </Fragment>
    );
};

export default SelectRide;