//Notifications types

// My Notifications request
export const NOTIFICATIONS_REQUEST = 'NOTIFICATIONS_REQUEST';
export const NOTIFICATIONS_SUCCESS = 'NOTIFICATIONS_SUCCESS';
export const NOTIFICATIONS_FAILURE = 'NOTIFICATIONS_FAILURE';

// Update Notification

export const NOTIFICATION_UPDATE_REQUEST = 'NOTIFICATION_UPDATE_REQUEST';
export const NOTIFICATION_UPDATE_SUCCESS = 'NOTIFICATION_UPDATE_SUCCESS';
export const NOTIFICATION_UPDATE_FAILURE = 'NOTIFICATION_UPDATE_FAILURE';

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

// Update Notification

export const updateNotificationRequest = () => {
    return {
        type: NOTIFICATION_UPDATE_REQUEST,
    }
}

export const updateNotificationSuccess = () => {
    return {
        type: NOTIFICATION_UPDATE_SUCCESS,
    }
}

export const updateNotificationFailure = error => {
    return {
        type: NOTIFICATION_UPDATE_FAILURE,
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