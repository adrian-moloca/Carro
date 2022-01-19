import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/RootReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const saveToStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        state.userData.rememberMe ?  window.localStorage.setItem('state', serializedState) : window.sessionStorage.setItem('state', serializedState) 
    } catch(err) {
        console.log(err);
    }
}

const loadFromStorage = () => {
    try {
        const serializedState = window.localStorage.getItem('state') === null ? window.sessionStorage.getItem('state') : window.localStorage.getItem('state');
        if(serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch(err) {
        console.log(err);
        return undefined;
    }
}

const persistedState = loadFromStorage();

const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)));

store.subscribe(() =>saveToStorage(store.getState()));


export default store;