import {SEARCH_RIDES_REQUEST, SEARCH_RIDES_SUCCESS, SEARCH_RIDES_FAILURE,
        GET_RIDE_REQUEST, GET_RIDE_SUCCESS, GET_RIDE_FAILURE,
        CLEAN_RIDES_DATA
} from '../types/RidesTypes';

/* http://mongo-api.carrointernational.ro/api/v1/rides?
fromCountry=s&fromCity=s&toCountry=s&toCity=s&pageNumber=1&pageSize=25 */

let initialState = {
    rides: [],
    ride:{
        id: "",
        departure: "",
        destination: "",
        departureDate: "",
        estimatedTime: 0,
        departureAddress: "",
        destinationAddress: "",
        transportType: 0,
        phoneNumber: "",
        status: 0,
    },
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
    case GET_RIDE_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case GET_RIDE_SUCCESS:
        return{
            ...state,
            ride: {
                id: action.payload.id,    
                departure: action.payload.departure,
                destination: action.payload.destination,
                departureDate: action.payload.departureDate,
                estimatedTime: action.payload.estimatedTime,
                departureAddress: action.payload.departureAddress,
                destinationAddress: action.payload.destinationAddress,
                transportType: action.payload.transportType,
                phoneNumber: action.payload.phoneNumber,
                status: action.payload.status,

            }
        }
    case GET_RIDE_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }

    case CLEAN_RIDES_DATA:
        return{
            ...state,
            rides: [],
        }

    default: 
        return  {
            ...state,
        }
}


}

export default ridesReducer;