import {fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure,
    fetchLogout, createNewUserRequest, createNewUserSuccess, createNewUserFailure,
    fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure,
    updateUserRequest, updateUserSuccess, updateUserFailure,
    deleteUserRequest, deleteUserSuccess, deleteUserFailure,
    changePasswordUserRequest, changePasswordUserSuccess, changePasswordUserFailure, updateNotifications,
} from '../types/UserTypes';
import axios from 'axios';
import data from '../../utils/constants';
import jwt_decode from "jwt-decode";

export const fetchLogin = (email, password) => {

return (dispatch) => {
    dispatch(fetchLoginRequest);
    axios.post(data.baseUrl + "/identity/login", {
        email: email, 
        password: password
    })
    .then(response => {
        dispatch(fetchLoginSuccess(jwt_decode(response.data.token), response.data.token));
    }).catch(error => {
        const errorMsg = error;
        dispatch(fetchLoginFailure(errorMsg));
    })
}
}


export const fetchUsers = () => {

return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios.get(data.baseUrl + "/catalin/admin/users/")
    .then(response => {
        const user = response.data;
        dispatch(fetchUsersSuccess(user));
    }).catch(error => {
        const errorMsg = error;
        dispatch(fetchUsersFailure(errorMsg))
    })
}
}


export const createNewUser = (email, password, phoneNumber, firstName, lastName, dateOfBirth, termsAndConditions) => {

return(dispatch) => {
dispatch(createNewUserRequest);
axios.post(data.baseUrl+"/identity/register",{
    email,
    password,
    phoneNumber,
    firstName,
    lastName,
    dateOfBirth,
    termsAndConditions

})
.then(response => {
    dispatch(createNewUserSuccess(response.data));
    // dispatch(fetchUsers())
}).catch(error => {
    const errorMsg = error;
    dispatch(createNewUserFailure(errorMsg))
})
}
}

export const changePasswordUser = (newPassword, confirmNewPassword, id) => {

return(dispatch) => {
    dispatch(changePasswordUserRequest);
    axios.patch(data.baseUrl + "/catalin/admin/users/recoverPass/" + id,{
        newPassword                 : newPassword,
        confirm_newPassword         : confirmNewPassword,
        
})
.then(response => {
    dispatch( changePasswordUserSuccess(id));
    dispatch(fetchUsers())
}).catch(error => {
    const errorMsg = error;
    dispatch( changePasswordUserFailure(errorMsg))
})
}
}

export const updateUser = (newName, id, newCarNumber ) => {

return(dispatch) => {
    dispatch(updateUserRequest);
    axios.patch(data.baseUrl+"/catalin/admin/users/" + id,{
        name     : newName,
        carNumber: newCarNumber,
        
})
.then(response => {
    dispatch(updateUserSuccess(id));
    dispatch(fetchUsers())
}).catch(error => {
    const errorMsg = error;
    dispatch(updateUserFailure(errorMsg))
})
}
}

export const deleteUser = (id) => {

return(dispatch) => {
dispatch(deleteUserRequest);
axios.delete(data.baseUrl+"/catalin/admin/users/" +id ,{
    
})
.then(response => {
    const Msg = response.data;
    dispatch(deleteUserSuccess(Msg));
    dispatch(fetchUsers())
}).catch(error => {
    const errorMsg = error;
    dispatch(deleteUserFailure(errorMsg))
})
}
}

export const Logout = (_id) => {

    return (dispatch) => {
        dispatch(fetchLogout);
    }
}