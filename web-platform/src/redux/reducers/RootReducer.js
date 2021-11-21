import {combineReducers} from 'redux';
import myPackagesReducer from './MyPackagesReducer';
import myRidesReducer from './MyRidesReducer';
import notificationsReducer from './NotificationsReducer';
import userReducer from './UserReducer';
import ridesReducer from './RidesReducer';
import packagesReducer from './PackagesReducer';

const RootReducer = combineReducers({
    //User Reducer
    userData: userReducer,
    myRidesData: myRidesReducer,
    myPackagesData: myPackagesReducer,
    notificationsData: notificationsReducer,
    ridesData: ridesReducer,
    packagesData: packagesReducer,
})

export default RootReducer;