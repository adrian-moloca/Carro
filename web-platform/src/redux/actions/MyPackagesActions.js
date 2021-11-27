import {fetchMyPackagesRequest, fetchMyPackagesSuccess, fetchMyPackagesFailure,
    createNewPackageRequest, createNewPackageSuccess, createNewPackageFailure,
    updatePackageRequest, updatePackageSuccess, updatePackageFailure,
    deletePackageRequest, deletePackageSuccess, deletePackageFailure,
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
    dispatch(createNewPackageSuccess(Msg));
    dispatch(fetchMyPackages(token))
}).catch(error => {
    const errorMsg = error;
    dispatch(createNewPackageFailure(errorMsg))
})
}
}

export const updatePackage = (id, departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress,
                              packageType, weight, height, length, width, description, price, currency, name, status, destinataryName,
                              phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, token) => {

return(dispatch) => {
    dispatch(updatePackageRequest);
    axios.patch(data.baseUrl+"" + id,{
        departureDate: departureDate,
        fromCountry: fromCountry,
        fromCity: fromCity,
        toCountry: toCountry,
        toCity: toCity,
        departureAddress: departureAddress,
        packageType: packageType,
        description: description,
        price: price,
        currency: currency,
        name: name,
        status:  status,
        packageReceiver: {
            name: destinataryName,
            phoneNumber: phoneNumber,
            destinationAddress: destinationAddress,
        },
        packageDimensions: {
            height: height,
            length: length,
            width: width,
            weight: weight,
        },
        packageSpecialMention: {
            isFragile: isFragile,
            isFoodGrade: isFoodGrade,
            isFlammable: isFlammable,
            isHandleWithCare: isHandleWithCare,
            isAnimal: isAnimal,
        },
    })
.then(response => {
    dispatch(updatePackageSuccess(id));
    dispatch(fetchMyPackages(token))
}).catch(error => {
    const errorMsg = error;
    dispatch(updatePackageFailure(errorMsg))
})
}
}

export const deletePackage = (id) => {

return(dispatch) => {
dispatch(deletePackageRequest);
axios.delete(data.baseUrl+"" +id ,{
})
.then(response => {
    const Msg = response.data;
    dispatch(deletePackageSuccess(Msg));
    dispatch(fetchMyPackages())
}).catch(error => {
    const errorMsg = error;
    dispatch(deletePackageFailure(errorMsg))
})
}
}