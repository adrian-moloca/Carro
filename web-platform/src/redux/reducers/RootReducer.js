import {combineReducers} from 'redux';
import myPackagesReducer from './MyPackagesReducer';
import myRidesReducer from './MyRidesReducer';
import notificationsReducer from './NotificationsReducer';
import userReducer from './UserReducer';

const RootReducer = combineReducers({
    //User Reducer
    userData: userReducer,
    myRidesData: myRidesReducer,
    myPackagesData: myPackagesReducer,
    notificationsData: notificationsReducer,
})

export default RootReducer;