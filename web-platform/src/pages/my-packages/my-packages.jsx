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
    packageType: 'Mic', //Mediu, Mare
    dimensions: '0x0x0',
    weight: '1 Kg',
    description:'-',
    price: '150 RON',
    name: 'Pachetul meu',
    status: 1,
    packageSpecialMention: {
      isFragile: true,
      isFoodGrade: false,
      isFlammable: false,
      isHandleWithCare: true,
      isAnimal: false,
    },
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
    status:  2,
    packageSpecialMention: {
      isFragile: false,
      isFoodGrade: true,
      isFlammable: false,
      isHandleWithCare: false,
      isAnimal: false,
    },
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
    status:  3,
    location: 'PITESTI',
    packageSpecialMention: {
      isFragile: false,
      isFoodGrade: false,
      isFlammable: false,
      isHandleWithCare: true,
      isAnimal: false,
    },
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
    status:  3,
    packageSpecialMention: {
      isFragile: false,
      isFoodGrade: true,
      isFlammable: false,
      isHandleWithCare: false,
      isAnimal: false,
    },
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
    status:  5,
    packageSpecialMention: {
      isFragile: false,
      isFoodGrade: false,
      isFlammable: true,
      isHandleWithCare: true,
      isAnimal: false,
    },
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
    status:  4,
    packageSpecialMention: {
      isFragile: true,
      isFoodGrade: false,
      isFlammable: false,
      isHandleWithCare: true,
      isAnimal: true,
    },
  },
];


  const[packagesState, setPackagesState] = useState(packages);
  

  const deletePackage=(event, index)=>{
      const temp=[...packagesState] 
      temp.splice(index, 1);
      setPackagesState(temp);
  }

  const closePackage=(event, index)=>{
      const temp=[...packagesState] 
      temp.forEach((pack, i)=>{
        if(index === i)
        {
          pack.status = 5;
        }
      })
      setPackagesState(temp);
  }

  return (

        <Container className='Primary-container-style'>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("MyPackages")}</Box>
          {packagesState.map((packageinf, index) => {
                return <Package key={index} package={packageinf} packageIndex={index + 1} departureDate={packageinf.departureDate} departure={packageinf.departure} destination={packageinf.destination}
                         departureAddress={packageinf.departureAddress} destinationAddress={packageinf.destinationAddress} packageType={packageinf.packageType}
                         weight={packageinf.weight} description={packageinf.description} dimensions={packageinf.dimensions} price={packageinf.price} name={packageinf.name}
                         status={packageinf.status} deletePackageClicked={(e)=>deletePackage(e, index)} packageLocation={packageinf.location}
                         closePackageClicked={(e)=>closePackage(e, index)} packageSpecialMention = {packageinf.packageSpecialMention}
                         />}
          )}
        </Container>
      );
};


export default MyPackages;
