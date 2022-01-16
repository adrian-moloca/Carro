import {fetchCourierProfileRequest, fetchCourierProfileSuccess, fetchCourierProfileFailure} from '../types/CourierTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchCourierProfile = (userId, token) => {
    return(dispatch)=> {
        dispatch(fetchCourierProfileRequest());
        axios.get(data.baseUrl+"/profiles/"+userId, {
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        }).then(response => {
            const courierProfile = response.data.data;
            dispatch(fetchCourierProfileSuccess(courierProfile))
        }).catch(error=> {dispatch(fetchCourierProfileFailure(error)); alert("Courier profile isn't disponible")})

    }
}