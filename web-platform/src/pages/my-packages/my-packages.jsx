import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Package from './package/package';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { fetchMyPackages } from '../../redux/actions/MyPackagesActions';
import { deletePackage, closePackage } from '../../redux/actions/MyPackagesActions';

const MyPackages = ({myPackagesData, userData, deletePackage, closePackage}) => {

  const { t } = useTranslation();

  const[packagesState, setPackagesState] = useState(myPackagesData.packages.length > 0 ? myPackagesData.packages : []);
  
  useEffect(()=>{
    fetchMyPackages(userData.token)
  }, [])

  useEffect(()=>{
    myPackagesData.packages.length > 0 ? setPackagesState(myPackagesData.packages) : setPackagesState([])
  }, [myPackagesData])

  useEffect(()=>{},[packagesState])

  return (
        <Container className='Primary-container-style'>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("MyPackages")}</Box>
          {packagesState.length > 0 ? (
            packagesState.map((packageinf, index) => {
                    return <Package key={index} package={packageinf} packageIndex={index + 1} packageId={packageinf.id} departureDate={packageinf.departureDate.substr(0, 10)} departure={packageinf.packageSender.departure} destination={packageinf.packageReceiver.destination}
                         departureAddress={packageinf.packageSender.departureAddress} destinationAddress={packageinf.packageReceiver.destinationAddress} packageType={packageinf.packageInfo.packageType}
                         weight={packageinf.packageInfo.weight} description={packageinf.packageInfo.description} dimensions={packageinf.packageInfo.dimensions} price={packageinf.packageInfo.price} name={packageinf.packageInfo.name}
                         status={packageinf.mainStatus} deletePackageClicked={()=>deletePackage(packageinf.id, userData.token)} packageLocation={packageinf.location}
                         closePackageClicked={()=>closePackage(packageinf.id, userData.token)} packageSpecialMention = {packageinf.packageSpecialMention} token={userData.token}/>                  
              })) : <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("NoPackagesAdded")}</Box> 
            }
        </Container>
      );
};

const mapDispatchToProps = dispatch => ({deletePackage: (id, token) =>dispatch(deletePackage(id, token)), closePackage: (id, token) =>dispatch(closePackage(id, token))});
const mapStateToProps = state =>({myPackagesData: state.myPackagesData, userData: state.userData})

export default connect(mapStateToProps, mapDispatchToProps)(MyPackages);