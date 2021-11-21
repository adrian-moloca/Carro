import {fetchNotificationsRequest, fetchNotificationsSuccess, fetchNotificationsFailure,
    updateNotificationRequest, updateNotificationSuccess, updateNotificationFailure,
    deleteNotificationRequest, deleteNotificationSuccess, deleteNotificationFailure,
} from '../types/NotificationsTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchNotifications = (userId) => {

return (dispatch) => {
    dispatch(fetchNotificationsRequest);
    axios.post(data.baseUrl + "/notifications/", {
            userId: userId
        })
        .then(response => {
            dispatch(fetchNotificationsSuccess(response.data));
        }).catch(error => {
            dispatch(fetchNotificationsFailure(error))
        })
}
}

export const updateNotification = (id, read) => {

return(dispatch) => {
    dispatch(updateNotificationRequest);
    axios.patch(data.baseUrl+"/notifications/" + id,{
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
    axios.delete(data.baseUrl+"/notifications/" +id ,{
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