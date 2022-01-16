import {COURIER_PROFILE_REQUEST, COURIER_PROFILE_SUCCESS, COURIER_PROFILE_FAILURE, RESET_COURIER_DATA_CHANGED
} from '../types/CourierTypes';


let initialState = {
    courier: {
        rate: 0,
        rides: 0,
        profileImage:"",
        name:"",
        userId: "",
        car:{
            registrationNumber: "",
            model: "",
            color: "",
            brand: "",
        },
        starRate: {
            fiveStarCount: 0,
            fourStarCount: 0,
            threeStarCount: 0,
            twoStarCount: 0,
            oneStarCount: 0,
        },
    },
    loading: false,
    hasErrors: false,
    courierDataChanged: false
}

const courierReducer = (state = initialState, action) => {
    switch (action.type) {

        case COURIER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case COURIER_PROFILE_SUCCESS:
            return{
                ...state,
                courier: action.payload,
                courierDataChanged: true,
                hasErrors: false,
            }
        case COURIER_PROFILE_FAILURE:
            return{
                ...state,
                hasErrors: true,
            }   
        case RESET_COURIER_DATA_CHANGED:
            return{
                ...state,
                courierDataChanged: false
            }
        default: 
            return  {
                ...state,
            }
    }
}

export default courierReducer; 