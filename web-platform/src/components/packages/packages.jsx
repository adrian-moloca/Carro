import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import PackageCard from '../cards/package-card/package-card';

const packages_a = [
    {
        sender: 'George Micu',
        senderPhone: '0888888888',
        destinatary: 'George Mare',
        destinataryPhone: '0999999999',
        packageQuantity: 1,
        packageDimensions: '0x0x0',
        packageWeight: '1 Kg',
        departureDate: '26/08/2021 02:00 AM',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
        details: 'ceva de trimis',
        price: '15 RON',
        status: 10,
        rideExists: true,
    }
]

const Packages = (props) =>{

    return (
        <Fragment>
            {packages_a.map((pack)=>
                    <Grid container item xs={12}  md={5}  xl={4} justifyContent='space-around'>
                        <PackageCard packageQuantity={pack.packageQuantity} packageDimensions={pack.packageDimensions} sender={pack.sender}
                                    senderPhone={pack.senderPhone} destinatary={pack.destinatary} destinataryPhone={pack.destinataryPhone}
                                    packageWeight={pack.packageWeight} departureDate={pack.departureDate} price={pack.price}
                                    departureAddress={pack.departureAddress} destinationAddress={pack.destinationAddress} details={pack.details}
                                    status= {pack.status} rideExists={pack.rideExists}/>
                    </Grid>
            )} 
        </Fragment>
    );
}

export default Packages;