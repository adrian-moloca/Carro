import React, { Fragment } from 'react';
import {Grid} from '@material-ui/core';
import DriverCard from '../cards/DriverCard/DriverCard';
import profilePhotoLeft from '../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../assets/images/photoprofile3.png';

const drivers_a = [
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
        driverSelected: true,
        requestStatus: 'waiting',
        packageExists: true,
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
        driverSelected: true,
        requestStatus: 'accepted',
        packageTaked: false,
        packageExists: true,
    },
]

const Drivers = (props) =>{
 
    return(
        <Fragment>
            {drivers_a.map((driver)=> 
                <Grid container item xs={12} sm={5}  md={4} lg={4}  xl={4} justifyContent='space-around'>
                    <DriverCard 
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
                        driverSelected= {driver.driverSelected}
                        requestStatus= {driver.requestStatus}
                        packageTaked= {driver.packageTaked}
                        packageExists= {driver.packageExists}
                    />
                </Grid>
            )}
        </Fragment>
    );

}

export default Drivers;