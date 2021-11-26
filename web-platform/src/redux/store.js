import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const saveToLocalStorage = (state) => {
    try {
        const serializedState = 'userData:'+JSON.stringify(state.userData);
        localStorage.setItem('state', serializedState);
    } catch(err) {
        console.log(err);
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch(err) {
        console.log(err);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)));

store.subscribe(() =>saveToLocalStorage(store.getState()));


export default store;