import { 
    adminGetUsersRequest, adminGetUsersSuccess, adminGetUsersFailure,
    adminGetUserRequest, adminGetUserSuccess, adminGetUserFailure
} from "../types/AdminTypes";
import axios from "axios";
import data from "../../utils/constants";

export const adminGetUsers = (token) => {

    return (dispatch) => {
        dispatch(adminGetUsersRequest);
        axios.get(data.adminUrl + "/users", {
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            dispatch(adminGetUsersSuccess(response.data.data));
        }).catch(error => {
            const errorMsg = error;
            alert('Action failed');
            dispatch(adminGetUsersFailure(errorMsg));
        })
    }
}

export const adminGetUser = (id, token) => {

    return (dispatch) => {
        dispatch(adminGetUserRequest);
        axios.get(data.adminUrl + "/users/"+ id, {
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            dispatch(adminGetUserSuccess(response.data.data));
        }).catch(error => {
            const errorMsg = error;
            alert('Action failed');
            dispatch(adminGetUserFailure(errorMsg));
        })
    }
}