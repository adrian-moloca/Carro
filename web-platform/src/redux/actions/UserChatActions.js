import { 
    getUserChatsRequest, getUserChatsSuccess, getUserChatsFailure,
    getUserChatRequest, getUserChatSuccess, getUserChatFailure,
    getChatMessagesRequest, getChatMessagesSuccess, getChatMessagesFailure,
} from "../types/UserChatTypes";
import axios from "axios";
import data from "../../utils/constants";

export const getUserChats = (token) =>{
    return (dispatch) => {
        dispatch(getUserChatsRequest);
        axios.get(data.baseUrl+'/chats', {
            headers:{
                'Authorization': `Bearer ${token}`,
        }}).then((response)=>dispatch(getUserChatsSuccess(response.data.data))).catch((error)=>dispatch(getUserChatsFailure(error)))
    }
}

export const getUserChat = (id, token) =>{
    return (dispatch) => {
        dispatch(getUserChatRequest);
        axios.get(data.baseUrl+'/chats/'+id, {
            headers:{
                'Authorization': `Bearer ${token}`,
        }}).then((response)=>dispatch(getUserChatSuccess(response.data.data))).catch((error)=>dispatch(getUserChatFailure(error)))
    }
}

export const getChatMessages = (chatId, token) =>{
    return (dispatch) => {
        dispatch(getChatMessagesRequest);
        axios.get(data.baseUrl+'/chats/'+chatId+'/messages', {
            headers:{
                'Authorization': `Bearer ${token}`,
        }}).then((response)=>dispatch(getChatMessagesSuccess(response.data.data))).catch((error)=>dispatch(getChatMessagesFailure(error)))
    }
}