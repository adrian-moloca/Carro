import {
    ADMIN_GET_USERS_REQUEST, ADMIN_GET_USERS_SUCCESS, ADMIN_GET_USERS_FAILURE,
    ADMIN_GET_USER_REQUEST, ADMIN_GET_USER_SUCCESS, ADMIN_GET_USER_FAILURE
} from "../types/AdminTypes";

let initialState = {
    users: [],
    user:{
        id: "",
        dateCreated: "",
        email: "",
        role: 0,
        termsAndConditions: true,
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
        profile: {
            profileImage: "",
            rate: 0,
            starRate: {
            fiveStarCount: 0,
            fourStarCount: 0,
            threeStarCount: 0,
            twoStarCount: 0,
            oneStarCount: 0
            }
        },
        identityCard: {
            attachment: "",
            cnp: "",
            numberSeries: "string"
        },
        userStatus: {
            isCompany: false,
            isPersonalInfoCompleted: false,
            isIdentityCardValidated: false,
            isPhoneNumberValidated: false,
            isIdentityCardUploaded: false,
            isUserValidated: false,
            isSubscriptionPaid: false,
            isTrial: false,
            rejectReason: "",
            invalidateReason: ""
        },
        closeAccount: {
            dateCreated: "",
            closeReason: ""
        }
    },
    loading: false,
    hasErrors: false
}

const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case ADMIN_GET_USERS_REQUEST:
            return{
                ...state,
                loading: true
            };
        case ADMIN_GET_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload
            }
        case ADMIN_GET_USERS_FAILURE:
            return{
                ...state,
                hasErrors:true
            }
        case ADMIN_GET_USER_REQUEST:
            return{
                ...state,
                loading: true
            };
        case ADMIN_GET_USER_SUCCESS:
            return{
                ...state,
                user: {
                    id: action.payload.id,
                    dateCreated: action.payload.dateCreated,
                    email: action.payload.email,
                    role: action.payload.role,
                    termsAndConditions: action.payload.termsAndConditions,
                    personalInfo: {
                        email: action.payload.personalInfo.email,
                        firstName: action.payload.personalInfo.firstName,
                        lastName: action.payload.personalInfo.lastName,
                        dateOfBirth: action.payload.personalInfo.dateOfBirth,
                        phoneNumber: action.payload.personalInfo.phoneNumber,
                        address: action.payload.personalInfo.address,
                        city: action.payload.personalInfo.city,
                        country: action.payload.personalInfo.country
                    },
                    profile: {
                        profileImage: action.payload.profile.profileImage,
                        rate: action.payload.profile.rate,
                        starRate: {
                            fiveStarCount: action.payload.profile.starRate.fiveStarCount,
                            fourStarCount: action.payload.profile.starRate.fourStarCount,
                            threeStarCount: action.payload.profile.starRate.threeStarCount,
                            twoStarCount: action.payload.profile.starRate.twoStarCount,
                            oneStarCount: action.payload.profile.starRate.oneStarCount
                        }
                    },
                    identityCard: {
                        attachment: action.payload.identityCard.attachment,
                        cnp: action.payload.identityCard.cnp,
                        numberSeries: action.payload.identityCard.numberSeries
                    },
                    userStatus: {
                        isCompany: action.payload.userStatus.isCompany,
                        isPersonalInfoCompleted: action.payload.userStatus.isPersonalInfoCompleted,
                        isIdentityCardValidated: action.payload.userStatus.isIdentityCardValidated,
                        isPhoneNumberValidated: action.payload.userStatus.isPhoneNumberValidated,
                        isIdentityCardUploaded: action.payload.userStatus.isIdentityCardUploaded,
                        isUserValidated: action.payload.userStatus.isUserValidated,
                        isSubscriptionPaid: action.payload.userStatus.isSubscriptionPaid,
                        isTrial: action.payload.userStatus.isTrial,
                        rejectReason: action.payload.userStatus.rejectReason,
                        invalidateReason: action.payload.userStatus.invalidateReason
                    },
                    closeAccount: {
                        dateCreated: action.payload.closeAccount.dateCreated,
                        closeReason: action.payload.closeAccount.closeReason
                    }
                }
            }
        case ADMIN_GET_USER_FAILURE:
            return{
                ...state,
                hasErrors:true
            }
        default:
            return{
                ...state
            }
    }
}

export default adminReducer;