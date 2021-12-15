import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Package from './package/package';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { fetchMyPackages } from '../../redux/actions/MyPackagesActions';
import { clean, deletePackage } from '../../redux/actions/MyPackagesActions';
import { useHistory } from 'react-router';

const MyPackages = ({myPackagesData, userData, deletePackage, clean}) => {

const { t } = useTranslation();

const history = useHistory();

const[packagesState, setPackagesState] = useState(myPackagesData.packages.length > 0 ? myPackagesData.packages : []);

const closePackage=(event, index)=>{
    const temp=[...packagesState] 
    temp.map((pack, i)=>{
      if(index === i)
      {
        pack.status = 5;
      }
    })
    setPackagesState(temp);
}

  useEffect(()=>{
    const unlisten = history.listen(()=>{clean()})
    return unlisten;
  }, [])

  useEffect(()=>{
    fetchMyPackages(userData.token)
  }, [])

  useEffect(()=>{
    myPackagesData.packages.length > 0 ? setPackagesState(myPackagesData.packages) : setPackagesState([])
  }, [myPackagesData])

  return (

        <Container className='Primary-container-style'>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("MyPackages")}</Box>
          {packagesState.length > 0 ? (
            packagesState.map((packageinf, index) => {
                    return <Package key={index} package={packageinf} packageIndex={index + 1} departureDate={packageinf.departureDate.substr(0, 10)} departure={packageinf.departure} destination={packageinf.destination}
                         departureAddress={packageinf.departureAddress} destinationAddress={packageinf.destinationAddress} packageType={packageinf.packageType}
                         weight={packageinf.weight} description={packageinf.description} dimensions={packageinf.dimensions} price={packageinf.price} name={packageinf.name}
                         status={packageinf.status} deletePackageClicked={()=>deletePackage(packageinf.id, userData.token)} packageLocation={packageinf.location}
                         closePackageClicked={(e)=>closePackage(e, index)} packageSpecialMention = {packageinf.packageSpecialMention}/>                  
              })) : <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>{t("NoPackagesAdded")}</Box> 
            }
        </Container>
      );
};

const mapDispatchToProps = dispatch => ({deletePackage: (id, token) =>dispatch(deletePackage(id, token)), clean: ()=> dispatch(clean())})
const mapStateToProps = state =>({myPackagesData: state.myPackagesData, userData: state.userData})

export default connect(mapStateToProps, mapDispatchToProps)(MyPackages);
