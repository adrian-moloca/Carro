// Rides types

// Search Rides request
export const SEARCH_RIDES_REQUEST = 'SEARCH_RIDES_REQUEST';
export const SEARCH_RIDES_SUCCESS = 'SEARCH_RIDES_SUCCESS';
export const SEARCH_RIDES_FAILURE = 'SEARCH_RIDES_FAILURE';

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