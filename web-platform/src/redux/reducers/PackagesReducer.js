import {SEARCH_PACKAGES_REQUEST, SEARCH_PACKAGES_SUCCESS, SEARCH_PACKAGES_FAILURE, CLEAN_PACKAGES_DATA
} from '../types/PackagesTypes';

/* http://mongo-api.carrointernational.ro/api/v1/rides?
fromCountry=s&fromCity=s&toCountry=s&toCity=s&pageNumber=1&pageSize=25 */

let initialState = {
    packages: [],
    loading: false,
    hasErrors: false,
}

const packagesReducer = (state = initialState, action) => {
switch (action.type) {

    case SEARCH_PACKAGES_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case SEARCH_PACKAGES_SUCCESS:
        return{
            ...state,
            packages: action.payload,
        }
    case SEARCH_PACKAGES_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }
    case CLEAN_PACKAGES_DATA:
        return{
            ...state,
            packages: [],
        }    
    default: 
        return  {
            ...state,
        }
}


}

export default packagesReducer;