// User action types
export const REMEMBER_ME = 'REMEMBER_ME';

//update Token
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

//
export const TOKEN_VALIDATED_TOGGLE = 'TOKEN_VALIDATED_TOGGLE';

// User Login
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// User Logput
export const USER_LOGOUT = 'USER_LOGOUT';

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

//User notifications
export const USER_NOTIFICATIONS = 'USER_NOTIFICATIONS';

// User Profile Image 
export const USER_PROFILE_IMAGE_REQUEST = 'USER_PROFILE_IMAGE_REQUEST';
export const USER_PROFILE_IMAGE_SUCCESS = 'USER_PROFILE_IMAGE_SUCCESS';
export const USER_PROFILE_IMAGE_FAILURE = 'USER_PROFILE_IMAGE_FAILURE';

// User Personal Info
export const USER_PERSONAL_INFO_REQUEST = 'USER_PERSONAL_INFO_REQUEST';
export const USER_PERSONAL_INFO_SUCCESS = 'USER_PERSONAL_INFO_SUCCESS';
export const USER_PERSONAL_INFO_FAILURE = 'USER_PERSONAL_INFO_FAILURE';

// User Optional Info
// User Personal Info
export const USER_OPTIONAL_INFO_REQUEST = 'USER_OPTIONAL_INFO_REQUEST';
export const USER_OPTIONAL_INFO_SUCCESS = 'USER_OPTIONAL_INFO_SUCCESS';
export const USER_OPTIONAL_INFO_FAILURE = 'USER_OPTIONAL_INFO_FAILURE';

// remember me toggle
export const rememberMeToggle = () => {
    return {
        type: REMEMBER_ME,
    }
}

// refresh tokens
export const refreshTokens = (token, refreshToken)=>{
    return{
        type: REFRESH_TOKEN,
        payload: {token, refreshToken}
    }
}

// token validated toggle 
export const tokenValidatedToggle = () => {
    return {
        type: TOKEN_VALIDATED_TOGGLE,
    }
}

// User Login/Logout functions
export const fetchLoginRequest = () => {
    return {
        type: USER_LOGIN_REQUEST,
    }
}

export const fetchLoginSuccess = (user, token, refreshToken) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: {user, token, refreshToken}
    }
}

export const fetchLoginFailure = error => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error
    }
}

export const fetchLogout = () => {
    return {
        type: USER_LOGOUT,
    }
}


// User create new User functions

export const createNewUserRequest = () => {
    return {
        type: USER_NEWUSER_REQUEST,
    }
}

export const createNewUserSuccess = (user) => {
    return {
        type: USER_NEWUSER_SUCCESS,
        payload: user
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

// Get User Profile Image 
export const getUserProfileImageRequest = () => {
    return {
        type: USER_PROFILE_IMAGE_REQUEST,
    }
}

export const getUserProfileImageSuccess = image => {
    return {
        type: USER_PROFILE_IMAGE_SUCCESS,
        payload: image
    }
}

export const getUserProfileImageFailure = error => {
    return {
        type: USER_PROFILE_IMAGE_FAILURE,
        payload: error
    }
}

// Get User Personal Info
export const getUserPersonalInfoRequest = () => {
    return {
        type: USER_PERSONAL_INFO_REQUEST,
    }
}

export const getUserPersonalInfoSuccess = personalInfo => {
    return {
        type: USER_PERSONAL_INFO_SUCCESS,
        payload: personalInfo
    }
}

export const getUserPersonalInfoFailure = error => {
    return {
        type: USER_PERSONAL_INFO_FAILURE,
        payload: error
    }
}

//get User Optional Info
export const getUserOptionalInfoRequest = () => {
    return {
        type: USER_OPTIONAL_INFO_REQUEST,
    }
}

export const getUserOptionalInfoSuccess = optionalInfo => {
    return {
        type: USER_OPTIONAL_INFO_SUCCESS,
        payload: optionalInfo
    }
}

export const getUserOptionalInfoFailure = error => {
    return {
        type: USER_OPTIONAL_INFO_FAILURE,
        payload: error
    }
}

