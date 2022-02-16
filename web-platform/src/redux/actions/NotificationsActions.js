import {fetchNotificationsRequest, fetchNotificationsSuccess, fetchNotificationsFailure,
    deleteNotificationRequest, deleteNotificationSuccess, deleteNotificationFailure,markAsReadNotificationRequest,markAsReadNotificationSuccess, markAsReadNotificationFailure
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
            dispatch(fetchNotificationsSuccess(response.data.data));
        }).catch(error => {
            console.log(error.message)
            dispatch(fetchNotificationsFailure(error))
        })
}
}

export const markAsReadNotification = (token, notificationId, notificationStatus) => {

    return (dispatch) => {
        dispatch(markAsReadNotificationRequest);
        axios.put(data.baseUrl + "/notifications/"+notificationId+"/is-read", {
                notificationStatus: notificationStatus
        }, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
            .then(response => {
                console.log(response);
                dispatch(markAsReadNotificationSuccess());
                dispatch(fetchNotifications(token))
            }).catch(error => {
                console.log(error.message)
                dispatch(markAsReadNotificationFailure(error))
            })
    }
}

export const deleteNotification = (token, notificationId) => {

return(dispatch) => {
    dispatch(deleteNotificationRequest);
    axios.delete(data.baseUrl+"/notifications/"+notificationId ,{
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then(response => {
            console.log(response.data);
            dispatch(deleteNotificationSuccess());
            dispatch(fetchNotifications(token))
        }).catch(error => {
            console.log(error)
            dispatch(deleteNotificationFailure(error));
        })
    }
}