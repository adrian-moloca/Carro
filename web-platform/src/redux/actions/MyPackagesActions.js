import {fetchMyPackagesRequest, fetchMyPackagesSuccess, fetchMyPackagesFailure,
    createNewPackageRequest, createNewPackageSuccess, createNewPackageFailure,
    updatePackageRequest, updatePackageSuccess, updatePackageFailure,
    deletePackageRequest, deletePackageSuccess, deletePackageFailure,
    closePackageRequest, closePackageSuccess, closePackageFailure, cleanMyPackagesData,
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
                                 packageType, weight, height, length, width, smallDescription, description, price, currency, destinataryName,
                                 phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, senderName, token) => {

return(dispatch) => {
dispatch(createNewPackageRequest);
axios.post(data.baseUrl+"/packages",{
        packageSender: {
            fromCountry: fromCountry,
            fromCity: fromCity,
            departureAddress: departureAddress,
            departureDate: departureDate,
            senderName: senderName.replace(",", " "),
        },
        packageReceiver:
        {
            phoneNumber: phoneNumber.includes("+") ? phoneNumber : "+"+phoneNumber,
            toCountry:toCountry,
            toCity:toCity,
            destinationAddress:destinationAddress,
            receiverName:destinataryName,
        },
        packageInfo:{
            name:smallDescription,
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
                isFragil:isFragile,
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

export const updatePackage = (id, senderName, packageName, departureDate, fromCountry, fromCity, toCountry, toCity, departureAddress, destinationAddress,
                                packageType, weight, height, length, width, description, price, currency, destinataryName,
                                phoneNumber, isFragile, isFoodGrade, isFlammable, isHandleWithCare, isAnimal, token) => {

return(dispatch) => {
    dispatch(updatePackageRequest);
    axios.put(data.baseUrl+"/packages/" + id,{
        packageSender: {
            fromCountry: fromCountry,
            fromCity: fromCity,
            departureAddress: departureAddress,
            departureDate: departureDate,
            senderName: senderName
        },
        packageReceiver:
        {
            phoneNumber:phoneNumber,
            toCountry:toCountry,
            toCity:toCity,
            destinationAddress:destinationAddress,
            receiverName:destinataryName,
        },
        packageInfo:{
            name:packageName,
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
                isFragil:isFragile,
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
        axios.delete(data.baseUrl+"/packages/"+id,{
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

export const closePackage = (id, token) => {

    return(dispatch) => {
        dispatch(closePackageRequest);
        axios.patch(data.baseUrl+"/packages/"+id,[{
                path: "/mainStatus",
                op: "replace",
                value: "1"
        }],{
            headers:{
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => {
            dispatch(closePackageSuccess());
            dispatch(fetchMyPackages(token))
        }).catch(error => {
            const errorMsg = error;
            dispatch(closePackageFailure(errorMsg))
        })
    }
}

export const clean = () => {
    return (dispatch)=>{
        dispatch(cleanMyPackagesData());
    }
}