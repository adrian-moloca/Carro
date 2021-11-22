import {fetchMyRidesRequest, fetchMyRidesSuccess, fetchMyRidesFailure,
    createNewRideRequest, createNewRideSuccess, createNewRideFailure,
    updateRideRequest, updateRideSuccess, updateRideFailure,
    deleteRideRequest, deleteRideSuccess, deleteRideFailure,
} from '../types/MyRidesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchMyRides = () => {

return (dispatch) => {
    dispatch(fetchMyRidesRequest);
    axios.get(data.baseUrl + "/myRides/")
    .then(response => {
        const myRides = response.data;
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
    trasportType: trasportType,
}, {headers: {
    'Authorization': `Bearer ${token}`,
    'Content-type': 'application/json'
}})
.then(response => {
    const ride = response.data;
    dispatch(createNewRideSuccess(ride));
    dispatch(fetchMyRides())
}).catch(error => {
    const errorMsg = error;
    dispatch(createNewRideFailure(errorMsg))
    console.log( error )
})
}
}

export const updateRide = (id, departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType) => {

return(dispatch) => {
    dispatch(updateRideRequest);
    axios.patch(data.baseUrl+"/myRides/" + id,{
        departureDate: departureDate,
        fromCountry: fromCountry,
        fromCity: fromCity,
        toCountry: toCountry,
        toCity: toCity,
        departureAddress: departureAddress,
        destinationAddress: destinationAddress,
        estimatedTime: estimatedTime,
        trasportType: trasportType,
})
.then(response => {
    dispatch(updateRideSuccess(id));
    dispatch(fetchMyRides())
}).catch(error => {
    const errorMsg = error;
    dispatch(updateRideFailure(errorMsg))
})
}
}

export const deleteRide = (id) => {

return(dispatch) => {
dispatch(deleteRideRequest);
axios.delete(data.baseUrl+"/myRides/" +id ,{
})
.then(response => {
    const Msg = response.data;
    dispatch(deleteRideSuccess(Msg));
    dispatch(fetchMyRides())
}).catch(error => {
    const errorMsg = error;
    dispatch(deleteRideFailure(errorMsg))
})
}
}