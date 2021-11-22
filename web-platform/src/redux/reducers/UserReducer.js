import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,
    USER_LOGOUT, USER_NEWUSER_REQUEST, USER_NEWUSER_SUCCESS, USER_NEWUSER_FAILURE,
    USER_GET_REQUEST, USER_GET_SUCCESS, USER_GET_FAILURE,
    USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE,
    USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAILURE,
    USER_RESET_REQUEST, USER_RESET_SUCCESS, USER_RESET_FAILURE,
} from '../types/UserTypes';


let initialState = {
    UserRole: "",
    email: "",
    exp: 0,
    iat: 0,
    id: "",
    isAdmin: "",
    isUserValidated: "",
    jti: "",
    name: "",
    nbf: 0,
    phoneNumber: "",
    sub: "",
    loading: false,
    hasErrors: false,
    token: "",
    refreshToken: "",
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
            UserRole: action.payload.user.UserRole,
            email: action.payload.user.email,
            exp: action.payload.user.exp,
            iat: action.payload.user.iat,
            id: action.payload.user.id,
            isAdmin: action.payload.user.isAdmin,
            isUserValidated: action.payload.isUserValidated,
            jti: action.payload.user.jti,
            name: action.payload.user.name,
            nbf: action.payload.user.nbf,
            phoneNumber: action.payload.user.phoneNumber,
            sub: action.payload.user.sub,
            token: action.payload.token
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
            token: action.payload.token,
            refreshToken: action.payload.refreshToken
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
    case USER_LOGOUT:
        return {
            ...state,
            UserRole: "",
            email: "",
            exp: 0,
            iat: 0,
            id: "",
            isAdmin: "",
            isUserValidated: "",
            jti: "",
            name: "",
            nbf: 0,
            phoneNumber: "",
            sub: "",
            loading: false,
            hasErrors: false,
            token: "",
            refreshToken: "",
        }
    default: 
        return  {
            ...state,
        }
}


}

export default userReducer;