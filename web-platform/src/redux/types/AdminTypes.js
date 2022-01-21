// Admin Get Users
export const ADMIN_GET_USERS_REQUEST = 'ADMIN_GET_USERS_REQUEST';
export const ADMIN_GET_USERS_SUCCESS = 'ADMIN_GET_USERS_SUCCESS';
export const ADMIN_GET_USERS_FAILURE = 'ADMIN_GET_USERS_FAILURE';

// Admin Get User
export const ADMIN_GET_USER_REQUEST = 'ADMIN_GET_USER_REQUEST';
export const ADMIN_GET_USER_SUCCESS = 'ADMIN_GET_USER_SUCCESS';
export const ADMIN_GET_USER_FAILURE = 'ADMIN_GET_USER_FAILURE';

// Clean user panel
export const CLEAN_USER_PANEL = 'CLEAN_USER_PANEL';

// admin get users functions 
export const adminGetUsersRequest = () => {
    return {
        type: ADMIN_GET_USERS_REQUEST,
    }
}

export const adminGetUsersSuccess = (users) => {
    return {
        type: ADMIN_GET_USERS_SUCCESS,
        payload: users
    }
}

export const adminGetUsersFailure = error => {
    return {
        type: ADMIN_GET_USERS_FAILURE,
        payload: error
    }
}

// admin get user functions
export const adminGetUserRequest = () => {
    return {
        type: ADMIN_GET_USER_REQUEST,
    }
}

export const adminGetUserSuccess = (user) => {
    return {
        type: ADMIN_GET_USER_SUCCESS,
        payload: user
    }
}

export const adminGetUserFailure = error => {
    return {
        type: ADMIN_GET_USER_FAILURE,
        payload: error
    }
}

//clean user panel action
export const cleanUserPanel = () => {
    return {
        type: CLEAN_USER_PANEL,
    }
}