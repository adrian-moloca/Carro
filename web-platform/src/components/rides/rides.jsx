import React, { Fragment, useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
import RideCard from '../cards/ride-card/ride-card';
import profilePhotoLeft from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../assets/images/photoprofile3.png';
import axios from 'axios';
import data from '../../utils/constants';
import { CircularProgress } from '@material-ui/core';

const rides_a = [
    {
        image: profilePhotoLeft,
        name: 'Marius Popescu',
        transportType: 'Masina',
        estimatedTime: '7 ore',
        departure: 'Timisoara, Romania',
        destination: 'Bucuresti, Romania',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        departureDate: '26/08/2021 02:00 AM',
        rate: 4.5,
        status: 0,
        packageExists: false,
    },
    {
        image: profilePhotoMiddle,
        name: 'Marius Popescu',
        transportType: 'Masina',
        estimatedTime: '7 ore',
        departure: 'Timisoara, Romania',
        destination: 'Bucuresti, Romania',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        departureDate: '26/08/2021 02:00 AM',
        rate: 4.5,
        status: 2,
    },
    {
        image: profilePhotoRight,
        name: 'Marius Popescu',
        transportType: 'Masina',
        estimatedTime: '7 ore',
        departure: 'Timisoara, Romania',
        destination: 'Bucuresti, Romania',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        departureDate: '26/08/2021 02:00 AM',
        rate: 4.5,
        status: 10,
    },
]

const Rides = (props) =>{
    const[driversUnder, setDriversUnder] = useState([]);
    const[loading, setLoading] = useState(true); 

    useEffect(()=>{
        axios.get(data.baseUrl+'my-packages/'+props.packageId+"/drivers&pageNumber=1&pageSize=15", {
            headers:{
                'Authorization': `Bearer ${props.token}`,
            }
        }).then((response)=>{setDriversUnder(response.data.data); setLoading(false);}).catch(error=>{console.log(error); setLoading(false);})

    }, [])
 
    return(
        <Fragment>
            {loading ? (
                <Grid container item xs={12} justifyContent='center' style={{height: '400px'}}>
                    <CircularProgress/>
                </Grid>
            ) : (driversUnder && driversUnder.length > 0 ? driversUnder.map((driver, index)=> 
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
                                        status={driver.status.status}
                                        packageExists= {true}
                                        rejectReason={driver.status.rejectReason}
                                    />
                                </Grid>
                    ) : null)}
        </Fragment>
    );

}

export default Rides;