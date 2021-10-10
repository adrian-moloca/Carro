import React from 'react';
import { Box } from '@material-ui/core';
import PackageCard from '../cards/package-card/package-card';
import { el } from 'date-fns/locale';

const packages_a = [
    {
        packageQuantity: 1,
        packageDimensions: '0x0x0',
        packageWeight: '1 Kg',
        departureDate: '26/08/2021 02:00 AM',
        departureAddress: 'Lorem Ipsium Street',
        destinationAddress: 'Lorem Ipsium Street',
    }
]

const Packages = () =>{

    return (
        <Box mx={-2} mt={1} p='2%' borderTop={1} borderColor= 'grey.400' >
            {packages_a.map((pack)=>
                     <PackageCard packageQuantity={pack.packageQuantity} packageDimensions={pack.packageDimensions} packageWeight={pack.packageWeight}
                                    departureDate={pack.departureDate} departureAddress={pack.departureAddress} destinationAddress={pack.destinationAddress}/>
            )} 
        </Box>
    );
}

export default Packages;