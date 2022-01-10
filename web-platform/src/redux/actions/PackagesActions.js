import {searchPackagesRequest, searchPackagesSuccess, searchPackagesFailure, cleanPackagesData} from '../types/PackagesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const searchPackages = (fromCountry, fromCity, toCountry, toCity, token) => {

    return (dispatch) => {
        dispatch(searchPackagesRequest);
        axios.get(data.baseUrl + "/packages?FromCountry="+fromCountry+"&FromCity="+fromCity+"&ToCountry="+toCountry+"&ToCity="+toCity+"&PageNumber=1&PageSize=25",
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            const packages = [...response.data.data];
            dispatch(searchPackagesSuccess(packages));
        }).catch(error => {
            const errorMsg = error;
            dispatch(searchPackagesFailure(errorMsg))
        })
    }
}

export const clean = () => {
    return (dispatch) => {
        dispatch(cleanPackagesData());
    }
}
