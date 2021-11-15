import {combineReducers} from 'redux';
import myRidesReducer from './MyRidesReducer';
import userReducer from './UserReducer';

const RootReducer = combineReducers({
    //User Reducer
    userData: userReducer,
    myRidesData: myRidesReducer,

})

export default RootReducer;