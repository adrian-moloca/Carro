// My Rides types

// My Rides request
export const MY_RIDES_REQUEST = 'MY_RIDES_REQUEST';
export const MY_RIDES_SUCCESS = 'MY_RIDES_SUCCESS';
export const MY_RIDES_FAILURE = 'MY_RIDES_FAILURE';

// Create new ride

export const NEW_RIDE_REQUEST = 'NEW_RIDE_REQUEST';
export const NEW_RIDE_SUCCESS = 'NEW_RIDE_SUCCESS';
export const NEW_RIDE_FAILURE = 'NEW_RIDE_FAILURE';

// Update ride

export const RIDE_UPDATE_REQUEST = 'RIDE_UPDATE_REQUEST';
export const RIDE_UPDATE_SUCCESS = 'RIDE_UPDATE_SUCCESS';
export const RIDE_UPDATE_FAILURE = 'RIDE_UPDATE_FAILURE';

// Delete ride

export const RIDE_DELETE_REQUEST = 'RIDE_DELETE_REQUEST';
export const RIDE_DELETE_SUCCESS = 'RIDE_DELETE_SUCCESS';
export const RIDE_DELETE_FAILURE = 'RIDE_DELETE_FAILURE';

// My Rides functions
export const fetchMyRidesRequest = () => {
    return {
        type: MY_RIDES_REQUEST,
    }
}

export const fetchMyRidesSuccess = rides => {
    return {
        type: MY_RIDES_SUCCESS,
        payload: [...rides]
    }
}

export const fetchMyRidesFailure = error => {
    return {
        type: MY_RIDES_FAILURE,
        payload: error
    }
}

// Create new Ride functions

export const createNewRideRequest = () => {
    return {
        type: NEW_RIDE_REQUEST,
    }
}

export const createNewRideSuccess = rides => {
    return {
        type: NEW_RIDE_SUCCESS,
        payload: rides
    }
}

export const createNewRideFailure = error => {
    return {
        type: NEW_RIDE_FAILURE,
        payload: error
    }
}

// Update ride

export const updateRideRequest = () => {
    return {
        type: RIDE_UPDATE_REQUEST,
    }
}

export const updateRideSuccess = () => {
    return {
        type: RIDE_UPDATE_SUCCESS,
    }
}

export const updateRideFailure = error => {
    return {
        type: RIDE_UPDATE_FAILURE,
        payload: error
    }
}

// Delete ride

export const deleteRideRequest = () => {
    return {
        type: RIDE_DELETE_REQUEST,
    }
}

export const deleteRideSuccess = () => {
    return {
        type: RIDE_DELETE_SUCCESS,
    }
}

export const deleteRideFailure = error => {
    return {
        type: RIDE_DELETE_FAILURE,
        payload: error
    }
}