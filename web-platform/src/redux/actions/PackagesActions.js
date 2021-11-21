import {searchPackagesRequest, searchPackagesSuccess, searchPackagesFailure} from '../types/PackagesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const searchPackages = (fromCountry, fromCity, toCountry, toCity) => {

return (dispatch) => {
    dispatch(searchPackagesRequest);
    axios.get(data.baseUrl + "/rides?"+fromCountry+"=s&"+fromCity+"=s&"+toCountry+"=s&"+toCity+"=2s&pageNumber=1&pageSize=25")
    .then(response => {
        const packages = response.data;
        dispatch(searchPackagesSuccess(packages));
    }).catch(error => {
        const errorMsg = error;
        dispatch(searchPackagesFailure(errorMsg))
    })
}
}
