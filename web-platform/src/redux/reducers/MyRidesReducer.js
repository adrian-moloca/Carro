import {MY_RIDES_REQUEST, MY_RIDES_SUCCESS, MY_RIDES_FAILURE,
    NEW_RIDE_REQUEST, NEW_RIDE_SUCCESS, NEW_RIDE_FAILURE,
    RIDE_UPDATE_REQUEST, RIDE_UPDATE_SUCCESS, RIDE_UPDATE_FAILURE,
    RIDE_DELETE_REQUEST, RIDE_DELETE_SUCCESS, RIDE_DELETE_FAILURE,
    RIDE_CLOSE_REQUEST, RIDE_CLOSE_SUCCESS, RIDE_CLOSE_FAILURE, CLEAN_MY_RIDES_DATA,
    CLOSE_FOR_RECEIVING_REQUEST, CLOSE_FOR_RECEIVING_SUCCESS, CLOSE_FOR_RECEIVING_FAILURE
} from '../types/MyRidesTypes';

/* http://mongo-api.carrointernational.ro/api/v1/rides?
fromCountry=s&fromCity=s&toCountry=s&toCity=s&pageNumber=1&pageSize=25 */

let initialState = {
    rides: [],
    loading: false,
    hasErrors: false,
}

const myRidesReducer = (state = initialState, action) => {
switch (action.type) {

    case MY_RIDES_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case MY_RIDES_SUCCESS:
        return{
            ...state,
            rides: action.payload,
            hasErrors: false,
            loading: false
        }
    case MY_RIDES_FAILURE:
        return{
            ...state,
            hasErrors: true,
            loading: false
        }    
    case NEW_RIDE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case NEW_RIDE_SUCCESS:
        return{
            ...state,
            rides: action.payload,
            loading: false,
            hasErrors: false,
        }
    case NEW_RIDE_FAILURE:
        return{
            ...state,
            hasErrors: true,
            loading: false
        }
    case RIDE_UPDATE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case RIDE_UPDATE_SUCCESS:
        return{
            ...state,
            loading: false,
            hasErrors: false
        }
    case RIDE_UPDATE_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors: true,
        }
    case RIDE_DELETE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case RIDE_DELETE_SUCCESS:
        return{
            ...state,
            loading: false,
            hasErrors: false
        }
    case RIDE_DELETE_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors: true,
        }
    case RIDE_CLOSE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case RIDE_CLOSE_SUCCESS:
        return{
            ...state,
            loading: false,
            hasErrors: false
        }
    case RIDE_CLOSE_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors: true,
        }    
    case CLOSE_FOR_RECEIVING_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case CLOSE_FOR_RECEIVING_SUCCESS:
        return{
            ...state,
            loading: false,
            hasErrors: false
        }
    case CLOSE_FOR_RECEIVING_FAILURE:
        return{
            ...state,
            loading: false,
            hasErrors: true,
        }    
    case CLEAN_MY_RIDES_DATA:
        return{
            ...initialState,
        }
    default: 
        return  {
            ...state,
        }
}


}

export default myRidesReducer;