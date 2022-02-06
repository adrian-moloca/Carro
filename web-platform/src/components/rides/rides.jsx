import React, { Fragment, useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import RideCard from '../cards/ride-card/ride-card';
import axios from 'axios';
import data from '../../utils/constants';
import { CircularProgress, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Rides = (props) =>{
    const[driversUnder, setDriversUnder] = useState([]);
    const[loading, setLoading] = useState(true); 
    const {t} = useTranslation();

    useEffect(()=>{
        axios.get(data.baseUrl+'/my-packages/'+props.packageId+"/drivers", {
            headers:{
                'Authorization': `Bearer ${props.token}`,
            }
        }).then((response)=>{setDriversUnder(response.data.data); setLoading(false);}).catch((error)=>{setLoading(false);})

    }, [])

    useEffect(()=>{}, [driversUnder]);
 
    return(
        <Fragment>
            {loading ? (
                <Grid container item xs={12} justifyContent='center' style={{height: '400px'}}>
                    <CircularProgress/>
                </Grid>
            ) : (driversUnder && driversUnder.length > 0 ? (
                driversUnder.map((driver, index)=> 
                                <Grid key ={index} container item xs={12} sm={5}  md={4} lg={4}  xl={4} justifyContent='space-around'>
                                    <RideCard 
                                        id={driver.id}
                                        rideId={driver.rideId}
                                        image={driver.image} 
                                        name={driver.name}
                                        transportType={driver.transportType}
                                        driverRate={driver.rate}
                                        plecare={driver.departure}
                                        destinatie={driver.destination}
                                        departureDate={driver.departureDate}
                                        departureAddress={driver.departureAddress}
                                        destinationAddress={driver.destinationAddress}
                                        estimatedTime={driver.estimatedTime}
                                        statuses={driver.status}
                                        interactions={driver.interactions}
                                        packageExists= {true}
                                        rejectReason={driver.status}
                                    />
                                </Grid>
                    )) : (
                        <Grid container item xs={12} justifyContent='center' style={{height: '50px'}}>
                            <Box>
                                {t("NoIteractionWithYourPackage")}
                            </Box>
                        </Grid>
                    ))}
        </Fragment>
    );

}

export default Rides;