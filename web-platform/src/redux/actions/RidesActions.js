import {searchRidesRequest, searchRidesSuccess, searchRidesFailure, getRideRequest, getRideSuccess, getRideFailure, cleanRideData} from '../types/RidesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const searchRides = (fromCountry, fromCity, toCountry, toCity, token) => {

    return (dispatch) => {
        dispatch(searchRidesRequest);
        axios.get(data.baseUrl + "/rides?fromCountry="+fromCountry+"&fromCity="+fromCity+"&toCountry="+toCountry+"&toCity="+toCity+"&pageNumber=1&pageSize=25",
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
            const ride = [...response.data];
            dispatch(getRideSuccess(ride));
        }).catch(error => {
            const errorMsg = error;
            dispatch(getRideFailure(errorMsg))
        })
    }
}

export const clean = () => {
    return (dispatch) => {
        dispatch(cleanRideData());
    }
}




