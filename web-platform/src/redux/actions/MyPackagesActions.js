import {fetchMyPackagesRequest, fetchMyPackagesSuccess, fetchMyPackagesFailure,
    createNewPackageRequest, createNewPackageSuccess, createNewPackageFailure,
    updatePackageRequest, updatePackageSuccess, updatePackageFailure,
    deletePackageRequest, deletePackageSuccess, deletePackageFailure,
} from '../types/MyRidesTypes';
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


export const createNewPackage = (departureDate, departure, destination, departureAddress, destinationAddress, packageType, dimensions, weight, description, price, name, status,
    isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal) => {

return(dispatch) => {
dispatch(createNewPackageRequest);
axios.post(data.baseUrl+"",{
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