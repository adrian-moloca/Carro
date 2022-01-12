import {fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure,
    fetchLogout, createNewUserRequest, createNewUserSuccess, createNewUserFailure,
    fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure,
    updateUserRequest, updateUserSuccess, updateUserFailure,
    deleteUserRequest, deleteUserSuccess, deleteUserFailure,
    getUserProfileImageRequest, getUserProfileImageSuccess, getUserProfileImageFailure,
    getUserPersonalInfoRequest, getUserPersonalInfoSuccess, getUserPersonalInfoFailure,
    getUserOptionalInfoRequest, getUserOptionalInfoSuccess, getUserOptionalInfoFailure, 
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
        dispatch(fetchLoginSuccess(jwt_decode(response.data.token), response.data.token, response.data.refreshToken));
    }).catch(error => {
        const errorMsg = error;
        alert('Combinatia "user - parola" este gresita');
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
    window.localStorage.clear()
    return (dispatch) => {
        dispatch(fetchLogout);
    }
}

export const getUserProfileImage = (token) => {

    return (dispatch) => {
        dispatch(getUserProfileImageRequest);
        axios.get(data.baseUrl + "/users/profile-images", {
            headers:{
              'Authorization': `Bearer ${token}`,
            }}).then(response => {
            const image = response.data.data;
            dispatch(getUserProfileImageSuccess(image));
        }).catch(error => {
            const errorMsg = error;
            dispatch(getUserProfileImageFailure(errorMsg))
        })
    }
}

export const getUserPersonalInfo = (token) => {

    return (dispatch) => {
        dispatch(getUserPersonalInfoRequest);
        axios.get(data.baseUrl + "/users/personal-infos", {
            headers:{
              'Authorization': `Bearer ${token}`,
            }}).then(response => {
            const info = response.data.data;
            dispatch(getUserPersonalInfoSuccess(info));
        }).catch(error => {
            const errorMsg = error;
            dispatch(getUserPersonalInfoFailure(errorMsg))
        })
    }
}

export const getUserOptionalInfo = (token) => {

    return (dispatch) => {
        dispatch(getUserOptionalInfoRequest);
        axios.get(data.baseUrl + "/users/optional-infos", {
            headers:{
              'Authorization': `Bearer ${token}`,
            }}).then(response => {
            const info = response.data.data;
            dispatch(getUserOptionalInfoSuccess(info));
        }).catch(error => {
            const errorMsg = error;
            dispatch(getUserOptionalInfoFailure(errorMsg))
        })
    }
}