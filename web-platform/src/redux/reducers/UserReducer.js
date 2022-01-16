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
    REMEMBER_ME, REFRESH_TOKEN, TOKEN_VALIDATED_TOGGLE
} from '../types/UserTypes';


let initialState = {
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
    hasErrors: false,
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
            hasErrors: false,
            loading: true,
            }
    case USER_NEWUSER_SUCCESS:
        return{
            ...state,
            hasErrors: false,
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
            rememberMe: false,
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
            }
        }
    //Profile Image
    case USER_PROFILE_IMAGE_REQUEST:{
        return {
            ...state,
            loading: true
        }
    }
    case USER_PROFILE_IMAGE_SUCCESS:{
        return {
            ...state,
            profileImage: "data:image/png;base64," + action.payload.profileImage
        }
    }
    case USER_PROFILE_IMAGE_FAILURE:{
        return {
            ...state,
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
            }
        }
    }
    case USER_PERSONAL_INFO_FAILURE:{
        return {
            ...state,
        }
    }
    case USER_OPTIONAL_INFO_REQUEST:{
        return {
            ...state,
            loading: true
        }
    }
    case USER_OPTIONAL_INFO_SUCCESS:{
        return {
            ...state,
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
            hasErrors: false
        }
    }
    case USER_OPTIONAL_INFO_FAILURE:{
        return {
            ...state,
            hasErrors: true
        }
    }
    case USER_COMPANY_REQUEST:{
        return {
            ...state,
            loading: true
        }
    }
    case USER_COMPANY_SUCCESS:{
        return {
            ...state,
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
            hasErrors: false
        }
    }
    case USER_COMPANY_FAILURE:{
        return {
            ...state,
            hasErrors: true
        }
    }
    case PROFILE_STATUS_REQUEST:{
        return {
            ...state,
            loading: true
        }
    }
    case PROFILE_STATUS_SUCCESS:{
        return {
            ...state,    
            profileStatus:{
                isCompany: action.payload.isCompany,
                isPersonalInfoCompleted: action.payload.isPersonalInfoCompleted,
                isIdentityCardUploaded: action.payload.isIdentityCardUploaded,
                isIdentityCardValidated: action.payload.isCompany.isIdentityCardValidated,
                isPhoneNumberValidated: action.payload.isPhoneNumberValidated,
                isUserValidated: action.payload.isUserValidated,
                isSubscriptionPayed: action.payload.isSubscriptionPayed,
                rejectReason: action.payload.rejectReason,
                invalidateReason: action.payload.invalidateReason
            },
            hasErrors: false
        }
    }
    case PROFILE_STATUS_FAILURE:{
        return {
            ...state,
            hasErrors: true
        }
    }
    default: 
        return  {
            ...state,
        }
}


}

export default userReducer;