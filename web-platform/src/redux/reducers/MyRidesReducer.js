import {MY_RIDES_REQUEST, MY_RIDES_SUCCESS, MY_RIDES_FAILURE,
    NEW_RIDE_REQUEST, NEW_RIDE_SUCCESS, NEW_RIDE_FAILURE,
    RIDE_UPDATE_REQUEST, RIDE_UPDATE_SUCCESS, RIDE_UPDATE_FAILURE,
    RIDE_DELETE_REQUEST, RIDE_DELETE_SUCCESS, RIDE_DELETE_FAILURE,
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
        }
    case MY_RIDES_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }    
    case NEW_RIDE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case NEW_RIDE_SUCCESS:
        return{
            ...state,
        }
    case NEW_RIDE_FAILURE:
        return{
            ...state,
            hasErrors: true,
        }
    case RIDE_UPDATE_REQUEST:
        return {
            ...state,
            loading: true,
            }
    case RIDE_UPDATE_SUCCESS:
        return{
            ...state,
          
        }
    case RIDE_UPDATE_FAILURE:
        return{
            ...state,
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
        
        }
    case RIDE_DELETE_FAILURE:
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

export default myRidesReducer;