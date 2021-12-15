import {fetchMyPackagesRequest, fetchMyPackagesSuccess, fetchMyPackagesFailure,
    createNewPackageRequest, createNewPackageSuccess, createNewPackageFailure,
    updatePackageRequest, updatePackageSuccess, updatePackageFailure,
    deletePackageRequest, deletePackageSuccess, deletePackageFailure, cleanMyPackagesData,
} from '../types/MyPackagesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchMyPackages = (token) => {

return (dispatch) => {
    dispatch(fetchMyPackagesRequest);
    axios.get(data.baseUrl + "/my-packages",{
        headers:{
            'Authorization': `Bearer ${token}`,
        }})
    .then(response => {
        const myPackages = [...response.data.data];
        dispatch(fetchMyPackagesSuccess(myPackages));
    }).catch(error => {
        const errorMsg = error;
        dispatch(fetchMyPackagesFailure(errorMsg))
    })
}
}


export const createNewPackage = (departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress,
                                 packageType, weight, height, length, width, description, price, currency, destinataryName,
                                 phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, senderName, token) => {

return(dispatch) => {
dispatch(createNewPackageRequest);
axios.post(data.baseUrl+"/packages",{
        packageSender: {
            fromCountry: fromCountry,
            fromCity: fromCity,
            departureAddress: departureAddress,
            departureDate: departureDate,
            senderName: senderName,
        },
        packageReceiver:
        {
            name:destinataryName,
            phoneNumber:phoneNumber,
            toCountry:toCountry,
            toCity:toCity,
            destinationAddress:destinationAddress,
            receiverName:destinataryName,
        },
        packageInfo:{
            packageType: packageType,
            price:price,
            numberOfPackages: 1,
            description:description,
            currency:currency,
            packageDimensions:{
                height:height,
                length:length,
                width:width,
                weight:weight
            },
            packageSpecialMention:{
                isFragile:isFragile,
                isFoodGrade:isFoodGrade,
                isFlammable:isFlammable,
                isHandleWithCare:isHandleWithCare,
                isAnimal:isAnimal
            }
        }   
}, {
    headers:{
        'Authorization': `Bearer ${token}`,
    }
})
.then(response => {
    const Msg = response.data;
    alert("Adaugarea pachetului reusita");
    dispatch(createNewPackageSuccess(Msg));
    dispatch(fetchMyPackages(token))
}).catch(error => {
    const errorMsg = error;
    dispatch(createNewPackageFailure(errorMsg))
})
}
}

export const updatePackage = (id, departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress,
                                packageType, weight, height, length, width, description, price, currency, destinataryName,
                                phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, token) => {

return(dispatch) => {
    dispatch(updatePackageRequest);
    axios.patch(data.baseUrl+"/my-packages/" + id,{
        packageSender: {
            fromCountry: fromCountry,
            fromCity: fromCity,
            departureAddress: departureAddress,
            departureDate: departureDate,
        },
        packageReceiver:
        {
            name:destinataryName,
            phoneNumber:phoneNumber,
            toCountry:toCountry,
            toCity:toCity,
            destinationAddress:destinationAddress,
            receiverName:destinataryName,
        },
        packageInfo:{
            packageType: packageType,
            price:price,
            numberOfPackages: 1,
            description:description,
            currency:currency,
            packageDimensions:{
                height:height,
                length:length,
                width:width,
                weight:weight
            },
            packageSpecialMention:{
                isFragile:isFragile,
                isFoodGrade:isFoodGrade,
                isFlammable:isFlammable,
                isHandleWithCare:isHandleWithCare,
                isAnimal:isAnimal
            }
        }   
    }, {
        headers:{
            'Authorization': `Bearer ${token}`,
        }
    })
.then(response => {
    dispatch(updatePackageSuccess(response.data));
    dispatch(fetchMyPackages(token))
}).catch(error => {
    const errorMsg = error;
    dispatch(updatePackageFailure(errorMsg))
})
}
}

export const deletePackage = (id, token) => {

return(dispatch) => {
dispatch(deletePackageRequest);
axios.delete(data.baseUrl+"/my-packages/{id:"+id+"}",{
    headers:{
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
})
.then(response => {
    dispatch(deletePackageSuccess());
    dispatch(fetchMyPackages(token))
}).catch(error => {
    const errorMsg = error;
    dispatch(deletePackageFailure(errorMsg))
})
}
}

export const clean = () => {
    return (dispatch)=>{
        dispatch(cleanMyPackagesData());
    }
}