import {MY_PACKAGES_REQUEST, MY_PACKAGES_SUCCESS, MY_PACKAGES_FAILURE,
    NEW_PACKAGE_REQUEST, NEW_PACKAGE_SUCCESS, NEW_PACKAGE_FAILURE,
    PACKAGE_UPDATE_REQUEST, PACKAGE_UPDATE_SUCCESS, PACKAGE_UPDATE_FAILURE,
    PACKAGE_DELETE_REQUEST, PACKAGE_DELETE_SUCCESS, PACKAGE_DELETE_FAILURE,
    PACKAGE_CLOSE_REQUEST, PACKAGE_CLOSE_SUCCESS, PACKAGE_CLOSE_FAILURE, CLEAN_MY_PACKAGES_DATA
} from '../types/MyPackagesTypes';


let initialState = {
    packages: [],
    loading: false,
    hasErrors: false,
}

const myPackagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case MY_PACKAGES_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case MY_PACKAGES_SUCCESS:
            return{
                ...state,
                packages: action.payload,
                hasErrors: false,
                loading: false
            }
        case MY_PACKAGES_FAILURE:
            return{
                ...state,
                hasErrors: true,
                loading: false
            }    
        case NEW_PACKAGE_REQUEST:
            return {
                ...state,
                loading: true,
                }
        case NEW_PACKAGE_SUCCESS:
            return{
                ...state,
                packages: [action.payload],
                hasErrors: false,
                loading: false
            }
        case NEW_PACKAGE_FAILURE:
            return{
                ...state,
                hasErrors: true,
                loading: false
            }
        case PACKAGE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                }
        case PACKAGE_UPDATE_SUCCESS:
            return{
                ...state,
                hasErrors: false,
                loading: false
            }
        case PACKAGE_UPDATE_FAILURE:
            return{
                ...state,
                hasErrors: true,
                loading: false
            }
        case PACKAGE_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                }
        case PACKAGE_DELETE_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case PACKAGE_DELETE_FAILURE:
            return{
                ...state,
                hasErrors: true,
                loading: false
            }
        case PACKAGE_CLOSE_REQUEST:
            return {
                ...state,
                loading: true,
                }
        case PACKAGE_CLOSE_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case PACKAGE_CLOSE_FAILURE:
            return{
                ...state,
                hasErrors: true,
                loading: false
            }
        case CLEAN_MY_PACKAGES_DATA:
            return{
                ...initialState,
            }
        default: 
            return  {
                ...state,
            }
    }
}

export default myPackagesReducer;