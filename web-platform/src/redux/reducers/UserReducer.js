import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,
    USER_LOGOUT, USER_NEWUSER_REQUEST, USER_NEWUSER_SUCCESS, USER_NEWUSER_FAILURE,
    // USER_GET_REQUEST, USER_GET_SUCCESS, USER_GET_FAILURE,
    USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE,
    USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAILURE,
    USER_RESET_REQUEST, USER_RESET_SUCCESS, USER_RESET_FAILURE,
    USER_PROFILE_IMAGE_REQUEST, USER_PROFILE_IMAGE_SUCCESS, USER_PROFILE_IMAGE_FAILURE,
    USER_PERSONAL_INFO_REQUEST, USER_PERSONAL_INFO_SUCCESS, USER_PERSONAL_INFO_FAILURE,
    USER_OPTIONAL_INFO_REQUEST, USER_OPTIONAL_INFO_SUCCESS, USER_OPTIONAL_INFO_FAILURE,
    USER_COMPANY_REQUEST, USER_COMPANY_SUCCESS, USER_COMPANY_FAILURE,
    PROFILE_STATUS_REQUEST, PROFILE_STATUS_SUCCESS, PROFILE_STATUS_FAILURE,
    REMEMBER_ME, REFRESH_TOKEN, TOKEN_VALIDATED_TOGGLE, GOOGLE_LOGIN_SUCCESS
} from '../types/UserTypes';


let initialState = {
    toggle: 0,
    rememberMe: false,
    UserRole: "",
    email: "",
    exp: 0,
    iat: 0,
    id: "",
    isUserValidated: false,
    isAdmin: "",
    jti: "",
    name: "",
    nbf: 0,
    phoneNumber: "",
    sub: "",
    loading: false,
    hasErrors: {
        state: false,
        messages: []
    },
    token: "",
    refreshToken: "",
    isTokenValidated: false,
    profileImage: "",
    personalInfo: {
        email: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        phoneNumber: "",
        address: "",
        city: "",
        country: ""
    },
    optionalInfo:{
        languages: "",
        description: "",
        car: {
            registrationNumber: "",
            model: "",
            color: "",
            brand: ""
        }
    },
    company:{
        isCompany: false,
        name: "",
        email: "",
        taxIdentificationNumber: "",
        address: "",
        city: "",
        country: "",
        phoneNumber: ""
    },
    profileStatus:{
        isCompany: false,
        isPersonalInfoCompleted: false,
        isIdentityCardUploaded: false,
        isIdentityCardValidated: false,
        isPhoneNumberValidated: false,
        isUserValidated: false,
        isSubscriptionPayed: false,
        rejectReason: "",
        invalidateReason: ""
    }
}

const userReducer = (state = initialState, action) => {
switch (action.type) {
    
    //remember me
    case REMEMBER_ME:{
        return {
            ...state,
            rememberMe: !state.rememberMe
        }
    }

    // refresh tokens
    case REFRESH_TOKEN:{
        return{
            ...state, 
            token: action.payload.token,
            refreshToken: action.payload.refreshToken
        }
    }

    case TOKEN_VALIDATED_TOGGLE:{
        return {
            ...state,
            isTokenValidated: !state.isTokenValidated
        }
    }

    //Login
    case USER_LOGIN_REQUEST:
        return {
            ...state,
            loading: true,
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    case USER_LOGIN_SUCCESS:
        return{
            ...state,
            hasErrors:{
                state: false,
                messages: []
            },
            loading: false,
            UserRole: action.payload.user.UserRole,
            email: action.payload.user.email,
            exp: action.payload.user.exp,
            iat: action.payload.user.iat,
            id: action.payload.user.id,
            isAdmin: action.payload.user.isAdmin,
            isUserValidated: action.payload.user.isUserValidated,
            jti: action.payload.user.jti,
            name: action.payload.user.name,
            nbf: action.payload.user.nbf,
            phoneNumber: action.payload.user.phoneNumber,
            sub: action.payload.user.sub,
            token: action.payload.token,
            refreshToken: action.payload.refreshToken,
            toggle: state.toggle + 1
        }
    case USER_LOGIN_FAILURE:
        return{
            ...state,
            hasErrors: {
                state: true,
                messages: action.payload.response.data.errors
            },
            loading: false,
            toggle: state.toggle + 1
        }
    //Create New User    
    case USER_NEWUSER_REQUEST:
        return {
            ...state,
            loading: true,
            toggle: state.toggle + 1
            }
    case USER_NEWUSER_SUCCESS:
        return{
            ...state,
            hasErrors:{
                state: false,
                messages: []
            },
            loading: false,
            UserRole: action.payload.user.UserRole,
            email: action.payload.user.email,
            exp: action.payload.user.exp,
            iat: action.payload.user.iat,
            id: action.payload.user.id,
            isAdmin: action.payload.user.isAdmin,
            isUserValidated: action.payload.user.isUserValidated,
            jti: action.payload.user.jti,
            name: action.payload.user.name,
            nbf: action.payload.user.nbf,
            phoneNumber: action.payload.user.phoneNumber,
            sub: action.payload.user.sub,
            token: action.payload.token,
            refreshToken: action.payload.refreshToken,
            toggle: state.toggle + 1
        }
    case USER_NEWUSER_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: action.payload.response.data.errors
            },
            toggle: state.toggle + 1
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
            toggle: state.toggle + 1
            }
    case USER_UPDATE_SUCCESS:
        return{
            ...state,
            loading: false,
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    case USER_UPDATE_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: action.payload.response.data.errors
            },
            toggle: state.toggle + 1
        }

    // ResetPassword user
    case USER_RESET_REQUEST:
        return {
            ...state,
            loading: true,
            toggle: state.toggle + 1
            }
    case USER_RESET_SUCCESS:
        return{
            ...state,
            loading: false,
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    case USER_RESET_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: action.payload.response.data.errors
            },
            toggle: state.toggle + 1
        }
    // Delete user
    case USER_DELETE_REQUEST:
        return {
            ...state,
            loading: true,
            toggle: state.toggle + 1
            }
    case USER_DELETE_SUCCESS:
        return{
            ...state,
            loading: false,
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    case USER_DELETE_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: action.payload.response.data.errors
            },
            toggle: state.toggle + 1
        }
    //Logout
    case USER_LOGOUT:
        return {
            rememberMe: false,
            UserRole: "",
            email: "",
            exp: 0,
            iat: 0,
            id: "",
            isAdmin: "",
            isUserValidated: false,
            jti: "",
            name: "",
            nbf: 0,
            phoneNumber: "",
            sub: "",
            loading: false,
            hasErrors:{
                state: false,
                messages: []
            },
            token: "",
            refreshToken: "",
            profileImage: "",
            personalInfo:{
                email:"",
                firstName: "",
                lastName: "",
                dateOfBirth: "",
                phoNumber: "",
                address: "",
                city: "",
                country: ""
            },
            optionalInfo:{
                languages: "",
                description: "",
                car: {
                    registrationNumber: "",
                    model: "",
                    color: "",
                    brand: ""
                }
            },        
            company:{
                isCompany: false,
                name: "",
                email: "",
                taxIdentificationNumber: "",
                address: "",
                city: "",
                country: "",
                phoneNumber: ""
            },
            profileStatus:{
                isCompany: false,
                isPersonalInfoCompleted: false,
                isIdentityCardUploaded: false,
                isIdentityCardValidated: false,
                isPhoneNumberValidated: false,
                isUserValidated: false,
                isSubscriptionPayed: false,
                rejectReason: "",
                invalidateReason: ""
            },
            toggle: 0
        }
    //Profile Image
    case USER_PROFILE_IMAGE_REQUEST:{
        return {
            ...state,
            loading: true,
            toggle: state.toggle + 1
        }
    }
    case USER_PROFILE_IMAGE_SUCCESS:{
        return {
            ...state,
            loading: false,
            profileImage: "data:image/png;base64," + action.payload.profileImage,
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }

    }
    case USER_PROFILE_IMAGE_FAILURE:{
        return {
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    //Personal Info
    case USER_PERSONAL_INFO_REQUEST:{
        return {
            ...state,
            loading: true
        }
    }
    case USER_PERSONAL_INFO_SUCCESS:{
        return {
            ...state,
            personalInfo: {
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                dateOfBirth: action.payload.dateOfBirth,
                phoneNumber: action.payload.phoneNumber,
                address: action.payload.address,
                city: action.payload.city,
                country: action.payload.country
            },
            loading: false,
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case USER_PERSONAL_INFO_FAILURE:{
        return {
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case USER_OPTIONAL_INFO_REQUEST:{
        return {
            ...state,
            loading: true,
            toggle: state.toggle + 1
        }
    }
    case USER_OPTIONAL_INFO_SUCCESS:{
        return {
            ...state,
            loading: false,
            optionalInfo:{
                languages: action.payload.languages,
                description: action.payload.description,
                car: {
                    registrationNumber: action.payload.car.registrationNumber,
                    model: action.payload.car.model,
                    color: action.payload.car.color,
                    brand: action.payload.car.brand
                }
            },
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case USER_OPTIONAL_INFO_FAILURE:{
        return {
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case USER_COMPANY_REQUEST:{
        return {
            ...state,
            loading: true,
            toggle: state.toggle + 1
        }
    }
    case USER_COMPANY_SUCCESS:{
        return {
            ...state,
            loading: false,
            company:{
                isCompany:  action.payload.isCompany,
                name: action.payload.name,
                email: action.payload.email,
                taxIdentificationNumber: action.payload.taxIdentificationNumber,
                address: action.payload.address,
                city: action.payload.city,
                country: action.payload.country,
                phoneNumber: action.payload.phoneNumber
            },
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case USER_COMPANY_FAILURE:{
        return {
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case PROFILE_STATUS_REQUEST:{
        return {
            ...state,
            loading: true,
            toggle: state.toggle + 1
        }
    }
    case PROFILE_STATUS_SUCCESS:{
        return {
            ...state,    
            loading: false,
            profileStatus:{
                isCompany: action.payload.isCompany,
                isPersonalInfoCompleted: action.payload.isPersonalInfoCompleted,
                isIdentityCardUploaded: action.payload.isIdentityCardUploaded,
                isIdentityCardValidated: action.payload.isIdentityCardValidated,
                isPhoneNumberValidated: action.payload.isPhoneNumberValidated,
                isUserValidated: action.payload.isUserValidated,
                isSubscriptionPayed: action.payload.isSubscriptionPayed,
                rejectReason: action.payload.rejectReason,
                invalidateReason: action.payload.invalidateReason
            },
            hasErrors:{
                state: false,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case PROFILE_STATUS_FAILURE:{
        return {
            ...state,
            loading: false,
            hasErrors:{
                state: true,
                messages: []
            },
            toggle: state.toggle + 1
        }
    }
    case GOOGLE_LOGIN_SUCCESS: {
        return {
            ...state,
            loading: false,
            hasErrors:{
                state: false,
                messages: []
            },
            UserRole: action.payload.UserRole,
            email: action.payload.email,
            exp: action.payload.exp,
            iat: action.payload.iat,
            id: action.payload.id,
            isAdmin: action.payload.isAdmin,
            isUserValidated: action.payload.isUserValidated,
            jti: action.payload.jti,
            name: action.payload.name,
            nbf: action.payload.nbf,
            phoneNumber: action.payload.phoneNumber,
            sub: action.payload.sub,
            token: action.payload.token,
            refreshToken: action.payload.refreshToken,
            toggle: state.toggle + 1
        }
    }
    default: 
        return  {
            ...state,
        }
}


}

export default userReducer;