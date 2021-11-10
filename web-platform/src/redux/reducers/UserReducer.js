import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,
    USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE,
    USER_NEWUSER_REQUEST, USER_NEWUSER_SUCCESS, USER_NEWUSER_FAILURE,
    USER_GET_REQUEST, USER_GET_SUCCESS, USER_GET_FAILURE,
    USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE,
    USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAILURE,
    USER_RESET_REQUEST, USER_RESET_SUCCESS, USER_RESET_FAILURE, USER_NOTIFICATIONS,
} from '../types/UserTypes';


let initialState = {
    token: "",
    refreshToken: "",
    loading: false,
    hasErrors: false,
    notifications: [],
}

const userReducer = (state = initialState, action) => {
switch (action.type) {

    //Login
    case USER_LOGIN_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case USER_LOGIN_SUCCESS:
        return{
            ...state,
            token: action.payload.token,
            refreshToken: action.payload.refreshToken
        }
    case USER_LOGIN_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }
    //Create New User    
    case USER_NEWUSER_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case USER_NEWUSER_SUCCESS:
        return{
            ...state,
        }
    case USER_NEWUSER_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }
    //Get all Users
    // case USER_GET_REQUEST:
    //     return {
    //         ...state,
    //         loading: true,
    //         }
    // case USER_GET_SUCCESS:
    //     return{
    //         ...state,
    //         users : action.payload,
    //     }
    // case USER_GET_FAILURE:
    //     return{
    //         ...state,
    //         hasErrors: true,
    //     }

    
    // Update user
    case USER_UPDATE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case USER_UPDATE_SUCCESS:
        return{
            ...state,
          
        }
    case USER_UPDATE_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }

    // ResetPassword user
    case USER_RESET_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case USER_RESET_SUCCESS:
        return{
            ...state,
          
        }
    case USER_RESET_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }
    // Delete user
    case USER_DELETE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case USER_DELETE_SUCCESS:
        return{
            ...state,
        
        }
    case USER_DELETE_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }
    //Logout
    case USER_LOGOUT_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case USER_LOGOUT_SUCCESS:
        return {
            ...state,
            token: '',
            refreshToken: '',
        }
    case USER_LOGOUT_FAILURE:
        return {   
            hasErrors: true,
        }
    case USER_NOTIFICATIONS:
        return {
            ...state,
            notifications: action.payload,
        }
    default: 
        return  {
            ...state,
        }
}


}

export default userReducer;