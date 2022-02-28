import {SEARCH_PACKAGES_REQUEST, SEARCH_PACKAGES_SUCCESS, SEARCH_PACKAGES_FAILURE, 
        PACKAGES_UNDER_RIDE_REQUEST, PACKAGES_UNDER_RIDE_SUCCESS, PACKAGES_UNDER_RIDE_FAILURE, CLEAN_PACKAGES_DATA
} from '../types/PackagesTypes';

/* http://mongo-api.carrointernational.ro/api/v1/rides?
fromCountry=s&fromCity=s&toCountry=s&toCity=s&pageNumber=1&pageSize=25 */

let initialState = {
    packages: [],
    package: {
        id: "",
        departureDate: "",
        packageSender: {
          departure: "",
          departureAddress: "",
          senderName: "",
          phoneNumber: ""
        },
        packageReceiver: {
          receiverName: "",
          phoneNumber: "",
          destinationAddress: "",
          destination: ""
        },
        packageInfo: {
          packageType: 0,
          numberOfPackages: 0,
          price: "",
          dimensions: "",
          description: "",
          weight: "",
          name: ""
        },
        packageSpecialMention: {
          isFragil: false,
          isFoodGrade: false,
          isFlammable: false,
          isHandleWithCare: false,
          isAnimal: false
        },
        status: {
          id: "",
          status: 0,
          rejectReason: ""
        },
        mainStatus: 0,
        userId: ""
    },
    loading: false,
    hasErrors: false,
}

const packagesReducer = (state = initialState, action) => {
switch (action.type) {

    case SEARCH_PACKAGES_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case SEARCH_PACKAGES_SUCCESS:
        return{
            ...state,
            packages: action.payload,
            loading: false  
        }
    case SEARCH_PACKAGES_FAILURE:
        return{
            ...state,
            hasErrors: true,
            loading: false

        }
    case PACKAGES_UNDER_RIDE_REQUEST:
        return {
            ...state,
            loading: true,
        }
    case PACKAGES_UNDER_RIDE_SUCCESS:
        return{
            ...state,
            packages: action.payload.packages,
            loading: false
        
        }
    case PACKAGES_UNDER_RIDE_FAILURE:
        return{
            ...state,
            hasErrors: true,
            loading: false
        
        }
    case CLEAN_PACKAGES_DATA:
        return{
            ...state,
            packages: [],
            loading: false
        }    
    default: 
        return  {
            ...state,
        }
}


}

export default packagesReducer;