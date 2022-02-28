import {
    ADMIN_GET_USERS_REQUEST, ADMIN_GET_USERS_SUCCESS, ADMIN_GET_USERS_FAILURE,
    ADMIN_GET_USER_REQUEST, ADMIN_GET_USER_SUCCESS, ADMIN_GET_USER_FAILURE,
    CLEAN_USER_PANEL
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
            numberSeries: ""
        },
        userStatus: {
            isCompany: false,
            isAccountClosed: false,
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
                users: action.payload,
                hasErrors: false
                ,
                loading: false
            }
        case ADMIN_GET_USERS_FAILURE:
            return{
                ...state,
                hasErrors:true,
                loading: false
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
                    id:  action.payload.id ? action.payload.id : '',
                    dateCreated:  action.payload.dateCreated ? action.payload.dateCreated : '',
                    email: action.payload.email ? action.payload.email : '',
                    role: action.payload.role ? action.payload.role : 0,
                    termsAndConditions: action.payload.termsAndConditions ? action.payload.termsAndConditions : false,
                    personalInfo: {
                        email: action.payload.personalInfo.email ? action.payload.personalInfo.email : '',
                        firstName: action.payload.personalInfo.firstName ? action.payload.personalInfo.firstName : '',
                        lastName: action.payload.personalInfo.lastName ? action.payload.personalInfo.lastName :'',
                        dateOfBirth: action.payload.personalInfo.dateOfBirth ? action.payload.personalInfo.dateOfBirth : '',
                        phoneNumber: action.payload.personalInfo.phoneNumber ? action.payload.personalInfo.phoneNumber : '',
                        address: action.payload.personalInfo.address ? action.payload.personalInfo.address : '',
                        city: action.payload.personalInfo.city ? action.payload.personalInfo.city : '',
                        country: action.payload.personalInfo.country ? action.payload.personalInfo.country : ''
                    },
                    profile: {
                        profileImage: action.payload.profile.profileImage ? action.payload.profile.profileImage : '',
                        rate: action.payload.profile.rate ? action.payload.profile.rate : 0,
                        starRate: {
                            fiveStarCount: action.payload.profile.starRate.fiveStarCount ? action.payload.profile.starRate.fiveStarCount : 0,
                            fourStarCount: action.payload.profile.starRate.fourStarCount ? action.payload.profile.starRate.fourStarCount : 0,
                            threeStarCount: action.payload.profile.starRate.threeStarCount ? action.payload.profile.starRate.threeStarCount : 0,
                            twoStarCount: action.payload.profile.starRate.twoStarCount ? action.payload.profile.starRate.twoStarCount : 0,
                            oneStarCount: action.payload.profile.starRate.oneStarCount ? action.payload.profile.starRate.oneStarCount : 0
                        }
                    },
                    identityCard: {
                        attachment: action.payload.identityCard.attachment ? action.payload.identityCard.attachment : '',
                        cnp: action.payload.identityCard.cnp ? action.payload.identityCard.cnp : '',
                        numberSeries: action.payload.identityCard.numberSeries ? action.payload.identityCard.numberSeries : ''
                    },
                    userStatus: {
                        isAccountClosed: action.payload.userStatus.isAccountClosed ? action.payload.userStatus.isAccountClosed : false,
                        isCompany: action.payload.userStatus.isCompany ? action.payload.userStatus.isCompany : false,
                        isPersonalInfoCompleted: action.payload.userStatus.isPersonalInfoCompleted ? action.payload.userStatus.isPersonalInfoCompleted : false,
                        isIdentityCardValidated: action.payload.userStatus.isIdentityCardValidated ? action.payload.userStatus.isIdentityCardValidated : false,
                        isPhoneNumberValidated: action.payload.userStatus.isPhoneNumberValidated ? action.payload.userStatus.isPhoneNumberValidated : false,
                        isIdentityCardUploaded: action.payload.userStatus.isIdentityCardUploaded ? action.payload.userStatus.isIdentityCardUploaded : false,
                        isUserValidated: action.payload.userStatus.isUserValidated ? action.payload.userStatus.isUserValidated : false,
                        isSubscriptionPaid: action.payload.userStatus.isSubscriptionPaid ? action.payload.userStatus.isSubscriptionPaid : false,
                        isTrial: action.payload.userStatus.isTrial ? action.payload.userStatus.isTrial : false,
                        rejectReason: action.payload.userStatus.rejectReason ? action.payload.userStatus.isAccountClosed : '',
                        invalidateReason: action.payload.userStatus.invalidateReason? action.payload.userStatus.isAccountClosed : ''
                    },
                    closeAccount: {
                        dateCreated: action.payload.closeAccount && action.payload.closeAccount.dateCreated ? action.payload.closeAccount.dateCreated : '',
                        closeReason: action.payload.closeAccount && action.payload.closeAccount.closeReason ? action.payload.closeAccount.closeReason : ''
                    }
                },
                hasErrors:false,
                loading: false
            }
        case ADMIN_GET_USER_FAILURE:
            return{
                ...state,
                hasErrors:true,
                loading: false
            }
        case CLEAN_USER_PANEL:
            return{
                ...state,
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
                        isAccountClosed: false,
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
                hasErrors:false,
                loading: false
            }
        default:
            return{
                ...state
            }
    }
}

export default adminReducer;