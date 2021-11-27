import {MY_PACKAGES_REQUEST, MY_PACKAGES_SUCCESS, MY_PACKAGES_FAILURE,
    NEW_PACKAGE_REQUEST, NEW_PACKAGE_SUCCESS, NEW_PACKAGE_FAILURE,
    PACKAGE_UPDATE_REQUEST, PACKAGE_UPDATE_SUCCESS, PACKAGE_UPDATE_FAILURE,
    PACKAGE_DELETE_REQUEST, PACKAGE_DELETE_SUCCESS, PACKAGE_DELETE_FAILURE,
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
                hasErrors: false,
                loading: true,
            }
        case MY_PACKAGES_SUCCESS:
            return{
                ...state,
                hasErrors: false,
                packages: action.payload,
            }
        case MY_PACKAGES_FAILURE:
            return{
                ...state,
                hasErrors: true,
            }    
        case NEW_PACKAGE_REQUEST:
            return {
                ...state,
                hasErrors: false,
                loading: true,
                }
        case NEW_PACKAGE_SUCCESS:
            return{
                ...state,
                hasErrors: false,
                package: action.payload,
            }
        case NEW_PACKAGE_FAILURE:
            return{
                ...state,
                hasErrors: true,
            }
        case PACKAGE_UPDATE_REQUEST:
            return {
                ...state,
                hasErrors: false,
                loading: true,
                }
        case PACKAGE_UPDATE_SUCCESS:
            return{
                ...state,
                hasErrors: false,
            
            }
        case PACKAGE_UPDATE_FAILURE:
            return{
                ...state,
                hasErrors: true,
            }
        case PACKAGE_DELETE_REQUEST:
            return {
                ...state,
                hasErrors: false,
                loading: true,
                }
        case PACKAGE_DELETE_SUCCESS:
            return{
                ...state,
                hasErrors: false,
            }
        case PACKAGE_DELETE_FAILURE:
            return{
                ...state,
                hasErrors: true,
            }
        default: 
            return  {
                ...state,
                hasErrors: false,
            }
    }
}

export default myPackagesReducer;