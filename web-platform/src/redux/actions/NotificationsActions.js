import {fetchNotificationsRequest, fetchNotificationsSuccess, fetchNotificationsFailure,
    updateNotificationRequest, updateNotificationSuccess, updateNotificationFailure,
    deleteNotificationRequest, deleteNotificationSuccess, deleteNotificationFailure,
} from '../types/NotificationsTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchNotifications = () => {

return (dispatch) => {
    dispatch(fetchNotificationsRequest);
    axios.get(data.baseUrl + "")
        .then(response => {
            const myRides = response.data;
            dispatch(fetchNotificationsSuccess(myRides));
        }).catch(error => {
            const errorMsg = error;
            dispatch(fetchNotificationsFailure(errorMsg))
        })
}
}

export const updateNotification = (id, read) => {

return(dispatch) => {
    dispatch(updateNotificationRequest);
    axios.patch(data.baseUrl+"" + id,{
            read: read,
        })
        .then(response => {
            dispatch(updateNotificationSuccess(id));
            dispatch(fetchNotifications())
        }).catch(error => {
            const errorMsg = error;
            dispatch(updateNotificationFailure(errorMsg))
        })
    }
}

export const deleteNotification = (id) => {

return(dispatch) => {
    dispatch(deleteNotificationRequest);
    axios.delete(data.baseUrl+"" +id ,{
        })
        .then(response => {
            const Msg = response.data;
            dispatch(deleteNotificationSuccess(Msg));
            dispatch(fetchNotifications())
        }).catch(error => {
            const errorMsg = error;
            dispatch(deleteNotificationFailure(errorMsg))
        })
    }
}