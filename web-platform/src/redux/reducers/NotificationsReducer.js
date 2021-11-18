import {NOTIFICATIONS_REQUEST, NOTIFICATIONS_SUCCESS, NOTIFICATIONS_FAILURE,
    NOTIFICATION_UPDATE_REQUEST, NOTIFICATION_UPDATE_SUCCESS, NOTIFICATION_UPDATE_FAILURE,
    NOTIFICATION_DELETE_REQUEST, NOTIFICATION_DELETE_SUCCESS, NOTIFICATION_DELETE_FAILURE,
} from '../types/NotificationsTypes';


let initialState = {
    notifications: [],
    loading: false,
    hasErrors: false,
}

const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {

        case NOTIFICATIONS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NOTIFICATIONS_SUCCESS:
            return{
                ...state,
                notifications: action.payload,
            }
        case NOTIFICATIONS_FAILURE:
            return{
                ...state,
                hasErrors: true,
            }    
        case NOTIFICATION_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case NOTIFICATION_UPDATE_SUCCESS:
            return{
                ...state,  
            }
        case NOTIFICATION_UPDATE_FAILURE:
            return{
                ...state,
                hasErrors: true,
            }
        case NOTIFICATION_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                }
        case NOTIFICATION_DELETE_SUCCESS:
            return{
                ...state,
            }
        case NOTIFICATION_DELETE_FAILURE:
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

export default notificationsReducer;