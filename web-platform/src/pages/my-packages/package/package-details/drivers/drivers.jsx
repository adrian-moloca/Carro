import React from 'react';
import {Grid} from '@material-ui/core';
import DriverCard from '../../../../../components/cards/DriverCard/DriverCard';
import profilePhotoLeft from '../../../../../assets/images/photoprofile1.png';
import profilePhotoMiddle from '../../../../../assets/images/photoprofile2.png';
import profilePhotoRight from '../../../../../assets/images/photoprofile3.png';

const drivers_a = [
    {
        image: profilePhotoLeft,
        name: 'Marius popescu',
        transportType: 'Masina',
        rate: 4.5,
    },
    {
        image: profilePhotoMiddle,
        name: 'Marius popescu',
        transportType: 'Tir',
        rate: 4.5,
    },
    {
        image: profilePhotoRight,
        name: 'Marius popescu',
        transportType: 'Camion',
        rate: 4.5,
    },
]

const Drivers = (props) =>{
 
    return(
        <Grid container item xs={12} justifyContent='space-around'>
            {drivers_a.map((driver)=> 
                  <DriverCard image={driver.image} 
                              name={driver.name}
                              transportType={driver.transportType}
                              driverRate={driver.rate}
                              plecare={props.departure}
                              destinatie={props.destination}
                              dataPlecare={props.departureDate}/>
            )}
        </Grid>
    );

}

export default Drivers;