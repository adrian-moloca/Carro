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
    const {t} = useTranslation();

    const getPackagesUnder = ( ) =>{
        axios.get(data.baseUrl+'/my-rides/'+props.rideId+"/packages", {
                headers:{
                    'Authorization': `Bearer ${props.token}`,
                }
            }).then((response)=>{setPackagesUnder(response.data.data); setLoading(false);}).catch((error)=>{setLoading(false);})
    }

    useEffect(()=>{
        getPackagesUnder()    
    }, [])

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
                            name={pack.packageInfo.name}
                            packageQuantity={pack.packageInfo.numberOfPackages} 
                            dimensions={pack.packageInfo.dimensions}
                            weight={pack.packageInfo.weight} 
                            departureDate={pack.departureDate.substr(0, 10)} 
                            price={pack.packageInfo.price}
                            departure={pack.packageSender.departure}
                            destination={pack.packageReceiver.destination}
                            departureAddress={pack.packageSender.departureAddress} 
                            destinationAddress={pack.packageReceiver.destinationAddress} 
                            status= {pack.status} 
                            interactions={pack.interactions} 
                            packageSpecialMention={pack.packageSpecialMention}
                            packageType={pack.packageInfo.packageType}
                            sender={pack.packageSender.senderName}
                            senderPhone={pack.packageSender.phoneNumber}
                            destinatary={pack.packageReceiver.receiverName}
                            destinataryPhone={pack.packageReceiver.phoneNumber}
                            details={pack.packageInfo.description}
                            statusUpdated={()=>getPackagesUnder()}
                        />
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