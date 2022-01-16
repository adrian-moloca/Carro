import {fetchMyRidesRequest, fetchMyRidesSuccess, fetchMyRidesFailure,
    createNewRideRequest, createNewRideSuccess, createNewRideFailure,
    updateRideRequest, updateRideSuccess, updateRideFailure,
    deleteRideRequest, deleteRideSuccess, deleteRideFailure,
    closeRideRequest, closeRideSuccess, closeRideFailure, cleanMyRidesData
} from '../types/MyRidesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchMyRides = (token) => {

    return (dispatch) => {
        dispatch(fetchMyRidesRequest);
        axios.get(data.baseUrl + "/my-rides",{
            headers:{
                'Authorization': `Bearer ${token}`,
            }})
        .then(response => {
            const myRides = [...response.data.data];
            dispatch(fetchMyRidesSuccess(myRides));
        }).catch(error => {
            const errorMsg = error;
            dispatch(fetchMyRidesFailure(errorMsg))
        })
    }
    }


export const createNewRide = (departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType, token) => {

return(dispatch) => {
dispatch(createNewRideRequest);
axios.post(data.baseUrl+"/rides", {
    departureDate: departureDate,
    fromCountry: fromCountry,
    fromCity: fromCity,
    toCountry: toCountry,
    toCity: toCity,
    departureAddress: departureAddress,
    destinationAddress: destinationAddress,
    estimatedTime: estimatedTime,
    transportType: trasportType,
}, {headers: {
    'Authorization': `Bearer ${token}`,
}})
.then(response => {
    const Msg = response.data;
    alert("Cursa creata cu succes")
    dispatch(createNewRideSuccess(response.data));
    dispatch(fetchMyRides(token))
}).catch(error => {
    const errorMsg = error;
    dispatch(createNewRideFailure(errorMsg))
})
}
}

export const updateRide = (id, departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType, token) => {

return(dispatch) => {
    dispatch(updateRideRequest);
    axios.patch(data.baseUrl+"/rides/" + id,{
        departureDate: departureDate,
        fromCountry: fromCountry,
        fromCity: fromCity,
        toCountry: toCountry,
        toCity: toCity,
        departureAddress: departureAddress,
        destinationAddress: destinationAddress,
        estimatedTime: estimatedTime,
        trasportType: trasportType,
}, {
    headers:{
        'Authorization': `Bearer ${token}`,
    }
})
.then(response => {
    dispatch(updateRideSuccess(response));
    dispatch(fetchMyRides())
}).catch(error => {
    const errorMsg = error;
    dispatch(updateRideFailure(errorMsg))
})
}
}

export const deleteRide = (id, token) => {

    return(dispatch) => {
        dispatch(deleteRideRequest);
        axios.delete(data.baseUrl+"/rides/"+id,{
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            dispatch(deleteRideSuccess());
            dispatch(fetchMyRides(token))
        }).catch(error => {
            const errorMsg = error;
            dispatch(deleteRideFailure(errorMsg))
        })
    }
}

export const closeRide = (id, token) => {

    return(dispatch) => {
        dispatch(closeRideRequest);
        axios.patch(data.baseUrl+"/rides/"+id,[{
                path: "/mainStatus",
                op: "replace",
                value: "4"
        }],{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            dispatch(closeRideSuccess());
            dispatch(fetchMyRides(token))
        }).catch(error => {
            const errorMsg = error;
            dispatch(closeRideFailure(errorMsg))
        })
    }
}

export const clean = () => {
    return (dispatch)=>{
        dispatch(cleanMyRidesData());
    }
}