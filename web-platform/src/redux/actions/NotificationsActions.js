import {fetchNotificationsRequest, fetchNotificationsSuccess, fetchNotificationsFailure,
    updateNotificationRequest, updateNotificationSuccess, updateNotificationFailure,
    deleteNotificationRequest, deleteNotificationSuccess, deleteNotificationFailure,
} from '../types/NotificationsTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchNotifications = (token) => {

return (dispatch) => {
    dispatch(fetchNotificationsRequest);
    axios.get(data.baseUrl + "/notifications", {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(response => {
            dispatch(fetchNotificationsSuccess(response.data));
        }).catch(error => {
            console.log(error.message)
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
        }).catch(error => {
            const errorMsg = error;
            dispatch(deleteNotificationFailure(errorMsg))
        })
    }
}