import {searchPackagesRequest, searchPackagesSuccess, searchPackagesFailure, cleanPackagesData,
       packagesUnderRideRequest, packagesUnderRideSuccess, packagesUnderRideFailure} from '../types/PackagesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const searchPackages = (fromCountry, fromCity, toCountry, toCity, token) => {

    return (dispatch) => {
        dispatch(searchPackagesRequest);
        axios.get(data.baseUrl + "/packages?FromCountry="+fromCountry+"&FromCity="+fromCity+"&ToCountry="+toCountry+"&ToCity="+toCity+"&PageNumber=1&PageSize=25",
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            const packages = [...response.data.data];
            dispatch(searchPackagesSuccess(packages));
        }).catch(error => {
            const errorMsg = error;
            dispatch(searchPackagesFailure(errorMsg))
        })
    }
}

export const packagesUnderRide = (rideId, token) => {
    
    return(dispatch)=> {
        dispatch(packagesUnderRideRequest);
        axios.get(data.baseUrl+'my-packages/'+rideId+"/packages&pageNumber=1&pageSize=15", {
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        }).then((response)=>packagesUnderRideSuccess(response.data.data)).catch(error=>packagesUnderRideFailure(error))
    } 
}

export const clean = () => {
    return (dispatch) => {
        dispatch(cleanPackagesData());
    }
}
