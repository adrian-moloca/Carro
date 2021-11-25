// Rides types

// Search Rides types 
export const SEARCH_RIDES_REQUEST = 'SEARCH_RIDES_REQUEST';
export const SEARCH_RIDES_SUCCESS = 'SEARCH_RIDES_SUCCESS';
export const SEARCH_RIDES_FAILURE = 'SEARCH_RIDES_FAILURE';

// Get Ride types
export const GET_RIDE_REQUEST = 'GET_RIDE_REQUEST';
export const GET_RIDE_SUCCESS = 'GET_RIDE_SUCCESS';
export const GET_RIDE_FAILURE = 'GET_RIDE_FAILURE';

//Clean Rides
export const CLEAN_RIDE_DATA = 'CLEAN_RIDE_DATA';

// search rides functions
export const searchRidesRequest = () => {
    return {
        type: SEARCH_RIDES_REQUEST,
    }
}

export const searchRidesSuccess = rides => {
    return {
        type: SEARCH_RIDES_SUCCESS,
        payload: rides
    }
}

export const searchRidesFailure = error => {
    return {
        type: SEARCH_RIDES_FAILURE,
        payload: error
    }
}

// get ride functions
export const getRideRequest = () => {
    return {
        type: GET_RIDE_REQUEST,
    }
}

export const getRideSuccess = ride => {
    return {
        type: GET_RIDE_REQUEST,
        payload: ride
    }
}

export const getRideFailure = error => {
    return {
        type: GET_RIDE_FAILURE,
        payload: error
    }
}

//clean ridesData
export const cleanRideData = () =>{
    return{
        type: CLEAN_RIDE_DATA,
    }
}

