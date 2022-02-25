import { ChatOutlined } from '@material-ui/icons';
import { 
    USER_CHATS_REQUEST, USER_CHATS_SUCCESS, USER_CHATS_FAILURE,
    USER_CHAT_REQUEST, USER_CHAT_SUCCESS, USER_CHAT_FAILURE,
    CHAT_MESSAGES_REQUEST, CHAT_MESSAGES_SUCCESS, CHAT_MESSAGES_FAILURE,
    SET_CURRENT_USER_CHAT
 } from '../types/UserChatTypes';

let initialState = {
     chat:{
        id: "",
        packageUserName: "",
        packageName: "",
        driverName: "",
        isValid: false
     },
     currentChat:{
        name: '',
        profileImage: '',
        chatId: ''
     },
     chats: [],
     messages: [],
     loading: false,
     hasErrors: false
}

const userChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CHATS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_CHATS_SUCCESS:
            return{
                ...state,
                chats: action.payload,
                hasErrors: false
            }
        case USER_CHATS_FAILURE:
            return{
                ...state,
                hasErrors: true
            }
        case USER_CHAT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_CHAT_SUCCESS:
            return{
                ...state,
                chat:{
                    id: action.payload.id,
                    packageUserName: action.payload.packageUserName,
                    packageName: action.payload.packageName,
                    driverName: action.payload.driverName,
                    isValid: action.payload.isValid
                },
                hasErrors: false
            }
        case USER_CHAT_FAILURE:
            return{
                ...state,
                hasErrors: true
            }
        case CHAT_MESSAGES_REQUEST:
            return{
                ...state, 
                loading: true
            }
        case CHAT_MESSAGES_SUCCESS:
            return{
                ...state,
                messages: action.payload,
                hasErrors: false
            }
        case CHAT_MESSAGES_FAILURE:
            return{
                ...state,
                hasErrors: true
            }
        case SET_CURRENT_USER_CHAT:{
            return{
                ...state,
                currentChat:{
                    name: action.payload.name,
                    profileImage: action.payload.profileImage,
                    chatId: action.payload.chatId
                }
            }
        }
        default:
            return{
                ...state
            }
    }
}

export default userChatReducer;