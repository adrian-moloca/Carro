import {fetchMyPackagesRequest, fetchMyPackagesSuccess, fetchMyPackagesFailure,
    createNewPackageRequest, createNewPackageSuccess, createNewPackageFailure,
    updatePackageRequest, updatePackageSuccess, updatePackageFailure,
    deletePackageRequest, deletePackageSuccess, deletePackageFailure,
} from '../types/MyPackagesTypes';
import axios from 'axios';
import data from '../../utils/constants';

export const fetchMyPackages = () => {

return (dispatch) => {
    dispatch(fetchMyPackagesRequest);
    axios.get(data.baseUrl + "")
    .then(response => {
        const myRides = response.data;
        dispatch(fetchMyPackagesSuccess(myRides));
    }).catch(error => {
        const errorMsg = error;
        dispatch(fetchMyPackagesFailure(errorMsg))
    })
}
}


export const createNewPackage = (departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress,
                                 packageType, weight, height, length, width, description, price, currency, name, status, destinataryName,
                                 phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, token) => {

return(dispatch) => {
dispatch(createNewPackageRequest);
axios.post(data.baseUrl+"/packages",{
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
}, {
    headers:{
        'Authorization': `Bearer ${token}`,
        'Content-type': 'application/json'
    }
})
.then(response => {
    const Msg = response.data;
    dispatch(createNewPackageSuccess(Msg));
    dispatch(fetchMyPackages())
}).catch(error => {
    const errorMsg = error;
    dispatch(createNewPackageFailure(errorMsg))
})
}
}

export const updatePackage = (id, departureDate, departure, destination, departureAddress, destinationAddress, packageType, dimensions, weight, description, price, name, status,
    isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal) => {

return(dispatch) => {
    dispatch(updatePackageRequest);
    axios.patch(data.baseUrl+"" + id,{
        departureDate: departureDate,
        departure: departure,
        destination: destination,
        departureAddress: departureAddress,
        destinationAddress: destinationAddress,
        packageType: packageType,
        dimensions: dimensions,
        weight: weight,
        description: description,
        price: price,
        name: name,
        status:  status,
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
    dispatch(fetchMyPackages())
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