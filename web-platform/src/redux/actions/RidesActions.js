import {searchRidesRequest, searchRidesSuccess, searchRidesFailure} from '../types/RidesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const searchRides = (fromCountry, fromCity, toCountry, toCity) => {

return (dispatch) => {
    dispatch(searchRidesRequest);
    axios.get(data.baseUrl + "/rides?fromCountry="+fromCountry+"&fromCity="+fromCity+"&toCountry="+toCountry+"&toCity="+toCity+"&pageNumber=1&pageSize=25")
    .then(response => {
        const rides = response.data;
        dispatch(searchRidesSuccess(rides));
    }).catch(error => {
        const errorMsg = error;
        dispatch(searchRidesFailure(errorMsg))
    })
}
}

