//My Packages types

// My Packages request
export const MY_PACKAGES_REQUEST = 'MY_PACKAGES_REQUEST';
export const MY_PACKAGES_SUCCESS = 'MY_PACKAGES_SUCCESS';
export const MY_PACKAGES_FAILURE = 'MY_PACKAGES_FAILURE';

// User Create new package

export const NEW_PACKAGE_REQUEST = 'NEW_PACKAGE_REQUEST';
export const NEW_PACKAGE_SUCCESS = 'NEW_PACKAGE_SUCCESS';
export const NEW_PACKAGE_FAILURE = 'NEW_PACKAGE_FAILURE';

// Update package

export const PACKAGE_UPDATE_REQUEST = 'PACKAGE_UPDATE_REQUEST';
export const PACKAGE_UPDATE_SUCCESS = 'PACKAGE_UPDATE_SUCCESS';
export const PACKAGE_UPDATE_FAILURE = 'PACKAGE_UPDATE_FAILURE';

// Delete package

export const PACKAGE_DELETE_REQUEST = 'PACKAGE_DELETE_REQUEST';
export const PACKAGE_DELETE_SUCCESS = 'PACKAGE_DELETE_SUCCESS';
export const PACKAGE_DELETE_FAILURE = 'PACKAGE_DELETE_FAILURE';

// Close package

export const PACKAGE_CLOSE_REQUEST = 'PACKAGE_CLOSE_REQUEST';
export const PACKAGE_CLOSE_SUCCESS = 'PACKAGE_CLOSE_SUCCESS';
export const PACKAGE_CLOSE_FAILURE = 'PACKAGE_CLOSE_FAILURE';

// Clear Data

export const CLEAN_MY_PACKAGES_DATA = 'CLEAN_MY_PACKAGES_DATA';

// My Packages functions
export const fetchMyPackagesRequest = () => {
    return {
        type: MY_PACKAGES_REQUEST,
    }
}

export const fetchMyPackagesSuccess = packages => {
    return {
        type: MY_PACKAGES_SUCCESS,
        payload: [...packages]
    }
}

export const fetchMyPackagesFailure = error => {
    return {
        type: MY_PACKAGES_FAILURE,
        payload: error
    }
}

// Create new Package functions

export const createNewPackageRequest = () => {
    return {
        type: NEW_PACKAGE_REQUEST,
    }
}

export const createNewPackageSuccess = newPackage => {
    return {
        type: NEW_PACKAGE_SUCCESS,
        payload: newPackage
    }
}

export const createNewPackageFailure = error => {
    return {
        type: NEW_PACKAGE_FAILURE,
        payload: error
    }
}

// Update package

export const updatePackageRequest = () => {
    return {
        type: PACKAGE_UPDATE_REQUEST,
    }
}

export const updatePackageSuccess = () => {
    return {
        type: PACKAGE_UPDATE_SUCCESS,
    }
}

export const updatePackageFailure = error => {
    return {
        type: PACKAGE_UPDATE_FAILURE,
        payload: error
    }
}

// Delete package

export const deletePackageRequest = () => {
    return {
        type: PACKAGE_DELETE_REQUEST,
    }
}

export const deletePackageSuccess = () => {
    return {
        type: PACKAGE_DELETE_SUCCESS,
    }
}

export const deletePackageFailure = error => {
    return {
        type: PACKAGE_DELETE_FAILURE,
        payload: error
    }
}

export const closePackageRequest = () => {
    return {
        type: PACKAGE_CLOSE_REQUEST,
    }
}

export const closePackageSuccess = () => {
    return {
        type: PACKAGE_CLOSE_SUCCESS,
    }
}

export const closePackageFailure = error => {
    return {
        type: PACKAGE_CLOSE_FAILURE,
        payload: error
    }
}

export const cleanMyPackagesData = () =>{
    return {
        type: CLEAN_MY_PACKAGES_DATA,
    }
}