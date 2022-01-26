// User Chats
export const USER_CHATS_REQUEST = 'USER_CHATS_REQUEST';
export const USER_CHATS_SUCCESS = 'USER_CHATS_SUCCESS';
export const USER_CHATS_FAILURE = 'USER_CHATS_FAILURE';

// User Chat
export const USER_CHAT_REQUEST = 'USER_CHAT_REQUEST';
export const USER_CHAT_SUCCESS = 'USER_CHAT_SUCCESS';
export const USER_CHAT_FAILURE = 'USER_CHAT_FAILURE';

// User Message Chat
export const CHAT_MESSAGES_REQUEST = 'CHAT_MESSAGES_REQUEST';
export const CHAT_MESSAGES_SUCCESS = 'CHAT_MESSAGES_SUCCESS';
export const CHAT_MESSAGES_FAILURE = 'CHAT_MESSAGES_FAILURE';

//get User Chats
export const getUserChatsRequest = () => {
    return {
        type: USER_CHATS_REQUEST,
    }
}

export const getUserChatsSuccess = chats => {
    return {
        type: USER_CHATS_SUCCESS,
        payload: chats
    }
}

export const getUserChatsFailure = error => {
    return {
        type: USER_CHATS_FAILURE,
        payload: error
    }
}

//get User Chat
export const getUserChatRequest = () => {
    return {
        type: USER_CHAT_REQUEST,
    }
}

export const getUserChatSuccess = chat => {
    return {
        type: USER_CHAT_SUCCESS,
        payload: chat
    }
}

export const getUserChatFailure = error => {
    return {
        type: USER_CHAT_FAILURE,
        payload: error
    }
}

//get Chat Messages
export const getChatMessagesRequest = () => {
    return {
        type: CHAT_MESSAGES_REQUEST,
    }
}

export const getChatMessagesSuccess = messages => {
    return {
        type: CHAT_MESSAGES_SUCCESS,
        payload: messages
    }
}

export const getChatMessagesFailure = error => {
    return {
        type: CHAT_MESSAGES_FAILURE,
        payload: error
    }
} 