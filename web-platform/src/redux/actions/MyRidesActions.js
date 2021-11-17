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


export const createNewRide = (departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress, estimatedTime, trasportType) => {

return(dispatch) => {
dispatch(createNewRideRequest);
axios.post(data.baseUrl+"/myRides/",{
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
    const Msg = response.data;
    dispatch(createNewRideSuccess(Msg));
    dispatch(fetchMyRides())
}).catch(error => {
    const errorMsg = error;
    dispatch(createNewRideFailure(errorMsg))
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