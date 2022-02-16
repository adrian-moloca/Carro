import React, { Fragment, useState, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import PackageCard from '../cards/package-card/package-card';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import data from '../../utils/constants';

const Packages = (props) =>{

    const [rejectReason, setRejectReason] = useState('');
    const [packagesUnder, setPackagesUnder] = useState([]);
    const [loading, setLoading] = useState(true)
    const [updateStatus, setUpdateStatus] = useState(false);
    const {t} = useTranslation();

    useEffect(()=>{
        if(updateStatus == false) {
            axios.get(data.baseUrl+'/my-rides/'+props.rideId+"/packages", {
                headers:{
                    'Authorization': `Bearer ${props.token}`,
                }
            }).then((response)=>{setPackagesUnder(response.data.data); setLoading(false); setUpdateStatus(true)}).catch((error)=>{setLoading(false);})
        }
    }, [setUpdateStatus])

    useEffect(()=>{}, [packagesUnder])

    return (
        <Fragment>
            {loading ? (
                <Grid container item xs={12} justifyContent='center' style={{height: '400px'}}>
                    <CircularProgress/>
                </Grid>
            ) : (packagesUnder && packagesUnder.length > 0 ? ( 
                packagesUnder.map((pack, index)=> 
                    <Grid key={index} container item xs={12}  md={5}  xl={4} justifyContent='space-around'>
                        <PackageCard 
                            userId={pack.userId} 
                            packageId={pack.id} 
                            packageQuantity={pack.numberOfPackages} 
                            dimensions={pack.dimensions}
                            weight={pack.weight} 
                            departureDate={pack.departureDate.substr(0, 10)} 
                            price={pack.price}
                            departure={pack.departure}
                            destination={pack.destination}
                            departureAddress={pack.departureAddress} 
                            destinationAddress={pack.destinationAddress} 
                            status= {pack.status} 
                            setUpdateStatus={setUpdateStatus}
                            interactions={pack.interactions} 
                            packageSpecialMention={pack.packageSpecialMention}
                            packageType={pack.packageType}/>
                    </Grid>
           )) : (
            <Grid container item xs={12} justifyContent='center' style={{height: '50px'}}>
                <Box>
                    {t("NoIteractionWithYourRide")}
                </Box>
            </Grid>
        ))}
        </Fragment>
    );
}

export default Packages;