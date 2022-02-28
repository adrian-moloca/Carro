import {NOTIFICATIONS_REQUEST, NOTIFICATIONS_SUCCESS, NOTIFICATIONS_FAILURE,
    NOTIFICATION_DELETE_REQUEST, NOTIFICATION_DELETE_SUCCESS, NOTIFICATION_DELETE_FAILURE,NOTIFICATIONS_AS_READ_REQUEST,NOTIFICATIONS_AS_READ_SUCCESS,NOTIFICATIONS_AS_READ_FAILURE
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
                loading: false
            }
        case NOTIFICATIONS_FAILURE:
            return{
                ...state,
                hasErrors: true,
                loading: false
            }
        case NOTIFICATIONS_AS_READ_REQUEST: 
            return{
                ...state,
                loading: true,
            }
        case NOTIFICATIONS_AS_READ_SUCCESS: 
            return{
                ...state,
                hasErrors: false,
                loading: false
            }
        case NOTIFICATIONS_AS_READ_FAILURE: 
            return{
                ...state,
                hasErrors: true,
                loading: false
            }
        case NOTIFICATION_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                }
        case NOTIFICATION_DELETE_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case NOTIFICATION_DELETE_FAILURE:
            return{
                ...state,
                hasErrors: true,
                loading: false
            
            }
        default: 
            return  {
                ...state,
            }
    }
}

export default notificationsReducer;