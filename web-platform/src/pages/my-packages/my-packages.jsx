import React, {useEffect, useState} from 'react';
import { Container, Box } from '@material-ui/core';
import Package from './package/package';
import { useTranslation } from "react-i18next";


const MyPackages = () => {

const { t } = useTranslation();

const packages = [
  {
    departureDate: '26/08/2021 02:00 AM',
    departure: 'Timisoara, Romania',
    destination: 'Bucuresti, Romania',
    departureAddress: 'Lorem impsium Street',
    destinationAddress: 'Lorem Ipsium Street',
    packageType: 'Mic',
    dimensions: '0x0x0',
    weight: '1 Kg',
    description:'-',
    price: '150 RON',
    name: 'Pachetul meu',
    status: t('Open'),
  },
  {
    departureDate: '26/08/2021 02:00 AM',
    departure: 'Timisoara, Romania',
    destination: 'Bucuresti, Romania',
    departureAddress: 'Lorem impsium Street',
    destinationAddress: 'Lorem Ipsium Street',
    packageType: 'Mic',
    dimensions: '0x0x0',
    weight: '1 Kg',
    description:'-',
    price: '150 RON',
    name: 'Pachetul meu',
    status:  t('Taken'),
  },
  {
    departureDate: '26/08/2021 02:00 AM',
    departure: 'Timisoara, Romania',
    destination: 'Bucuresti, Romania',
    departureAddress: 'Lorem impsium Street',
    destinationAddress: 'Lorem Ipsium Street',
    packageType: 'Mic',
    dimensions: '0x0x0',
    weight: '1 Kg',
    description:'-',
    price: '150 RON',
    name: 'Pachetul meu',
    status:  t('InTransit'),
    location: 'PITESTI',
  },
  {
    departureDate: '26/08/2021 02:00 AM',
    departure: 'Timisoara, Romania',
    destination: 'Bucuresti, Romania',
    departureAddress: 'Lorem impsium Street',
    destinationAddress: 'Lorem Ipsium Street',
    packageType: 'Mic',
    dimensions: '0x0x0',
    weight: '1 Kg',
    description:'-',
    price: '150 RON',
    name: 'Pachetul meu',
    status:  t('InTransit'),
  },
  {
    departureDate: '26/08/2021 02:00 AM',
    departure: 'Timisoara, Romania',
    destination: 'Bucuresti, Romania',
    departureAddress: 'Lorem impsium Street',
    destinationAddress: 'Lorem Ipsium Street',
    packageType: 'Mic',
    dimensions: '0x0x0',
    weight: '1 Kg',
    description:'-',
    price: '150 RON',
    name: 'Pachetul meu',
    status:  t('Closed'),
  },
  {
    departureDate: '26/08/2021 02:00 AM',
    departure: 'Timisoara, Romania',
    destination: 'Bucuresti, Romania',
    departureAddress: 'Lorem impsium Street',
    destinationAddress: 'Lorem Ipsium Street',
    packageType: 'Mic',
    dimensions: '0x0x0',
    weight: '1 Kg',
    description:'-',
    price: '150 RON',
    name: 'Pachetul meu',
    status:  t('Delivered'),
  },
];


  const[packagesState, setPackagesState] = useState([]);

  const deletePackage = (event, index) =>{
    event.stopPropagation();
    const temp = packagesState.map((pack, i)=> {
        if(i>index)
            return pack-1;
        else
            return pack
    });
    temp.splice(index, 1);
    setPackagesState(temp);
  }

  useEffect(() => {
    console.log(packages)
  },[packages]);

  return (

        <Container className='Primary-container-style'>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("MyPackages")}</Box>
          {packages.map((packageinf, index) => {
                return <Package package={packageinf} packageIndex={index + 1} departureDate={packageinf.departureDate} departure={packageinf.departure} destination={packageinf.destination}
                         departureAddress={packageinf.departureAddress} destinationAddress={packageinf.destinationAddress} packageType={packageinf.packageType}
                         weight={packageinf.weight} description={packageinf.description} dimensions={packageinf.dimensions} price={packageinf.price} name={packageinf.name}
                         status={packageinf.status} deletePackageClicked={(e, index)=>deletePackage(e, index)} packageLocation={packageinf.location}/>}
          )}
        </Container>
      );
};


export default MyPackages;
