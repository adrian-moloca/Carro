import {SEARCH_RIDES_REQUEST, SEARCH_RIDES_SUCCESS, SEARCH_RIDES_FAILURE,
        GET_RIDE_REQUEST, GET_RIDE_SUCCESS, GET_RIDE_FAILURE,
        DRIVERS_UNDER_PACKAGE_REQUEST, DRIVERS_UNDER_PACKAGE_SUCCESS, DRIVERS_UNDER_PACKAGE_FAILURE,
        CLEAN_RIDES_DATA
} from '../types/RidesTypes';

/* http://mongo-api.carrointernational.ro/api/v1/rides?
fromCountry=s&fromCity=s&toCountry=s&toCity=s&pageNumber=1&pageSize=25 */

/* Get Method

Route: domainName + "api/v1/my-packages/{packageId}/drivers"

query drivers under My Packages : {PageNumber: int,	PageSize: int}

Response status 200:[
  {
    "id": "string",
    "rideId": "string",
    "image": "string",
    "name": "string",
    "rate": 0,
    "phoneNumber": "string",
    "transportType": 0,
    "estimatedTime": 0,
    "departure": "string",
    "destination": "string",
    "departureAddress": "string",
    "destinationAddress": "string",
    "departureDate": "2022-01-02T21:08:15.700Z",
    "status": {
      "id": "string",
      "status": 0,
      "rejectReason": "string",
      "packageId": "string"
    }
  }
] */

let initialState = {
    rides: [],
    ride:{
        id: "",
        rideId : "",
        image: "",
        name: "",
        rate: "",
        departure: "",
        destination: "",
        departureDate: "",
        estimatedTime: 0,
        departureAddress: "",
        destinationAddress: "",
        transportType: 0,
        phoneNumber: "",
        status: {
            id: "",
            status: "",
            rejectReason: "",
            packageId: "",
        }
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
                rideId: action.payload.rideId,
                image: action.payload.image,
                name : action.payload.name,
                rate: action.payload.rate,
                departure: action.payload.departure,
                destination: action.payload.destination,
                departureDate: action.payload.departureDate,
                estimatedTime: action.payload.estimatedTime,
                departureAddress: action.payload.departureAddress,
                destinationAddress: action.payload.destinationAddress,
                transportType: action.payload.transportType,
                phoneNumber: action.payload.phoneNumber,
                status: {
                    id: action.payload.status.id,
                    status: action.payload.status.status,
                    rejectReason: action.payload.status.rejectReason,
                    packageId: action.payload.status.packageId,
                },

            }
        }
    case GET_RIDE_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }
    case DRIVERS_UNDER_PACKAGE_REQUEST:
        return{
            ...state,
            loading: true
        }
    case DRIVERS_UNDER_PACKAGE_SUCCESS:
        return{
            ...state,
            rides: action.payload.rides
        }
    case DRIVERS_UNDER_PACKAGE_FAILURE:
        return{
            ...state,
            hasErrors: true
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