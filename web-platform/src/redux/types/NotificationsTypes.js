//Notifications types

// My Notifications request
export const NOTIFICATIONS_REQUEST = 'NOTIFICATIONS_REQUEST';
export const NOTIFICATIONS_SUCCESS = 'NOTIFICATIONS_SUCCESS';
export const NOTIFICATIONS_FAILURE = 'NOTIFICATIONS_FAILURE';

// Mark as Read Notification
export const NOTIFICATIONS_AS_READ_REQUEST = 'NOTIFICATIONS_AS_READ_REQUEST';
export const NOTIFICATIONS_AS_READ_SUCCESS = 'NOTIFICATIONS_AS_READ_SUCCESS';
export const NOTIFICATIONS_AS_READ_FAILURE = 'NOTIFICATIONS_AS_READ_FAILURE';

// Delete Notification

export const NOTIFICATION_DELETE_REQUEST = 'NOTIFICATION_DELETE_REQUEST';
export const NOTIFICATION_DELETE_SUCCESS = 'NOTIFICATION_DELETE_SUCCESS';
export const NOTIFICATION_DELETE_FAILURE = 'NOTIFICATION_DELETE_FAILURE';


// Notifications functions
export const fetchNotificationsRequest = () => {
    return {
        type: NOTIFICATIONS_REQUEST,
    }
}

export const fetchNotificationsSuccess = notifications => {
    return {
        type: NOTIFICATIONS_SUCCESS,
        payload: [...notifications]
    }
}

export const fetchNotificationsFailure = error => {
    return {
        type: NOTIFICATIONS_FAILURE,
        payload: error
    }
}

// Mark as Read
export const markAsReadNotificationRequest = () => {
    return {
        type: NOTIFICATIONS_AS_READ_REQUEST,
    }
}

export const markAsReadNotificationSuccess = () => {
    return {
        type: NOTIFICATIONS_AS_READ_SUCCESS,
    }
}

export const markAsReadNotificationFailure = error => {
    return {
        type: NOTIFICATIONS_AS_READ_FAILURE,
        payload: error
    }
}

// Delete Notification

export const deleteNotificationRequest = () => {
    return {
        type: NOTIFICATION_DELETE_REQUEST,
    }
}

export const deleteNotificationSuccess = () => {
    return {
        type: NOTIFICATION_DELETE_SUCCESS,
    }
}

export const deleteNotificationFailure = error => {
    return {
        type: NOTIFICATION_DELETE_FAILURE,
        payload: error
    }
}