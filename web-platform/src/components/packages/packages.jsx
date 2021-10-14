import React from 'react';
import { Box } from '@material-ui/core';
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
        status: 'package picked', // status can be 'free package', 'package selected', 'package added', 'package picked', 'package rejected'
    }
]

const Packages = (props) =>{

    return (
        <Box mx={-2} mt={1} p='2%' borderTop={1} borderColor= 'grey.400'>
            {packages_a.map((pack)=>
                     <PackageCard packageQuantity={pack.packageQuantity} packageDimensions={pack.packageDimensions} sender={pack.sender}
                                 senderPhone={pack.senderPhone} destinatary={pack.destinatary} destinataryPhone={pack.destinataryPhone}
                                 packageWeight={pack.packageWeight} departureDate={pack.departureDate} price={pack.price}
                                 departureAddress={pack.departureAddress} destinationAddress={pack.destinationAddress} details={pack.details}
                                 status= {pack.status} rideExists={props.rideExists}/>
            )} 
        </Box>
    );
}

export default Packages;