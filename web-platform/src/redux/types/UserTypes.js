// User action types

// User Login
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// User Logput
export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

// User Create new User

export const USER_NEWUSER_REQUEST = 'USER_NEWUSER_REQUEST';
export const USER_NEWUSER_SUCCESS = 'USER_NEWUSER_SUCCESS';
export const USER_NEWUSER_FAILURE = 'USER_NEWUSER_FAILURE';

// Update user

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE';

// Delete user

export const USER_DELETE_REQUEST = 'USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE';


// Get  Users list
export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USER_GET_FAILURE = 'USER_GET_FAILURE';

//Reset Password User
export const USER_RESET_REQUEST = 'USER_RESET_REQUEST';
export const USER_RESET_SUCCESS = 'USER_RESET_SUCCESS';
export const USER_RESET_FAILURE = 'USER_RESET_FAILURE';

// User Login functions
export const fetchLoginRequest = () => {
    return {
        type: USER_LOGIN_REQUEST,
    }
}

export const fetchLoginSuccess = users => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: users
    }
}

export const fetchLoginFailure = error => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error
    }
}

export const fetchLogoutRequest = () => {
    return {
        type: USER_LOGOUT_REQUEST,
    }
}

export const fetchLogoutSuccess = (user) => {
    return {
        type: USER_LOGOUT_SUCCESS,
        payload: user
    }
}

export const fetchLogoutFailure = error => {
    return {
        type: USER_LOGOUT_FAILURE,
        payload: error
    }
}


// User create new User functions

export const createNewUserRequest = () => {
    return {
        type: USER_NEWUSER_REQUEST,
    }
}

export const createNewUserSuccess = () => {
    return {
        type: USER_NEWUSER_SUCCESS,
    }
}

export const createNewUserFailure = error => {
    return {
        type: USER_NEWUSER_FAILURE,
        payload: error
    }
}

// Update user

export const updateUserRequest = () => {
    return {
        type: USER_UPDATE_REQUEST,
    }
}

export const updateUserSuccess = () => {
    return {
        type: USER_UPDATE_SUCCESS,
    }
}

export const updateUserFailure = error => {
    return {
        type: USER_UPDATE_FAILURE,
        payload: error
    }
}

// Reset password

export const changePasswordUserRequest = () => {
    return {
        type: USER_RESET_REQUEST,
    }
}

export const changePasswordUserSuccess = () => {
    return {
        type: USER_RESET_SUCCESS,
    }
}

export const changePasswordUserFailure = error => {
    return {
        type: USER_RESET_FAILURE,
        payload: error
    }
}

// Delete user

export const deleteUserRequest = () => {
    return {
        type: USER_DELETE_REQUEST,
    }
}

export const deleteUserSuccess = () => {
    return {
        type: USER_DELETE_SUCCESS,
    }
}

export const deleteUserFailure = error => {
    return {
        type: USER_DELETE_FAILURE,
        payload: error
    }
}

// Get User
export const fetchUsersRequest = () => {
    return {
        type: USER_GET_REQUEST,
    }
}

export const fetchUsersSuccess = user => {
    return {
        type: USER_GET_SUCCESS,
        payload: user
    }
}

export const fetchUsersFailure = error => {
    return {
        type: USER_GET_FAILURE,
        payload: error
    }
}