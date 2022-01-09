import {COURIER_PROFILE_REQUEST, COURIER_PROFILE_SUCCESS, COURIER_PROFILE_FAILURE,
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
                hasErrors: false,
            }
        case COURIER_PROFILE_FAILURE:
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

export default courierReducer; 