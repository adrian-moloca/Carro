import {fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure,
    fetchLogoutRequest, fetchLogoutSuccess, fetchLogoutFailure,
    createNewUserRequest, createNewUserSuccess, createNewUserFailure,
    fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure,
    updateUserRequest, updateUserSuccess, updateUserFailure,
    deleteUserRequest, deleteUserSuccess, deleteUserFailure,
    changePasswordUserRequest, changePasswordUserSuccess, changePasswordUserFailure,
} from '../types/UserTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchLogin = (email, password) => {

return (dispatch) => {
    dispatch(fetchLoginRequest);
    axios.post(data.baseUrl + "/login", {
        email: email, 
        password: password
    })
    .then(response => {
        // const user = response.data;
        console.log(response.data);
        setTimeout(() => {
            dispatch(fetchLoginSuccess(response.data));
        }, 800)
    }).catch(error => {
        const errorMsg = error;
        dispatch(fetchLoginFailure(errorMsg));
        console.log("Autentificare incorecta! Va rugam incercati din nou!");
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


export const createNewUser = (newName, newPassword, newConfirmPassword, newUserAdmin,newCarNumber) => {

return(dispatch) => {
dispatch(createNewUserRequest);
axios.post(data.baseUrl+"/catalin/admin/users/",{
    name: newName,
    password: newPassword,
    confirm_password: newConfirmPassword,
    user_admin: newUserAdmin,
    carNumber: newCarNumber,
})
.then(response => {
    const Msg = response.data;
    dispatch(createNewUserSuccess(Msg));
    dispatch(fetchUsers())
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
    dispatch(fetchLogoutRequest);
    axios.patch(data.baseUrl + "/catalin/admin/users/logout/"+_id)
    .then(response => {
        dispatch(fetchLogoutSuccess(response.data.user));
        dispatch(fetchUsers())
    }).catch(error => {
        const errorMsg = error;
        dispatch(fetchLogoutFailure(errorMsg))
    })
}
}