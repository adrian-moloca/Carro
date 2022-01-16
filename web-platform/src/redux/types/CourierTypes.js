export const COURIER_PROFILE_REQUEST = 'COURIER_PROFILE_REQUEST';
export const COURIER_PROFILE_SUCCESS = 'COURIER_PROFILE_SUCCESS';
export const COURIER_PROFILE_FAILURE = 'COURIER_PROFILE_FAILURE';
export const RESET_COURIER_DATA_CHANGED = 'RESET_COURIER_DATA_CHANGED';

export const fetchCourierProfileRequest = () => {
    return {
        type: COURIER_PROFILE_REQUEST,
    }
}

export const fetchCourierProfileSuccess = courierData => {
    return {
        type: COURIER_PROFILE_SUCCESS,
        payload: courierData
    }
}

export const fetchCourierProfileFailure = error => {
    return {
        type: COURIER_PROFILE_FAILURE,
        payload: error
    }
}

export const resetCourierDataChanged = () =>{
    return{
        type: RESET_COURIER_DATA_CHANGED
    }
}