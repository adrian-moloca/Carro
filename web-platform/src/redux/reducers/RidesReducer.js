import {SEARCH_RIDES_REQUEST, SEARCH_RIDES_SUCCESS, SEARCH_RIDES_FAILURE,
} from '../types/RidesTypes';

/* http://mongo-api.carrointernational.ro/api/v1/rides?
fromCountry=s&fromCity=s&toCountry=s&toCity=s&pageNumber=1&pageSize=25 */

let initialState = {
    rides: [],
    loading: false,
    hasErrors: false,
}

const ridesReducer = (state = initialState, action) => {
switch (action.type) {

    case SEARCH_RIDES_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case SEARCH_RIDES_SUCCESS:
        return{
            ...state,
            rides: action.payload,
        }
    case SEARCH_RIDES_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }    
    default: 
        return  {
            ...state,
        }
}


}

export default ridesReducer;