// Rides types

// Search Rides request
export const SEARCH_PACKAGES_REQUEST = 'SEARCH_PACKAGES_REQUEST';
export const SEARCH_PACKAGES_SUCCESS = 'SEARCH_PACKAGES_SUCCESS';
export const SEARCH_PACKAGES_FAILURE = 'SEARCH_PACKAGES_FAILURE';
export const CLEAN_PACKAGES_DATA = 'CLEAN_PACKAGES_DATA';

// search packages functions
export const searchPackagesRequest = () => {
    return {
        type: SEARCH_PACKAGES_REQUEST,
    }
}

export const searchPackagesSuccess = packages => {
    return {
        type: SEARCH_PACKAGES_SUCCESS,
        payload: packages
    }
}

export const searchPackagesFailure = error => {
    return {
        type: SEARCH_PACKAGES_FAILURE,
        payload: error
    }
}

export const cleanPackagesData = () =>{
    return{
        type: CLEAN_PACKAGES_DATA,
    }
}