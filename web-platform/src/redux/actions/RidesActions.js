import {searchRidesRequest, searchRidesSuccess, searchRidesFailure, getRideRequest, getRideSuccess, getRideFailure, driversUnderPackageRequest, driversUnderPackageSuccess, driversUnderPackageFailure, cleanRidesData} from '../types/RidesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const searchRides = (fromCountry, fromCity, toCountry, toCity, token) => {

    return (dispatch) => {
        dispatch(searchRidesRequest);
        axios.get(data.baseUrl + "/drivers?FromCountry="+fromCountry+"&FromCity="+fromCity+"&ToCountry="+toCountry+"&ToCity="+toCity+"&PageNumber=1&PageSize=25",
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            const rides = [...response.data.data];
            dispatch(searchRidesSuccess(rides));
        }).catch(error => {
            const errorMsg = error;
            dispatch(searchRidesFailure(errorMsg))
        })
    }
}

export const getRide = (rideID, token) => {

    return (dispatch) => {
        dispatch(getRideRequest);
        axios.get(data.baseUrl + '/rides/'+{rideID},
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            const ride = [...response.data.data];
            dispatch(getRideSuccess(ride));
        }).catch(error => {
            const errorMsg = error;
            dispatch(getRideFailure(errorMsg))
        })
    }
}

export const driversUnderPackage = (packageId, token) => {
    
    return(dispatch)=> {
        dispatch(driversUnderPackageRequest);
        axios.get(data.baseUrl+'my-packages/'+packageId+"/drivers&pageNumber=1&pageSize=15", {
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        }).then((response)=>driversUnderPackageSuccess(response.data.data)).catch(error=>driversUnderPackageFailure(error))
    } 
}

export const clean = () => {
    return (dispatch) => {
        dispatch(cleanRidesData());
    }
}