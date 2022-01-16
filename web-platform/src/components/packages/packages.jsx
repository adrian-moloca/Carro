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

    useEffect(()=>{
        axios.get(data.baseUrl+'/my-rides/'+props.rideId+"/packages", {
            headers:{
                'Authorization': `Bearer ${props.token}`,
            }
        }).then((response)=>{setPackagesUnder(response.data.data); setLoading(false);}).catch((error)=>{setLoading(false);})

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
                        <PackageCard packageQuantity={pack.packageQuantity} packageDimensions={pack.packageDimensions} sender={pack.sender}
                                    senderPhone={pack.senderPhone} destinatary={pack.destinatary} destinataryPhone={pack.destinataryPhone}
                                    packageWeight={pack.packageWeight} departureDate={pack.departureDate} price={pack.price}
                                    departureAddress={pack.departureAddress} destinationAddress={pack.destinationAddress} details={pack.details}
                                    status= {pack.status} rideExists={pack.rideExists} specialMention={pack.packageSpecialMention}
                                    rejectReason={rejectReason} setRejectReason={setRejectReason}/>
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